import { ItineraryPackage } from '../types/tourism';

export const ITINERARY_PACKAGES: ItineraryPackage[] = [
  {
    id: 'pkg-southern-swell',
    slug: 'southern-swell-surf-coastal',
    title: 'The Southern Swell & Coastal Sanctuary',
    subtitle: 'Weligama point breaks, Mirissa ocean safaris, and UNESCO Galle Fort ramparts',
    category: 'surf',
    categoryLabel: 'Surf & Ocean',
    durationDays: 7,
    durationNights: 6,
    priceUsd: 1420,
    rating: 4.95,
    reviewsCount: 38,
    heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    overview: 'An exhilarating seven-day coastal journey curated for wave seekers and ocean lovers. Base yourself in Weligama Bay with daily surf coaching tailored to your ability, sunset sessions at Midigama reef breaks, ethical blue whale watching off Mirissa, and slow evenings inside the 17th-century colonial ramparts of Galle Fort.',
    pace: 'Moderate',
    bestMonths: 'November – April',
    routeStops: ['Colombo Airport', 'Weligama Bay', 'Midigama Reefs', 'Mirissa Harbour', 'Galle Dutch Fort'],
    highlights: [
      'Tailored daily surf coaching sessions with ISA certified local coaches',
      'Catamaran blue whale expedition in Mirissa with marine naturalist',
      'Secret sunset surf session at Lazy Left & Rams reef break',
      'Private walking architecture tour of Galle Fort with a heritage historian',
      'Beachfront boutique ocean villa stay with daily fresh tropical breakfast'
    ],
    included: [
      'Private air-conditioned hybrid vehicle & dedicated chauffeur-guide',
      '6 nights boutique coastal villa accommodation',
      'All surfboard rentals, wax, and transport to daily best tide breaks',
      'Private catamaran whale watching voyage',
      'Daily breakfast & three authentic Sri Lankan seafood dinners',
      'All entrance fees and government tourist development taxes'
    ],
    excluded: [
      'International flights to Colombo (CMB)',
      'Travel insurance & personal visa fees (ETA)',
      'Alcoholic beverages and lunches not specified in itinerary'
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Arrival in Colombo & Coastal Drive South',
        location: 'Weligama Bay',
        description: 'Meet your dedicated chauffeur-guide at Bandaranaike International Airport (CMB). Transfer south along the Southern Expressway towards the palm-fringed shores of Weligama. Check in to your boutique beachfront sanctuary, relax by the infinity pool, and enjoy an evening welcome dinner featuring fresh catch of the day curries.',
        mealPlan: 'Dinner included',
        accommodation: 'Cape Weligama or Boutique Ocean Villa',
        highlights: ['Warm coconut water welcome', 'Sunset ocean walk', 'Tour briefing']
      },
      {
        day: 2,
        title: 'Morning Point Break Coaching & Midigama Sunset',
        location: 'Weligama & Midigama',
        description: 'Begin the day with an early morning surf session in Weligama’s sheltered crescent bay, famous for clean, peeling waist-to-shoulder waves. Your ISA coach assesses your style and captures video feedback. In the afternoon, travel 10 minutes to Midigama to watch experienced surfers on Rams reef break, followed by coconut smoothies at a cliffside shack.',
        mealPlan: 'Breakfast included',
        accommodation: 'Cape Weligama or Boutique Ocean Villa',
        highlights: ['2-hour surf session', 'Video technique analysis', 'Midigama sunset point']
      },
      {
        day: 3,
        title: 'Ocean Giants: Ethical Mirissa Whale Expedition',
        location: 'Mirissa Coastal Waters',
        description: 'Board a low-impact sailing catamaran before dawn into the deep oceanic trench south of Mirissa. This nutrient-rich channel is one of the world’s premier habitats for resident blue whales, sperm whales, and pods of spinner dolphins. Return by midday for a relaxing Ayurvedic herbal massage.',
        mealPlan: 'Breakfast & Picnic snacks included',
        accommodation: 'Cape Weligama or Boutique Ocean Villa',
        highlights: ['Blue whale sightings', 'Marine biologist commentary', 'Afternoon surf or spa']
      },
      {
        day: 4,
        title: 'Hiriketiya Horseshoe Bay & Surf Progression',
        location: 'Hiriketiya & Dikwella',
        description: 'Drive along the southern coast to the idyllic horseshoe cove of Hiriketiya, where jungle palms hang directly over the water. Surf the left point break or relaxed beach peelers. Spend the afternoon browsing independent surf ateliers and relaxing in jungle cafes.',
        mealPlan: 'Breakfast included',
        accommodation: 'Cape Weligama or Boutique Ocean Villa',
        highlights: ['Hiriketiya point break', 'Artisanal cafes', 'Dusk surf session']
      },
      {
        day: 5,
        title: 'Colonial Ramparts of Galle Fort & Stilt Fishermen',
        location: 'Koggala & Galle Fort',
        description: 'Witness the iconic traditional stilt fishermen of Koggala at morning light. Continue to the UNESCO World Heritage Galle Dutch Fort. Walk the 17th-century coral ramparts, visit spice merchants, browse gem boutiques, and dine at a renowned heritage courtyard restaurant.',
        mealPlan: 'Breakfast & Seafood Dinner included',
        accommodation: 'Fort Printers or Galle Heritage Villa',
        highlights: ['UNESCO Galle Fort walking tour', 'Colonial Dutch architecture', 'Heritage dinner']
      },
      {
        day: 6,
        title: 'Dawn Dawn Patrol Surf & Cinnamon Plantation Tour',
        location: 'Ahangama & Koggala Lake',
        description: 'One last dawn surf session at Kabalana "The Rock" or Weligama beach. Afterwards, take a wooden motorboat cruise across serene Koggala Lake to Cinnamon Island, where generational artisans demonstrate the ancient peeling of Ceylon pure cinnamon.',
        mealPlan: 'Breakfast & Traditional Lunch included',
        accommodation: 'Fort Printers or Galle Heritage Villa',
        highlights: ['Final dawn patrol session', 'Koggala lake boat safari', 'Ceylon cinnamon peeling']
      },
      {
        day: 7,
        title: 'Morning Coastal Stroll & Colombo Departure',
        location: 'Colombo Airport (CMB)',
        description: 'Enjoy a leisurely breakfast on the terrace before your private vehicle transports you smoothly back to Colombo Airport for your homeward flight or next adventure.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        highlights: ['Expressway return transfer', 'Airport drop-off with assistance']
      }
    ]
  },
  {
    id: 'pkg-yala-glamping-safari',
    slug: 'wild-yala-safari-glamping',
    title: 'Wild Yala & Southern Savannah Glamping',
    subtitle: 'Highest leopard density in the world, wild elephant herds, and luxury tented bush camps',
    category: 'safari',
    categoryLabel: 'Wildlife & Safari',
    durationDays: 5,
    durationNights: 4,
    priceUsd: 1650,
    rating: 4.98,
    reviewsCount: 44,
    heroImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
    overview: 'Step into the realm of the Sri Lankan leopard (Panthera pardus kotiya). Based in an eco-luxury tented safari camp on the border of Yala National Park, this immersive five-day expedition includes four private game drives in customized open-top safari Land Cruisers with senior naturalist trackers, visits to the Udawalawe Elephant Transit Home, and sundowners overlooking wild salt pans.',
    pace: 'Moderate',
    bestMonths: 'January – August (Block 1 Prime)',
    routeStops: ['Colombo', 'Udawalawe Sanctuary', 'Yala National Park Block 1', 'Bundala Wetlands', 'Tissamaharama'],
    highlights: [
      'Four private safari game drives in Yala National Park with professional naturalists',
      'Exclusive luxury tented lodge with open-air copper bathtubs & campfire dining',
      'Visit to Udawalawe Elephant Transit Home during rehabilitation feeding',
      'Birding expedition through UNESCO Bundala Ramsar wetlands (over 200 species)',
      'High probability leopard sightings on granite outcrop vantage points'
    ],
    included: [
      'All private 4x4 safari Land Cruiser game drives with tracker naturalist',
      '4 nights in luxury safari glamping tents with full board gourmet meals',
      'All Department of Wildlife Conservation park permits & entrance fees',
      'Chilled refreshments, safari optics (binoculars), and field guides',
      'Private air-conditioned transfers from/to Colombo Airport or Southern Coast'
    ],
    excluded: [
      'International flights',
      'Personal safari gratuities for trackers',
      'Travel insurance'
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Journey to the Wild South & Udawalawe Elephant Haven',
        location: 'Udawalawe & Yala Border',
        description: 'Depart Colombo through rolling coconut groves toward the southern dry zone. Stop at Udawalawe Elephant Transit Home, a pioneering sanctuary where orphaned baby elephants are nurtured and rehabilitated back into the wild. Arrive at your secluded Yala luxury tented camp by afternoon.',
        mealPlan: 'Lunch & Campfire Dinner included',
        accommodation: 'Wild Coast Tented Lodge or Leopard Trails Yala',
        highlights: ['Baby elephant feeding observation', 'Arriving at wilderness camp', 'Lantern-lit bush dinner']
      },
      {
        day: 2,
        title: 'Dawn Patrol into Yala Block 1: The Leopard Citadel',
        location: 'Yala National Park',
        description: 'Wake before dawn with freshly brewed Ceylon tea. Enter Yala National Park as gates open at 06:00. Traverse sand tracks between scrub forest and lagoons where leopards frequently patrol territory on fallen logs and warm rock ridges. Observe spotted deer, mugger crocodiles, and painted storks. Return to camp for a lazy midday lunch before an afternoon drive.',
        mealPlan: 'Full Board included',
        accommodation: 'Wild Coast Tented Lodge or Leopard Trails Yala',
        highlights: ['Sunrise game drive', 'Leopard tracking', 'Wild elephant encounters']
      },
      {
        day: 3,
        title: 'Sloth Bears, Tuskers & Sunset Over Sithulpawwa Rock',
        location: 'Yala National Park & Sithulpawwa',
        description: 'Today’s morning drive ventures toward Palatupana and deeper sectors of Block 1 in search of the elusive Sri Lankan sloth bear foraging for palu berries. In the late afternoon, visit the 2,200-year-old rock monastery of Sithulpawwa, situated on a dramatic rocky prominence overlooking the vast green jungle canopy.',
        mealPlan: 'Full Board included',
        accommodation: 'Wild Coast Tented Lodge or Leopard Trails Yala',
        highlights: ['Sloth bear tracking', 'Sithulpawwa ancient hermitage', 'Panoramic wilderness view']
      },
      {
        day: 4,
        title: 'Flamingos & Avian Splendour in Bundala Ramsar Sanctuary',
        location: 'Bundala National Park',
        description: 'Travel to Bundala National Park, Sri Lanka’s first Ramsar wetland reserve. Here, thousands of migratory birds gather in coastal lagoons: greater flamingos, spoonbills, sea eagles, and crested hawk-eagles. An afternoon nature walk with your naturalist explores native medicinal flora and coastal dunes.',
        mealPlan: 'Full Board included',
        accommodation: 'Wild Coast Tented Lodge or Leopard Trails Yala',
        highlights: ['Bundala birding safari', 'Flamingo flocks', 'Stargazing safari camp finale']
      },
      {
        day: 5,
        title: 'Final Bush Breakfast & Transfer',
        location: 'Colombo or Galle Extension',
        description: 'Savor a tranquil breakfast surrounded by wild birdcalls. Your private vehicle transfers you smoothly to Colombo Airport or on to the southern surf beaches for an extended coastal escape.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure or Beach Extension',
        highlights: ['Bush breakfast', 'Scenic transfer']
      }
    ]
  },
  {
    id: 'pkg-cultural-triangle',
    slug: 'cultural-triangle-sacred-citadel',
    title: 'The Cultural Triangle & Sacred Citadel',
    subtitle: 'Sigiriya Lion Rock fortress, Dambulla cave murals, and the Temple of the Sacred Tooth',
    category: 'heritage',
    categoryLabel: 'Cultural Heritage',
    durationDays: 8,
    durationNights: 7,
    priceUsd: 1780,
    rating: 4.97,
    reviewsCount: 52,
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    overview: 'Traverse 2,500 years of living Buddhist and royal civilization. Ascend King Kashyapa’s 5th-century palace citadel atop the sheer granite monolith of Sigiriya, marvel at golden Buddha statues inside the Dambulla rock caves, bicycle through the monumental stone ruins of ancient Polonnaruwa, and witness holy evening pujas at the Temple of the Tooth in the hill capital of Kandy.',
    pace: 'Moderate',
    bestMonths: 'Year-Round (Best Nov – Sep)',
    routeStops: ['Negombo', 'Sigiriya', 'Dambulla', 'Polonnaruwa', 'Matale Spice Valley', 'Kandy'],
    highlights: [
      'Sunrise climb of UNESCO Sigiriya Rock Fortress before crowds arrive',
      'Exploration of the ancient monastic rock caves of Dambulla with 153 Buddha statues',
      'Guided bicycle ride through the royal parks and palaces of Polonnaruwa',
      'Private blessing ceremony at Kandy’s Sri Dalada Maligawa (Temple of the Tooth)',
      'Stay in heritage boutique hotels embedded in tranquil jungle reservoirs'
    ],
    included: [
      'Private air-conditioned vehicle with licensed chauffeur-historian guide',
      '7 nights in authentic 4-star boutique heritage hotels & chalets',
      'All UNESCO World Heritage site admission passes',
      'Sigiriya morning climb passes & Polonnaruwa bicycle hire',
      'Daily curated breakfasts and traditional Sri Lankan rice & curry lunches',
      'VIP passes for Kandy cultural drum performance & Temple puja'
    ],
    excluded: [
      'International flights',
      'Hot air ballooning over Sigiriya (optional add-on)',
      'Gratuities for local guides'
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Arrival in Colombo & Transfer to the Cultural Plains',
        location: 'Sigiriya / Habarana',
        description: 'Arrive at Bandaranaike International Airport. Your chauffeur-guide welcomes you with fresh flower garlands. Drive northeast through tropical villages into the heart of the Cultural Triangle. Check into your eco-resort overlooking lotus-covered lakes.',
        mealPlan: 'Dinner included',
        accommodation: 'Water Garden Sigiriya or Aliya Resort',
        highlights: ['Rural landscape drive', 'Lotus reservoir sunset', 'Traditional herbal welcome']
      },
      {
        day: 2,
        title: 'Sigiriya Lion Rock Sunrise & Ancient Water Gardens',
        location: 'Sigiriya',
        description: 'Climb the 1,200 steps of the 5th-century Sigiriya Rock Fortress in the cool morning air. Pass through the massive carved Lion Paws, view the world-renowned celestial maiden frescoes, and inspect the ancient mirror wall. Stand atop the summit palace platform for a 360-degree jungle panorama.',
        mealPlan: 'Breakfast & Traditional Lunch included',
        accommodation: 'Water Garden Sigiriya or Aliya Resort',
        highlights: ['Sigiriya summit climb', '5th-century royal frescoes', 'Ancient hydraulic water gardens']
      },
      {
        day: 3,
        title: 'Bicycle Expedition Through Medieval Polonnaruwa',
        location: 'Polonnaruwa',
        description: 'Ride vintage bicycles through the shaded parklands of Polonnaruwa, Sri Lanka’s 11th-century royal capital. Visit the monumental Gal Vihara with its colossal granite Buddhas carved seamlessly out of a single rock face, the Council Chamber, and the colossal Parakrama Samudra reservoir.',
        mealPlan: 'Breakfast included',
        accommodation: 'Water Garden Sigiriya or Aliya Resort',
        highlights: ['Gal Vihara granite statues', 'Royal palace ruins', 'Bicycle safari under monkey trees']
      },
      {
        day: 4,
        title: 'Dambulla Cave Murals & Matale Spice Groves',
        location: 'Dambulla & Matale',
        description: 'Ascend to the five sacred rock cave temples of Dambulla, adorned with 2,000 square meters of painted Buddhist ceiling murals. Travel south through Matale’s spice gardens, learning how cardamoms, cloves, vanilla, and Ceylon cinnamon have been cultivated for centuries.',
        mealPlan: 'Breakfast & Spice Lunch included',
        accommodation: 'Kings Pavilion Kandy or Elephant Stables',
        highlights: ['Dambulla cave frescoes', 'Organic spice plantation tour', 'Scenic mountain pass']
      },
      {
        day: 5,
        title: 'Sacred Kandy: Temple of the Tooth & Royal Botanic Gardens',
        location: 'Kandy Hill Capital',
        description: 'Stroll around Kandy’s serene central lake. Explore the magnificent Royal Botanic Gardens at Peradeniya with its royal palm avenue and orchid collection. At dusk, participate in the reverent Thevava puja ritual at the Temple of the Sacred Tooth Relic accompanied by ceremonial drumming.',
        mealPlan: 'Breakfast included',
        accommodation: 'Kings Pavilion Kandy or Elephant Stables',
        highlights: ['Peradeniya Orchid House', 'Sacred Tooth Relic puja', 'Kandyan drumming & dance']
      },
      {
        day: 6,
        title: 'Lanka Gathas: Monastic Hermitages of Kandy Valley',
        location: 'Gadaladeniya & Embekke',
        description: 'Visit the 14th-century Gampola era temples: the intricately carved wooden pillars of Embekke Devalaya and the stone shrine of Gadaladeniya, reflecting South Indian Dravidian architectural influences. Savor high tea in a colonial tea salon overlooking the mist-shrouded knuckles range.',
        mealPlan: 'Breakfast & High Tea included',
        accommodation: 'Kings Pavilion Kandy or Elephant Stables',
        highlights: ['Embekke wood carvings', 'Gadaladeniya stone temple', 'Knuckles mountain vista']
      },
      {
        day: 7,
        title: 'Descent to Colombo via Pinnawala & Colonial Heritage',
        location: 'Colombo Fort',
        description: 'Descend through emerald hills toward the commercial capital of Colombo. Embark on a private sunset walking tour of Colombo Fort, inspecting restored Dutch and British colonial buildings, the Old Dutch Hospital quarter, and Galle Face Green promenade.',
        mealPlan: 'Breakfast & Farewell Dinner included',
        accommodation: 'Galle Face Hotel or Residence by Uga',
        highlights: ['Scenic hill descent', 'Colombo Fort heritage quarter', 'Sunset cocktail at Galle Face']
      },
      {
        day: 8,
        title: 'Farewell Sri Lanka',
        location: 'Colombo Airport',
        description: 'Transfer to Colombo Airport for your departure flight with enduring memories of the ancient kingdom.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        highlights: ['Seamless airport drop-off']
      }
    ]
  },
  {
    id: 'pkg-highland-mist-tea',
    slug: 'highland-mist-tea-trails-ella',
    title: 'Highland Mist, Ceylon Tea Trails & Ella',
    subtitle: 'Iconic scenic blue train, colonial tea bungalows, Nine Arch Bridge, and mountain summits',
    category: 'highlands',
    categoryLabel: 'Tea & Highlands',
    durationDays: 6,
    durationNights: 5,
    priceUsd: 1340,
    rating: 4.96,
    reviewsCount: 31,
    heroImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    overview: 'Escape into the cool, emerald highlands where the world’s finest orthodox Ceylon tea is plucked. Board the legendary scenic blue mountain train through misty peaks and pine forests, walk the tracks to Ella’s 1921 Nine Arch Bridge, stay in restored British colonial planter bungalows with log fires, and watch sunrise break over Lipton’s Seat.',
    pace: 'Relaxed',
    bestMonths: 'December – May',
    routeStops: ['Kandy', 'Nuwara Eliya', 'Nanu Oya Station', 'Ella', 'Haputale', 'Diyaluma Falls'],
    highlights: [
      'Reserved first-class observation train journey through tea mountain tunnels',
      'Exclusive tea factory masterclass with a master tea taster (cupping session)',
      'Sunrise expedition to Lipton’s Seat overlooking five southern provinces',
      'Morning walk to the iconic stone Nine Arch Bridge in Ella',
      'Hike Little Adam’s Peak and swim in natural pools above Ravana Falls'
    ],
    included: [
      'First-class scenic train tickets (Kandy to Ella)',
      '5 nights luxury tea bungalow & hill resort stays',
      'Dedicated private vehicle with experienced mountain driver',
      'Tea estate tasting experience & all entry permits',
      'Daily breakfast & afternoon British High Tea services'
    ],
    excluded: [
      'International airfares',
      'Lunches and personal incidentals'
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Ascent to Nuwara Eliya "Little England"',
        location: 'Nuwara Eliya',
        description: 'Drive upward through hairpin turns lined with cascading waterfalls (Ramboda Falls) and endless terraces of tea bushes. Reach Nuwara Eliya (1,868m elevation), known for its Tudor-style cottages, rose gardens, and crisp mountain climate.',
        mealPlan: 'Dinner included',
        accommodation: 'Heritance Tea Factory or The Grand Hotel',
        highlights: ['Ramboda waterfall stop', 'Colonial architecture', 'Evening log fire dinner']
      },
      {
        day: 2,
        title: 'Ceylon Tea Masterclass & Pedro Tea Estate',
        location: 'Pedro Estate & Gregory Lake',
        description: 'Walk through emerald tea fields alongside skilled tea harvesters. Tour the 1885 Pedro Tea Factory to observe processing: withering, rolling, fermenting, and firing. Participate in a professional cupping session. In the afternoon, enjoy a boat ride on Lake Gregory.',
        mealPlan: 'Breakfast & High Tea included',
        accommodation: 'Heritance Tea Factory or The Grand Hotel',
        highlights: ['Tea plucking experience', 'Tea cupping masterclass', 'Classic High Tea on the lawn']
      },
      {
        day: 3,
        title: 'The Legendary Blue Train Ride to Ella',
        location: 'Nanu Oya to Ella',
        description: 'Board the world-famous blue train at Nanu Oya. Wind past dramatic gorges, cloud forests, and eucalyptus groves with open carriage doors. Disembark in the bohemian mountain town of Ella, greeted by cool mountain breezes.',
        mealPlan: 'Breakfast included',
        accommodation: '98 Acres Resort & Spa or Hide Ella',
        highlights: ['Scenic blue train passage', 'Spectacular viaduct views', 'Ella mountain town']
      },
      {
        day: 4,
        title: 'Nine Arch Bridge & Little Adam’s Peak',
        location: 'Ella Gap',
        description: 'Hike through bamboo groves to view the 1921 Nine Arch Bridge as the morning steam train crosses the stone arches without a single piece of structural steel. Continue on a gentle trail up Little Adam’s Peak for panoramic views across the Ella Gap toward the southern plains.',
        mealPlan: 'Breakfast included',
        accommodation: '98 Acres Resort & Spa or Hide Ella',
        highlights: ['Nine Arch Bridge photo stop', 'Little Adam’s Peak panoramic summit', 'Ravana Pool Club relax']
      },
      {
        day: 5,
        title: 'Lipton’s Seat Sunrise & Diyaluma Waterfall',
        location: 'Haputale & Koslanda',
        description: 'Take a 4x4 jeep pre-dawn to Lipton’s Seat in Haputale, the cliff where Sir Thomas Lipton once stood proudly surveying his tea empire. The morning mist recedes to reveal views stretching to the southern ocean. Continue to Diyaluma Falls to swim in tranquil rock pools.',
        mealPlan: 'Breakfast & Picnic included',
        accommodation: '98 Acres Resort & Spa or Hide Ella',
        highlights: ['Lipton’s Seat sunrise', 'Natural infinity rock pools', 'Dramatic waterfalls']
      },
      {
        day: 6,
        title: 'Descent Toward Colombo or South Coast',
        location: 'Colombo or Coast',
        description: 'Descend through the southern foothills. Your driver transfers you either to Colombo Airport or south to the beaches of Mirissa/Weligama.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        highlights: ['Scenic mountain descent', 'Smooth airport transfer']
      }
    ]
  },
  {
    id: 'pkg-grand-odyssey',
    slug: 'grand-ceylon-odyssey-complete',
    title: 'The Grand Ceylon Odyssey: All-in-One Expedition',
    subtitle: 'The quintessential 14-day Sri Lankan journey uniting ancient temples, misty tea country, wild Yala safaris, and southern coast surf',
    category: 'odyssey',
    categoryLabel: 'Grand Odyssey',
    durationDays: 14,
    durationNights: 13,
    priceUsd: 3250,
    rating: 4.99,
    reviewsCount: 67,
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    overview: 'The definitive Sri Lankan holiday. Crafted for travelers who want to experience the complete spectrum of the island without rushing: the ancient royal strongholds of Sigiriya and Polonnaruwa, the misty peaks of Ella by blue train, wild leopard and elephant tracking in Yala National Park, surf sessions in Weligama Bay, and colonial sundowners in Galle Fort.',
    pace: 'Moderate',
    bestMonths: 'November – May',
    routeStops: ['Negombo', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala National Park', 'Weligama & Mirissa', 'Galle Fort', 'Colombo'],
    highlights: [
      'Comprehensive master route covering UNESCO heritage, mountains, safari, and beaches',
      'Sigiriya Lion Rock sunrise climb + Polonnaruwa ruins',
      'First-class observation train car through the tea country',
      'Two private open-top 4x4 safaris in Yala Block 1 with expert naturalists',
      'Private surf lessons in Weligama + catamaran whale sailing in Mirissa',
      'Stay in curated five-star luxury retreats and boutique colonial heritage manors'
    ],
    included: [
      'Dedicated executive air-conditioned vehicle & certified English-speaking chauffeur-guide',
      '13 nights in premium 5-star hotels, luxury glamping tents, and heritage villas',
      'All national park safaris, game tracker fees, and permits',
      'All UNESCO World Heritage admissions and train tickets',
      'Daily gourmet breakfasts and six signature culinary experiences'
    ],
    excluded: [
      'International airfares',
      'Personal travel insurance',
      'Alcoholic beverages and discretionary tips'
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Arrival in Colombo & Coastal Welcome',
        location: 'Negombo Coast',
        description: 'Arrive at Colombo (CMB). Meet your private chauffeur-guide. Relax after your flight at a seaside luxury resort in Negombo with views of traditional fishing catamarans.',
        mealPlan: 'Dinner included',
        accommodation: 'The Wallawwa or Jetwing Beach',
        highlights: ['Chauffeured airport pickup', 'Ayurvedic head massage', 'Welcome briefing']
      },
      {
        day: 2,
        title: 'Journey to the Ancient Cultural Plains',
        location: 'Sigiriya',
        description: 'Travel inland past coconut estates to Sigiriya. Relax in your jungle sanctuary with direct views of the ancient monolith.',
        mealPlan: 'Breakfast & Dinner included',
        accommodation: 'Water Garden Sigiriya',
        highlights: ['Scenic inland drive', 'Sunset rock view']
      },
      {
        day: 3,
        title: 'Sigiriya Lion Rock & Polonnaruwa Bicycles',
        location: 'Sigiriya & Polonnaruwa',
        description: 'Sunrise climb of Sigiriya Rock Fortress. Afternoon bicycle expedition through the medieval stone palace ruins and Gal Vihara of Polonnaruwa.',
        mealPlan: 'Breakfast included',
        accommodation: 'Water Garden Sigiriya',
        highlights: ['Sigiriya frescoes', 'Polonnaruwa stone Buddhas', 'Village farm lunch']
      },
      {
        day: 4,
        title: 'Dambulla Rock Caves & Scenic Drive to Kandy',
        location: 'Dambulla & Kandy',
        description: 'Visit the 5 sacred cave temples of Dambulla. Continue through spice valleys to the last royal kingdom of Kandy. Attend evening drumming at the Temple of the Tooth.',
        mealPlan: 'Breakfast included',
        accommodation: 'Kings Pavilion Kandy',
        highlights: ['Golden Dambulla cave murals', 'Kandy Sacred Tooth Relic ceremony']
      },
      {
        day: 5,
        title: 'Royal Botanic Gardens & Ascent to Tea Estates',
        location: 'Peradeniya & Nuwara Eliya',
        description: 'Tour Peradeniya Royal Botanic Gardens, then ascend into the cool misty mountains of Nuwara Eliya. Tour Pedro Tea Estate and stay in a colonial manor.',
        mealPlan: 'Breakfast & High Tea included',
        accommodation: 'The Grand Hotel Nuwara Eliya',
        highlights: ['Giant Java fig tree', 'Ceylon tea tasting', 'Colonial fireplace cocktails']
      },
      {
        day: 6,
        title: 'The Iconic Scenic Blue Train to Ella',
        location: 'Nanu Oya to Ella',
        description: 'Board the historic blue mountain train. Wind across cloud forests, arriving in Ella for afternoon tea overlooking the Ella Gap.',
        mealPlan: 'Breakfast included',
        accommodation: '98 Acres Resort & Spa',
        highlights: ['Classic blue train passage', 'Mountain vistas']
      },
      {
        day: 7,
        title: 'Nine Arch Bridge & Little Adam’s Peak',
        location: 'Ella',
        description: 'Walk through tea trails to witness trains crossing the 1921 Nine Arch Bridge. Hike Little Adam’s Peak and enjoy an evening cocktail in Ella town.',
        mealPlan: 'Breakfast included',
        accommodation: '98 Acres Resort & Spa',
        highlights: ['Nine Arch Bridge photo session', 'Peak hike', 'Ella nightlife']
      },
      {
        day: 8,
        title: 'Descent to the Southern Savannah & Yala Camp',
        location: 'Yala National Park',
        description: 'Descend through Ravana Falls toward the southern wilderness of Yala. Check into your luxury glamping camp with private plunge pool.',
        mealPlan: 'Lunch & Dinner included',
        accommodation: 'Wild Coast Tented Lodge',
        highlights: ['Ravana Falls', 'Safari glamping arrival', 'Stargazing bush dinner']
      },
      {
        day: 9,
        title: 'Dual Game Drives: Leopard & Elephant Kingdom',
        location: 'Yala National Park Block 1',
        description: 'Full day of wildlife exploration with dawn and twilight game drives in customized open Land Cruisers with senior trackers.',
        mealPlan: 'Full Board included',
        accommodation: 'Wild Coast Tented Lodge',
        highlights: ['Leopard tracking', 'Wild elephant herds', 'Crocodile lagoons']
      },
      {
        day: 10,
        title: 'Transfer to the Southern Coast: Weligama Bay',
        location: 'Weligama & Mirissa',
        description: 'Drive along the sparkling south coast to Weligama Bay. Check into your ocean villa. Afternoon introductory surf lesson or beach stroll.',
        mealPlan: 'Breakfast included',
        accommodation: 'Cape Weligama or Eraeliya Villas',
        highlights: ['Coastal drive', 'Sunset surf session', 'Fresh seafood feast']
      },
      {
        day: 11,
        title: 'Blue Whale Sail & Afternoon Wave Session',
        location: 'Mirissa & Weligama',
        description: 'Dawn catamaran whale watching expedition off Mirissa. Afternoon surf coaching session with video feedback.',
        mealPlan: 'Breakfast included',
        accommodation: 'Cape Weligama or Eraeliya Villas',
        highlights: ['Blue whale encounters', 'Surf coaching', 'Coconut sunset']
      },
      {
        day: 12,
        title: 'Living History: UNESCO Galle Fort Ramparts',
        location: 'Galle Fort',
        description: 'Private guided architectural walk around the 17th-century Dutch ramparts, lighthouse, and cobblestone alleys. Dinner at a restored Dutch mansion.',
        mealPlan: 'Breakfast & Heritage Dinner included',
        accommodation: 'The Fort Printers Galle',
        highlights: ['Galle lighthouse', 'Antique jewelry shops', 'Sunset bastion walk']
      },
      {
        day: 13,
        title: 'Cinnamon Lagoon Cruise & Colombo City Heritage',
        location: 'Koggala & Colombo',
        description: 'Morning boat safari across Koggala Lake to Cinnamon Island. Drive up the expressway to Colombo for shopping and a farewell rooftop dinner.',
        mealPlan: 'Breakfast & Farewell Dinner included',
        accommodation: 'Galle Face Hotel Colombo',
        highlights: ['Cinnamon harvesting', 'Old Dutch Hospital quarter', 'Rooftop cocktail']
      },
      {
        day: 14,
        title: 'Departure from Bandaranaike International',
        location: 'Colombo Airport',
        description: 'Private transfer to Colombo Airport with departure assistance.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        highlights: ['Comfortable expressway transfer', 'Farewell gift package']
      }
    ]
  },
  {
    id: 'pkg-east-coast-surf',
    slug: 'arugam-bay-east-coast-surf-safari',
    title: 'East Coast Surf & Kumana Wilderness',
    subtitle: 'World-renowned right-hand point breaks in Arugam Bay, Pottuvil lagoon, and Kumana leopards',
    category: 'surf',
    categoryLabel: 'Surf & Ocean',
    durationDays: 6,
    durationNights: 5,
    priceUsd: 1290,
    rating: 4.93,
    reviewsCount: 29,
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    overview: 'Designed for intermediate and advanced surfers seeking Sri Lanka’s greatest right-hand point breaks. Based in laid-back Arugam Bay on the wild East Coast, this tour includes daily sessions at Main Point, Whiskey Point, and Peanut Farm, combined with a wildlife safari in Kumana National Park and wooden canoe safaris through Pottuvil mangrove lagoons.',
    pace: 'Active',
    bestMonths: 'May – October (East Coast Prime)',
    routeStops: ['Colombo / Batticaloa', 'Arugam Bay', 'Whiskey Point', 'Peanut Farm', 'Kumana National Park', 'Pottuvil'],
    highlights: [
      'Surfing Main Point right-hand sand point break (rides up to 400 meters)',
      'Dawn sessions at Whiskey Point & secret breaks with local watermen',
      'Wild safari in Kumana National Park (fewer crowds, high leopard & bird density)',
      'Sunset mangrove canoe safari spotting wild swimming elephants and saltwater crocs',
      'Beachfront eco-cabana accommodation with organic healthy dining'
    ],
    included: [
      'Private 4x4 surf transport to regional breaks every morning and afternoon',
      '5 nights beachfront boutique cabana accommodation',
      'Kumana National Park safari with open 4x4 and wildlife ranger',
      'Daily breakfast and energy smoothie bowls',
      'Airport transfer from Colombo or Batticaloa'
    ],
    excluded: [
      'International flights',
      'Personal surf board damage insurance'
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Arrival in Arugam Bay: The Surfer’s Haven',
        location: 'Arugam Bay',
        description: 'Arrive in bohemian Arugam Bay. Check in to your beachfront surf lodge. Join your local guide for an afternoon orientation surf at Baby Point, followed by fresh coconut water on the sand.',
        mealPlan: 'Dinner included',
        accommodation: 'Kottukal Beach House or Blue Rocks Arugam',
        highlights: ['Orientation session', 'Baby Point warm-up wave', 'Beach campfire']
      },
      {
        day: 2,
        title: 'Main Point Right Hand Peelers',
        location: 'Main Point Arugam',
        description: 'Dawn patrol at the legendary Main Point. Enjoy clean 3 to 6-foot rights peeling effortlessly over sand and coral. Rest midday in hammocks before an afternoon session at Elephant Rock.',
        mealPlan: 'Breakfast included',
        accommodation: 'Kottukal Beach House or Blue Rocks Arugam',
        highlights: ['Main Point marathon rides', 'Elephant Rock sunset lookout']
      },
      {
        day: 3,
        title: 'Whiskey Point & Pottuvil Lagoon Safari',
        location: 'Pottuvil',
        description: 'Morning surf at Whiskey Point, known for its punchy take-offs and playful right walls. In the late afternoon, board quiet wooden canoes in Pottuvil Lagoon to watch sea eagles, monitor lizards, and wild elephants feeding along the reeds.',
        mealPlan: 'Breakfast included',
        accommodation: 'Kottukal Beach House or Blue Rocks Arugam',
        highlights: ['Whiskey Point wave', 'Silent canoe lagoon safari', 'Wild elephant viewing']
      },
      {
        day: 4,
        title: 'Safari into Kumana National Park (Yala East)',
        location: 'Kumana National Park',
        description: 'Take a break from the surf with a dedicated 4x4 wildlife safari into Kumana National Park. Far less crowded than Yala West, Kumana is renowned for pristine bird sanctuaries, wild leopard sightings on granite outcrops, and massive elephant herds.',
        mealPlan: 'Breakfast & Safari Lunch included',
        accommodation: 'Kottukal Beach House or Blue Rocks Arugam',
        highlights: ['Kumana bird sanctuary', 'Quiet leopard tracking', 'Sand dune panorama']
      },
      {
        day: 5,
        title: 'Peanut Farm & Secret Point Dawn Session',
        location: 'Peanut Farm',
        description: '4x4 trip through sandy jungle tracks to Peanut Farm. Surf the two distinct points: a fast hollow outer section and a gentle inside peel. Enjoy an authentic seafood barbecue under the palms.',
        mealPlan: 'Breakfast & Seafood BBQ included',
        accommodation: 'Kottukal Beach House or Blue Rocks Arugam',
        highlights: ['Peanut Farm right point', 'Jungle track 4x4 ride', 'Farewell beach feast']
      },
      {
        day: 6,
        title: 'Morning Farewell Wave & Departure',
        location: 'Colombo / Departure',
        description: 'One final sunrise wave before packing boards and taking your private air-conditioned vehicle back to Colombo or your next destination.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        highlights: ['Sunrise session', 'Private airport transfer']
      }
    ]
  }
];
