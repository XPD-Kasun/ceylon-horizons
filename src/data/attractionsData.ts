import { AttractionArea } from '../types/tourism';

export const ATTRACTIONS_DATA: AttractionArea[] = [
  {
    id: 'attraction-surfing',
    key: 'surfing',
    title: 'World-Class Surfing Coastlines',
    tagline: 'Year-round 28°C tropical waters, consistent Indian Ocean swells, and legendary point breaks',
    description: 'Sri Lanka is an extraordinary year-round surfing paradise thanks to dual monsoon systems. When the southwest monsoon brings waves to the East Coast (May to October), Arugam Bay comes alive with world-class right-hand point breaks. When the northeast monsoon arrives (November to April), the South and West Coast from Weligama to Midigama and Hiriketiya delivers glassy peeling point and reef breaks.',
    heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    bestSeason: 'South Coast: Nov – Apr | East Coast: May – Oct (Year-round surfing available)',
    idealDuration: '4 to 10 Days',
    highlights: [
      'Dual seasonal microclimates guarantee perfect swell 365 days a year',
      'Weligama Bay: One of the world’s safest, gentlest sandy beach breaks for beginners and improvers',
      'Arugam Bay Main Point: Globally acclaimed right-hand sand point break with rides up to 400m',
      'Midigama & Kabalana: Powerful reef breaks like Rams, Lazy Left, and The Rock for intermediate and expert surfers',
      'Warm 28°C ocean with no wetsuits required—boardshorts and rashguards only'
    ],
    spots: [
      {
        name: 'Weligama Beach Break',
        location: 'Southern Province',
        description: 'A protected 2km crescent bay with soft sand bottom and gentle rolling lines. Ideal for beginners, longboarders, and surf coaching clinics.',
        tag: 'Beginner & Longboard',
        levelOrHighlight: 'Sand Bottom · 2-4ft peeling waves',
        idealTime: 'Sunrise & 4:00 PM sunset sessions'
      },
      {
        name: 'Arugam Bay Main Point',
        location: 'Eastern Province',
        description: 'A legendary world tour competition wave. Fast hollow takeoff section on the outside that reels down the point into a long playful wall.',
        tag: 'Intermediate to Advanced',
        levelOrHighlight: 'Right Sand Point · 3-7ft waves with barrels',
        idealTime: 'Dawn offshores (May to October)'
      },
      {
        name: 'Midigama (Rams & Lazy Left)',
        location: 'Southern Province',
        description: 'A cluster of 5 distinct breaks within walking distance. Rams offers a short punchy A-frame reef barrel, while Lazy Left delivers long gentle carves.',
        tag: 'Intermediate to Pro',
        levelOrHighlight: 'Reef Break · Short barrels & hollow sections',
        idealTime: 'Mid-tide rising (November to April)'
      },
      {
        name: 'Hiriketiya Horseshoe Cove',
        location: 'Southern Province (Dikwella)',
        description: 'A lush jungle-wrapped bay offering both a fast left-hand reef break on the point and soft beach waves in the center. Bohemian surf culture vibe.',
        tag: 'All Levels',
        levelOrHighlight: 'Left Point & Beach Break · Idyllic atmosphere',
        idealTime: 'High tide for reef, all tides for beach'
      }
    ],
    insiderTips: [
      'Bring reef booties if you plan to surf Midigama or Kabalana reef breaks at lower tides.',
      'Our packages include private 4x4 surf shuttles so you can chase the best wind and tide daily without renting unreliable scooters.',
      'Combine morning surf with midday relaxation and twilight yoga on beachfront shala pavilions.'
    ]
  },
  {
    id: 'attraction-yala',
    key: 'yala',
    title: 'Yala Safari & Wilderness Camping',
    tagline: 'The kingdom of the Sri Lankan leopard, wild tuskers, and luxury glamping under equatorial stars',
    description: 'Yala National Park, sprawling across 978 square kilometers of thorn scrub, dramatic rocky outcrops, brackish lagoons, and coastline, is Sri Lanka’s crown wildlife jewel. Block 1 hosts one of the highest known densities of leopards on Earth (Panthera pardus kotiya). Experience this raw dry-zone ecosystem while staying in bespoke safari glamping camps featuring private canvas pavilions, campfire gourmet dining, and guided game drives with biologist naturalists.',
    heroImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
    bestSeason: 'February – July (Drier months mean wildlife congregates around lagoons)',
    idealDuration: '3 to 5 Days',
    highlights: [
      'Exceptional sighting rates of the majestic Sri Lankan leopard (apex predator of the island)',
      'Luxury tented safari camping with solar electricity, private ensuite outdoor showers, and lantern dining',
      'Customized open-sided 4x4 Toyota Land Cruisers with tiered photography seating',
      'The "Big Three" of Sri Lanka: Sri Lankan Leopard, Asian Elephant, and Sloth Bear',
      'Over 215 bird species including crested serpent eagles, painted storks, and hornbills'
    ],
    spots: [
      {
        name: 'Yala Block 1 (Ruhuna)',
        location: 'Southern / Uva Province',
        description: 'The core sector featuring iconic granite rock formations like Kotademuwa and Patanagala beach. Leopard territory with high tracking success.',
        tag: 'Leopard & Mammals',
        levelOrHighlight: 'High density predator zone',
        idealTime: '06:00 AM dawn gate opening & 3:30 PM'
      },
      {
        name: 'Udawalawe Elephant Transit Home',
        location: 'Sabaragamuwa Province',
        description: 'A humane rehabilitation center supported by Born Free Foundation where orphaned elephant calves are cared for until wild release.',
        tag: 'Conservation',
        levelOrHighlight: 'Wild calf milk feeding sessions',
        idealTime: '09:00, 12:00, 15:00 feeding hours'
      },
      {
        name: 'Bundala Ramsar Bird Sanctuary',
        location: 'Hambantota Coastline',
        description: 'An international Ramsar wetland featuring coastal salt pans, lagoons, and marshes hosting up to 20,000 migratory shorebirds and greater flamingos.',
        tag: 'Avian Wildlife',
        levelOrHighlight: '200+ bird species & wild herds',
        idealTime: 'Morning 06:30 – 10:00 AM'
      },
      {
        name: 'Kumana National Park (Yala East)',
        location: 'Eastern Province',
        description: 'The quieter, remote eastern sector of Yala known for mangrove swamps, serene waterhole hides, and unhurried leopard encounters without tourist convoys.',
        tag: 'Remote Wilderness',
        levelOrHighlight: 'Wild solitude & Kumana Villu wetland',
        idealTime: 'Full day safari with bush picnic'
      }
    ],
    insiderTips: [
      'Choose a private safari Land Cruiser rather than sharing with strangers; it gives you total control over how long you wait at leopard sightings.',
      'Wear neutral earthy tones (khaki, olive, beige) and avoid bright whites or neon colors which can startle animals.',
      'Our agency enforces a strict ethical code: minimum 20-meter distance from animals and zero engine idling during sensitive observations.'
    ]
  },
  {
    id: 'attraction-cultural',
    key: 'cultural',
    title: 'Ancient Kingdoms & Cultural Heritage',
    tagline: 'Sigiriya citadel in the sky, 2,000-year-old painted cave sanctuaries, and sacred relic temples',
    description: 'Sri Lanka’s Cultural Triangle is a treasure trove of UNESCO World Heritage sites bearing testament to sophisticated hydraulic engineering, monumental stone sculpture, and deep Buddhist spiritual heritage spanning over two and a half millennia. From King Kashyapa’s 5th-century palace fortress atop the 200m vertical monolith of Sigiriya to the living colonial Dutch ramparts of Galle Fort, discover a civilization that flourished when Rome was still an empire.',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80',
    bestSeason: 'Year-Round (Pleasant throughout; light morning visits recommended)',
    idealDuration: '4 to 8 Days',
    highlights: [
      'Sigiriya Lion Rock: 5th-century architectural marvel with hydraulic water gardens and celestial frescoes',
      'Dambulla Cave Complex: 5 sacred caves cut into living granite with 153 gilded Buddha statues and 2,100 m² of ceiling murals',
      'Ancient Polonnaruwa: Medieval capital with the Gal Vihara colossal Buddhas carved out of single granite rock face',
      'Kandy Temple of the Tooth (Sri Dalada Maligawa): Housing the sacred canine relic of the Gautama Buddha',
      'Galle Dutch Fort: The largest remaining European fortress in Asia, today a thriving enclave of boutiques, cafes, and ramparts'
    ],
    spots: [
      {
        name: 'Sigiriya (Lion Rock Fortress)',
        location: 'Matale District, Central Province',
        description: 'A 200-meter sheer volcanic rock monolith converted into an opulent royal citadel by King Kashyapa in 477 AD. Features the world-famous mirror wall and frescoes.',
        tag: 'UNESCO World Heritage',
        levelOrHighlight: '1,200 steps · 360° jungle canopy view',
        idealTime: '06:30 AM sunrise ascent before heat'
      },
      {
        name: 'Dambulla Golden Cave Temple',
        location: 'Dambulla, Central Province',
        description: 'A sacred pilgrimage site since the 1st century BC. Five caves preserve intricate Sinhala religious art under the overhang of a colossal rock cliff.',
        tag: 'Monastic Frescoes',
        levelOrHighlight: '153 gilded Buddha statues',
        idealTime: 'Late afternoon as soft light enters caves'
      },
      {
        name: 'Gal Vihara at Polonnaruwa',
        location: 'Polonnaruwa Ancient City',
        description: 'Four monumental Buddha statues carved with astonishing naturalistic grace from a single seamless granite outcrop during King Parakramabahu I’s reign.',
        tag: 'Stone Sculpture',
        levelOrHighlight: '14-meter reclining Buddha statue',
        idealTime: 'Early morning by bicycle'
      },
      {
        name: 'Galle Dutch Fort & Ramparts',
        location: 'Galle, Southern Province',
        description: 'First built by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century. A living heritage town with colonial villas, churches, and ramparts.',
        tag: 'Living Heritage',
        levelOrHighlight: 'Lighthouse & sunset ocean bastions',
        idealTime: '04:30 PM sunset bastion promenade'
      }
    ],
    insiderTips: [
      'When visiting sacred Buddhist temples (Kandy, Dambulla, Anuradhapura), dress modestly covering shoulders and knees, and remove shoes and headwear.',
      'Climb Sigiriya at 06:30 AM sharp; you avoid midday heat, beat tourist crowds, and witness morning mist clearing over the jungle canopy.',
      'Our agency provides licensed archeologist-historian chauffeur guides who reveal secret stories and inscriptions that casual tourists miss.'
    ]
  }
];
