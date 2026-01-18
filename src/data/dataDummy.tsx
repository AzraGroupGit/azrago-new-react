export interface Destination {
  id: number;
  name: string;
  tagline: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  meetingPoint: string;
  importantInfo: string[];
  cancelPolicy: string;
}

export const destinationsData: Destination[] = [
  {
    id: 1,
    name: "Bali Paradise",
    tagline: "Experience the Island of Gods",
    location: "Bali, Indonesia",
    price: 1299,
    duration: "7 Days 6 Nights",
    rating: 4.8,
    reviews: 324,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    description:
      "Experience the ultimate tropical paradise with stunning beaches and rich culture",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80",
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&q=80",
    ],
    overview:
      "Discover the enchanting beauty of Bali with our carefully curated 7-day package. Experience pristine beaches, ancient temples, lush rice terraces, and vibrant culture. This tour includes accommodation, guided tours, and unforgettable experiences that will make your Bali vacation truly magical.",
    highlights: [
      "Visit iconic Tanah Lot Temple during sunset",
      "Explore the stunning Tegalalang Rice Terraces",
      "Relax on beautiful Seminyak Beach",
      "Experience traditional Balinese dance performance",
      "Visit sacred Tirta Empul water temple",
      "Enjoy authentic Balinese cuisine",
      "Snorkeling at Blue Lagoon",
      "Ubud Monkey Forest tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & South Bali Exploration",
        activities: [
          "Airport pickup and hotel check-in",
          "Visit Uluwatu Temple perched on cliff",
          "Watch traditional Kecak Fire Dance at sunset",
          "Dinner at Jimbaran Beach seafood restaurant",
          "Return to hotel for rest",
        ],
      },
      {
        day: 2,
        title: "Ubud Culture & Nature",
        activities: [
          "Breakfast at hotel",
          "Visit Tegalalang Rice Terraces",
          "Coffee plantation tour and tasting",
          "Lunch at local restaurant",
          "Explore Ubud Monkey Forest",
          "Ubud Art Market shopping",
          "Traditional Balinese dinner",
          "Return to hotel",
        ],
      },
      {
        day: 3,
        title: "Water Temple & Volcano",
        activities: [
          "Early breakfast",
          "Visit Tirta Empul holy water temple",
          "Mount Batur viewpoint",
          "Lunch with volcano view",
          "Visit Tegenungan Waterfall",
          "Free evening at hotel",
          "Dinner at hotel",
        ],
      },
      {
        day: 4,
        title: "Beach & Water Activities",
        activities: [
          "Breakfast at hotel",
          "Snorkeling at Blue Lagoon",
          "Beach BBQ lunch",
          "Free time at Sanur Beach",
          "Beach sunset viewing",
          "Seafood dinner",
          "Return to hotel",
        ],
      },
      {
        day: 5,
        title: "Tanah Lot & Seminyak",
        activities: [
          "Breakfast at hotel and check-out",
          "Visit Tanah Lot Temple",
          "Transfer to Seminyak",
          "Check-in at beach resort",
          "Free time at Seminyak Beach",
          "Dinner at beachfront restaurant",
        ],
      },
      {
        day: 6,
        title: "Free Day & Spa",
        activities: [
          "Breakfast at resort",
          "Free morning - beach or pool",
          "Lunch at resort",
          "Traditional Balinese spa treatment",
          "Sunset at beach",
          "Farewell dinner with cultural show",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Breakfast at resort",
          "Free time until check-out",
          "Last-minute shopping",
          "Lunch (own arrangement)",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    inclusions: [
      "6 nights accommodation (4-star hotels)",
      "Daily breakfast",
      "Airport transfers (arrival & departure)",
      "Private air-conditioned vehicle",
      "English-speaking tour guide",
      "All entrance fees to attractions",
      "4 lunches and 5 dinners",
      "Snorkeling equipment",
      "Traditional spa treatment",
      "Mineral water during tours",
      "Travel insurance",
    ],
    exclusions: [
      "International flight tickets",
      "Personal expenses",
      "Tips for guide and driver",
      "Additional meals not mentioned",
      "Optional activities",
      "Travel visa (if required)",
      "Alcoholic beverages",
    ],
    meetingPoint: "Ngurah Rai International Airport (DPS) - Arrival Hall",
    importantInfo: [
      "Comfortable walking shoes recommended",
      "Bring sunscreen, hat, and sunglasses",
      "Modest dress required for temple visits",
      "Camera for capturing memories",
      "Valid passport required (min 6 months validity)",
      "Minimum 2 people per booking",
      "Suitable for all fitness levels",
    ],
    cancelPolicy:
      "Free cancellation up to 14 days before departure. 50% refund for cancellations 7-14 days before. No refund for cancellations less than 7 days before departure.",
  },
  {
    id: 2,
    name: "Tokyo Adventure",
    tagline: "Modern Meets Traditional",
    location: "Tokyo, Japan",
    price: 1899,
    duration: "5 Days 4 Nights",
    rating: 4.9,
    reviews: 256,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    description:
      "Discover the perfect blend of tradition and modernity in Japan's capital",
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80",
    ],
    overview:
      "Experience Tokyo's unique blend of ultra-modern and traditional culture. From ancient temples to neon-lit streets, bustling markets to serene gardens, this 5-day journey will immerse you in the heart of Japan's fascinating capital city.",
    highlights: [
      "Visit iconic Senso-ji Temple in Asakusa",
      "Experience the famous Shibuya Crossing",
      "Explore traditional Meiji Shrine",
      "Shop in trendy Harajuku district",
      "Enjoy panoramic views from Tokyo Skytree",
      "Authentic sushi-making class",
      "Day trip to Mount Fuji",
      "Traditional tea ceremony experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Shinjuku",
        activities: [
          "Airport pickup and hotel check-in",
          "Explore Shinjuku district",
          "Visit Tokyo Metropolitan Building observation deck",
          "Dinner at local izakaya",
          "Night walk in Kabukicho",
        ],
      },
      {
        day: 2,
        title: "Traditional Tokyo",
        activities: [
          "Breakfast at hotel",
          "Visit Senso-ji Temple and Nakamise Shopping Street",
          "Traditional lunch in Asakusa",
          "Tea ceremony experience",
          "Meiji Shrine visit",
          "Harajuku street exploration",
          "Dinner in Shibuya",
        ],
      },
      {
        day: 3,
        title: "Mount Fuji Day Trip",
        activities: [
          "Early breakfast",
          "Bus to Mount Fuji",
          "Visit Fuji 5th Station",
          "Lake Kawaguchi sightseeing",
          "Traditional lunch with Fuji view",
          "Oshino Hakkai village",
          "Return to Tokyo",
          "Free evening",
        ],
      },
      {
        day: 4,
        title: "Modern Tokyo",
        activities: [
          "Breakfast at hotel",
          "Tokyo Skytree visit",
          "Akihabara electronics district",
          "Sushi-making class and lunch",
          "Shopping in Ginza",
          "Teamlab Borderless digital art museum",
          "Farewell dinner cruise on Sumida River",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Last-minute shopping in Ueno",
          "Check-out",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    inclusions: [
      "4 nights accommodation in central Tokyo hotel",
      "Daily breakfast",
      "Airport transfers",
      "Mt. Fuji day trip with guide",
      "All entrance fees",
      "English-speaking guide",
      "Sushi-making class",
      "Tea ceremony experience",
      "3 lunches and 3 dinners",
      "Tokyo Metro 72-hour pass",
      "Travel insurance",
    ],
    exclusions: [
      "International flights",
      "Japan Rail Pass",
      "Personal expenses",
      "Meals not mentioned",
      "Tips",
      "Optional activities",
      "Travel visa",
    ],
    meetingPoint: "Narita/Haneda International Airport - Arrival Hall",
    importantInfo: [
      "Comfortable walking shoes essential",
      "Cash recommended for small shops",
      "Respect temple etiquette",
      "Weather can vary - bring layers",
      "English widely spoken in tourist areas",
      "Minimum 2 people per booking",
    ],
    cancelPolicy:
      "Free cancellation up to 14 days before departure. 50% refund for 7-14 days. No refund less than 7 days.",
  },
  {
    id: 3,
    name: "Paris Romance",
    tagline: "City of Light & Love",
    location: "Paris, France",
    price: 2299,
    duration: "6 Days 5 Nights",
    rating: 4.7,
    reviews: 412,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description: "Fall in love with the City of Light and its timeless charm",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=80",
      "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=1200&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
    ],
    overview:
      "Immerse yourself in the romance and elegance of Paris. From the iconic Eiffel Tower to charming cafés, world-class museums to scenic Seine cruises, experience the magic that makes Paris the most visited city in the world.",
    highlights: [
      "Eiffel Tower with skip-the-line access",
      "Louvre Museum guided tour",
      "Seine River dinner cruise",
      "Versailles Palace day trip",
      "Montmartre and Sacré-Cœur",
      "French pastry workshop",
      "Notre-Dame Cathedral (exterior)",
      "Champs-Élysées shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Eiffel Tower",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Afternoon at Eiffel Tower",
          "Seine River walk",
          "Welcome dinner at bistro",
        ],
      },
      {
        day: 2,
        title: "Art & Culture",
        activities: [
          "Breakfast at hotel",
          "Skip-the-line Louvre Museum tour",
          "Lunch in Le Marais",
          "Musée d'Orsay visit",
          "Evening at Latin Quarter",
          "Traditional French dinner",
        ],
      },
      {
        day: 3,
        title: "Versailles Day Trip",
        activities: [
          "Early breakfast",
          "Train to Versailles",
          "Palace of Versailles guided tour",
          "Gardens exploration",
          "Lunch at Versailles",
          "Return to Paris",
          "Free evening",
        ],
      },
      {
        day: 4,
        title: "Montmartre & Romance",
        activities: [
          "Breakfast at hotel",
          "Montmartre walking tour",
          "Sacré-Cœur Basilica",
          "Artists' square",
          "Lunch at local café",
          "French pastry workshop",
          "Seine River dinner cruise",
        ],
      },
      {
        day: 5,
        title: "Shopping & Exploring",
        activities: [
          "Breakfast at hotel",
          "Champs-Élysées shopping",
          "Arc de Triomphe",
          "Lunch at café",
          "Notre-Dame exterior visit",
          "Sainte-Chapelle",
          "Farewell dinner at Michelin restaurant",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Last-minute shopping",
          "Check-out",
          "Airport transfer",
        ],
      },
    ],
    inclusions: [
      "5 nights 4-star hotel in central Paris",
      "Daily breakfast",
      "Airport transfers",
      "Skip-the-line Eiffel Tower tickets",
      "Louvre Museum guided tour",
      "Versailles day trip",
      "Seine River dinner cruise",
      "Pastry workshop",
      "Paris Metro pass",
      "3 lunches and 4 dinners",
      "English-speaking guide",
      "Travel insurance",
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Tips for guide",
      "Additional meals",
      "Optional activities",
      "Travel visa",
      "Alcoholic beverages",
    ],
    meetingPoint: "Charles de Gaulle Airport (CDG) - Arrival Hall",
    importantInfo: [
      "Comfortable walking shoes required",
      "Museums closed on certain days",
      "French phrases helpful but not required",
      "Pickpockets in tourist areas - be careful",
      "Valid passport required",
      "Suitable for couples and families",
    ],
    cancelPolicy:
      "Free cancellation 14+ days before. 50% refund 7-14 days. No refund less than 7 days.",
  },
  // You can add the remaining destinations (Santorini, Dubai, Maldives) following the same structure
];
