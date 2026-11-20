import React, { useState } from 'react';
import {
  Layers,
  Info,
  CheckCircle2,
  Compass,
  Zap,
  Battery,
  Shield,
  Eye,
  Sliders,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { SITE_CONFIG, BoatHotspot } from '../data/siteConfig';
import { MEDIA_CONFIG } from '../data/mediaConfig';

export const BoatExplorer: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('solar-wings');
  const [viewMode, setViewMode] = useState<'photo' | 'schematic'>('photo');

  const hotspots = SITE_CONFIG.boatHotspots;
  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];

  return (
    <section
      id="section-explorer"
      className="py-20 lg:py-28 bg-[#F5F7F8] text-[#151C24] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/30 text-[#2196F3] text-xs font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Architecture Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B2C] tracking-tight font-['Outfit']">
              Explore the boat.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Click on the hotspots or select a feature below to inspect how each component serves stability, solar harvesting and solo rider comfort.
            </p>
          </div>

          {/* Exterior Photo vs Internal Layout Schematic Toggle */}
          <div className="flex items-center bg-[#E2E8F0] p-1.5 rounded-xl shadow-inner shrink-0">
            <button
              onClick={() => setViewMode('photo')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                viewMode === 'photo'
                  ? 'bg-white text-[#071B2C] shadow-sm'
                  : 'text-[#64748B] hover:text-[#071B2C]'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Exterior Reference</span>
            </button>
            <button
              onClick={() => setViewMode('schematic')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                viewMode === 'schematic'
                  ? 'bg-[#071B2C] text-[#55E5D1] shadow-md'
                  : 'text-[#64748B] hover:text-[#071B2C]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>View the Internal Layout</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Showcase (8 cols on lg) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden bg-[#071B2C] shadow-2xl border border-slate-200">
              
              {viewMode === 'photo' ? (
                /* EXTERIOR REFERENCE PHOTO WITH INTERACTIVE HOTSPOT PINS */
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none">
                  <img
                    src={MEDIA_CONFIG.photos.heroBoat}
                    alt="Reef Runner reference boat showing trimaran hull and horizontal solar wings"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  {/* Subtle dark gradient overlay to make pins pop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                  {/* Hotspot Pins */}
                  {hotspots.map((spot, index) => {
                    const isActive = spot.id === activeHotspotId;
                    return (
                      <button
                        key={spot.id}
                        onClick={() => setActiveHotspotId(spot.id)}
                        style={{
                          left: `${spot.xPercent}%`,
                          top: `${spot.yPercent}%`
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-4 focus:ring-[#55E5D1] rounded-full z-20 cursor-pointer transition-transform ${
                          isActive ? 'scale-125 z-30' : 'hover:scale-110'
                        }`}
                        aria-label={`Inspect ${spot.name}`}
                        aria-pressed={isActive}
                      >
                        {/* Pulsing beacon ring */}
                        <span
                          className={`absolute -inset-2 rounded-full opacity-75 animate-ping pointer-events-none ${
                            isActive ? 'bg-[#55E5D1]' : 'bg-[#2196F3]/50'
                          }`}
                        />
                        
                        {/* Pin Center Circle */}
                        <span
                          className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-lg border-2 font-bold text-xs transition-colors ${
                            isActive
                              ? 'bg-[#55E5D1] text-[#071B2C] border-white'
                              : 'bg-[#071B2C]/90 text-white border-[#2196F3] group-hover:bg-[#2196F3]'
                          }`}
                        >
                          {index + 1}
                        </span>

                        {/* Hover Tooltip on desktop */}
                        <span className="hidden md:group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2.5 py-1 text-[11px] font-semibold text-white bg-[#071B2C]/95 backdrop-blur-md rounded-md shadow-lg border border-white/20 whitespace-nowrap pointer-events-none">
                          {spot.name}
                        </span>
                      </button>
                    );
                  })}

                  {/* Watermark badge reminding strict design fidelity */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#071B2C]/85 backdrop-blur-md border border-white/20 text-[11px] text-white flex items-center space-x-2 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#55E5D1]" />
                    <span>Reference boat: 2 low solar wings · No overhead canopy</span>
                  </div>
                </div>
              ) : (
                /* HIGH-PRECISION SVG INTERNAL CUTAWAY SCHEMATIC */
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full p-6 sm:p-8 flex flex-col justify-between bg-[#071B2C] select-none text-white overflow-hidden">
                  
                  {/* Schematic Title & Status Badge */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded bg-[#2196F3]/20 border border-[#2196F3]/40 text-[#55E5D1] text-xs font-mono font-semibold">
                        SCHEMATIC VIEW
                      </span>
                      <span className="text-xs text-[#93ABB8]">Cutaway Architectural Drawing</span>
                    </div>
                    <span className="text-[11px] text-[#55E5D1] bg-[#55E5D1]/10 px-2 py-0.5 rounded border border-[#55E5D1]/30">
                      Concept layout — subject to engineering design
                    </span>
                  </div>

                  {/* Precision SVG Technical Diagram */}
                  <div className="my-auto w-full max-h-[360px] flex items-center justify-center">
                    <svg
                      viewBox="0 0 900 420"
                      className="w-full h-auto max-h-[360px]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Waterline indication */}
                      <line x1="50" y1="280" x2="850" y2="280" stroke="#2196F3" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.4" />
                      <text x="810" y="275" fill="#55E5D1" fontSize="11" fontFamily="monospace">WATERLINE</text>

                      {/* OUTRIGGERS (Port & Starboard) */}
                      {/* Left Outrigger Hull */}
                      <g className="cursor-pointer" onClick={() => setActiveHotspotId('outriggers')}>
                        <path d="M120 250 C140 230 200 230 240 250 L230 290 C190 295 150 295 120 280 Z" fill="#151C24" stroke="#55E5D1" strokeWidth="2" />
                        <text x="140" y="315" fill="#55E5D1" fontSize="11">Left Outrigger</text>
                      </g>

                      {/* Right Outrigger Hull */}
                      <g className="cursor-pointer" onClick={() => setActiveHotspotId('outriggers')}>
                        <path d="M660 250 C700 230 760 230 780 250 L780 280 C750 295 710 295 670 290 Z" fill="#151C24" stroke="#55E5D1" strokeWidth="2" />
                        <text x="700" y="315" fill="#55E5D1" fontSize="11">Right Outrigger</text>
                      </g>

                      {/* WING CONNECTORS (Low Rigid Struts) */}
                      <rect x="230" y="235" width="130" height="14" rx="4" fill="#1E293B" stroke="#2196F3" strokeWidth="1.5" />
                      <rect x="540" y="235" width="130" height="14" rx="4" fill="#1E293B" stroke="#2196F3" strokeWidth="1.5" />

                      {/* HORIZONTAL SOLAR WINGS (Exactly Two Flat Low Panels) */}
                      {/* Port Panel */}
                      <g
                        className="cursor-pointer group"
                        onClick={() => setActiveHotspotId('solar-wings')}
                      >
                        <rect x="180" y="200" width="160" height="28" rx="3" fill="#0A0E14" stroke={activeHotspotId === 'solar-wings' ? '#55E5D1' : '#2196F3'} strokeWidth={activeHotspotId === 'solar-wings' ? 2.5 : 1.5} />
                        {/* Solar Grid Lines */}
                        <line x1="220" y1="200" x2="220" y2="228" stroke="#334155" strokeWidth="1" />
                        <line x1="260" y1="200" x2="260" y2="228" stroke="#334155" strokeWidth="1" />
                        <line x1="300" y1="200" x2="300" y2="228" stroke="#334155" strokeWidth="1" />
                        <line x1="180" y1="214" x2="340" y2="214" stroke="#334155" strokeWidth="1" />
                        <text x="195" y="190" fill="#55E5D1" fontSize="11" fontWeight="bold">Solar Wing 1 (Flat)</text>
                      </g>

                      {/* Starboard Panel */}
                      <g
                        className="cursor-pointer group"
                        onClick={() => setActiveHotspotId('solar-wings')}
                      >
                        <rect x="560" y="200" width="160" height="28" rx="3" fill="#0A0E14" stroke={activeHotspotId === 'solar-wings' ? '#55E5D1' : '#2196F3'} strokeWidth={activeHotspotId === 'solar-wings' ? 2.5 : 1.5} />
                        <line x1="600" y1="200" x2="600" y2="228" stroke="#334155" strokeWidth="1" />
                        <line x1="640" y1="200" x2="640" y2="228" stroke="#334155" strokeWidth="1" />
                        <line x1="680" y1="200" x2="680" y2="228" stroke="#334155" strokeWidth="1" />
                        <line x1="560" y1="214" x2="720" y2="214" stroke="#334155" strokeWidth="1" />
                        <text x="585" y="190" fill="#55E5D1" fontSize="11" fontWeight="bold">Solar Wing 2 (Flat)</text>
                      </g>

                      {/* CENTRAL MAIN HULL (Cutaway Profile) */}
                      <g
                        className="cursor-pointer"
                        onClick={() => setActiveHotspotId('central-hull')}
                      >
                        {/* Main Hull Shell */}
                        <path
                          d="M310 180 C360 170 540 170 590 180 L620 280 C600 330 460 340 380 340 C340 340 280 320 280 280 Z"
                          fill="#151C24"
                          stroke={activeHotspotId === 'central-hull' ? '#55E5D1' : '#475569'}
                          strokeWidth="2"
                        />
                      </g>

                      {/* FRONT ELECTRONICS BONNET (Bow) */}
                      <g
                        className="cursor-pointer"
                        onClick={() => setActiveHotspotId('front-electronics')}
                      >
                        <path d="M540 180 L610 220 L580 240 L530 210 Z" fill="#1E293B" stroke={activeHotspotId === 'front-electronics' ? '#55E5D1' : '#2196F3'} strokeWidth="2" />
                        <circle cx="565" cy="210" r="4" fill="#55E5D1" />
                        <text x="590" y="245" fill="#93ABB8" fontSize="11">Bow Electronics Bonnet</text>
                      </g>

                      {/* CONCEALED BATTERY COMPARTMENT (Low Keel Mounting) */}
                      <g
                        className="cursor-pointer"
                        onClick={() => setActiveHotspotId('concealed-battery')}
                      >
                        <rect
                          x="420"
                          y="275"
                          width="85"
                          height="42"
                          rx="4"
                          fill="#071B2C"
                          stroke={activeHotspotId === 'concealed-battery' ? '#55E5D1' : '#2196F3'}
                          strokeWidth="2.5"
                        />
                        <rect x="428" y="283" width="69" height="26" rx="2" fill="#2196F3" opacity="0.3" />
                        <text x="432" y="300" fill="#FFFFFF" fontSize="10" fontWeight="bold">BATTERY</text>
                        <text x="400" y="345" fill="#55E5D1" fontSize="11">Concealed Removable Pack</text>
                      </g>

                      {/* LOW ERGONOMIC COCKPIT & SEAT */}
                      <g
                        className="cursor-pointer"
                        onClick={() => setActiveHotspotId('cockpit-seat')}
                      >
                        {/* Padded Seat Profile */}
                        <path
                          d="M390 200 C390 190 405 190 410 200 L415 240 L450 245 L450 255 L405 255 L390 200 Z"
                          fill="#2563EB"
                          stroke={activeHotspotId === 'cockpit-seat' ? '#55E5D1' : '#60A5FA'}
                          strokeWidth="2"
                        />
                        <text x="360" y="180" fill="#60A5FA" fontSize="11">Low Bucket Seat (Open Above)</text>
                      </g>

                      {/* PROTECTED REAR MOTOR AREA (Transom & Long Shaft) */}
                      <g
                        className="cursor-pointer"
                        onClick={() => setActiveHotspotId('rear-motor')}
                      >
                        {/* Motor Shroud & Long Shaft into Water */}
                        <rect x="290" y="260" width="28" height="40" rx="3" fill="#1E293B" stroke={activeHotspotId === 'rear-motor' ? '#55E5D1' : '#2196F3'} strokeWidth="2" />
                        <line x1="280" y1="290" x2="250" y2="330" stroke="#93ABB8" strokeWidth="3" />
                        {/* Propeller */}
                        <path d="M245 325 L255 335 M245 335 L255 325" stroke="#55E5D1" strokeWidth="3" strokeLinecap="round" />
                        <text x="210" y="355" fill="#93ABB8" fontSize="11">Protected Electric Drive</text>
                      </g>

                      {/* Clear Open Sky Space Indicator above rider */}
                      <path d="M370 140 L470 140" stroke="#55E5D1" strokeWidth="1.5" strokeDasharray="4 4" />
                      <text x="350" y="130" fill="#55E5D1" fontSize="11" fontStyle="italic">
                        100% OPEN SKY (NO CANOPY OR OVERHEAD ROOF)
                      </text>
                    </svg>
                  </div>

                  {/* Footnote on schematic */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#93ABB8]">
                    <span>Single-person 3.4 m trimaran layout</span>
                    <span className="text-[#55E5D1]">Click any component to inspect specifications</span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Feature Callout Inspector Card (4 cols on lg) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xl space-y-5">
            
            {/* Header info */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2196F3]">
                {activeHotspot.highlightTag}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#2196F3]/10 text-[#071B2C]">
                Feature {hotspots.findIndex((h) => h.id === activeHotspot.id) + 1} of {hotspots.length}
              </span>
            </div>

            {/* Feature Name & Summary */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#071B2C] font-['Outfit']">
                {activeHotspot.name}
              </h3>
              <p className="text-sm font-medium text-[#2196F3]">
                {activeHotspot.shortDescription}
              </p>
            </div>

            {/* Detailed Explanation */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 text-sm text-[#475569] leading-relaxed">
              {activeHotspot.detailedExplanation}
            </div>

            {/* Design Guardrail Notes */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-start space-x-2 text-xs text-[#64748B]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Single-person trimaran architecture ~3.4 m length</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-[#64748B]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Strictly two low horizontal wings; no overhead canopy</span>
              </div>
            </div>

            {/* Quick Feature Switcher List (Especially Great for Mobile) */}
            <div className="pt-2">
              <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-2">
                All 7 Design Features:
              </label>
              <div className="grid grid-cols-1 gap-1.5 max-h-56 overflow-y-auto pr-1">
                {hotspots.map((spot, i) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                      spot.id === activeHotspotId
                        ? 'bg-[#071B2C] text-[#55E5D1] shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-[#334155]'
                    }`}
                  >
                    <span className="truncate">
                      {i + 1}. {spot.name}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
