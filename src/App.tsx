import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoTour } from './components/VideoTour';
import { BoatExplorer } from './components/BoatExplorer';
import { RentalWalkthrough } from './components/RentalWalkthrough';
import { TechnologyVisuals } from './components/TechnologyVisuals';
import { BenefitsForFiji } from './components/BenefitsForFiji';
import { BuildJourney } from './components/BuildJourney';
import { LocationAndFaq } from './components/LocationAndFaq';
import { GuidedTourController } from './components/GuidedTourController';
import { Footer } from './components/Footer';
import { SITE_CONFIG } from './data/siteConfig';

export default function App() {
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [currentTourIndex, setCurrentTourIndex] = useState<number>(0);

  const tourSteps = SITE_CONFIG.tourSteps;

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartTour = () => {
    setIsTourActive(true);
    setCurrentTourIndex(0);
    scrollToSection(tourSteps[0].elementId);
  };

  const handleNextTourStep = () => {
    if (currentTourIndex < tourSteps.length - 1) {
      const nextIndex = currentTourIndex + 1;
      setCurrentTourIndex(nextIndex);
      scrollToSection(tourSteps[nextIndex].elementId);
    } else {
      setIsTourActive(false);
    }
  };

  const handlePrevTourStep = () => {
    if (currentTourIndex > 0) {
      const prevIndex = currentTourIndex - 1;
      setCurrentTourIndex(prevIndex);
      scrollToSection(tourSteps[prevIndex].elementId);
    }
  };

  const handleJumpToTourStep = (index: number) => {
    if (index >= 0 && index < tourSteps.length) {
      setCurrentTourIndex(index);
      scrollToSection(tourSteps[index].elementId);
    }
  };

  const handleCloseTour = () => {
    setIsTourActive(false);
  };

  const handleWatchVideo = () => {
    scrollToSection('section-video');
  };

  const handleExploreBoat = () => {
    scrollToSection('section-explorer');
  };

  return (
    <div className="min-h-screen bg-[#071B2C] text-[#151C24] font-['Plus_Jakarta_Sans'] selection:bg-[#2196F3] selection:text-white">
      {/* Pinned Navigation Bar */}
      <Navbar onStartTour={handleStartTour} onOpenVideo={handleWatchVideo} />

      <main id="main-content">
        {/* 1. Meet Reef Runner */}
        <Hero
          onStartTour={handleStartTour}
          onWatchVideo={handleWatchVideo}
          onExploreBoat={handleExploreBoat}
        />

        {/* 2. Watch the demonstration video */}
        <VideoTour />

        {/* 3. Explore the boat */}
        <BoatExplorer />

        {/* 4. Follow the customer journey */}
        <RentalWalkthrough />

        {/* 5. Understand the technology */}
        <TechnologyVisuals />

        {/* 6. See the benefits for Fiji */}
        <BenefitsForFiji />

        {/* 7. Explore the proposed build process */}
        <BuildJourney />

        {/* 8. Learn about the proposed pilot and read common questions */}
        <LocationAndFaq />
      </main>

      {/* Guided Tour Floating Controller */}
      <GuidedTourController
        isActive={isTourActive}
        currentStepIndex={currentTourIndex}
        onNext={handleNextTourStep}
        onPrev={handlePrevTourStep}
        onClose={handleCloseTour}
        onJumpToStep={handleJumpToTourStep}
      />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
