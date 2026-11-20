import React, { useState } from 'react';
import {
  Compass,
  FileCheck,
  Cpu,
  Layers,
  Wrench,
  CheckCircle,
  ShieldCheck,
  Hammer,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG, BuildStage } from '../data/siteConfig';

export const BuildJourney: React.FC = () => {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const stages = SITE_CONFIG.buildStages;

  const currentStage = stages.find((s) => s.stageNumber === activeStageNumber) || stages[0];

  const stageIcons: Record<number, React.ReactNode> = {
    1: <Compass className="w-5 h-5 text-[#2196F3]" />,
    2: <Hammer className="w-5 h-5 text-[#55E5D1]" />,
    3: <Layers className="w-5 h-5 text-[#2196F3]" />,
    4: <Wrench className="w-5 h-5 text-amber-500" />,
    5: <Cpu className="w-5 h-5 text-emerald-500" />,
    6: <CheckCircle className="w-5 h-5 text-[#2196F3]" />
  };

  return (
    <section
      id="section-build"
      className="py-20 lg:py-28 bg-[#F5F7F8] text-[#151C24] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/30 text-[#2196F3] text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            <span>Manufacturing Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B2C] tracking-tight font-['Outfit']">
            From concept to a tested boat.
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            A practical development sequence outlining how Reef Runner transitions from design models into a physical, sea-tested prototype.
          </p>
        </div>

        {/* 6-Stage Interactive Stepper */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {stages.map((stage) => {
            const isSelected = stage.stageNumber === activeStageNumber;
            return (
              <button
                key={stage.stageNumber}
                onClick={() => setActiveStageNumber(stage.stageNumber)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#071B2C] text-white border-[#071B2C] shadow-lg scale-102 ring-2 ring-[#55E5D1]'
                    : 'bg-white hover:bg-slate-100 text-[#334155] border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs font-mono ${
                      isSelected ? 'bg-[#55E5D1] text-[#071B2C]' : 'bg-slate-100 text-[#64748B]'
                    }`}
                  >
                    {stage.stageNumber}
                  </span>
                  <div className="opacity-80">
                    {stageIcons[stage.stageNumber]}
                  </div>
                </div>
                <span className="text-xs font-bold line-clamp-2 leading-tight">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stage Detailed Inspector Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-10 shadow-xl max-w-4xl mx-auto space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2196F3] font-semibold">
                Stage {currentStage.stageNumber} of 6
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#071B2C] font-['Outfit'] mt-1">
                {currentStage.title}
              </h3>
            </div>
            
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-xs font-medium text-[#475569] shrink-0">
              Development Phase
            </div>
          </div>

          {/* Everyday Language Summary */}
          <p className="text-base text-[#334155] leading-relaxed">
            {currentStage.summary}
          </p>

          {/* Key Tasks Checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Key Engineering & Build Tasks:
            </h4>
            <div className="space-y-2.5">
              {currentStage.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-[#F8FAFC] border border-slate-100 text-sm text-[#475569]">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverable Box */}
          <div className="p-4 rounded-xl bg-[#071B2C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-[#55E5D1] font-mono font-bold">KEY MILESTONE:</span>
              <span className="text-slate-200">{currentStage.keyDeliverable}</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setActiveStageNumber((prev) => (prev > 1 ? prev - 1 : 6))}
                className="px-3 py-1 rounded text-xs bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                Prev
              </button>
              <button
                onClick={() => setActiveStageNumber((prev) => (prev < 6 ? prev + 1 : 1))}
                className="px-3 py-1 rounded text-xs bg-[#55E5D1] hover:bg-[#43d1bd] text-[#071B2C] font-semibold cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>

          {/* Factual Integrity Guardrail Notice */}
          <div className="pt-2 text-center text-xs text-[#64748B] italic">
            * This roadmap represents an illustrative development sequence. Does not assert unverified structural calculations, laminate schedules or pre-approved regulatory outcomes.
          </div>

        </div>

      </div>
    </section>
  );
};
