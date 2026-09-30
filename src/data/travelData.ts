import { RegionSpotlight, ReviewItem } from '../types/tourism';

export interface CurrencyConfig {
  code: string;
  symbol: string;
  rateFromUsd: number;
}

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rateFromUsd: 1.0 },
  EUR: { code: 'EUR', symbol: '€', rateFromUsd: 0.92 },
  GBP: { code: 'GBP', symbol: '£', rateFromUsd: 0.79 },
  AUD: { code: 'AUD', symbol: 'A$', rateFromUsd: 1.54 },
};

export const REGIONS_DATA: RegionSpotlight[] = [
  {
    id: 'cultural-triangle',
    name: 'Cultural Triangle',
    sinhaName: 'සංස්කෘතික ත්‍රිකෝණය',
    zone: 'North Central Plains',
    driveTimeFromAirport: '3.5 – 4 Hours',
    bestMonths: 'Year-Round (Best Nov – Sep)',
    highlights: ['Sigiriya Lion Rock', 'Dambulla Cave Temples', 'Polonnaruwa Medieval City', 'Minneriya Elephant Gathering'],
    description: 'The ancient cradle of Sinhalese civilization featuring giant dagobas, hydraulic reservoirs (tanks), rock fortresses, and monastic ruins surrounded by dry evergreen forests.'
  },
  {
    id: 'central-highlands',
    name: 'Central Highlands & Ella',
    sinhaName: 'මධ්‍යම කඳුකරය',
    zone: 'Hill Country (1,800m+)',
    driveTimeFromAirport: '4.5 – 5 Hours (or Scenic Train)',
    bestMonths: 'December – May',
    highlights: ['Nuwara Eliya Tea Valleys', 'Historic Blue Train', 'Nine Arch Bridge', 'Lipton’s Seat & Little Adam’s Peak'],
    description: 'Misty cloud forests, cascading waterfalls, British colonial tea estates, and cool mountain air with daytime temperatures around 18°C–22°C.'
  },
  {
    id: 'deep-south-yala',
    name: 'Deep South & Yala Wildlife',
    sinhaName: 'රුහුණු වනෝද්‍යාන',
    zone: 'Southern Dry Savannah',
    driveTimeFromAirport: '4 Hours via Southern Expressway',
    bestMonths: 'February – July (Driest)',
    highlights: ['Yala National Park Block 1', 'Udawalawe Elephant Sanctuary', 'Bundala Ramsar Wetlands', 'Luxury Tented Camps'],
    description: 'Raw coastal savannah, salt pans, and rocky ridges harboring the highest density of leopards in Asia alongside wild elephants, sloth bears, and crocodiles.'
  },
  {
    id: 'southern-coast',
    name: 'Southern Surf & Heritage Coast',
    sinhaName: 'දකුණු වෙරළ තීරය',
    zone: 'Southwestern Coastline',
    driveTimeFromAirport: '2 – 2.5 Hours via Expressway',
    bestMonths: 'November – April',
    highlights: ['Weligama & Midigama Surf', 'UNESCO Galle Dutch Fort', 'Mirissa Blue Whales', 'Hiriketiya Horseshoe Bay'],
    description: 'Golden sand beaches lined with leaning coconut palms, calm beginner surf bays, world-class reef breaks, and 17th-century colonial fortress living history.'
  },
  {
    id: 'east-coast',
    name: 'East Coast & Arugam Bay',
    sinhaName: 'නැගෙනහිර වෙරළ',
    zone: 'Eastern Coastline',
    driveTimeFromAirport: '6.5 Hours (or Air Taxi)',
    bestMonths: 'May – October',
    highlights: ['Arugam Bay Main Point', 'Kumana National Park', 'Pottuvil Mangrove Lagoons', 'Whiskey Point'],
    description: 'Bohemian surf villages, world-class right-hand ocean point breaks, tranquil mangrove waterways, and remote wildlife wilderness with minimal crowds.'
  }
];

export const TRAVELER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Eleanor & Marcus Vance',
    country: 'United Kingdom',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    tourTaken: 'Grand Ceylon Odyssey (14 Days)',
    date: 'February 2026',
    rating: 5,
    quote: 'Our chauffeur-guide Pradeep felt like family within 48 hours. Seeing three separate leopards in Yala and surfing Weligama at sunrise was pure magic.',
    fullReview: 'We booked the 14-day Grand Ceylon Odyssey with high expectations, but Ceylon Horizons surpassed every single one. From seamless airport pickup to private tea tasting in Nuwara Eliya and our dawn climb of Sigiriya before any tour buses arrived. The private Land Cruiser in Yala gave us an unforgettable 30-minute private encounter with a female leopard resting on a granite boulder. Truly exceptional attention to detail.'
  },
  {
    id: 'rev-2',
    author: 'Liam Henderson',
    country: 'Australia',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    tourTaken: 'The Southern Swell & Coastal Sanctuary (7 Days)',
    date: 'January 2026',
    rating: 5,
    quote: 'The best surf trip I’ve taken in 12 years. Weligama coaching was top-tier, and our guide knew exactly which reef break worked on each morning tide.',
    fullReview: 'I came to Sri Lanka to level up my surfing and catch winter swells. Our local coach Tharindu provided daily video analysis that completely corrected my bottom turn mechanics. Having a dedicated 4x4 take us between Midigama, Kabalana, and Weligama saved so much time. Ending the week sipping arrack sours inside Galle Fort was unforgettable.'
  },
  {
    id: 'rev-3',
    author: 'Clara & Johannes Schmidt',
    country: 'Germany',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
    tourTaken: 'Wild Yala & Southern Savannah Glamping (5 Days)',
    date: 'March 2026',
    rating: 5,
    quote: 'The luxury glamping in Yala with the campfire dinners under the Milky Way felt straight out of a National Geographic documentary.',
    fullReview: 'As passionate amateur wildlife photographers, we wanted an authentic safari experience that respected animal welfare. Ceylon Horizons gave us an experienced naturalist guide who knew animal behavior intimately. We spotted a sloth bear feeding on berries, wild bull elephants, and witnessed a leopard stalking spotted deer in late afternoon light. The tented camp luxury was extraordinary.'
  },
  {
    id: 'rev-4',
    author: 'Dr. Aris Thorne & Family',
    country: 'Canada',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    tourTaken: 'The Cultural Triangle & Sacred Citadel (8 Days)',
    date: 'December 2025',
    rating: 5,
    quote: 'Traveling with two teenagers can be daunting, but bicycle tours through Polonnaruwa and the Sigiriya sunrise captivated all of us.',
    fullReview: 'The historical depth of Sri Lanka was brought alive by our chauffeur-guide, who holds an archeology degree. Climbing Sigiriya in the crisp 06:30 AM mist was an experience our family will cherish for life. Hotels were sublime eco-sanctuaries with lotus ponds and monkeys in the trees. Flawless logistics throughout.'
  }
];

export const BESPOKE_ADDONS = [
  {
    id: 'sigiriya-balloon',
    name: 'Sigiriya Sunrise Hot Air Balloon',
    priceUsd: 260,
    unit: 'per person',
    duration: '3.5 Hours (Dawn)',
    description: 'Drift serenely over ancient jungle lakes, misty forest canopies, and the majestic silhouette of Sigiriya Rock Fortress with a champagne breakfast landing.'
  },
  {
    id: 'yala-naturalist-tracker',
    name: 'Private Wildlife Biologist Tracker',
    priceUsd: 140,
    unit: 'per day',
    duration: 'Full Day Safari',
    description: 'Dedicated senior wildlife researcher accompanying your 4x4 game drives with specialized acoustic telemetry knowledge and high-power spotting scopes.'
  },
  {
    id: 'blue-train-observation',
    name: 'First-Class Observation Blue Train Pass',
    priceUsd: 45,
    unit: 'per ticket',
    duration: 'Kandy to Ella (6 Hours)',
    description: 'Guaranteed reserved seating in the vintage observation carriage with oversized panoramic rear windows through the misty tea mountains.'
  },
  {
    id: 'surf-coaching-pass',
    name: '3-Day Private ISA Surf Coaching Pass',
    priceUsd: 180,
    unit: 'per surfer',
    duration: '3 x 2-Hour Sessions',
    description: 'One-on-one coaching with ISA-accredited local watermen including daily HD 4K video analysis and quiver board choice.'
  },
  {
    id: 'ayurvedic-massage',
    name: 'Traditional Royal Ayurvedic Rejuvenation',
    priceUsd: 85,
    unit: 'per treatment',
    duration: '90 Minutes',
    description: 'Full-body herbal oil Abhyanga massage and warm herbal steam bath conducted by trained indigenous Ayurvedic practitioners.'
  }
];

export const VEHICLE_OPTIONS = [
  {
    id: 'hybrid',
    name: 'Eco Hybrid Luxury Sedan',
    model: 'Toyota Prius / Camry Hybrid',
    capacity: '1 – 3 Passengers + Luggage',
    pricePerDayUsd: 0, // Included as base
    description: 'Whisper-quiet, air-conditioned, fuel-efficient travel ideal for couples and solo adventurers.'
  },
  {
    id: 'van',
    name: 'Executive Commuter Luxury Van',
    model: 'Toyota HiAce KDH Super GL',
    capacity: '4 – 7 Passengers + Heavy Luggage',
    pricePerDayUsd: 35,
    description: 'Reclining high-back plush captain seats, individual AC vents, onboard Wi-Fi, and cool box for drinks.'
  },
  {
    id: 'luxury_suv',
    name: 'Premium 4WD Overland SUV',
    model: 'Toyota Land Cruiser Prado 4x4',
    capacity: '1 – 4 Passengers',
    pricePerDayUsd: 75,
    description: 'High clearance, panoramic sunroof, superior comfort across rugged safari access roads and hill passes.'
  }
];
