import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TRAVELER_REVIEWS } from '../data/travelData';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeIn } from './FadeIn';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c4683c] mb-2">
          <span>Traveler Endorsements</span>
          <span aria-hidden="true">·</span>
          <span>Verified Experiences</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164e3f] leading-tight">
          Letters From The Island
        </h2>
        <p className="text-sm sm:text-base text-[#4a5851] mt-3 leading-relaxed">
          Unfiltered accounts from independent adventurers, wildlife photographers, and families who explored Sri Lanka with our private chauffeur-guides.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TRAVELER_REVIEWS.map((rev, idx) => (
          <FadeIn key={rev.id} delayMs={idx * 120}>
            <div
              className="bg-[#faf8f5] rounded-xl p-6 sm:p-7 border border-[#e5dec9] flex flex-col justify-between hover:border-[#164e3f]/40 transition-colors h-full"
            >
            <div>
              {/* Star Rating & Tour Taken (Unboxed) */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#d4a359] fill-[#d4a359]" />
                  ))}
                </div>
                <div className="text-xs text-[#6e7771] font-medium">
                  {rev.date}
                </div>
              </div>

              {/* Quote Headline */}
              <blockquote className="font-serif text-base sm:text-lg font-bold text-[#1a2822] mb-3 leading-snug">
                "{rev.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-[#4a5851] leading-relaxed mb-6">
                {rev.fullReview}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-[#e5dec9] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#e5dec9] shrink-0">
                  <ImageWithFallback
                    src={rev.avatarUrl}
                    alt={rev.author}
                    fallbackTitle={rev.author}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#1a2822]">
                    {rev.author}
                  </h4>
                  <div className="text-[11px] text-[#6e7771]">
                    <span>{rev.country}</span>
                    <span className="mx-1" aria-hidden="true">·</span>
                    <span>{rev.tourTaken}</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[#164e3f]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#164e3f]" />
                <span>Verified Traveler</span>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>

      {/* Trust Adjacency Banner */}
      <div className="mt-12 p-6 bg-[#f4efe6] rounded-xl border border-[#ded5c5] flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="space-y-1">
          <span className="font-serif font-bold text-base text-[#164e3f] block">
            100% SLTDA Certified Chauffeur-Guides
          </span>
          <p className="text-[#525f57]">
            Every driver in our fleet carries certified national tourist guide credentials, advanced defensive driving certificates, and fluent English capability.
          </p>
        </div>
        <div className="flex items-center gap-6 shrink-0 text-center font-medium">
          <div>
            <div className="font-serif text-xl font-bold text-[#164e3f] tabular-nums">4.97 / 5.0</div>
            <div className="text-[11px] text-[#6e7771]">Independent Review Average</div>
          </div>
          <div className="w-px h-8 bg-[#ded5c5]" />
          <div>
            <div className="font-serif text-xl font-bold text-[#c4683c] tabular-nums">1,240+</div>
            <div className="text-[11px] text-[#6e7771]">Journeys Hosted</div>
          </div>
        </div>
      </div>
    </section>
  );
};
