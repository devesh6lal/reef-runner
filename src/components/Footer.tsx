import React from 'react';
import { Compass, ArrowUp, ShieldCheck, Mail, Globe, MapPin, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051422] text-[#93ABB8] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2196F3] to-[#55E5D1] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#071B2C] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-[#55E5D1]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
                Reef<span className="text-[#55E5D1]">Runner</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#2196F3]/20 text-[#55E5D1] border border-[#2196F3]/30">
                Fiji Concept
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#93ABB8] leading-relaxed max-w-md">
              A proposed solar-assisted electric boating service for sheltered Fijian waters. Combining a compact single-person trimaran with twin low horizontal solar wings and supervised dockside rentals.
            </p>

            <div className="flex items-center space-x-3 text-xs text-[#CBD5E1]">
              <MapPin className="w-4 h-4 text-[#55E5D1] shrink-0" />
              <span>Proposed for sheltered waters near Suva, Fiji</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Story Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#section-hero" className="hover:text-[#55E5D1] transition-colors">
                  1. Meet Reef Runner
                </a>
              </li>
              <li>
                <a href="#section-video" className="hover:text-[#55E5D1] transition-colors">
                  2. Video Explainer
                </a>
              </li>
              <li>
                <a href="#section-explorer" className="hover:text-[#55E5D1] transition-colors">
                  3. Explore the Boat
                </a>
              </li>
              <li>
                <a href="#section-journey" className="hover:text-[#55E5D1] transition-colors">
                  4. Customer Journey
                </a>
              </li>
              <li>
                <a href="#section-tech" className="hover:text-[#55E5D1] transition-colors">
                  5. Technology Visuals
                </a>
              </li>
              <li>
                <a href="#section-benefits" className="hover:text-[#55E5D1] transition-colors">
                  6. Benefits for Fiji
                </a>
              </li>
              <li>
                <a href="#section-build" className="hover:text-[#55E5D1] transition-colors">
                  7. Proposed Build Process
                </a>
              </li>
              <li>
                <a href="#section-faq" className="hover:text-[#55E5D1] transition-colors">
                  8. Location & FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Assessment & Transparency Note (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Grant & Partner Consultation
            </h4>
            <div className="p-4 rounded-xl bg-[#071B2C] border border-white/5 space-y-2 text-xs text-[#93ABB8]">
              <div className="flex items-center space-x-2 text-[#55E5D1] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Concept Integrity Notice</span>
              </div>
              <p className="leading-relaxed">
                This presentation is prepared for early consultation, marine stakeholder dialogue, and grant assessment. All booking interactions, pricing calculations, and hardware sequences are simulations.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Reef Runner Concept. Prepared in Australian English.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
