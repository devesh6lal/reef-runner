import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, PlayCircle, Eye, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface NavbarProps {
  onStartTour: () => void;
  onOpenVideo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartTour, onOpenVideo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Boat', href: '#section-explorer' },
    { label: 'How It Works', href: '#section-journey' },
    { label: 'Technology', href: '#section-tech' },
    { label: 'Build Plan', href: '#section-build' },
    { label: 'Video', href: '#section-video' },
    { label: 'FAQs', href: '#section-faq' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071B2C]/95 backdrop-blur-md border-b border-[#2196F3]/20 shadow-lg py-3'
          : 'bg-gradient-to-b from-[#071B2C]/90 via-[#071B2C]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Concept Badge */}
          <a
            href="#section-hero"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#55E5D1] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2196F3] to-[#55E5D1] p-0.5 flex items-center justify-center shadow-md shadow-[#2196F3]/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#071B2C] rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#55E5D1] group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
                  Reef<span className="text-[#55E5D1]">Runner</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded-full bg-[#2196F3]/15 text-[#55E5D1] border border-[#2196F3]/30">
                  Concept
                </span>
              </div>
              <p className="text-[11px] text-[#93ABB8] hidden sm:block">Solar-assisted boating · Fiji</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-[#93ABB8] hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenVideo}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-[#55E5D1] bg-[#071B2C] hover:bg-[#2196F3]/10 border border-[#55E5D1]/30 hover:border-[#55E5D1] rounded-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
              title="Watch the full 1m 50s demonstration video"
            >
              <PlayCircle className="w-4 h-4 text-[#55E5D1]" />
              <span>Watch Video</span>
            </button>

            <button
              onClick={onStartTour}
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1E88E5] hover:to-[#1565C0] shadow-md shadow-[#2196F3]/25 rounded-lg transition-all transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#55E5D1]"
            >
              <Eye className="w-4 h-4" />
              <span>Guided Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onStartTour}
              className="px-2.5 py-1 text-xs font-medium text-white bg-[#2196F3] rounded-md sm:hidden"
            >
              Tour
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#93ABB8] hover:text-white hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 bg-[#071B2C]/98 backdrop-blur-xl rounded-2xl p-4 shadow-2xl animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2 text-sm font-medium text-white/90 hover:text-[#55E5D1] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartTour();
                  }}
                  className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-xl flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Take the Guided Tour</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVideo();
                  }}
                  className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#55E5D1] border border-[#55E5D1]/30 rounded-xl flex items-center justify-center space-x-2 hover:bg-white/5"
                >
                  <PlayCircle className="w-4 h-4 text-[#55E5D1]" />
                  <span>Watch Demonstration Video</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
