export type TravelCategory = 'all' | 'surf' | 'safari' | 'heritage' | 'highlands' | 'odyssey';

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  mealPlan: string;
  accommodation: string;
  highlights: string[];
}

export interface ItineraryPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: TravelCategory;
  categoryLabel: string;
  durationDays: number;
  durationNights: number;
  priceUsd: number;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  secondaryImage: string;
  overview: string;
  pace: 'Relaxed' | 'Moderate' | 'Active';
  bestMonths: string;
  routeStops: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  itineraryDays: ItineraryDay[];
}

export interface AttractionSpot {
  name: string;
  location: string;
  description: string;
  tag: string;
  levelOrHighlight: string;
  idealTime: string;
}

export interface AttractionArea {
  id: string;
  key: 'surfing' | 'yala' | 'cultural';
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  bestSeason: string;
  idealDuration: string;
  highlights: string[];
  spots: AttractionSpot[];
  insiderTips: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  country: string;
  avatarUrl: string;
  tourTaken: string;
  date: string;
  rating: number;
  quote: string;
  fullReview: string;
}

export interface RegionSpotlight {
  id: string;
  name: string;
  sinhaName: string;
  zone: string;
  driveTimeFromAirport: string;
  bestMonths: string;
  highlights: string[];
  description: string;
}

export interface BookingFormData {
  packageId: string;
  packageName: string;
  startDate: string;
  travelersAdults: number;
  travelersChildren: number;
  hotelTier: 'boutique' | 'luxury' | 'villa';
  vehicleType: 'hybrid' | 'van' | 'luxury_suv';
  selectedAddons: string[];
  fullName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests: string;
}
