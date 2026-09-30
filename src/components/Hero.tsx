import React from 'react';
import { Compass, Calendar, ArrowRight, ShieldCheck, SunMedium } from 'lucide-react';
import { TravelCategory } from '../types/tourism';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  selectedCategory: TravelCategory;
  onSelectCategory: (category: TravelCategory) => void;
  selectedDurationFilter: string;
  onSelectDurationFilter: (duration: string) => void;
  onOpenBooking: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedDurationFilter,
  onSelectDurationFilter,
  onOpenBooking,
  onExploreClick,
}) => {
  const categories: { key: TravelCategory; label: string }[] = [
    { key: 'all', label: 'All Journeys' },
    { key: 'surf', label: 'Surfing & Coast' },
    { key: 'safari', label: 'Yala Safari' },
    { key: 'heritage', label: 'Cultural Heritage' },
    { key: 'highlands', label: 'Tea & Mountains' },
  ];

  const durations = [
    { key: 'all', label: 'Any Duration' },
    { key: 'short', label: '5 – 7 Days' },
    { key: 'medium', label: '8 – 11 Days' },
    { key: 'long', label: '12 – 14 Days' },
  ];

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-end pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Hero Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85"
          alt="Sigiriya Lion Rock fortress sunrise over emerald jungle canopy in Sri Lanka"
          fallbackTitle="Sigiriya Rock Fortress at Sunrise"
          containerClassName="w-full h-full"
          className="scale-105 transition-transform duration-1000"
        />
        {/* Measured Scrim for legibility per guideline */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c16] via-[#0e1c16]/65 to-black/35" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-8">
          {/* Unboxed regional trust marker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-[#d4a359] mb-3">
            <span>Sri Lanka Tourist Development Authority</span>
            <span aria-hidden="true">·</span>
            <span>Bespoke Journeys & Expeditions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5 text-balance">
            Where Ancient Kingdoms Meet Tropical Wilds
          </h1>

          <p className="text-base sm:text-lg text-[#e6ded3] font-light leading-relaxed mb-7 max-w-2xl">
            Curated private expeditions across the teardrop isle. Track leopards in Yala’s coastal savannah, ride peeling Indian Ocean point breaks, and ascend fifth-century royal citadels with your dedicated chauffeur-guide.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#c4683c] hover:bg-[#b05930] text-white font-medium text-sm rounded-md transition-all shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <span>Build Custom Itinerary</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium text-sm rounded-md transition-colors cursor-pointer"
            >
              Browse Curated Packages
            </button>
          </div>
        </div>

        {/* Interactive Quick Filter Console */}
        <div className="bg-[#faf8f5] rounded-xl p-4 sm:p-5 shadow-xl border border-[#e5dec9] mt-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Travel Style Selector */}
            <div className="space-y-1.5 flex-1">
              <label className="text-[11px] font-semibold tracking-wider uppercase text-[#6e7771] block">
                Travel Focus
              </label>
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#eae4d5]/60 rounded-lg">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => onSelectCategory(cat.key)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat.key
                        ? 'bg-[#164e3f] text-white shadow-xs'
                        : 'text-[#2a3832] hover:text-[#164e3f] hover:bg-white/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold tracking-wider uppercase text-[#6e7771] block">
                Duration
              </label>
              <div className="flex items-center gap-1.5 p-1 bg-[#eae4d5]/60 rounded-lg overflow-x-auto">
                {durations.map((dur) => (
                  <button
                    key={dur.key}
                    type="button"
                    onClick={() => onSelectDurationFilter(dur.key)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      selectedDurationFilter === dur.key
                        ? 'bg-[#164e3f] text-white shadow-xs'
                        : 'text-[#2a3832] hover:text-[#164e3f] hover:bg-white/60'
                    }`}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="self-end md:self-center pt-2 md:pt-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full md:w-auto px-5 py-2.5 bg-[#164e3f] hover:bg-[#0f3b2f] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>View Results</span>
              </button>
            </div>
          </div>

          {/* Adjacency Trust Markers - Clean unboxed text */}
          <div className="pt-3.5 mt-3.5 border-t border-[#e5dec9]/70 flex flex-wrap items-center justify-between gap-y-2 text-xs text-[#525f57]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#164e3f]" />
              <span>Dedicated English-Speaking Licensed Chauffeur-Guide with every package</span>
            </div>
            <div className="flex items-center gap-2">
              <SunMedium className="w-4 h-4 text-[#c4683c]" />
              <span>Dual seasonal microclimates · Guaranteed sunshine 365 days a year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
