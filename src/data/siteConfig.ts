// Site Configuration and Content for Reef Runner
// Australian English spelling and clear, factual phrasing throughout.

export interface BoatHotspot {
  id: string;
  name: string;
  shortDescription: string;
  detailedExplanation: string;
  xPercent: number; // For desktop image hotspot positioning
  yPercent: number;
  highlightTag: string;
}

export interface RentalStep {
  stepNumber: number;
  id: string;
  title: string;
  tagline: string;
  customerAction: string;
  systemOrStaffAction: string;
  whatHappensNext: string;
  keyTakeaway: string;
  imageKey?: 'scan' | 'fitting' | 'sheltered';
}

export interface BuildStage {
  stageNumber: number;
  title: string;
  summary: string;
  details: string[];
  keyDeliverable: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'boat' | 'rental' | 'technology' | 'project';
}

export const SITE_CONFIG = {
  meta: {
    title: 'Reef Runner',
    subtitle: 'A solar-assisted boating concept designed for Fiji.',
    leadIntro:
      'A compact electric trimaran with low solar wings, an open cockpit and a proposed staffed rental experience — from scanning a QR code to returning safely to the dock.',
    conceptBadge: 'Proposed concept for consultation & grant assessment',
    locationShort: 'Proposed for sheltered waters near Suva, Fiji'
  },

  pricing: {
    currencyCode: 'FJD',
    currencySymbol: 'FJ$',
    ratePerHour: 10,
    rateLabel: 'FJ$10 per hour (Proposed rate)',
    disclaimer:
      'Proposed demonstration tariff. Rental duration is an illustrative rental time, not a verified battery-endurance claim.'
  },

  highlights: [
    {
      title: 'One-person electric boat',
      description: 'Compact 3.4 m trimaran designed for a single seated rider on calm water.'
    },
    {
      title: 'Two low solar wings',
      description: 'Flat, horizontal photovoltaic wings that capture tropical daylight while keeping the cockpit completely open above.'
    },
    {
      title: 'Staff-assisted rentals',
      description: 'A dockside model with trained attendants handling briefing, Bluetooth unlock and physical mooring release.'
    }
  ],

  // Tour storytelling sequence
  tourSteps: [
    { id: 'hero', label: '1. Meet Reef Runner', elementId: 'section-hero' },
    { id: 'video', label: '2. Video Explainer', elementId: 'section-video' },
    { id: 'explorer', label: '3. Explore the Boat', elementId: 'section-explorer' },
    { id: 'journey', label: '4. Customer Journey', elementId: 'section-journey' },
    { id: 'tech', label: '5. Technology Visuals', elementId: 'section-tech' },
    { id: 'benefits', label: '6. Benefits for Fiji', elementId: 'section-benefits' },
    { id: 'build', label: '7. Build Process', elementId: 'section-build' },
    { id: 'location-faq', label: '8. Suva Pilot & FAQs', elementId: 'section-faq' }
  ],

  // 7 Boat Hotspots matching exact design specifications
  boatHotspots: [
    {
      id: 'central-hull',
      name: 'Central hull',
      shortDescription: 'The main body contains the cockpit and concealed service compartments.',
      detailedExplanation:
        'The primary central hull is approximately 3.4 metres in length, shaped for clean hydrodynamic displacement through sheltered waters. It houses the rider, steering linkage, bow electronics and the concealed central battery compartment low along the waterline for optimal balance.',
      xPercent: 54,
      yPercent: 78,
      highlightTag: 'Main Displacement Body'
    },
    {
      id: 'cockpit-seat',
      name: 'Low cockpit and seat',
      shortDescription: 'The rider sits low in a padded seat and uses controls within easy reach.',
      detailedExplanation:
        'An ergonomic padded bucket seat is set deep inside the open cockpit. Positioning the rider low reduces the centre of gravity and shields them from spray, while the open space above ensures an unobstructed 360-degree view of the Fijian reef environment.',
      xPercent: 46,
      yPercent: 53,
      highlightTag: 'Ergonomic Open Cockpit'
    },
    {
      id: 'outriggers',
      name: 'Two smaller outriggers',
      shortDescription: 'The side hulls form the trimaran layout and are intended to support stability.',
      detailedExplanation:
        'Two streamlined, lower-profile outriggers are mounted on rigid wing struts on either side of the central hull. This trimaran architecture delivers buoyant stability against lateral rolling in harbour chop, without the drag of a wide monohull.',
      xPercent: 12,
      yPercent: 75,
      highlightTag: 'Trimaran Balance & Safety'
    },
    {
      id: 'solar-wings',
      name: 'Horizontal solar wings',
      shortDescription: 'Two low panels collect solar energy while leaving the cockpit open.',
      detailedExplanation:
        'Exactly two black monocrystalline photovoltaic panels are mounted flat and horizontal across the low outrigger support structures. They project sideways from the boat, harvesting direct tropical sun while preserving total headroom and clear sightlines overhead.',
      xPercent: 21,
      yPercent: 61,
      highlightTag: 'Twin Horizontal PV Arrays'
    },
    {
      id: 'concealed-battery',
      name: 'Concealed battery',
      shortDescription: 'A removable battery sits low inside the central hull, protected within a serviceable compartment.',
      detailedExplanation:
        'The main propulsion battery pack is secured in an internal, watertight hatch compartment beneath the cockpit floor. It is mounted low along the centreline to aid stability, with heavy-duty marine quick-connectors that enable rapid, safe staff swaps at the dock.',
      xPercent: 50,
      yPercent: 64,
      highlightTag: 'Quick-Swap Marine Pack'
    },
    {
      id: 'front-electronics',
      name: 'Front electronics housing',
      shortDescription: 'A compact bonnet provides space for the proposed control and electrical equipment.',
      detailedExplanation:
        'A sleek, low-profile bonnet forward of the cockpit seals and protects the solar charge controller, 12V/24V busbars, fuse array, and the Bluetooth telemetry module. A service hatch allows rapid dockside diagnostics by trained technical staff.',
      xPercent: 74,
      yPercent: 72,
      highlightTag: 'Waterproof Service Bonnet'
    },
    {
      id: 'rear-motor',
      name: 'Protected rear motor area',
      shortDescription: 'The stern arrangement is intended to protect the motor installation while allowing maintenance access.',
      detailedExplanation:
        'A recessed transom shroud protects the compact electric motor and shaft drive from accidental dock contact and shallow submerged obstacles, while preserving clean cooling waterflow and straightforward inspection access for technicians.',
      xPercent: 30,
      yPercent: 49,
      highlightTag: 'Shielded Electric Transom'
    }
  ],

  // 8 Customer Journey Steps
  rentalSteps: [
    {
      stepNumber: 1,
      id: 'find-and-scan',
      title: 'Step 1 — Find and scan',
      tagline: 'Instant mobile connection at the staffed dock bollard.',
      customerAction:
        'The customer approaches a moored Reef Runner at the staffed waterfront pontoon and scans the high-contrast QR code on the boat or dock post with their phone camera.',
      systemOrStaffAction:
        'The QR code opens the lightweight Reef Runner web app in the customer’s mobile browser, instantly identifying the specific boat ID and showing its readiness state.',
      whatHappensNext:
        'The customer reviews rental terms, checks available time slots, and moves directly to duration selection.',
      keyTakeaway: 'No app download required — instant web-based mobile onboarding.',
      imageKey: 'scan'
    },
    {
      stepNumber: 2,
      id: 'choose-rental',
      title: 'Step 2 — Choose the rental',
      tagline: 'Simple time-based selection at FJ$10 per hour.',
      customerAction:
        'The rider selects their desired hire duration (e.g., 30 minutes, 1 hour, or 2 hours) on the mobile booking screen.',
      systemOrStaffAction:
        'The system calculates the proposed hire total in Fijian Dollars (FJ$10/hr) and confirms the assigned operating zone and return window.',
      whatHappensNext:
        'The rider acknowledges safety guidelines and confirms their sample reservation.',
      keyTakeaway: 'Transparent, accessible hourly rate designed for local waters.',
      imageKey: 'scan'
    },
    {
      stepNumber: 3,
      id: 'confirm-payment',
      title: 'Step 3 — Confirm payment',
      tagline: 'Clear booking verification with sample data.',
      customerAction:
        'The customer reviews the booking summary and taps "Confirm Rental Demo" on their screen.',
      systemOrStaffAction:
        'The system generates a verified booking token (e.g. #RR-FJI-204) and automatically notifies the dockside attendant’s handheld tablet.',
      whatHappensNext:
        'The screen confirms the reservation and prompts the customer to step to the attendant briefing station.',
      keyTakeaway: 'Demonstration simulation — no real card details or funds are taken.',
      imageKey: 'scan'
    },
    {
      stepNumber: 4,
      id: 'prepare-attendant',
      title: 'Step 4 — Prepare with the attendant',
      tagline: 'Personal safety briefing and equipment fitting.',
      customerAction:
        'The customer meets the trained local attendant on the pontoon for a brief, friendly orientation.',
      systemOrStaffAction:
        'The attendant properly fits and secures an approved life jacket, shows the stowage of the backup emergency paddle inside the cockpit, explains the intuitive twist-throttle and tiller steering, and points out the boundary markers for the sheltered operating zone.',
      whatHappensNext:
        'Once the customer feels confident and ready, the attendant assists them into the low bucket seat.',
      keyTakeaway: 'Every departure is guided by a trained local attendant.',
      imageKey: 'fitting'
    },
    {
      stepNumber: 5,
      id: 'authorise-release',
      title: 'Step 5 — Authorise and release',
      tagline: 'Short-range Bluetooth authorisation followed by physical mooring release.',
      customerAction:
        'The rider gets comfortable in the cockpit and places their hands on the controls.',
      systemOrStaffAction:
        'First, the attendant taps "Authorise Boat" on their tablet, transmitting an encrypted short-range Bluetooth command that arms the boat’s motor controller. Second, the attendant unties the physical mooring lines, checks clear water, and smoothly guides the bow away from the pontoon.',
      whatHappensNext:
        'The rider gently opens the throttle and cruises smoothly out into the bay.',
      keyTakeaway: 'Electronic motor unlock and physical line release remain distinct, supervised steps.',
      imageKey: 'fitting'
    },
    {
      stepNumber: 6,
      id: 'enjoy-ride',
      title: 'Step 6 — Enjoy the ride',
      tagline: 'Quiet, zero-emission exploration in calm sheltered water.',
      customerAction:
        'The single rider navigates the boat across the marked sheltered bay, enjoying whisper-quiet electric propulsion and an open view of Fiji’s coastline.',
      systemOrStaffAction:
        'The boat’s internal controller runs the electric drive directly from the onboard battery, while the two horizontal solar wings capture ambient daylight. The attendant maintains visual line-of-sight from the shore dock.',
      whatHappensNext:
        'As the hire window approaches its end, the rider circles back towards the designated dock.',
      keyTakeaway: 'Full manual control: rider steers and throttles with zero automatic intervention.',
      imageKey: 'sheltered'
    },
    {
      stepNumber: 7,
      id: 'return-dock',
      title: 'Step 7 — Return to the dock',
      tagline: 'Effortless return to the designated mooring pontoon.',
      customerAction:
        'The rider throttles down into neutral and glides gently alongside the designated return pontoon.',
      systemOrStaffAction:
        'The attendant catches the bow line, secures the mooring cleats, and assists the rider safely up onto the dock.',
      whatHappensNext:
        'The attendant isolates the boat’s propulsion circuit to ensure safe disembarkation.',
      keyTakeaway: 'Attendant assistance ensures calm, controlled arrivals.',
      imageKey: 'fitting'
    },
    {
      stepNumber: 8,
      id: 'inspect-finish',
      title: 'Step 8 — Inspect and finish',
      tagline: 'Thorough checkout, hull check, and rapid pack rotation.',
      customerAction:
        'The customer returns their life jacket to the rack and receives a digital receipt summary on their phone.',
      systemOrStaffAction:
        'Staff inspect the life jacket, check the emergency paddle and hull exterior, close the booking in the system, and assess the battery charge. If needed, staff perform a quick 60-second battery pack swap for the next guest.',
      whatHappensNext:
        'The boat is clean, powered, and ready for the next reservation.',
      keyTakeaway: 'Disciplined turnaround keeps the fleet reliable and safe.',
      imageKey: 'scan'
    }
  ],

  // 4 Stories for Fiji
  benefits: [
    {
      id: 'residents',
      category: 'For residents',
      title: 'Affordable, clean water recreation',
      summary:
        'An approachable way to enjoy a short outing on suitable sheltered water without the noise, fumes, or high fuel costs of petrol outboards.',
      bullets: [
        'Accessible proposed hourly rate (FJ$10) tailored for local community outings.',
        'Zero petrol smell or exhaust fumes along local recreation foreshores.',
        'Whisper-quiet electric drive preserves the peaceful coastal ambience.'
      ]
    },
    {
      id: 'visitors',
      category: 'For visitors',
      title: 'A distinctive waterfront experience',
      summary:
        'A modern, eco-conscious marine attraction that showcases Fiji’s natural lagoon beauty while upholding rigorous dockside hospitality.',
      bullets: [
        'Memorable single-person experience with unobstructed 360° water views.',
        'Friendly orientation and safety care provided by trained Fijian staff.',
        'Demonstrates sustainable tourism innovation in the South Pacific.'
      ]
    },
    {
      id: 'fishing',
      category: 'For fishing communities',
      title: 'Potential future small-craft applications',
      summary:
        'Potential future applications for a compact electric platform, subject to further design work, seaworthiness testing and community consultation.',
      bullets: [
        'Investigation into low-cost electric propulsion for near-shore artisanal tasks.',
        'Reduction in recurring fuel dependency for short sheltered-water trips.',
        'Shared learnings in modular lithium pack management in humid maritime climates.'
      ]
    },
    {
      id: 'skills',
      category: 'For local skills & enterprise',
      title: 'Green maritime fabrication & operations',
      summary:
        'Potential opportunities in fibreglass fabrication, composite mould maintenance, battery handling, and digital rental operations.',
      bullets: [
        'Local assembly and composite repair skills developed in Fijian workshops.',
        'Hands-on technical training in marine low-voltage DC electrics and safety.',
        'Hospitality, dock management and customer-facing supervisory employment.'
      ]
    }
  ],

  // 6 Build Process Stages
  buildStages: [
    {
      stageNumber: 1,
      title: 'Design refinement & engineering review',
      summary: 'Refining the hull lines, trimaran hydrostatics, and electrical schematics with certified naval architects.',
      details: [
        'Validate hull displacement and trim stability across varying rider weights (60 kg – 110 kg).',
        'Finalise composite structural layup schedules and low-profile solar wing strut mountings.',
        'Specify marine-grade IP67 wiring enclosures, circuit breakers, and battery containment.'
      ],
      keyDeliverable: 'Comprehensive engineering drawing package & buoyancy calculations'
    },
    {
      stageNumber: 2,
      title: 'Mould development & prototype tooling',
      summary: 'Precision CNC plug cutting and multi-piece female mould construction for composite hull production.',
      details: [
        'Construct precision plugs for the central monohull, twin outrigger floats, and bow bonnet.',
        'Fabricate reinforced composite moulds designed for repeatable workshop production.',
        'Create bespoke jigs for mounting the horizontal photovoltaic wing assemblies.'
      ],
      keyDeliverable: 'Master production tooling & structural alignment jigs'
    },
    {
      stageNumber: 3,
      title: 'Fibreglass hull & outrigger fabrication',
      summary: 'Laminating the primary central hull and twin stabilising floats using marine-grade composite resins.',
      details: [
        'Vacuum-consolidated glassfibre layup for high strength-to-weight ratio.',
        'Apply UV-resistant matte charcoal gelcoat with electric-blue accent inlays.',
        'Integrate sealed reserve buoyancy chambers inside outriggers and hull extremities.'
      ],
      keyDeliverable: 'Finished lightweight composite trimaran structure'
    },
    {
      stageNumber: 4,
      title: 'Structural fitout & service compartments',
      summary: 'Installing structural bulkheads, access hatches, steering linkages, and low seating.',
      details: [
        'Fit the watertight sub-floor battery compartment with quick-release retaining latches.',
        'Install forward electronics bonnet with waterproof rubber gasket seals.',
        'Mount ergonomic padded low bucket seat, foot braces, and mechanical tiller linkages.'
      ],
      keyDeliverable: 'Fully fitted structural boat ready for drivetrain installation'
    },
    {
      stageNumber: 5,
      title: 'Powertrain, solar & control integration',
      summary: 'Wiring the electric motor, two horizontal solar wings, charge controller, and Bluetooth telemetry.',
      details: [
        'Mount protected long-shaft electric motor assembly in the recessed transom area.',
        'Install twin flat monocrystalline solar panels with marine bypass diodes and MPPT controller.',
        'Integrate dockside Bluetooth authorisation module, master isolation switch, and fuse block.'
      ],
      keyDeliverable: 'Electrically complete, integrated prototype craft'
    },
    {
      stageNumber: 6,
      title: 'Controlled testing, seaworthiness & pilot',
      summary: 'Rigorous harbour testing, stability trials, emergency procedures, and staffed operational pilot.',
      details: [
        'Perform static roll stability and reserve buoyancy swamping tests in calm lagoon waters.',
        'Validate continuous motor isolation, fail-safe disconnect behaviour, and solar top-up rates.',
        'Conduct staffed trial operations with local attendants to refine the customer booking flow.'
      ],
      keyDeliverable: 'Seaworthy certified prototype & validated operational playbook'
    }
  ],

  // Accordion FAQs covering all required prompt questions
  faqs: [
    {
      question: 'What is Reef Runner?',
      answer:
        'Reef Runner is a proposed solar-assisted electric boating concept designed specifically for calm, sheltered waters in Fiji. It is a compact single-person trimaran featuring two low horizontal solar wings, an open cockpit, and a staffed dockside rental model that combines digital QR reservations with friendly, in-person safety supervision.',
      category: 'boat'
    },
    {
      question: 'How many people would each boat carry?',
      answer:
        'Each boat is strictly designed for one single adult rider. The low seated position, compact hull length (approximately 3.4 metres), and balanced trimaran layout are tailored specifically for solo exploration, ensuring exceptional stability, light displacement, and effortless manoeuvrability.',
      category: 'boat'
    },
    {
      question: 'Where are the solar panels mounted?',
      answer:
        'The boat features exactly two black rectangular photovoltaic panels. They are mounted flat and horizontal on low side-wing structures that project outward from the central hull across to the outriggers. This deliberate arrangement leaves the space directly above the rider completely open, preserving panoramic lagoon views and avoiding top-heavy canopy drag.',
      category: 'boat'
    },
    {
      question: 'Does solar power run the motor directly?',
      answer:
        'No. The electric motor draws its continuous propulsion power directly from the concealed marine battery pack. The two horizontal solar wings supply supplementary charge to the battery via an onboard charge controller, helping replenish energy while the boat is in daylight. Charging is always dependent on sunlight intensity and operating conditions, and the boat does not claim unlimited self-charging endurance.',
      category: 'technology'
    },
    {
      question: 'Why are the batteries removable?',
      answer:
        'Removable batteries enable a quick-turnaround dockside rotation. Instead of taking boats out of service for hours while waiting for slow shoreline recharging, staff can safely swap a depleted internal pack for a ready, fully charged pack in under two minutes. Used packs are recharged at a managed shore station with dedicated solar and mains power.',
      category: 'technology'
    },
    {
      question: 'What does Bluetooth do at the dock?',
      answer:
        'Bluetooth provides a secure, short-range wireless communication link between the dock attendant’s handheld device and the boat’s motor controller. When a booking is verified, the attendant uses Bluetooth to transmit an authorisation command that unlocks the motor controller. Once authorised, the boat operates via its own onboard throttle and steering.',
      category: 'technology'
    },
    {
      question: 'What happens if the customer’s phone disconnects while underway?',
      answer:
        'Crucially, a phone disconnection or the expiration of a rental timer does not shut off the motor while the boat is underway on the water. The boat’s onboard motor controller operates independently once unlocked at the dock. This is a foundational marine safety principle: unexpected power loss on the water must never occur due to mobile signal loss, a flat phone battery, or an app glitch.',
      category: 'technology'
    },
    {
      question: 'Will an attendant be present at the dock?',
      answer:
        'Yes. Reef Runner is proposed as a staff-assisted service. Trained local attendants welcome riders, check life jacket fitment, verify safety equipment (including the onboard emergency paddle), conduct the operational briefing, authorise the boat, and handle the physical mooring lines at both departure and return.',
      category: 'rental'
    },
    {
      question: 'Is the Reef Runner service operating yet?',
      answer:
        'No. Reef Runner is currently a proposed concept presented for stakeholder consultation, engineering evaluation, community discussion, and grant assessment. The specifications, rates, and imagery represent design intentions for a future controlled pilot in suitable sheltered waters near Suva, subject to regulatory permits and testing.',
      category: 'project'
    }
  ]
};
