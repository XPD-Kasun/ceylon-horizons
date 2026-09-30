import React, { useState } from 'react';
import { X, Check, ArrowRight, MapPin, Clock, Calendar, ShieldCheck, Utensils, Bed } from 'lucide-react';
import { ItineraryPackage } from '../types/tourism';
import { CurrencyConfig } from '../data/travelData';
import { ImageWithFallback } from './ImageWithFallback';

interface ItineraryModalProps {
  packageData: ItineraryPackage | null;
  currency: CurrencyConfig;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (pkg: ItineraryPackage) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  packageData,
  currency,
  isOpen,
  onClose,
  onBookNow,
}) => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'inclusions' | 'accommodation'>('schedule');

  if (!isOpen || !packageData) return null;

  const convertedPrice = Math.round(packageData.priceUsd * currency.rateFromUsd);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div 
        className="relative bg-[#faf8f5] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#e5dec9] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Visual Banner */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0">
          <ImageWithFallback
            src={packageData.heroImage}
            alt={packageData.title}
            fallbackTitle={packageData.title}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17] via-[#0d1f17]/60 to-black/30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Typography */}
          <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-8 sm:right-8 text-white">
            <div className="flex items-center gap-2 text-xs text-[#d4a359] font-medium tracking-wide uppercase mb-1">
              <span>{packageData.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{packageData.durationDays} Days / {packageData.durationNights} Nights</span>
              <span aria-hidden="true">·</span>
              <span>{packageData.pace} Pace</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {packageData.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#f4ede4]/90 mt-1 line-clamp-1">
              {packageData.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs (Interactive Segmented Control) */}
        <div className="border-b border-[#e5dec9] px-6 bg-[#f4efe6]/60 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'schedule'
                ? 'border-[#164e3f] text-[#164e3f]'
                : 'border-transparent text-[#6e7771] hover:text-[#1a2822]'
            }`}
          >
            Day-by-Day Schedule ({packageData.itineraryDays.length} Days)
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'inclusions'
                ? 'border-[#164e3f] text-[#164e3f]'
                : 'border-transparent text-[#6e7771] hover:text-[#1a2822]'
            }`}
          >
            Inclusions & Services
          </button>
          <button
            onClick={() => setActiveTab('accommodation')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'accommodation'
                ? 'border-[#164e3f] text-[#164e3f]'
                : 'border-transparent text-[#6e7771] hover:text-[#1a2822]'
            }`}
          >
            Overview & Route Map
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-[#6e7771] pb-2 border-b border-[#e5dec9]">
                <span>All transfers conducted via private air-conditioned vehicle with dedicated chauffeur-guide</span>
                <span className="font-semibold text-[#164e3f]">Pace: {packageData.pace}</span>
              </div>

              {packageData.itineraryDays.map((day) => (
                <div 
                  key={day.day}
                  className="bg-white rounded-xl p-5 border border-[#e5dec9]/80 transition-colors hover:border-[#164e3f]/40"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2.5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-lg font-bold text-[#c4683c]">
                        Day {day.day}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#1a2822]">
                        {day.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#525f57] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#164e3f]" />
                      <span>{day.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4a5851] leading-relaxed mb-4">
                    {day.description}
                  </p>

                  {/* Highlights of the Day */}
                  {day.highlights && day.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs text-[#2a3832]">
                      {day.highlights.map((hl, i) => (
                        <span key={i} className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#164e3f]" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Day Footer Metadata */}
                  <div className="pt-3 border-t border-[#f0eae1] flex flex-wrap items-center justify-between gap-2 text-xs text-[#6e7771]">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#c4683c]" />
                      <span>Stay: {day.accommodation}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-[#164e3f]" />
                      <span>{day.mealPlan}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-[#e5dec9]/80 space-y-4">
                <h4 className="font-serif text-base font-bold text-[#164e3f] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#164e3f]" />
                  <span>What’s Included</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#2a3832]">
                  {packageData.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#164e3f] font-bold text-sm leading-none mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#e5dec9]/80 space-y-4">
                <h4 className="font-serif text-base font-bold text-[#717b75] flex items-center gap-2">
                  <X className="w-4 h-4 text-[#717b75]" />
                  <span>Not Included</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#6e7771]">
                  {packageData.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#a49a8c] font-bold text-sm leading-none mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#f0eae1] text-xs text-[#525f57]">
                  <p className="font-semibold text-[#1a2822] mb-1">Tailored Flexibility:</p>
                  <p>Every itinerary is 100% customizable. You can adjust hotel tiers, extend beach or safari nights, or substitute experiences upon request.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'accommodation' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-[#e5dec9]/80">
                <h4 className="font-serif text-lg font-bold text-[#1a2822] mb-3">
                  Trip Overview & Route Flow
                </h4>
                <p className="text-sm text-[#4a5851] leading-relaxed mb-5">
                  {packageData.overview}
                </p>

                {/* Route stops sequence */}
                <div className="p-4 bg-[#f8f5ee] rounded-lg border border-[#e5dec9]">
                  <span className="text-xs font-semibold text-[#6e7771] uppercase tracking-wider block mb-2">
                    Expedition Route
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#164e3f]">
                    {packageData.routeStops.map((stop, i) => (
                      <React.Fragment key={i}>
                        <span className="px-2.5 py-1 bg-white rounded border border-[#e5dec9] shadow-2xs">
                          {stop}
                        </span>
                        {i < packageData.routeStops.length - 1 && (
                          <span className="text-[#c4683c] font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs">
                  <div className="p-3 bg-[#faf8f5] rounded-md border border-[#e5dec9]">
                    <span className="text-[#6e7771] block font-medium">Recommended Window</span>
                    <span className="font-serif text-sm font-bold text-[#1a2822] mt-0.5 block">{packageData.bestMonths}</span>
                  </div>
                  <div className="p-3 bg-[#faf8f5] rounded-md border border-[#e5dec9]">
                    <span className="text-[#6e7771] block font-medium">Activity Pace</span>
                    <span className="font-serif text-sm font-bold text-[#1a2822] mt-0.5 block">{packageData.pace} Tempo</span>
                  </div>
                  <div className="p-3 bg-[#faf8f5] rounded-md border border-[#e5dec9]">
                    <span className="text-[#6e7771] block font-medium">Guest Rating</span>
                    <span className="font-serif text-sm font-bold text-[#164e3f] mt-0.5 block">★ {packageData.rating} ({packageData.reviewsCount} verified reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer / Booking Action */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#e5dec9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#6e7771] block">
              Package Price (Twin Share)
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#164e3f] tabular-nums">
                {currency.symbol}{convertedPrice.toLocaleString()}
              </span>
              <span className="text-xs text-[#6e7771]">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-medium text-[#2a3832] hover:bg-[#eae4d5] rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(packageData);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#c4683c] hover:bg-[#b05930] rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Book This Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
