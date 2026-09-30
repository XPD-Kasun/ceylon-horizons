import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Users, Car, Sparkles, ShieldCheck, ArrowRight, Printer, MessageCircle, Info } from 'lucide-react';
import { ITINERARY_PACKAGES } from '../data/packagesData';
import { BESPOKE_ADDONS, VEHICLE_OPTIONS, CurrencyConfig } from '../data/travelData';
import { ItineraryPackage } from '../types/tourism';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageId?: string;
  currency: CurrencyConfig;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPackageId,
  currency,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    preselectedPackageId || ITINERARY_PACKAGES[0].id
  );
  const [isCustomTrip, setIsCustomTrip] = useState<boolean>(false);
  const [customDurationDays, setCustomDurationDays] = useState<number>(10);

  // Form State
  const [startDate, setStartDate] = useState<string>('2026-11-15');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [hotelTier, setHotelTier] = useState<'boutique' | 'luxury' | 'villa'>('boutique');
  const [vehicleId, setVehicleId] = useState<string>('hybrid');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  
  // Traveler Info
  const [travelerName, setTravelerName] = useState<string>('');
  const [travelerEmail, setTravelerEmail] = useState<string>('');
  const [travelerPhone, setTravelerPhone] = useState<string>('');
  const [travelerCountry, setTravelerCountry] = useState<string>('United Kingdom');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [surfSkillLevel, setSurfSkillLevel] = useState<string>('Beginner / Never surfed');

  // Confirmation View
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (preselectedPackageId) {
      setSelectedPackageId(preselectedPackageId);
      setIsCustomTrip(false);
    }
  }, [preselectedPackageId]);

  if (!isOpen) return null;

  const currentPackage: ItineraryPackage | undefined = ITINERARY_PACKAGES.find(
    (p) => p.id === selectedPackageId
  );

  const durationDays = isCustomTrip
    ? customDurationDays
    : currentPackage
    ? currentPackage.durationDays
    : 7;

  // Price Calculation Logic
  const baseRatePerPersonUsd = isCustomTrip
    ? 220 * durationDays
    : currentPackage
    ? currentPackage.priceUsd
    : 1400;

  // Hotel Tier upgrade per person
  let tierExtraPerPersonUsd = 0;
  if (hotelTier === 'luxury') tierExtraPerPersonUsd = 45 * durationDays;
  if (hotelTier === 'villa') tierExtraPerPersonUsd = 110 * durationDays;

  // Vehicle extra flat
  const selectedVehicle = VEHICLE_OPTIONS.find((v) => v.id === vehicleId) || VEHICLE_OPTIONS[0];
  const vehicleExtraUsd = selectedVehicle.pricePerDayUsd * durationDays;

  // Addons total
  const addonsTotalUsd = selectedAddonIds.reduce((sum, addonId) => {
    const addon = BESPOKE_ADDONS.find((a) => a.id === addonId);
    if (!addon) return sum;
    if (addon.unit.includes('per person') || addon.unit.includes('per ticket') || addon.unit.includes('per surfer') || addon.unit.includes('per treatment')) {
      return sum + addon.priceUsd * adults;
    }
    return sum + addon.priceUsd;
  }, 0);

  // Total USD
  const totalUsd =
    (baseRatePerPersonUsd + tierExtraPerPersonUsd) * adults +
    (baseRatePerPersonUsd + tierExtraPerPersonUsd) * 0.6 * children +
    vehicleExtraUsd +
    addonsTotalUsd;

  const totalConverted = Math.round(totalUsd * currency.rateFromUsd);
  const depositConverted = Math.round(totalConverted * 0.25);

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((x) => x !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!travelerName.trim()) {
      setValidationError('Please provide your full legal name.');
      return;
    }
    if (!travelerEmail.trim() || !travelerEmail.includes('@')) {
      setValidationError('Please provide a valid email address.');
      return;
    }
    if (!travelerPhone.trim()) {
      setValidationError('Please provide a contact phone or WhatsApp number.');
      return;
    }

    setValidationError('');
    const randomRef = 'CH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div 
        className="relative bg-[#faf8f5] rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#e5dec9] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="bg-[#164e3f] px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="text-[11px] font-medium tracking-widest uppercase text-[#d4a359]">
              Ceylon Horizons · Reservation Desk
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold">
              {bookingConfirmed ? 'Reservation Confirmed' : 'Book Your Sri Lankan Journey'}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {bookingConfirmed ? (
            /* Confirmation Voucher Screen */
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl border border-[#e5dec9] text-center space-y-3">
                <div className="w-14 h-14 bg-[#164e3f]/10 text-[#164e3f] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a2822]">
                  Aayubowan, {travelerName}!
                </h3>
                <p className="text-sm text-[#4a5851] max-w-lg mx-auto">
                  Your reservation request has been received by our senior journey planner in Colombo. A personalized itinerary and digital voucher have been dispatched to{' '}
                  <strong className="text-[#164e3f]">{travelerEmail}</strong>.
                </p>

                <div className="inline-block px-4 py-2 bg-[#faf8f5] rounded-lg border border-[#e5dec9] text-xs font-mono font-bold text-[#164e3f] mt-2">
                  Booking Reference: {bookingRef}
                </div>
              </div>

              {/* Itinerary Summary Voucher Box */}
              <div className="bg-white rounded-xl p-5 border border-[#e5dec9] space-y-4 text-xs sm:text-sm">
                <div className="border-b border-[#e5dec9] pb-3 flex items-center justify-between">
                  <span className="font-semibold text-[#1a2822]">Selected Expedition:</span>
                  <span className="font-serif font-bold text-[#164e3f]">
                    {isCustomTrip ? 'Bespoke Custom Sri Lanka Tour' : currentPackage?.title}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[#6e7771] block">Start Date:</span>
                    <span className="font-semibold text-[#1a2822]">{startDate}</span>
                  </div>
                  <div>
                    <span className="text-[#6e7771] block">Duration:</span>
                    <span className="font-semibold text-[#1a2822]">{durationDays} Days</span>
                  </div>
                  <div>
                    <span className="text-[#6e7771] block">Travelers:</span>
                    <span className="font-semibold text-[#1a2822]">{adults} Adults {children > 0 && `, ${children} Children`}</span>
                  </div>
                  <div>
                    <span className="text-[#6e7771] block">Vehicle:</span>
                    <span className="font-semibold text-[#1a2822]">{selectedVehicle.name}</span>
                  </div>
                </div>

                {selectedAddonIds.length > 0 && (
                  <div className="pt-2 border-t border-[#f0eae1]">
                    <span className="text-xs text-[#6e7771] block mb-1">Confirmed Add-ons:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedAddonIds.map((id) => {
                        const addon = BESPOKE_ADDONS.find((a) => a.id === id);
                        return (
                          <span key={id} className="px-2 py-0.5 bg-[#faf8f5] rounded border border-[#e5dec9] text-xs text-[#164e3f]">
                            ✓ {addon?.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-[#e5dec9] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#6e7771]">Total Estimated Cost:</span>
                    <div className="font-serif text-xl font-bold text-[#164e3f] tabular-nums">
                      {currency.symbol}{totalConverted.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#6e7771]">Hold Deposit (25%):</span>
                    <div className="font-serif text-lg font-bold text-[#c4683c] tabular-nums">
                      {currency.symbol}{depositConverted.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/94770000000?text=Hello%20Ceylon%20Horizons,%20I%20just%20reserved%20${bookingRef}%20for%20${encodeURIComponent(travelerName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 bg-[#164e3f] hover:bg-[#0f3b2f] text-white text-xs sm:text-sm font-semibold rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Concierge on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto py-3 px-4 bg-white border border-[#e5dec9] hover:bg-[#eae4d5] text-[#2a3832] text-xs sm:text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Voucher</span>
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {validationError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
                  {validationError}
                </div>
              )}

              {/* Step 1: Itinerary Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#164e3f]">
                    Step 1: Choose Your Journey Type
                  </label>
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setIsCustomTrip(false)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                        !isCustomTrip ? 'bg-[#164e3f] text-white' : 'text-[#6e7771] hover:text-[#1a2822]'
                      }`}
                    >
                      Curated Package
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsCustomTrip(true)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                        isCustomTrip ? 'bg-[#164e3f] text-white' : 'text-[#6e7771] hover:text-[#1a2822]'
                      }`}
                    >
                      Custom Itinerary
                    </button>
                  </div>
                </div>

                {!isCustomTrip ? (
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full p-3 bg-white border border-[#e5dec9] rounded-lg text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                  >
                    {ITINERARY_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.title} ({pkg.durationDays} Days / {pkg.durationNights} Nights) — from {currency.symbol}
                        {Math.round(pkg.priceUsd * currency.rateFromUsd).toLocaleString()}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="p-4 bg-white rounded-lg border border-[#e5dec9] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#2a3832]">Custom Duration:</span>
                      <span className="font-bold text-[#164e3f] text-sm">{customDurationDays} Days</span>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={21}
                      value={customDurationDays}
                      onChange={(e) => setCustomDurationDays(Number(e.target.value))}
                      className="w-full accent-[#164e3f]"
                    />
                    <div className="flex justify-between text-[11px] text-[#6e7771]">
                      <span>4 Days Express</span>
                      <span>10 Days Standard</span>
                      <span>21 Days In-Depth</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Date & Party Size */}
              <div className="space-y-3 pt-4 border-t border-[#e5dec9]">
                <label className="text-xs font-bold uppercase tracking-wider text-[#164e3f] block">
                  Step 2: Dates & Party Size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">
                      Preferred Departure Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">
                      Adults (Age 12+)
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">
                      Children (Age 2-11)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                    >
                      {[0, 1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n} Children
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Accommodation Tier & Transport */}
              <div className="space-y-3 pt-4 border-t border-[#e5dec9]">
                <label className="text-xs font-bold uppercase tracking-wider text-[#164e3f] block">
                  Step 3: Accommodation Level & Chauffeur Vehicle
                </label>

                {/* Hotel Tier Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setHotelTier('boutique')}
                    className={`p-3 text-left rounded-lg border transition-colors cursor-pointer ${
                      hotelTier === 'boutique'
                        ? 'border-[#164e3f] bg-white ring-1 ring-[#164e3f]'
                        : 'border-[#e5dec9] bg-[#faf8f5] hover:bg-white'
                    }`}
                  >
                    <span className="font-semibold text-xs text-[#1a2822] block">Boutique Heritage</span>
                    <span className="text-[11px] text-[#6e7771] block mt-0.5">Character manors & eco-chalets</span>
                    <span className="text-[11px] font-medium text-[#164e3f] mt-1 block">Included</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHotelTier('luxury')}
                    className={`p-3 text-left rounded-lg border transition-colors cursor-pointer ${
                      hotelTier === 'luxury'
                        ? 'border-[#164e3f] bg-white ring-1 ring-[#164e3f]'
                        : 'border-[#e5dec9] bg-[#faf8f5] hover:bg-white'
                    }`}
                  >
                    <span className="font-semibold text-xs text-[#1a2822] block">Eco-Luxury Lodges</span>
                    <span className="text-[11px] text-[#6e7771] block mt-0.5">Glamping tents & tea bungalows</span>
                    <span className="text-[11px] font-medium text-[#c4683c] mt-1 block">
                      +{currency.symbol}{Math.round(45 * currency.rateFromUsd)} / person / day
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHotelTier('villa')}
                    className={`p-3 text-left rounded-lg border transition-colors cursor-pointer ${
                      hotelTier === 'villa'
                        ? 'border-[#164e3f] bg-white ring-1 ring-[#164e3f]'
                        : 'border-[#e5dec9] bg-[#faf8f5] hover:bg-white'
                    }`}
                  >
                    <span className="font-semibold text-xs text-[#1a2822] block">Five-Star Relais</span>
                    <span className="text-[11px] text-[#6e7771] block mt-0.5">Ultra-luxury beachfront suites</span>
                    <span className="text-[11px] font-medium text-[#c4683c] mt-1 block">
                      +{currency.symbol}{Math.round(110 * currency.rateFromUsd)} / person / day
                    </span>
                  </button>
                </div>

                {/* Vehicle Selection */}
                <div className="pt-2">
                  <label className="text-[11px] text-[#6e7771] block mb-1">
                    Private Chauffeur Vehicle
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {VEHICLE_OPTIONS.map((veh) => (
                      <button
                        key={veh.id}
                        type="button"
                        onClick={() => setVehicleId(veh.id)}
                        className={`p-3 text-left rounded-lg border transition-colors cursor-pointer ${
                          vehicleId === veh.id
                            ? 'border-[#164e3f] bg-white ring-1 ring-[#164e3f]'
                            : 'border-[#e5dec9] bg-[#faf8f5] hover:bg-white'
                        }`}
                      >
                        <span className="font-semibold text-xs text-[#1a2822] block">{veh.name}</span>
                        <span className="text-[11px] text-[#6e7771] block">{veh.model}</span>
                        <span className="text-[11px] font-medium text-[#164e3f] mt-1 block">
                          {veh.pricePerDayUsd === 0
                            ? 'Included'
                            : `+${currency.symbol}${Math.round(veh.pricePerDayUsd * currency.rateFromUsd)}/day`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Bespoke Add-on Experiences */}
              <div className="space-y-3 pt-4 border-t border-[#e5dec9]">
                <label className="text-xs font-bold uppercase tracking-wider text-[#164e3f] block">
                  Step 4: Signature Bespoke Add-ons (Optional)
                </label>
                <div className="space-y-2">
                  {BESPOKE_ADDONS.map((addon) => {
                    const isChecked = selectedAddonIds.includes(addon.id);
                    const convertedAddonPrice = Math.round(addon.priceUsd * currency.rateFromUsd);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-lg border flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-white border-[#164e3f] ring-1 ring-[#164e3f]'
                            : 'bg-white/60 border-[#e5dec9] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="mt-1 accent-[#164e3f] cursor-pointer"
                          />
                          <div>
                            <div className="font-semibold text-xs text-[#1a2822]">{addon.name}</div>
                            <div className="text-[11px] text-[#6e7771] line-clamp-1">{addon.description}</div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-serif font-bold text-xs text-[#164e3f]">
                            +{currency.symbol}{convertedAddonPrice}
                          </span>
                          <span className="text-[10px] text-[#6e7771] block">{addon.unit}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 5: Traveler Contact Info */}
              <div className="space-y-3 pt-4 border-t border-[#e5dec9]">
                <label className="text-xs font-bold uppercase tracking-wider text-[#164e3f] block">
                  Step 5: Lead Traveler Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">Full Legal Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={travelerName}
                      onChange={(e) => setTravelerName(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="sarah@example.com"
                      value={travelerEmail}
                      onChange={(e) => setTravelerEmail(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+44 7700 900123"
                      value={travelerPhone}
                      onChange={(e) => setTravelerPhone(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">Country of Residence</label>
                    <input
                      type="text"
                      placeholder="United Kingdom"
                      value={travelerCountry}
                      onChange={(e) => setTravelerCountry(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">Surfing Experience (If applicable)</label>
                    <select
                      value={surfSkillLevel}
                      onChange={(e) => setSurfSkillLevel(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                    >
                      <option>Beginner / Never surfed (Weligama gentle waves)</option>
                      <option>Intermediate (Catching unbroken waves & trimming)</option>
                      <option>Advanced (Reef breaks & hollow point barrels)</option>
                      <option>Not interested in surfing</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-[#6e7771] block mb-1">Dietary / Special Occasion Notes</label>
                    <input
                      type="text"
                      placeholder="e.g. Vegetarian, Honeymoon trip, twin beds"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#e5dec9] rounded-lg text-xs sm:text-sm text-[#1a2822] focus:outline-none focus:border-[#164e3f]"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="p-4 bg-[#f4efe6] rounded-xl border border-[#ded5c5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6e7771] block">
                    Calculated Expedition Estimate ({adults} Adults {children > 0 && `+ ${children} Child`})
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#164e3f] tabular-nums">
                      {currency.symbol}{totalConverted.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#6e7771]">Total ({currency.code})</span>
                  </div>
                  <span className="text-[11px] text-[#525f57] block mt-0.5">
                    Includes private chauffeur, hotels, permits & daily breakfasts
                  </span>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#c4683c] hover:bg-[#b05930] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
