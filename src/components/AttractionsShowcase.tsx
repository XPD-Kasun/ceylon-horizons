import React, { useState } from 'react';
import { Waves, Tent, Landmark, Clock, Calendar, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ATTRACTIONS_DATA } from '../data/attractionsData';
import { AttractionArea } from '../types/tourism';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

interface AttractionsShowcaseProps {
  onSelectAttractionForBooking: (attractionKey: 'surfing' | 'yala' | 'cultural') => void;
}

export const AttractionsShowcase: React.FC<AttractionsShowcaseProps> = ({
  onSelectAttractionForBooking,
}) => {
  const [activeAreaKey, setActiveAreaKey] = useState<'surfing' | 'yala' | 'cultural'>('surfing');

  const currentArea: AttractionArea = ATTRACTIONS_DATA.find((a) => a.key === activeAreaKey) || ATTRACTIONS_DATA[0];

  const getAreaIcon = (key: string) => {
    switch (key) {
      case 'surfing':
        return <Waves className="w-4 h-4" />;
      case 'yala':
        return <Tent className="w-4 h-4" />;
      case 'cultural':
        return <Landmark className="w-4 h-4" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <section id="attractions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c4683c] mb-2">
          <span>Iconic Sri Lanka Destinations</span>
          <span aria-hidden="true">·</span>
          <span>Regional Wonders</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164e3f] leading-tight text-balance">
          Signature Area Attractions
        </h2>
        <p className="text-sm sm:text-base text-[#4a5851] mt-3 leading-relaxed">
          From the legendary right-hand point breaks of the coastline to raw leopard territory in the southern savannah and fifth-century citadels rising out of the mist.
        </p>
      </div>

      {/* Interactive Switcher Bar (Functional Segmented Buttons per Rule 1.A) */}
      <div className="flex items-center gap-2 p-1.5 bg-[#eae4d5]/70 rounded-xl mb-10 overflow-x-auto">
        {ATTRACTIONS_DATA.map((area) => (
          <button
            key={area.key}
            type="button"
            id={`attraction-${area.key}`}
            onClick={() => setActiveAreaKey(area.key)}
            className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeAreaKey === area.key
                ? 'bg-[#164e3f] text-white shadow-xs'
                : 'text-[#2a3832] hover:bg-white/60 hover:text-[#164e3f]'
            }`}
          >
            {getAreaIcon(area.key)}
            <span>{area.title}</span>
          </button>
        ))}
      </div>

      {/* Main Attraction Spotlight Layout */}
      <div className="space-y-12">
        {/* Asymmetric Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf8f5] rounded-2xl border border-[#e5dec9] p-6 sm:p-8 lg:p-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#6e7771] font-medium">
              <span className="flex items-center gap-1.5 text-[#164e3f] font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Prime Window: {currentArea.bestSeason}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Recommended: {currentArea.idealDuration}</span>
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a2822]">
              {currentArea.tagline}
            </h3>

            <p className="text-sm sm:text-base text-[#4a5851] leading-relaxed">
              {currentArea.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 pt-2">
              {currentArea.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2a3832]">
                  <CheckCircle2 className="w-4 h-4 text-[#164e3f] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Trigger */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => onSelectAttractionForBooking(currentArea.key)}
                className="px-5 py-3 bg-[#c4683c] hover:bg-[#b05930] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Book This Attraction Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* High-Impact Visual */}
          <div className="lg:col-span-5 relative aspect-4/3 rounded-xl overflow-hidden border border-[#e5dec9]">
            <ImageWithFallback
              src={currentArea.heroImage}
              alt={currentArea.title}
              fallbackTitle={currentArea.title}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Spot Breakdown Cards Grid */}
        <div>
          <div className="flex items-baseline justify-between mb-6">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1a2822]">
              Key Spots & Signature Zones
            </h4>
            <span className="text-xs text-[#6e7771]">Curated by resident specialists</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentArea.spots.map((spot, index) => (
              <FadeIn key={index} delayMs={index * 90}>
                <div
                  className="bg-white rounded-xl p-5 border border-[#e5dec9] flex flex-col justify-between hover:border-[#164e3f]/40 transition-colors h-full"
                >
                  <div>
                    <div className="text-[11px] font-semibold text-[#c4683c] tracking-wider uppercase mb-1">
                      {spot.tag}
                    </div>
                    <h5 className="font-serif text-lg font-bold text-[#1a2822] mb-1.5">
                      {spot.name}
                    </h5>
                    <div className="text-xs text-[#6e7771] mb-3 flex items-center gap-1">
                      <span>{spot.location}</span>
                    </div>
                    <p className="text-xs text-[#4a5851] leading-relaxed mb-4">
                      {spot.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f0eae1] space-y-1 text-[11px] text-[#525f57]">
                    <div className="font-medium text-[#164e3f]">{spot.levelOrHighlight}</div>
                    <div className="text-[#6e7771]">Best: {spot.idealTime}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Insider Guidance Box */}
        <div className="bg-[#f2ede4] rounded-xl p-6 border border-[#ded5c5]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#164e3f] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#164e3f]" />
            <span>Chauffeur-Naturalist Insider Guidance</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-[#3b4741]">
            {currentArea.insiderTips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-[#c4683c] font-bold text-sm leading-none mt-0.5">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
