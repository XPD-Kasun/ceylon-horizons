import React from 'react';
import { ArrowRight, MapPin, Star, Calendar } from 'lucide-react';
import { ItineraryPackage } from '../types/tourism';
import { CurrencyConfig } from '../data/travelData';
import { ImageWithFallback } from './ImageWithFallback';

interface ItineraryCardProps {
  packageData: ItineraryPackage;
  currency: CurrencyConfig;
  onViewDetails: (pkg: ItineraryPackage) => void;
  onBookNow: (pkg: ItineraryPackage) => void;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  packageData,
  currency,
  onViewDetails,
  onBookNow,
}) => {
  const convertedPrice = Math.round(packageData.priceUsd * currency.rateFromUsd);

  return (
    <article className="group bg-[#faf8f5] rounded-xl border border-[#e5dec9] overflow-hidden flex flex-col hover:border-[#164e3f]/40 transition-all duration-300">
      {/* Visual Image Slot */}
      <div className="relative aspect-16/10 overflow-hidden">
        <ImageWithFallback
          src={packageData.heroImage}
          alt={packageData.title}
          fallbackTitle={packageData.title}
          containerClassName="w-full h-full"
          className="group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle Scrim for bottom text if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* Quiet Top Meta */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white drop-shadow-xs">
          <span className="font-medium tracking-wide uppercase text-[11px] text-[#f4ede4] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-xs">
            {packageData.categoryLabel}
          </span>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-xs font-medium">
            <Star className="w-3.5 h-3.5 text-[#d4a359] fill-[#d4a359]" />
            <span className="tabular-nums">{packageData.rating.toFixed(2)}</span>
            <span className="text-white/70 text-[10px]">({packageData.reviewsCount})</span>
          </div>
        </div>

        {/* Bottom Image Overlay: Route Summary */}
        <div className="absolute bottom-3 left-3 right-3 text-xs text-[#faf8f5] flex items-center gap-1.5 line-clamp-1 drop-shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-[#d4a359] shrink-0" />
          <span className="truncate">
            {packageData.routeStops.join(' → ')}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata Line per Zero-Pill Rule */}
          <div className="flex items-center gap-2 text-xs text-[#6e7771] mb-2 font-medium">
            <span>{packageData.durationDays} Days / {packageData.durationNights} Nights</span>
            <span aria-hidden="true">·</span>
            <span>{packageData.pace} Pace</span>
            <span aria-hidden="true">·</span>
            <span>{packageData.bestMonths}</span>
          </div>

          {/* Primary Card Title */}
          <h3 className="font-serif text-xl font-bold text-[#1a2822] mb-2 group-hover:text-[#164e3f] transition-colors leading-snug">
            {packageData.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#4a5851] leading-relaxed line-clamp-3 mb-4">
            {packageData.overview}
          </p>

          {/* Key Inclusions Highlights (Unboxed) */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-[#e5dec9]/60">
            {packageData.highlights.slice(0, 2).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#2a3832]">
                <span className="text-[#c4683c] font-bold text-sm leading-none mt-0.5">•</span>
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Action Zone */}
        <div className="pt-4 border-t border-[#e5dec9] flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#6e7771] block font-medium">
              From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#164e3f] tabular-nums">
                {currency.symbol}{convertedPrice.toLocaleString()}
              </span>
              <span className="text-xs text-[#6e7771]">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onViewDetails(packageData)}
              className="px-3 py-2 text-xs font-medium text-[#2a3832] hover:text-[#164e3f] hover:bg-[#eae4d5] rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              Day-by-Day
            </button>
            <button
              type="button"
              onClick={() => onBookNow(packageData)}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#164e3f] hover:bg-[#0f3b2f] rounded-md transition-colors flex items-center gap-1.5 shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>Book Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
