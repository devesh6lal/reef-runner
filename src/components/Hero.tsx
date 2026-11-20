import React from 'react';
import { Play, Compass, ArrowRight, Sun, Users, User, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { MEDIA_CONFIG } from '../data/mediaConfig';

interface HeroProps {
  onStartTour: () => void;
  onWatchVideo: () => void;
  onExploreBoat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTour, onWatchVideo, onExploreBoat }) => {
  return (
    <section
      id="section-hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#071B2C] via-[#0B253D] to-[#071B2C]"
    >
      {/* Subtle tropical lagoon water caustics glow in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#2196F3] rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#55E5D1] rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tasteful Proposed Concept Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/30 text-[#55E5D1] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#55E5D1] animate-pulse" />
              <span>{SITE_CONFIG.meta.conceptBadge}</span>
            </div>

            {/* Main Headline & Supporting Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit'] leading-[1.1]">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#55E5D1]">Reef Runner.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#55E5D1] tracking-normal">
                {SITE_CONFIG.meta.subtitle}
              </p>
            </div>

            {/* Suggested Introduction */}
            <p className="text-base sm:text-lg text-[#93ABB8] leading-relaxed max-w-xl">
              {SITE_CONFIG.meta.leadIntro}
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartTour}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1E88E5] hover:to-[#1565C0] shadow-lg shadow-[#2196F3]/30 hover:shadow-[#2196F3]/50 transition-all transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>Take the guided tour</span>
                <ArrowRight className="w-4 h-4 ml-1 text-white/80" />
              </button>

              <button
                onClick={onWatchVideo}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#55E5D1] bg-[#151C24]/80 hover:bg-[#151C24] border border-[#55E5D1]/30 hover:border-[#55E5D1] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
              >
                <Play className="w-4 h-4 fill-current text-[#55E5D1]" />
                <span>Watch how it works</span>
                <span className="text-xs text-[#93ABB8] ml-1">(1m 50s)</span>
              </button>
            </div>

            {/* Three concise highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#2196F3]/30 transition-colors">
                <div className="flex items-center space-x-2 text-white font-semibold text-xs mb-1">
                  <User className="w-4 h-4 text-[#2196F3]" />
                  <span>One-person electric</span>
                </div>
                <p className="text-[11px] text-[#93ABB8] leading-tight">
                  Compact 3.4 m trimaran built for solo sheltered-water cruising.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#55E5D1]/30 transition-colors">
                <div className="flex items-center space-x-2 text-white font-semibold text-xs mb-1">
                  <Sun className="w-4 h-4 text-[#55E5D1]" />
                  <span>Two low solar wings</span>
                </div>
                <p className="text-[11px] text-[#93ABB8] leading-tight">
                  Twin flat horizontal panels leave the cockpit completely open above.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#2196F3]/30 transition-colors">
                <div className="flex items-center space-x-2 text-white font-semibold text-xs mb-1">
                  <Users className="w-4 h-4 text-[#2196F3]" />
                  <span>Staff-assisted rentals</span>
                </div>
                <p className="text-[11px] text-[#93ABB8] leading-tight">
                  Dock attendants handle safety briefing, Bluetooth check and mooring release.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Showcase of the Actual Boat */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2196F3]/30 shadow-2xl shadow-[#071B2C]/90 bg-[#151C24] group">
              
              {/* Primary Boat Reference Photo */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={MEDIA_CONFIG.photos.heroBoat}
                  alt="Reef Runner single-person solar electric trimaran moored at wooden dock in Fiji waters with attendant"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette to keep focus clean */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C] via-transparent to-black/20 pointer-events-none" />

                {/* Live visual anchor badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-lg bg-[#071B2C]/90 backdrop-blur-md border border-[#2196F3]/40 text-xs text-white flex items-center space-x-2 pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-[#55E5D1]" />
                    <span className="font-medium">Single-person trimaran · Open cockpit</span>
                  </div>

                  <button
                    onClick={onExploreBoat}
                    className="px-3 py-1.5 rounded-lg bg-[#2196F3] hover:bg-[#1976D2] text-xs font-semibold text-white shadow-md transition-all flex items-center space-x-1 pointer-events-auto cursor-pointer"
                  >
                    <span>Explore Hotspots</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Informational Boat Architecture strip beneath image */}
              <div className="p-4 bg-[#0D1824] border-t border-white/10 flex items-center justify-between text-xs text-[#93ABB8]">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">Design specifications:</span>
                  <span>Length: ~3.4 m</span>
                  <span className="hidden sm:inline">Panels: Exactly 2 flat wings</span>
                  <span className="hidden md:inline">Cockpit: Open (no roof)</span>
                </div>
                <div className="flex items-center text-[#55E5D1] space-x-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[11px]">Strict Design Fidelity</span>
                </div>
              </div>

            </div>

            {/* Secondary Floating Feature Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 max-w-xs p-3.5 rounded-xl bg-[#071B2C]/95 backdrop-blur-md border border-[#55E5D1]/30 shadow-xl items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#55E5D1]/10 border border-[#55E5D1]/30 flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5 text-[#55E5D1]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Low Horizontal Wings</p>
                <p className="text-[11px] text-[#93ABB8]">Leaves space above rider 100% open</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
