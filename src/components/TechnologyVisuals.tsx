import React, { useState, useEffect } from 'react';
import {
  Bluetooth,
  Sun,
  BatteryCharging,
  Zap,
  ShieldAlert,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export const TechnologyVisuals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bluetooth' | 'solar' | 'battery'>('solar');

  // Battery Swap Interactive Simulation State
  const [swapStage, setSwapStage] = useState<number>(0); // 0: Idle, 1: Motor Isolated, 2: Depleted Extracted, 3: Fresh Inserted, 4: Complete
  const [packAStatus, setPackAStatus] = useState<{ label: string; percent: number }>({ label: 'In use (Onboard)', percent: 24 });
  const [packBStatus, setPackBStatus] = useState<{ label: string; percent: number }>({ label: 'Ready (Ashore)', percent: 98 });
  const [packCStatus, setPackCStatus] = useState<{ label: string; percent: number }>({ label: 'Charging (Ashore)', percent: 64 });
  const [isSwapping, setIsSwapping] = useState<boolean>(false);

  // Trigger automated swap sequence
  const handleStartSwap = () => {
    if (isSwapping) return;
    setIsSwapping(true);
    setSwapStage(1);

    setTimeout(() => {
      setSwapStage(2); // Motor isolated, pack A removed to dock
    }, 1200);

    setTimeout(() => {
      setSwapStage(3); // Fresh Pack B inserted into hull
    }, 2400);

    setTimeout(() => {
      setSwapStage(4); // Pack A plugged into shore charger, Pack B active
      setPackAStatus({ label: 'Charging (Ashore)', percent: 25 });
      setPackBStatus({ label: 'In use (Onboard)', percent: 98 });
      setIsSwapping(false);
    }, 3600);
  };

  const handleResetSwap = () => {
    setSwapStage(0);
    setIsSwapping(false);
    setPackAStatus({ label: 'In use (Onboard)', percent: 24 });
    setPackBStatus({ label: 'Ready (Ashore)', percent: 98 });
    setPackCStatus({ label: 'Charging (Ashore)', percent: 64 });
  };

  return (
    <section
      id="section-tech"
      className="py-20 lg:py-28 bg-[#F5F7F8] text-[#151C24] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/30 text-[#2196F3] text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Under The Hood</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B2C] tracking-tight font-['Outfit']">
            Simple for the rider. Carefully managed behind the scenes.
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Discover how dockside Bluetooth authentication, solar energy top-ups, and modular battery swaps deliver reliable operation on the water.
          </p>
        </div>

        {/* 3 Interactive Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#E2E8F0] shadow-inner max-w-full overflow-x-auto">
            
            {/* Tab A: Bluetooth */}
            <button
              onClick={() => setActiveTab('bluetooth')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 shrink-0 cursor-pointer ${
                activeTab === 'bluetooth'
                  ? 'bg-[#071B2C] text-[#55E5D1] shadow-md'
                  : 'text-[#64748B] hover:text-[#071B2C]'
              }`}
            >
              <Bluetooth className="w-4 h-4 text-[#2196F3]" />
              <span>A. Bluetooth at the dock</span>
            </button>

            {/* Tab B: Solar Power Flow */}
            <button
              onClick={() => setActiveTab('solar')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 shrink-0 cursor-pointer ${
                activeTab === 'solar'
                  ? 'bg-[#071B2C] text-[#55E5D1] shadow-md'
                  : 'text-[#64748B] hover:text-[#071B2C]'
              }`}
            >
              <Sun className="w-4 h-4 text-[#55E5D1]" />
              <span>B. Solar-assisted power</span>
            </button>

            {/* Tab C: Battery Swaps */}
            <button
              onClick={() => setActiveTab('battery')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 shrink-0 cursor-pointer ${
                activeTab === 'battery'
                  ? 'bg-[#071B2C] text-[#55E5D1] shadow-md'
                  : 'text-[#64748B] hover:text-[#071B2C]'
              }`}
            >
              <BatteryCharging className="w-4 h-4 text-[#2196F3]" />
              <span>C. Battery swaps</span>
            </button>
          </div>
        </div>

        {/* TAB A: BLUETOOTH AT THE DOCK */}
        {activeTab === 'bluetooth' && (
          <div className="bg-[#071B2C] rounded-2xl border border-slate-200 text-white p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#55E5D1]">
                  Dockside Wireless Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] mt-1">
                  Bluetooth Authorisation at the Dock
                </h3>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#2196F3]/20 text-[#55E5D1] border border-[#2196F3]/30">
                Labelled Simulation — No real hardware connected
              </span>
            </div>

            {/* Animated Sequential Architecture Flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center">
              
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-[#151C24] border border-white/10 hover:border-[#2196F3] transition-all">
                <div className="w-8 h-8 rounded-full bg-[#2196F3]/20 text-[#55E5D1] mx-auto flex items-center justify-center text-xs font-bold mb-2">
                  1
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Customer Booking</h4>
                <p className="text-[11px] text-[#93ABB8]">Web QR booking with sample token</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#55E5D1]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-[#151C24] border border-white/10 hover:border-[#2196F3] transition-all">
                <div className="w-8 h-8 rounded-full bg-[#2196F3]/20 text-[#55E5D1] mx-auto flex items-center justify-center text-xs font-bold mb-2">
                  2
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Staff Device</h4>
                <p className="text-[11px] text-[#93ABB8]">Attendant verifies safety checks</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#55E5D1]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-[#151C24] border border-[#55E5D1]/40 shadow-lg shadow-[#55E5D1]/10">
                <div className="w-8 h-8 rounded-full bg-[#55E5D1] text-[#071B2C] mx-auto flex items-center justify-center text-xs font-bold mb-2">
                  3
                </div>
                <h4 className="text-xs font-bold text-[#55E5D1] mb-1">Bluetooth Unlock</h4>
                <p className="text-[11px] text-[#93ABB8]">Encrypted short-range handshake to boat</p>
              </div>

            </div>

            {/* Explanation & CRITICAL SAFETY PRINCIPLE BOX */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Plain Language Operating Flow
                </h4>
                <p className="text-sm text-[#93ABB8] leading-relaxed">
                  Bluetooth provides a short-range link for the proposed dockside authorisation. The rider uses the boat’s onboard controls during the trip.
                </p>
                <p className="text-sm text-[#93ABB8] leading-relaxed">
                  The attendant’s tablet only needs to be near the vessel while moored at the pontoon to transmit the authorisation code. Once authorised, the boat’s internal microcontroller maintains the run state independently.
                </p>
              </div>

              {/* Critical Safety Mandate Box (Strict Requirement) */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-amber-950/40 via-[#151C24] to-[#151C24] border-2 border-amber-500/50 space-y-2">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <span>Foundational Marine Safety Mandate</span>
                </div>
                <p className="text-sm text-white font-medium leading-relaxed">
                  “A phone disconnection or the end of a booking must not stop the motor while the boat is underway.”
                </p>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Unexpected power loss in marine environments can leave a vessel in tidal drift or channel traffic. The onboard motor controller ignores app drops, flat phone batteries, or distance timeouts while afloat.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB B: SOLAR-ASSISTED ELECTRIC POWER (PRECISION ANIMATED SVG) */}
        {activeTab === 'solar' && (
          <div className="bg-[#071B2C] rounded-2xl border border-slate-200 text-white p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#55E5D1]">
                  Energy Generation & Propulsion
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] mt-1">
                  Solar-Assisted Electric Power Flow
                </h3>
              </div>
              <span className="text-xs text-[#93ABB8]">
                Strict fidelity: Exactly two low flat horizontal panels
              </span>
            </div>

            {/* Precision SVG Circuit with Animated Flow Dots */}
            <div className="bg-[#051422] rounded-2xl p-6 border border-white/10 overflow-hidden relative">
              <svg viewBox="0 0 880 340" className="w-full h-auto select-none" fill="none">
                
                {/* Circuit Wiring Paths */}
                {/* Panel 1 (Port) to MPPT */}
                <path d="M160 110 L280 110 L280 170 L340 170" stroke="#38BDF8" strokeWidth={2.5} strokeDasharray="6 4" className="circuit-line" />
                {/* Panel 2 (Starboard) to MPPT */}
                <path d="M160 230 L280 230 L280 170 L340 170" stroke="#38BDF8" strokeWidth={2.5} strokeDasharray="6 4" className="circuit-line" />
                
                {/* MPPT to Concealed Battery */}
                <path d="M470 170 L540 170" stroke="#55E5D1" strokeWidth={3} strokeDasharray="8 4" />
                
                {/* Battery to Electric Motor */}
                <path d="M660 170 L730 170" stroke="#22C55E" strokeWidth={3.5} />

                {/* Animated Pulsing Energy Dots along wires */}
                <circle cx="280" cy="140" r="4" fill="#38BDF8">
                  <animate attributeName="cy" values="110;170" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="280" cy="200" r="4" fill="#38BDF8">
                  <animate attributeName="cy" values="230;170" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="505" cy="170" r="4.5" fill="#55E5D1">
                  <animate attributeName="cx" values="470;540" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="695" cy="170" r="5" fill="#22C55E">
                  <animate attributeName="cx" values="660;730" dur="1.2s" repeatCount="indefinite" />
                </circle>

                {/* BLOCK 1: TWO LOW SOLAR WINGS */}
                {/* Wing 1 */}
                <g transform="translate(40, 70)">
                  <rect width="120" height="70" rx="6" fill="#151C24" stroke="#38BDF8" strokeWidth={2} />
                  <rect x="8" y="8" width="104" height="54" rx="3" fill="#071B2C" />
                  {/* Grid */}
                  <line x1="42" y1="8" x2="42" y2="62" stroke="#38BDF8" strokeWidth={0.75} />
                  <line x1="78" y1="8" x2="78" y2="62" stroke="#38BDF8" strokeWidth={0.75} />
                  <line x1="8" y1="35" x2="112" y2="35" stroke="#38BDF8" strokeWidth={0.75} />
                  <text x="18" y="78" fill="#38BDF8" fontSize="11" fontWeight="bold">Panel 1 (Port)</text>
                </g>

                {/* Wing 2 */}
                <g transform="translate(40, 190)">
                  <rect width="120" height="70" rx="6" fill="#151C24" stroke="#38BDF8" strokeWidth={2} />
                  <rect x="8" y="8" width="104" height="54" rx="3" fill="#071B2C" />
                  <line x1="42" y1="8" x2="42" y2="62" stroke="#38BDF8" strokeWidth={0.75} />
                  <line x1="78" y1="8" x2="78" y2="62" stroke="#38BDF8" strokeWidth={0.75} />
                  <line x1="8" y1="35" x2="112" y2="35" stroke="#38BDF8" strokeWidth={0.75} />
                  <text x="12" y="78" fill="#38BDF8" fontSize="11" fontWeight="bold">Panel 2 (Starboard)</text>
                </g>

                {/* BLOCK 2: CHARGE CONTROLLER (Bow Bonnet) */}
                <g transform="translate(340, 130)">
                  <rect width="130" height="80" rx="8" fill="#151C24" stroke="#55E5D1" strokeWidth={2} />
                  <text x="16" y="28" fill="#FFFFFF" fontSize="12" fontWeight="bold">MPPT Charge</text>
                  <text x="16" y="44" fill="#FFFFFF" fontSize="12" fontWeight="bold">Controller</text>
                  <text x="16" y="62" fill="#55E5D1" fontSize="10" fontFamily="monospace">Solar Regulation</text>
                </g>

                {/* BLOCK 3: CONCEALED BATTERY (Central Keel) */}
                <g transform="translate(540, 125)">
                  <rect width="120" height="90" rx="8" fill="#0B253D" stroke="#55E5D1" strokeWidth={2.5} />
                  <rect x="10" y="10" width="100" height="70" rx="4" fill="#151C24" />
                  <text x="22" y="34" fill="#55E5D1" fontSize="12" fontWeight="bold">Concealed</text>
                  <text x="22" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold">Battery Pack</text>
                  <text x="22" y="68" fill="#22C55E" fontSize="10" fontFamily="monospace">Primary Store</text>
                </g>

                {/* BLOCK 4: ELECTRIC MOTOR (Protected Stern) */}
                <g transform="translate(730, 130)">
                  <rect width="120" height="80" rx="8" fill="#151C24" stroke="#22C55E" strokeWidth={2} />
                  <text x="16" y="28" fill="#FFFFFF" fontSize="12" fontWeight="bold">Electric Drive</text>
                  <text x="16" y="44" fill="#FFFFFF" fontSize="12" fontWeight="bold">Motor & Shaft</text>
                  <text x="16" y="62" fill="#22C55E" fontSize="10" fontFamily="monospace">Transom Mount</text>
                </g>

              </svg>

              <div className="mt-3 flex items-center justify-between text-xs text-[#93ABB8]">
                <span>Two horizontal PV wings capture daylight</span>
                <span>MPPT conditions charge</span>
                <span>Battery powers electric motor</span>
              </div>
            </div>

            {/* Explanation & Guardrails */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  How Power is Delivered
                </h4>
                <p className="text-sm text-[#93ABB8] leading-relaxed">
                  The battery supplies propulsion power. The two solar panels help replenish energy, with charging dependent on sunlight and operating conditions.
                </p>
                <p className="text-sm text-[#93ABB8] leading-relaxed">
                  Under the Fijian sun, the two flat horizontal panels provide a steady trickle and top-up current into the main battery pack while cruising or waiting at the dock.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#151C24] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-[#55E5D1] uppercase tracking-wider">
                  Honest Energy Expectations
                </h4>
                <ul className="space-y-2 text-xs text-[#CBD5E1]">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#55E5D1] shrink-0 mt-0.5" />
                    <span>Does not claim unlimited continuous self-charging or infinite range.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#55E5D1] shrink-0 mt-0.5" />
                    <span>Solar serves as endurance extension and top-up rather than sole prime mover.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#55E5D1] shrink-0 mt-0.5" />
                    <span>Main propulsion demands are reliably backed by modular battery swaps ashore.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* TAB C: BATTERY SWAPS (INTERACTIVE STEPPED SEQUENCE) */}
        {activeTab === 'battery' && (
          <div className="bg-[#071B2C] rounded-2xl border border-slate-200 text-white p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#55E5D1]">
                  Dockside Fleet Logistics
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] mt-1">
                  Modular Battery Swap Management
                </h3>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleStartSwap}
                  disabled={isSwapping}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                    isSwapping
                      ? 'bg-white/10 text-[#93ABB8] cursor-wait'
                      : 'bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1E88E5] hover:to-[#1565C0] text-white shadow-lg'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSwapping ? 'Swapping In Progress...' : 'Show a Battery Swap'}</span>
                </button>

                <button
                  onClick={handleResetSwap}
                  className="p-2 rounded-xl hover:bg-white/10 text-[#93ABB8] hover:text-white transition-colors"
                  title="Reset Swap Simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepped Visual Animation Stage */}
            <div className="p-6 rounded-2xl bg-[#051422] border border-white/10">
              
              {/* Swap Stage Indicator Bar */}
              <div className="mb-6 flex items-center justify-between text-xs text-[#93ABB8]">
                <span className="font-semibold text-white">
                  Sequence Status:{' '}
                  <span className="text-[#55E5D1]">
                    {swapStage === 0 && 'Ready for Swap Demonstration'}
                    {swapStage === 1 && 'Step 1: Boat Moored & Motor Isolated'}
                    {swapStage === 2 && 'Step 2: Depleted Pack Lifted from Central Hull'}
                    {swapStage === 3 && 'Step 3: Fresh Charged Pack Secured Onboard'}
                    {swapStage === 4 && 'Step 4: Swap Completed · Used Pack On Shore Charger'}
                  </span>
                </span>
                <span className="font-mono text-[11px] text-[#55E5D1]">3-Pack Dock Rotation</span>
              </div>

              {/* 3 Pack Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pack A (Originally Onboard) */}
                <div
                  className={`p-5 rounded-xl border transition-all ${
                    swapStage === 2
                      ? 'border-amber-400 bg-amber-500/10 scale-105 shadow-xl'
                      : swapStage >= 3
                      ? 'border-white/10 bg-[#151C24]'
                      : 'border-[#2196F3] bg-[#151C24]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-white">Pack #A</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        swapStage >= 4 ? 'bg-amber-500/20 text-amber-300' : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {packAStatus.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#93ABB8]">Charge:</span>
                      <span className="font-mono text-white font-bold">{packAStatus.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all duration-500"
                        style={{ width: `${packAStatus.percent}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#93ABB8] mt-3">
                    {swapStage >= 3 ? 'Transferred to shore rack for recharging' : 'In central hull compartment'}
                  </p>
                </div>

                {/* Pack B (Ready ashore, becomes onboard) */}
                <div
                  className={`p-5 rounded-xl border transition-all ${
                    swapStage === 3
                      ? 'border-emerald-400 bg-emerald-500/10 scale-105 shadow-xl'
                      : swapStage >= 4
                      ? 'border-emerald-500 bg-[#151C24]'
                      : 'border-white/10 bg-[#151C24]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-white">Pack #B</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        swapStage >= 4 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-teal-500/20 text-teal-300'
                      }`}
                    >
                      {packBStatus.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#93ABB8]">Charge:</span>
                      <span className="font-mono text-white font-bold">{packBStatus.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 transition-all duration-500"
                        style={{ width: `${packBStatus.percent}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#93ABB8] mt-3">
                    {swapStage >= 3 ? 'Now installed low inside the central keel' : 'Ready on shore dock rack'}
                  </p>
                </div>

                {/* Pack C (Auxiliary ashore charging) */}
                <div className="p-5 rounded-xl border border-white/10 bg-[#151C24]">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-white">Pack #C</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/20 text-blue-300">
                      {packCStatus.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#93ABB8]">Charge:</span>
                      <span className="font-mono text-white font-bold">{packCStatus.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-blue-400"
                        style={{ width: `${packCStatus.percent}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#93ABB8] mt-3">
                    Under standard shore solar & mains charging
                  </p>
                </div>

              </div>

            </div>

            {/* Operational Rules for Battery Handling */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#151C24] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-[#55E5D1] uppercase">One Onboard Pack</span>
                <p className="text-xs text-[#CBD5E1]">
                  Concealed low in the central hull to maintain a low centre of gravity and stability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151C24] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-[#2196F3] uppercase">Two Shore Spares</span>
                <p className="text-xs text-[#CBD5E1]">
                  Managed at the dock station. Ensures boats don’t idle waiting for shoreline charge cables.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151C24] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase">Staff Isolation</span>
                <p className="text-xs text-[#CBD5E1]">
                  Trained attendants isolate the propulsion drive circuit before any pack is handled.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
