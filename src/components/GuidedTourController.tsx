import React, { useEffect } from 'react';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle,
  Eye,
  RotateCcw
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface GuidedTourControllerProps {
  isActive: boolean;
  currentStepIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  onJumpToStep: (index: number) => void;
}

export const GuidedTourController: React.FC<GuidedTourControllerProps> = ({
  isActive,
  currentStepIndex,
  onNext,
  onPrev,
  onClose,
  onJumpToStep
}) => {
  const steps = SITE_CONFIG.tourSteps;
  const currentStep = steps[currentStepIndex] || steps[0];

  // Keyboard navigation when tour is active
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onNext, onPrev, onClose]);

  if (!isActive) return null;

  const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <aside
      aria-label="Guided Tour Navigator"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-6 duration-300"
    >
      <div className="bg-[#071B2C]/95 backdrop-blur-xl border-2 border-[#55E5D1]/40 rounded-2xl p-4 shadow-2xl text-white shadow-[#071B2C]/90">
        
        {/* Progress bar line along top */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#2196F3] to-[#55E5D1] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#55E5D1] animate-ping" />
            <span className="text-xs font-mono font-bold text-[#55E5D1] uppercase tracking-wider">
              Guided Tour · Step {currentStepIndex + 1} of {steps.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-[#93ABB8] hover:text-white transition-colors cursor-pointer"
            aria-label="Exit guided tour"
            title="Exit guided tour (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current Step Label */}
        <h4 className="text-sm sm:text-base font-bold text-white font-['Outfit'] mb-3">
          {currentStep.label}
        </h4>

        {/* Controls Bar */}
        <div className="flex items-center justify-between pt-1 border-t border-white/10">
          <button
            onClick={onPrev}
            disabled={currentStepIndex === 0}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentStepIndex === 0
                ? 'opacity-40 text-slate-500 cursor-not-allowed'
                : 'text-white bg-white/10 hover:bg-white/20 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <span className="text-[11px] text-[#93ABB8] hidden sm:inline">
            Use <kbd className="px-1 py-0.5 bg-black/40 rounded text-white text-[10px]">←</kbd> <kbd className="px-1 py-0.5 bg-black/40 rounded text-white text-[10px]">→</kbd> to navigate
          </span>

          <button
            onClick={onNext}
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-[#071B2C] bg-[#55E5D1] hover:bg-[#43d1bd] shadow-md shadow-[#55E5D1]/30 transition-all cursor-pointer"
          >
            <span>{currentStepIndex === steps.length - 1 ? 'Finish Tour' : 'Next Step'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
