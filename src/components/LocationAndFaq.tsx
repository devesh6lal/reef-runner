import React, { useState } from 'react';
import {
  MapPin,
  HelpCircle,
  ChevronDown,
  Compass,
  ShieldAlert,
  Search,
  CheckCircle2,
  Anchor
} from 'lucide-react';
import { SITE_CONFIG, FaqItem } from '../data/siteConfig';
import { MEDIA_CONFIG } from '../data/mediaConfig';

export const LocationAndFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs = SITE_CONFIG.faqs;

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="section-faq"
      className="py-20 lg:py-28 bg-[#071B2C] text-white relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PART 1: PROPOSED SUVA WATERFRONT LOCATION */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#151C24] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Visual Waterfront Image (5 cols) */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full overflow-hidden">
              <img
                src={MEDIA_CONFIG.photos.scanAtDock}
                alt="Sheltered waterfront setting in Fiji suitable for Reef Runner pilot"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C] via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#071B2C]/90 backdrop-blur-md border border-white/10 text-xs text-white flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#55E5D1] shrink-0" />
                <span>Proposed pilot concept · Suva, Fiji</span>
              </div>
            </div>

            {/* Location Editorial Context (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#55E5D1]/10 border border-[#55E5D1]/30 text-[#55E5D1] text-xs font-semibold">
                <Anchor className="w-3.5 h-3.5" />
                <span>Sheltered Maritime Setting</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
                A proposed waterfront experience for Suva.
              </h2>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                The initial operational pilot is proposed for a suitable sheltered waterfront location near Suva. A calm harbour basin, enclosed foreshore bay, or protected resort lagoon provides ideal conditions for the single-person trimaran’s low-drag displacement and solo-rider orientation.
              </p>

              <div className="p-4 rounded-xl bg-[#071B2C] border border-[#2196F3]/30 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-[#55E5D1] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Site Feasibility Criteria</span>
                </div>
                <p className="text-[#93ABB8] leading-relaxed">
                  Final berth selection and operational launch depend upon ongoing environmental assessments, marine authority consultations, pontoon accessibility permits, and stakeholder alignments.
                </p>
              </div>

              <p className="text-xs text-[#93ABB8] italic">
                * Note for assessors: This website presents an early concept proposal. There is no confirmed commercial opening date or active fleet berth at this time.
              </p>
            </div>

          </div>
        </div>

        {/* PART 2: ACCESSIBLE ACCORDION FAQS */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2196F3]/15 border border-[#2196F3]/30 text-[#2196F3] text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Inquiries</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Frequently asked questions.
            </h3>
            <p className="text-sm text-[#93ABB8]">
              Straightforward answers about the boat design, operating safety, and proposed rental experience.
            </p>
          </div>

          {/* Category Tabs & Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-1 p-1 bg-[#151C24] rounded-xl border border-white/10 w-full sm:w-auto overflow-x-auto">
              {[
                { id: 'all', label: 'All Questions' },
                { id: 'boat', label: 'The Boat' },
                { id: 'technology', label: 'Technology' },
                { id: 'rental', label: 'Rental & Dock' },
                { id: 'project', label: 'Project Status' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-[#2196F3] text-white shadow-sm'
                      : 'text-[#93ABB8] hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#93ABB8]" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#151C24] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#93ABB8] focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
              />
            </div>
          </div>

          {/* Accordion Item List */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#93ABB8] bg-[#151C24] rounded-xl border border-white/10">
                No questions found matching your search. Try adjusting the query.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border transition-all ${
                      isOpen
                        ? 'bg-[#151C24] border-[#2196F3]/50 shadow-lg'
                        : 'bg-[#151C24]/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#55E5D1] rounded-2xl"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-white font-['Outfit']">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#55E5D1] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed border-t border-white/5 mt-1 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
