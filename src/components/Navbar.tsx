import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { CURRENCIES, CurrencyConfig } from '../data/travelData';

interface NavbarProps {
  currentCurrency: CurrencyConfig;
  onCurrencyChange: (currency: CurrencyConfig) => void;
  onOpenBooking: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Itineraries', href: '#itineraries' },
    { label: 'Surfing', href: '#attraction-surfing' },
    { label: 'Yala Safari', href: '#attraction-yala' },
    { label: 'Heritage', href: '#attraction-cultural' },
    { label: 'Route Map', href: '#route-map' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e5dec9]/60 shadow-xs py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className={`font-serif text-xl sm:text-2xl font-bold tracking-wider transition-colors ${
              isScrolled ? 'text-[#164e3f]' : 'text-white'
            }`}
          >
            CEYLON HORIZONS
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors whitespace-nowrap hover:text-[#c4683c] ${
                  isScrolled ? 'text-[#2a3832]' : 'text-[#f5efe6] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold tracking-wider transition-colors ${
                  isScrolled
                    ? 'text-[#2a3832] hover:bg-[#eae4d5]'
                    : 'text-white/90 hover:bg-white/10'
                }`}
                title="Change display currency"
                aria-label="Select currency"
              >
                <Globe className="w-3.5 h-3.5 opacity-80" />
                <span>{currentCurrency.code}</span>
                <span className="opacity-60 text-[10px]">▼</span>
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-[#e5dec9] py-1 z-50">
                  {Object.values(CURRENCIES).map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        onCurrencyChange(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between transition-colors ${
                        currentCurrency.code === curr.code
                          ? 'bg-[#164e3f]/10 text-[#164e3f] font-semibold'
                          : 'text-[#2a3832] hover:bg-[#faf8f5]'
                      }`}
                    >
                      <span>{curr.code}</span>
                      <span className="text-[#8c8273]">{curr.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#164e3f] hover:bg-[#0f3b2f] active:bg-[#0b2b22] rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              Plan Your Journey
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md ${
                isScrolled ? 'text-[#164e3f]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-[#e5dec9] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#2a3832] hover:text-[#164e3f] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#e5dec9] flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#6e7771]">
              <span>Currency preference:</span>
              <div className="flex gap-1.5">
                {Object.values(CURRENCIES).map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      onCurrencyChange(curr);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      currentCurrency.code === curr.code
                        ? 'bg-[#164e3f] text-white'
                        : 'bg-[#eae4d5] text-[#2a3832]'
                    }`}
                  >
                    {curr.code}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#164e3f] rounded-md"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
