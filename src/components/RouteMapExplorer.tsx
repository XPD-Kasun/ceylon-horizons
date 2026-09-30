import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Calendar, Check, ArrowRight } from 'lucide-react';
import { REGIONS_DATA } from '../data/travelData';
import { RegionSpotlight } from '../types/tourism';

interface RouteMapExplorerProps {
  onExplorePackagesForRegion: (regionId: string) => void;
}

export const RouteMapExplorer: React.FC<RouteMapExplorerProps> = ({
  onExplorePackagesForRegion,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('cultural-triangle');

  const selectedRegion = REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];

  return (
    <section id="route-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c4683c] mb-2">
          <span>Island Geography</span>
          <span aria-hidden="true">·</span>
          <span>Seamless Logistics</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164e3f] leading-tight">
          Explore Sri Lanka By Region
        </h2>
        <p className="text-sm sm:text-base text-[#4a5851] mt-3 leading-relaxed">
          Despite its compact size (65,610 km²), Sri Lanka holds eight climatic zones ranging from cloud forests to tropical savannahs. Discover how our private chauffeured routes connect each distinct landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#faf8f5] rounded-2xl border border-[#e5dec9] p-6 sm:p-8">
        {/* Interactive Island Map SVG & Region Pins */}
        <div className="lg:col-span-6 bg-[#f2ede4] rounded-xl p-6 border border-[#ded5c5] flex flex-col items-center justify-center relative min-h-[460px]">
          <div className="text-center mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e7771]">
              Interactive Island Map · Select Region
            </span>
          </div>

          {/* Stylized Island SVG Outline */}
          <div className="relative w-full max-w-[340px] aspect-[3/4]">
            <svg
              viewBox="0 0 300 400"
              className="w-full h-full drop-shadow-md select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Teardrop Island Silhouette */}
              <path
                d="M 150 25 
                   C 190 35, 230 80, 240 140 
                   C 250 200, 235 270, 210 320 
                   C 185 365, 140 385, 120 380 
                   C 95 375, 75 340, 65 290 
                   C 55 240, 60 170, 80 110 
                   C 100 50, 125 25, 150 25 Z"
                fill="#e4dbcd"
                stroke="#c9bea9"
                strokeWidth="2"
              />

              {/* Highland Mountain contour */}
              <ellipse
                cx="150"
                cy="230"
                rx="35"
                ry="45"
                fill="#d5c8b2"
                opacity="0.6"
              />

              {/* Ocean Wave lines */}
              <path d="M 30 180 Q 40 175 50 180" stroke="#164e3f" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
              <path d="M 245 120 Q 255 115 265 120" stroke="#164e3f" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
              <path d="M 230 350 Q 240 345 250 350" stroke="#164e3f" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
            </svg>

            {/* Region 1: Cultural Triangle Pin */}
            <button
              type="button"
              onClick={() => setSelectedRegionId('cultural-triangle')}
              className={`absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold shadow-md transition-all cursor-pointer ${
                selectedRegionId === 'cultural-triangle'
                  ? 'bg-[#164e3f] text-white scale-110 ring-2 ring-[#d4a359]'
                  : 'bg-white/90 text-[#2a3832] hover:bg-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#c4683c]" />
              <span>Cultural Triangle</span>
            </button>

            {/* Region 2: Central Highlands & Ella Pin */}
            <button
              type="button"
              onClick={() => setSelectedRegionId('central-highlands')}
              className={`absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold shadow-md transition-all cursor-pointer ${
                selectedRegionId === 'central-highlands'
                  ? 'bg-[#164e3f] text-white scale-110 ring-2 ring-[#d4a359]'
                  : 'bg-white/90 text-[#2a3832] hover:bg-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#164e3f]" />
              <span>Highlands & Ella</span>
            </button>

            {/* Region 3: Deep South & Yala Pin */}
            <button
              type="button"
              onClick={() => setSelectedRegionId('deep-south-yala')}
              className={`absolute top-[72%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold shadow-md transition-all cursor-pointer ${
                selectedRegionId === 'deep-south-yala'
                  ? 'bg-[#164e3f] text-white scale-110 ring-2 ring-[#d4a359]'
                  : 'bg-white/90 text-[#2a3832] hover:bg-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#c4683c]" />
              <span>Yala Safari</span>
            </button>

            {/* Region 4: Southern Surf Coast Pin */}
            <button
              type="button"
              onClick={() => setSelectedRegionId('southern-coast')}
              className={`absolute top-[82%] left-[32%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold shadow-md transition-all cursor-pointer ${
                selectedRegionId === 'southern-coast'
                  ? 'bg-[#164e3f] text-white scale-110 ring-2 ring-[#d4a359]'
                  : 'bg-white/90 text-[#2a3832] hover:bg-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#164e3f]" />
              <span>South Coast Surf</span>
            </button>

            {/* Region 5: East Coast & Arugam Bay Pin */}
            <button
              type="button"
              onClick={() => setSelectedRegionId('east-coast')}
              className={`absolute top-[56%] left-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold shadow-md transition-all cursor-pointer ${
                selectedRegionId === 'east-coast'
                  ? 'bg-[#164e3f] text-white scale-110 ring-2 ring-[#d4a359]'
                  : 'bg-white/90 text-[#2a3832] hover:bg-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#c4683c]" />
              <span>Arugam Bay</span>
            </button>
          </div>

          <div className="text-[11px] text-[#6e7771] mt-3">
            Click any pin to inspect transit times and signature sights
          </div>
        </div>

        {/* Selected Region Detailed Information */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs text-[#6e7771] mb-2">
              <span className="font-serif italic text-[#c4683c] text-sm">
                {selectedRegion.sinhaName}
              </span>
              <span className="font-semibold text-[#164e3f] uppercase tracking-wider">
                {selectedRegion.zone}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a2822] mb-3">
              {selectedRegion.name}
            </h3>

            <p className="text-sm text-[#4a5851] leading-relaxed mb-6">
              {selectedRegion.description}
            </p>

            {/* Practical Transit Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 bg-white rounded-lg border border-[#e5dec9]">
                <div className="flex items-center gap-1.5 text-xs text-[#6e7771] mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#c4683c]" />
                  <span>Expressway Transit</span>
                </div>
                <span className="font-serif font-bold text-[#1a2822] text-sm">
                  {selectedRegion.driveTimeFromAirport}
                </span>
                <span className="text-[11px] text-[#6e7771] block">from Colombo (CMB)</span>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#e5dec9]">
                <div className="flex items-center gap-1.5 text-xs text-[#6e7771] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#164e3f]" />
                  <span>Best Season</span>
                </div>
                <span className="font-serif font-bold text-[#1a2822] text-sm">
                  {selectedRegion.bestMonths}
                </span>
                <span className="text-[11px] text-[#6e7771] block">Optimum climate</span>
              </div>
            </div>

            {/* Signature Highlights */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold text-[#6e7771] uppercase tracking-wider block">
                Must-Visit Landmarks in this Region:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2a3832]">
                {selectedRegion.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-white rounded border border-[#e5dec9]">
                    <Check className="w-3.5 h-3.5 text-[#164e3f] shrink-0" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-4 border-t border-[#e5dec9]">
            <button
              type="button"
              onClick={() => onExplorePackagesForRegion(selectedRegion.id)}
              className="w-full sm:w-auto px-6 py-3 bg-[#164e3f] hover:bg-[#0f3b2f] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>View Itineraries Covering {selectedRegion.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
