import React, { useState, useMemo } from 'react';
import { Compass, Filter, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ItineraryCard } from './components/ItineraryCard';
import { ItineraryModal } from './components/ItineraryModal';
import { AttractionsShowcase } from './components/AttractionsShowcase';
import { RouteMapExplorer } from './components/RouteMapExplorer';
import { ReviewsSection } from './components/ReviewsSection';
import { TravelerGuideFAQ } from './components/TravelerGuideFAQ';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { FadeIn } from './components/FadeIn';
import { ITINERARY_PACKAGES } from './data/packagesData';
import { CURRENCIES, CurrencyConfig } from './data/travelData';
import { ItineraryPackage, TravelCategory } from './types/tourism';

export default function App() {
  // Currency state
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyConfig>(CURRENCIES.USD);

  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<TravelCategory>('all');
  const [selectedDurationFilter, setSelectedDurationFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-low' | 'price-high' | 'duration'>('recommended');

  // Modals state
  const [selectedItineraryForModal, setSelectedItineraryForModal] = useState<ItineraryPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingPreselectedPackageId, setBookingPreselectedPackageId] = useState<string | undefined>(undefined);

  // Filtered packages
  const filteredPackages = useMemo(() => {
    return ITINERARY_PACKAGES.filter((pkg) => {
      // Category filter
      if (selectedCategory !== 'all' && pkg.category !== selectedCategory) {
        return false;
      }

      // Duration filter
      if (selectedDurationFilter === 'short' && (pkg.durationDays < 5 || pkg.durationDays > 7)) {
        return false;
      }
      if (selectedDurationFilter === 'medium' && (pkg.durationDays < 8 || pkg.durationDays > 11)) {
        return false;
      }
      if (selectedDurationFilter === 'long' && pkg.durationDays < 12) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesSubtitle = pkg.subtitle.toLowerCase().includes(query);
        const matchesStops = pkg.routeStops.some((s) => s.toLowerCase().includes(query));
        const matchesHighlights = pkg.highlights.some((h) => h.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSubtitle && !matchesStops && !matchesHighlights) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceUsd - b.priceUsd;
      if (sortBy === 'price-high') return b.priceUsd - a.priceUsd;
      if (sortBy === 'duration') return a.durationDays - b.durationDays;
      return b.rating - a.rating; // recommended default
    });
  }, [selectedCategory, selectedDurationFilter, searchQuery, sortBy]);

  // Handlers
  const handleOpenBooking = (packageId?: string) => {
    setBookingPreselectedPackageId(packageId || ITINERARY_PACKAGES[0].id);
    setIsBookingModalOpen(true);
  };

  const handleAttractionSelect = (attractionKey: 'surfing' | 'yala' | 'cultural') => {
    if (attractionKey === 'surfing') {
      setSelectedCategory('surf');
    } else if (attractionKey === 'yala') {
      setSelectedCategory('safari');
    } else if (attractionKey === 'cultural') {
      setSelectedCategory('heritage');
    }
    const itinerariesSection = document.getElementById('itineraries');
    if (itinerariesSection) {
      itinerariesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegionSelect = (regionId: string) => {
    if (regionId === 'deep-south-yala') {
      setSelectedCategory('safari');
    } else if (regionId === 'southern-coast' || regionId === 'east-coast') {
      setSelectedCategory('surf');
    } else if (regionId === 'cultural-triangle') {
      setSelectedCategory('heritage');
    } else if (regionId === 'central-highlands') {
      setSelectedCategory('highlands');
    }
    const itinerariesSection = document.getElementById('itineraries');
    if (itinerariesSection) {
      itinerariesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToItineraries = () => {
    const target = document.getElementById('itineraries');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories: { key: TravelCategory; label: string }[] = [
    { key: 'all', label: 'All Collections' },
    { key: 'surf', label: 'Surf & Ocean' },
    { key: 'safari', label: 'Yala Safari' },
    { key: 'heritage', label: 'Cultural Heritage' },
    { key: 'highlands', label: 'Tea & Highlands' },
    { key: 'odyssey', label: 'Grand Odyssey' },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c221e] flex flex-col font-sans selection:bg-[#164e3f] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedDurationFilter={selectedDurationFilter}
          onSelectDurationFilter={setSelectedDurationFilter}
          onOpenBooking={() => handleOpenBooking()}
          onExploreClick={scrollToItineraries}
        />

        {/* Itinerary Packages Section */}
        <section id="itineraries" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Editorial Section Header */}
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c4683c] mb-2">
                  <span>Curated Expeditions</span>
                  <span aria-hidden="true">·</span>
                  <span>Private Chauffeur Included</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164e3f] leading-tight">
                  Featured Itinerary Packages
                </h2>
                <p className="text-sm sm:text-base text-[#4a5851] mt-2 leading-relaxed">
                  Every itinerary is handcrafted with hand-selected boutique properties, expert naturalists, and seamless door-to-door private transfers.
                </p>
              </div>

              {/* Total Results Count (Unboxed) */}
              <div className="text-xs text-[#6e7771] font-medium self-start md:self-end">
                Showing <span className="font-bold text-[#164e3f]">{filteredPackages.length}</span> handcrafted journeys
              </div>
            </div>
          </FadeIn>

          {/* Interactive Filter & Search Controls Bar */}
          <FadeIn delayMs={100}>
            <div className="bg-[#f4efe6] rounded-xl p-4 border border-[#ded5c5] mb-8 space-y-4">
              {/* Category Filter Tabs (Functional Segmented Buttons per Rule 1.A) */}
              <div className="flex items-center gap-1.5 p-1 bg-white/70 rounded-lg overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat.key
                        ? 'bg-[#164e3f] text-white shadow-xs'
                        : 'text-[#2a3832] hover:bg-white hover:text-[#164e3f]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search & Sort Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                {/* Search input */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-[#6e7771] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search destinations (e.g. Weligama, Sigiriya, Yala, Ella)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-white border border-[#ded5c5] rounded-md text-xs sm:text-sm text-[#1a2822] placeholder-[#8c8273] focus:outline-none focus:border-[#164e3f]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#6e7771] hover:text-[#1a2822]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Sort by dropdown */}
                <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
                  <span className="text-[#6e7771] font-medium flex items-center gap-1">
                    <ArrowUpDown className="w-3.5 h-3.5" />
                    <span>Sort by:</span>
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-2.5 py-2 bg-white border border-[#ded5c5] rounded-md text-xs font-medium text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                  >
                    <option value="recommended">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration">Trip Length</option>
                  </select>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Packages Cards Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPackages.map((pkg, idx) => (
                <FadeIn key={pkg.id} delayMs={(idx % 3) * 120}>
                  <ItineraryCard
                    packageData={pkg}
                    currency={currentCurrency}
                    onViewDetails={(selected) => setSelectedItineraryForModal(selected)}
                    onBookNow={(selected) => handleOpenBooking(selected.id)}
                  />
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="p-12 text-center bg-[#f4efe6] rounded-xl border border-[#ded5c5] space-y-3">
                <Compass className="w-8 h-8 text-[#6e7771] mx-auto" />
                <h3 className="font-serif text-lg font-bold text-[#1a2822]">
                  No matching itineraries found
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5851] max-w-md mx-auto">
                  Try loosening your filters or search keywords. You can also build a custom itinerary from scratch with our concierge.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedDurationFilter('all');
                    setSearchQuery('');
                  }}
                  className="mt-2 px-4 py-2 bg-[#164e3f] text-white text-xs font-semibold rounded-md hover:bg-[#0f3b2f] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            </FadeIn>
          )}
        </section>

        {/* Signature Area Attractions Deep Dive (Surfing, Yala Camping, Cultural Heritage) */}
        <FadeIn>
          <AttractionsShowcase
            onSelectAttractionForBooking={handleAttractionSelect}
          />
        </FadeIn>

        {/* Interactive Sri Lanka Route Map Explorer */}
        <FadeIn>
          <RouteMapExplorer
            onExplorePackagesForRegion={handleRegionSelect}
          />
        </FadeIn>

        {/* Verified Traveler Reviews */}
        <FadeIn>
          <ReviewsSection />
        </FadeIn>

        {/* Practical FAQs & Island Guidelines */}
        <FadeIn>
          <TravelerGuideFAQ />
        </FadeIn>
      </main>

      {/* Day-by-Day Detailed Itinerary Modal */}
      <ItineraryModal
        packageData={selectedItineraryForModal}
        currency={currentCurrency}
        isOpen={Boolean(selectedItineraryForModal)}
        onClose={() => setSelectedItineraryForModal(null)}
        onBookNow={(pkg) => {
          setSelectedItineraryForModal(null);
          handleOpenBooking(pkg.id);
        }}
      />

      {/* Booking Engine & Customizer Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedPackageId={bookingPreselectedPackageId}
        currency={currentCurrency}
      />

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
