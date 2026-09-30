import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#11241d] text-[#e4ded5] pt-16 pb-12 border-t border-[#1d3b30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1d3b30]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-wider text-white block">
              CEYLON HORIZONS
            </span>
            <p className="text-xs sm:text-sm text-[#a8b8b0] leading-relaxed max-w-sm">
              Sri Lanka Tourist Development Authority (SLTDA) Licensed Inbound Travel Agency No. TA/2026/894. Handcrafting private chauffeured expeditions, wildlife glamping, and coastal surf journeys since 2014.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#d4a359]">
              <ShieldCheck className="w-4 h-4" />
              <span>Fully Bonded & Insured Tour Operator</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Expeditions
            </h4>
            <ul className="space-y-2 text-xs text-[#a8b8b0]">
              <li>
                <a href="#itineraries" className="hover:text-white transition-colors">
                  All Itineraries
                </a>
              </li>
              <li>
                <a href="#attraction-surfing" className="hover:text-white transition-colors">
                  Surfing Coastlines
                </a>
              </li>
              <li>
                <a href="#attraction-yala" className="hover:text-white transition-colors">
                  Wild Yala Safari
                </a>
              </li>
              <li>
                <a href="#attraction-cultural" className="hover:text-white transition-colors">
                  Cultural Heritage
                </a>
              </li>
              <li>
                <a href="#route-map" className="hover:text-white transition-colors">
                  Island Route Map
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Island Offices
            </h4>
            <div className="space-y-2.5 text-xs text-[#a8b8b0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a359] shrink-0 mt-0.5" />
                <span>
                  <strong>Colombo HQ:</strong> 42/1 Horton Place, Cinnamon Gardens, Colombo 07
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a359] shrink-0 mt-0.5" />
                <span>
                  <strong>Galle Concierge:</strong> 18 Church Street, Galle Dutch Fort
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#d4a359] shrink-0" />
                <span>24/7 Hotline: +94 11 268 9400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4a359] shrink-0" />
                <span>concierge@ceylonhorizons.com</span>
              </div>
            </div>
          </div>

          {/* Curated Dispatches Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Island Dispatches
            </h4>
            <p className="text-xs text-[#a8b8b0] leading-relaxed">
              Seasonal swell forecasts, wildlife migration reports, and hidden boutique hotel openings.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#164e3f]/60 rounded-lg border border-[#2d6e5a] text-xs text-[#e4f2ec] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#d4a359]" />
                <span>Thank you. You are on the dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-[#0a1712] border border-[#234537] rounded-md text-xs text-white placeholder-[#687c72] focus:outline-none focus:border-[#d4a359]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#c4683c] hover:bg-[#b05930] text-white text-xs font-semibold rounded-md transition-colors shrink-0 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[10px] text-[#6b7c73] block">
                  Strictly quarterly dispatches. No spam.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71857c]">
          <div>
            © {new Date().getFullYear()} Ceylon Horizons Journeys (Pvt) Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Carriage</a>
            <a href="#" className="hover:text-white transition-colors">Wildlife Ethical Charter</a>
            <a href="#" className="hover:text-white transition-colors">SLTDA Accreditation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
