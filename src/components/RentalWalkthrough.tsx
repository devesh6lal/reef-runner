import React, { useState } from 'react';
import {
  QrCode,
  Smartphone,
  CreditCard,
  LifeBuoy,
  Bluetooth,
  Sailboat,
  Anchor,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Info
} from 'lucide-react';
import { SITE_CONFIG, RentalStep } from '../data/siteConfig';
import { MEDIA_CONFIG } from '../data/mediaConfig';

export const RentalWalkthrough: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  
  // Interactive Booking Demo State
  const [selectedDurationHours, setSelectedDurationHours] = useState<number>(1.0);
  const [customHourlyRate, setCustomHourlyRate] = useState<number>(SITE_CONFIG.pricing.ratePerHour);
  const [demoBookingId, setDemoBookingId] = useState<string>('RR-SUVA-204');
  const [demoConfirmed, setDemoConfirmed] = useState<boolean>(false);

  const steps = SITE_CONFIG.rentalSteps;
  const currentStep = steps[currentStepIndex];

  // Duration options
  const durationOptions = [
    { label: '30 mins', hours: 0.5 },
    { label: '1 hour', hours: 1.0 },
    { label: '1.5 hours', hours: 1.5 },
    { label: '2 hours', hours: 2.0 }
  ];

  const calculatedTotal = (selectedDurationHours * customHourlyRate).toFixed(2);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleResetDemo = () => {
    setCurrentStepIndex(0);
    setSelectedDurationHours(1.0);
    setDemoConfirmed(false);
  };

  return (
    <section
      id="section-journey"
      className="py-20 lg:py-28 bg-[#071B2C] text-white relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2196F3]/15 border border-[#2196F3]/30 text-[#55E5D1] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Customer Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            From scan to shore — how a rental would work.
          </h2>
          <p className="text-base text-[#93ABB8] leading-relaxed">
            A step-by-step walkthrough showing what the customer does, how dock attendants ensure safety, and how the boat is released and returned.
          </p>
        </div>

        {/* 8-Step Interactive Progress Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2">
          <div className="flex items-center justify-between min-w-[700px] sm:min-w-0 px-2">
            {steps.map((step, idx) => {
              const isActive = idx === currentStepIndex;
              const isPast = idx < currentStepIndex;
              return (
                <div key={step.id} className="flex-1 relative flex flex-col items-center group">
                  {/* Step Connector Line */}
                  {idx > 0 && (
                    <div
                      className={`absolute top-4 -left-1/2 w-full h-0.5 transition-colors -z-0 ${
                        isPast || isActive ? 'bg-[#55E5D1]' : 'bg-white/10'
                      }`}
                    />
                  )}

                  {/* Step Number Bubble */}
                  <button
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#55E5D1] ${
                      isActive
                        ? 'bg-[#55E5D1] text-[#071B2C] ring-4 ring-[#55E5D1]/20 scale-110 shadow-lg shadow-[#55E5D1]/30'
                        : isPast
                        ? 'bg-[#2196F3] text-white hover:bg-[#1E88E5]'
                        : 'bg-[#151C24] text-[#93ABB8] border border-white/15 hover:border-white/40 hover:text-white'
                    }`}
                    aria-label={`Jump to Step ${step.stepNumber}: ${step.title}`}
                  >
                    {isPast ? <CheckCircle className="w-4 h-4" /> : step.stepNumber}
                  </button>

                  {/* Step Title Label */}
                  <span
                    className={`text-[11px] font-medium mt-2 text-center max-w-[80px] truncate ${
                      isActive ? 'text-[#55E5D1] font-semibold' : 'text-[#93ABB8]'
                    }`}
                  >
                    {step.title.replace(/Step \d+ — /, '')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Content Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detailed Step Explanation Card (7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#151C24] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              
              {/* Step Subheader & Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-semibold text-[#55E5D1] uppercase tracking-wider">
                  Step {currentStep.stepNumber} of 8
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#2196F3]/10 text-[#2196F3] border border-[#2196F3]/20">
                  {currentStep.tagline}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
                {currentStep.title}
              </h3>

              {/* Structured 3-Way Explanation */}
              <div className="space-y-4">
                {/* 1. What Customer Does */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
                    <Smartphone className="w-3.5 h-3.5 text-[#55E5D1]" />
                    <span>What the customer does</span>
                  </div>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {currentStep.customerAction}
                  </p>
                </div>

                {/* 2. What Attendant / System Does */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
                    <LifeBuoy className="w-3.5 h-3.5 text-[#2196F3]" />
                    <span>What the attendant or proposed system does</span>
                  </div>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {currentStep.systemOrStaffAction}
                  </p>
                </div>

                {/* 3. What Happens Next */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    <span>What happens next</span>
                  </div>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {currentStep.whatHappensNext}
                  </p>
                </div>
              </div>

              {/* Key Takeaway Pill */}
              <div className="flex items-center space-x-2 text-xs text-[#55E5D1] bg-[#55E5D1]/10 px-3.5 py-2 rounded-lg border border-[#55E5D1]/20">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span><strong className="text-white">Design principle:</strong> {currentStep.keyTakeaway}</span>
              </div>

            </div>

            {/* Navigation Controls */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  currentStepIndex === 0
                    ? 'opacity-40 text-slate-500 cursor-not-allowed'
                    : 'text-white bg-white/10 hover:bg-white/20 cursor-pointer'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={handleResetDemo}
                className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs text-[#93ABB8] hover:text-white transition-colors"
                title="Restart walkthrough from Step 1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset demo</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentStepIndex === steps.length - 1}
                className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  currentStepIndex === steps.length - 1
                    ? 'opacity-40 text-slate-500 cursor-not-allowed'
                    : 'text-[#071B2C] bg-[#55E5D1] hover:bg-[#43d1bd] shadow-lg shadow-[#55E5D1]/20 cursor-pointer'
                }`}
              >
                <span>Next step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Step-Specific Visual Simulation (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* STEP 1: Find & Scan with "Try Booking Demo" button */}
            {currentStepIndex === 0 && (
              <div className="bg-[#151C24] rounded-2xl border border-white/10 p-6 shadow-xl space-y-5 text-center">
                <div className="relative mx-auto w-44 h-44 rounded-2xl overflow-hidden border border-white/20 shadow-inner group">
                  <img
                    src={MEDIA_CONFIG.photos.scanAtDock}
                    alt="Scanning QR code on dock bollard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#071B2C]/70 flex flex-col items-center justify-center p-3">
                    <QrCode className="w-16 h-16 text-[#55E5D1] animate-pulse" />
                    <span className="text-[10px] text-white/90 mt-1 font-mono">SCAN BOAT #03</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Dockside QR Code</h4>
                  <p className="text-xs text-[#93ABB8] max-w-sm mx-auto">
                    Mounted on bollards and hull bow. Opens the web rental interface directly without an app store download.
                  </p>
                </div>

                <button
                  onClick={() => setCurrentStepIndex(1)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1E88E5] hover:to-[#1565C0] text-white text-xs font-bold tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-[#2196F3]/30 transition-all cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Try the booking demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* STEP 2: Interactive Mobile Booking Duration Selector */}
            {currentStepIndex === 1 && (
              <div className="bg-[#151C24] rounded-2xl border border-[#2196F3]/40 p-6 shadow-2xl space-y-4">
                {/* Mobile Device Frame Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-white">Mobile Booking Demo</span>
                  </div>
                  <span className="text-[10px] text-[#55E5D1] font-mono">FJ$10/hr Proposed</span>
                </div>

                {/* Boat Card info */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-[#071B2C] border border-[#2196F3]/40 flex items-center justify-center text-[#55E5D1] font-mono text-sm font-bold">
                    #03
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Reef Runner Boat #03</h5>
                    <p className="text-[11px] text-[#93ABB8]">Single-person trimaran · Open cockpit</p>
                  </div>
                </div>

                {/* Duration Selection Buttons */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white block">
                    Select rental duration:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {durationOptions.map((opt) => (
                      <button
                        key={opt.hours}
                        onClick={() => setSelectedDurationHours(opt.hours)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-left flex flex-col justify-between cursor-pointer ${
                          selectedDurationHours === opt.hours
                            ? 'bg-[#2196F3]/25 border-[#55E5D1] text-white shadow-md'
                            : 'bg-white/[0.02] border-white/10 text-[#93ABB8] hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <span className="text-sm font-bold">{opt.label}</span>
                        <span className="text-[11px] text-[#55E5D1] mt-1 font-mono">
                          FJ${(opt.hours * customHourlyRate).toFixed(2)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Cost Calculation Summary */}
                <div className="p-3 rounded-xl bg-[#071B2C] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#93ABB8] block">Proposed tariff:</span>
                    <span className="text-xs text-white">
                      {selectedDurationHours} hr @ FJ${customHourlyRate}/hr
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-[#55E5D1] font-mono">
                      FJ${calculatedTotal}
                    </span>
                  </div>
                </div>

                {/* Required disclaimer */}
                <p className="text-[10px] text-[#93ABB8] leading-tight italic">
                  * Proposed demonstration rate. Rental duration is an illustrative rental time, not a verified battery-endurance claim.
                </p>

                {/* Action button to Step 3 */}
                <button
                  onClick={() => setCurrentStepIndex(2)}
                  className="w-full py-2.5 rounded-xl bg-[#55E5D1] hover:bg-[#43d1bd] text-[#071B2C] text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                >
                  <span>Proceed to confirmation demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* STEP 3: Confirm Payment (Clear sample data & demonstration badge) */}
            {currentStepIndex === 2 && (
              <div className="bg-[#151C24] rounded-2xl border border-white/10 p-6 shadow-2xl space-y-4">
                {/* Demonstration Notice Badge */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Booking demonstration — no payment taken.</strong>
                    <span>No card details are requested and no actual funds are processed.</span>
                  </div>
                </div>

                {/* Sample Booking Confirmation Card */}
                <div className="p-4 rounded-xl bg-[#071B2C] border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#93ABB8]">Reservation:</span>
                    <span className="text-[#55E5D1] font-bold">{demoBookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#93ABB8]">Vessel:</span>
                    <span className="text-white">Reef Runner #03</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#93ABB8]">Duration:</span>
                    <span className="text-white">{selectedDurationHours} hour ({selectedDurationHours * 60} mins)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#93ABB8]">Simulated Total:</span>
                    <span className="text-[#55E5D1] font-bold">FJ${calculatedTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#93ABB8]">Attendant Station:</span>
                    <span className="text-white">Suva Waterfront Pontoon A</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setDemoConfirmed(true);
                    setCurrentStepIndex(3);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-teal-500/20"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Confirm demo booking & meet attendant</span>
                </button>
              </div>
            )}

            {/* STEP 4: Prepare with Attendant Checklist */}
            {currentStepIndex === 3 && (
              <div className="bg-[#151C24] rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2196F3]/20 border border-[#2196F3]/40 flex items-center justify-center text-[#55E5D1]">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Attendant Safety Check</h4>
                    <p className="text-xs text-[#93ABB8]">Staffed dockside briefing before boarding</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center space-x-2 text-[#CBD5E1]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Approved PFD life jacket fitted & fastened</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center space-x-2 text-[#CBD5E1]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Emergency backup paddle verified in cockpit</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center space-x-2 text-[#CBD5E1]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Steering tiller & twist throttle explained</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center space-x-2 text-[#CBD5E1]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Calm sheltered operating boundary visualised</span>
                  </div>
                </div>

                <img
                  src={MEDIA_CONFIG.photos.lifejacketFitting}
                  alt="Attendant fitting lifejacket on dock"
                  className="w-full h-32 rounded-xl object-cover border border-white/10"
                />
              </div>
            )}

            {/* STEP 5: Authorise & Release Graphic */}
            {currentStepIndex === 4 && (
              <div className="bg-[#151C24] rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#55E5D1] uppercase tracking-wider">
                  <Bluetooth className="w-4 h-4" />
                  <span>Two Distinct Actions at Dock</span>
                </div>

                {/* Action 1: Electronic */}
                <div className="p-3.5 rounded-xl bg-[#071B2C] border border-[#2196F3]/40 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>1. Electronic Authorisation</span>
                    <span className="text-[#55E5D1] font-mono text-[10px]">Short-Range Bluetooth</span>
                  </div>
                  <p className="text-[11px] text-[#93ABB8]">
                    Attendant's device sends encrypted digital unlock to boat’s bow controller.
                  </p>
                </div>

                {/* Action 2: Physical */}
                <div className="p-3.5 rounded-xl bg-[#071B2C] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>2. Physical Mooring Release</span>
                    <span className="text-[#93ABB8] font-mono text-[10px]">Dockside Attendant</span>
                  </div>
                  <p className="text-[11px] text-[#93ABB8]">
                    Attendant unties bow and stern lines and gently guides the boat into clear water.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-[#2196F3]/10 border border-[#2196F3]/30 text-[11px] text-[#55E5D1]">
                  Separation of electronic unlock and physical release ensures deliberate, controlled departures.
                </div>
              </div>
            )}

            {/* STEP 6: Enjoy the Ride + Sheltered Operating Area Graphic */}
            {currentStepIndex === 5 && (
              <div className="bg-[#151C24] rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Sheltered Operating Area
                  </span>
                  <span className="text-[10px] text-[#55E5D1] font-mono">Concept Boundary Map</span>
                </div>

                {/* SVG Visual schematic of sheltered bay perimeter */}
                <div className="w-full bg-[#071B2C] rounded-xl p-3 border border-white/10">
                  <svg viewBox="0 0 320 180" className="w-full h-auto" fill="none">
                    {/* Coastline */}
                    <path d="M0 40 Q80 20 160 50 T320 30 L320 0 L0 0 Z" fill="#1E293B" opacity="0.6" />
                    <text x="10" y="25" fill="#93ABB8" fontSize="9">Coastline / Suva Foreshore</text>
                    
                    {/* Water Area */}
                    <rect x="0" y="45" width="320" height="135" fill="#0A2540" opacity="0.3" />

                    {/* Sheltered Perimeter Boundary (Dashed) */}
                    <polygon points="40,65 280,65 295,155 30,155" stroke="#55E5D1" strokeWidth="1.5" strokeDasharray="4 4" fill="#55E5D1" fillOpacity="0.05" />
                    <text x="70" y="80" fill="#55E5D1" fontSize="9" fontWeight="bold">Designated Sheltered Zone</text>

                    {/* Marker Buoys */}
                    <circle cx="40" cy="65" r="3" fill="#F59E0B" />
                    <circle cx="280" cy="65" r="3" fill="#F59E0B" />
                    <circle cx="295" cy="155" r="3" fill="#F59E0B" />
                    <circle cx="30" cy="155" r="3" fill="#F59E0B" />

                    {/* Dock Pontoon */}
                    <rect x="140" y="45" width="40" height="15" fill="#94A3B8" />
                    <text x="145" y="55" fill="#071B2C" fontSize="8" fontWeight="bold">DOCK</text>

                    {/* Boat underway */}
                    <g transform="translate(180, 110)">
                      <polygon points="0,0 12,4 0,8 3,4" fill="#2196F3" />
                      <circle cx="5" cy="4" r="8" stroke="#55E5D1" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="16" y="7" fill="#FFFFFF" fontSize="8">Solo Rider (Manual Tiller)</text>
                    </g>
                  </svg>
                </div>

                <p className="text-[11px] text-[#93ABB8] leading-relaxed">
                  * Visual schematic for demonstration. The rider manually steers and throttles the boat within clear marker buoys in sheltered water. Not a live tracking map or autonomous navigation.
                </p>
              </div>
            )}

            {/* STEP 7: Return to the dock */}
            {currentStepIndex === 6 && (
              <div className="bg-[#151C24] rounded-2xl border border-white/10 p-6 shadow-xl space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#55E5D1]/10 border border-[#55E5D1]/30 flex items-center justify-center mx-auto text-[#55E5D1]">
                  <Anchor className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Dockside Return Assistance</h4>
                <p className="text-xs text-[#CBD5E1] max-w-sm mx-auto leading-relaxed">
                  The rider returns to the designated pontoon. The attendant catches mooring lines, ensures boat is secure against fenders, and assists the rider ashore.
                </p>
                <div className="p-3 rounded-xl bg-[#071B2C] border border-white/10 text-xs text-[#55E5D1]">
                  Motor circuit is immediately isolated before disembarkation.
                </div>
              </div>
            )}

            {/* STEP 8: Inspect and finish */}
            {currentStepIndex === 7 && (
              <div className="bg-[#151C24] rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Checkout & Rotation Complete</h4>
                    <p className="text-xs text-[#93ABB8]">Vessel inspected & prepared for next rider</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#071B2C] border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-white">
                    <span>Hull & paddle check:</span>
                    <span className="text-emerald-400">Inspected / Cleared</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Lifejacket status:</span>
                    <span className="text-emerald-400">Sanitised & Racked</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Battery status:</span>
                    <span className="text-[#55E5D1]">Swap to Ready pack (98%)</span>
                  </div>
                </div>

                <button
                  onClick={handleResetDemo}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start walkthrough again</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
