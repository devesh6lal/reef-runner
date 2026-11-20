import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Clock,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { MEDIA_CONFIG, VideoChapter } from '../data/mediaConfig';

export const VideoTour: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(MEDIA_CONFIG.video.durationEstimateSeconds);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.9);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);

  const chapters = MEDIA_CONFIG.video.chapters;

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  // Sync active chapter based on video current time
  const updateActiveChapter = useCallback((time: number) => {
    let index = 0;
    for (let i = 0; i < chapters.length; i++) {
      if (time >= chapters[i].time) {
        index = i;
      } else {
        break;
      }
    }
    setActiveChapterIndex(index);
  }, [chapters]);

  // Video time update handler
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    setCurrentTime(current);
    updateActiveChapter(current);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && !isNaN(videoRef.current.duration)) {
      setDuration(videoRef.current.duration);
    }
  };

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Seek to specific chapter
  const handleSeekToChapter = (chapter: VideoChapter, index: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = chapter.time;
    setCurrentTime(chapter.time);
    setActiveChapterIndex(index);
    setHasStarted(true);
    
    // User action started playback
    videoRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((e) => {
      console.warn('Autoplay prevented:', e);
    });
  };

  // Scrub bar change
  const handleScrubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (!videoRef.current) return;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    updateActiveChapter(newTime);
  };

  // Volume & Mute
  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuteState = !isMuted;
    videoRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      if (newVol === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch((err) => {
        console.warn('Fullscreen error:', err);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (videoRef.current) {
        videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 5);
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (videoRef.current) {
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
      }
    } else if (e.key === 'm') {
      e.preventDefault();
      toggleMute();
    } else if (e.key === 'f') {
      e.preventDefault();
      toggleFullscreen();
    }
  };

  return (
    <section
      id="section-video"
      className="py-20 lg:py-28 bg-[#071B2C] text-white relative overflow-hidden border-t border-white/5"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Reef Runner Explainer Video"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Description */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#55E5D1]/10 border border-[#55E5D1]/30 text-[#55E5D1] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Explainer Tour</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-['Outfit']">
            See the complete Reef Runner experience.
          </h2>

          <p className="text-base sm:text-lg text-[#93ABB8] leading-relaxed">
            Follow the proposed journey from booking and preparation to riding, returning and swapping batteries.
          </p>
        </div>

        {/* Video Player & Chapter Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Responsive Video Player (8 cols on lg) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 group focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={MEDIA_CONFIG.video.src}
                poster={MEDIA_CONFIG.video.poster}
                preload="metadata"
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                onError={() => setVideoError(true)}
                className="w-full aspect-[16/9] object-contain bg-black cursor-pointer"
                onClick={togglePlay}
                aria-label="Reef Runner explainer video"
              />

              {/* Poster Overlay / Start Button when paused or initial */}
              {!hasStarted && !videoError && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer group-hover:bg-black/30 transition-colors"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#2196F3] text-white flex items-center justify-center shadow-2xl shadow-[#2196F3]/50 transform group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 ml-1.5 fill-current" />
                  </div>
                  <div className="mt-4 px-4 py-2 rounded-xl bg-[#071B2C]/90 backdrop-blur-md border border-white/15 text-center">
                    <p className="text-sm font-semibold text-white">Click to Play Explainer Video</p>
                    <p className="text-xs text-[#55E5D1]">1 minute 50 seconds · 10 Chapters</p>
                  </div>
                </div>
              )}

              {/* Graceful Missing Video State if path breaks */}
              {videoError && (
                <div className="absolute inset-0 bg-[#151C24] flex flex-col items-center justify-center p-6 text-center">
                  <AlertCircle className="w-12 h-12 text-[#55E5D1] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">Demonstration Video Ready</h3>
                  <p className="text-xs text-[#93ABB8] max-w-md mb-4">
                    The video file is configured at <code className="text-xs bg-black/40 px-2 py-1 rounded text-[#55E5D1]">{MEDIA_CONFIG.video.src}</code>.
                  </p>
                  <img
                    src={MEDIA_CONFIG.video.poster}
                    alt="Reef Runner reference preview"
                    className="max-h-48 rounded-lg border border-white/10 object-cover"
                  />
                </div>
              )}

              {/* Custom Accessible Controls Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Scrub Bar */}
                <div className="space-y-1 mb-3">
                  <input
                    type="range"
                    min="0"
                    max={duration || 110}
                    step="0.1"
                    value={currentTime}
                    onChange={handleScrubChange}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#55E5D1] focus:outline-none focus:ring-1 focus:ring-[#55E5D1]"
                    aria-label="Video seek slider"
                  />
                  <div className="flex items-center justify-between text-[11px] text-[#93ABB8] font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span className="text-[#55E5D1] font-sans font-medium text-xs">
                      {chapters[activeChapterIndex]?.title}
                    </span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Bottom Control Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Play / Pause */}
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>

                    {/* Replay 10s */}
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
                        }
                      }}
                      className="p-2 rounded-lg hover:bg-white/10 text-[#93ABB8] hover:text-white transition-colors focus:outline-none"
                      title="Rewind 10 seconds"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    {/* Volume & Mute */}
                    <div className="flex items-center space-x-2 group/vol">
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors focus:outline-none"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="w-5 h-5 text-red-400" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1 bg-white/20 rounded appearance-none cursor-pointer accent-[#2196F3] hidden sm:block"
                        aria-label="Volume slider"
                      />
                    </div>
                  </div>

                  {/* Right side: Active Chapter Label & Fullscreen */}
                  <div className="flex items-center space-x-3">
                    <span className="hidden md:inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/10 text-[11px] text-[#55E5D1]">
                      <Clock className="w-3 h-3" />
                      <span>Chapter {activeChapterIndex + 1} of {chapters.length}</span>
                    </span>

                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
                      aria-label="Toggle Fullscreen"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video description note */}
            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#93ABB8] bg-[#151C24]/60 p-3 rounded-xl border border-white/5">
              <span>Video source: <code className="text-white">Reef_Runner_Full_Explainer.mp4</code></span>
              <span className="text-[#55E5D1]">Click any chapter on the right to jump directly</span>
            </div>
          </div>

          {/* Clickable Interactive Chapter Directory (4 cols on lg) */}
          <div className="lg:col-span-4 bg-[#151C24] rounded-2xl border border-white/10 p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#55E5D1]" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Story Chapters
                </h3>
              </div>
              <span className="text-xs text-[#93ABB8]">10 Chapters</span>
            </div>

            {/* Chapter List with live active-state highlighting */}
            <div className="space-y-2 max-h-[440px] overflow-y-auto pr-1">
              {chapters.map((chapter, idx) => {
                const isActive = idx === activeChapterIndex;
                return (
                  <button
                    key={chapter.id}
                    onClick={() => handleSeekToChapter(chapter, idx)}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start space-x-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#55E5D1] ${
                      isActive
                        ? 'bg-[#2196F3]/20 border border-[#2196F3] text-white shadow-md'
                        : 'bg-white/[0.02] border border-white/5 hover:border-white/20 text-[#93ABB8] hover:text-white'
                    }`}
                  >
                    {/* Timestamp Pill */}
                    <span
                      className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-md shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#55E5D1] text-[#071B2C]'
                          : 'bg-white/10 text-[#93ABB8] group-hover:text-white'
                      }`}
                    >
                      {chapter.formattedTime}
                    </span>

                    {/* Chapter Title & Description */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p
                          className={`text-xs font-semibold truncate ${
                            isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
                          }`}
                        >
                          {chapter.title}
                        </p>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#55E5D1] animate-ping shrink-0 ml-1" />
                        )}
                      </div>
                      <p className="text-[11px] text-[#93ABB8] line-clamp-1 mt-0.5">
                        {chapter.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <p className="text-[11px] text-[#93ABB8]">
                Keyboard shortcuts: <kbd className="px-1.5 py-0.5 bg-black/40 rounded text-white">Space</kbd> Play/Pause · <kbd className="px-1.5 py-0.5 bg-black/40 rounded text-white">← / →</kbd> Seek 5s
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
