import React from 'react';
import { Users, Palmtree, Anchor, Wrench, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const BenefitsForFiji: React.FC = () => {
  const benefits = SITE_CONFIG.benefits;

  const iconMap: Record<string, React.ReactNode> = {
    residents: <Users className="w-5 h-5 text-[#55E5D1]" />,
    visitors: <Palmtree className="w-5 h-5 text-[#2196F3]" />,
    fishing: <Anchor className="w-5 h-5 text-emerald-400" />,
    skills: <Wrench className="w-5 h-5 text-amber-400" />
  };

  return (
    <section
      id="section-benefits"
      className="py-20 lg:py-28 bg-[#071B2C] text-white relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#55E5D1]/10 border border-[#55E5D1]/30 text-[#55E5D1] text-xs font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Community & Economic Relevance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            A local idea with practical possibilities.
          </h2>

          <p className="text-base sm:text-lg text-[#93ABB8] leading-relaxed">
            Thoughtfully tailored for Fiji’s sheltered coastal geography, maritime traditions, and emerging clean technology pathways.
          </p>
        </div>

        {/* 4 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#151C24] rounded-2xl border border-white/10 p-7 shadow-xl flex flex-col justify-between hover:border-[#2196F3]/40 transition-all group"
            >
              <div className="space-y-4">
                {/* Category Header with Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {iconMap[benefit.id]}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#55E5D1]">
                        {benefit.category}
                      </span>
                      <h3 className="text-xl font-bold text-white font-['Outfit']">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#93ABB8] leading-relaxed">
                  {benefit.summary}
                </p>

                {/* Detail Bullet Points */}
                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {benefit.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#CBD5E1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2196F3] mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pilot vs Future Distinction Note */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#93ABB8]">
                <span>
                  {benefit.id === 'fishing'
                    ? 'Subject to future maritime trials & engineering'
                    : 'Proposed supervised pilot model'}
                </span>
                <span className="text-[#55E5D1] font-medium">Suva, Fiji</span>
              </div>
            </div>
          ))}
        </div>

        {/* Grounded Consultation Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B253D] border border-[#2196F3]/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <ShieldCheck className="w-8 h-8 text-[#55E5D1] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Responsible Concept Evolution</h4>
              <p className="text-xs text-[#CBD5E1] mt-0.5">
                Reef Runner distinguishes between the proposed initial recreational rental pilot and potential long-term utility craft variations, prioritising community safety, seaworthiness, and regulatory alignment.
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-lg bg-[#071B2C] text-xs font-semibold text-[#55E5D1] border border-white/10 shrink-0">
            Fiji Maritime Focus
          </span>
        </div>

      </div>
    </section>
  );
};
