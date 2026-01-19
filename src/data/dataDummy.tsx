// src/data/dataDummy.tsx
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
  // Tambahkan untuk multilingual
  language?: "en" | "id" | "all";
  translations?: {
    id?: {
      name: string;
      tagline: string;
      location: string;
      description: string;
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
    };
    en?: {
      name: string;
      tagline: string;
      location: string;
      description: string;
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
    };
  };
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
    language: "en",
    translations: {
      id: {
        name: "Surga Bali",
        tagline: "Rasakan Pulau Dewata",
        location: "Bali, Indonesia",
        description:
          "Rasakan surga tropis dengan pantai menakjubkan dan budaya kaya",
        overview:
          "Temukan keindahan mempesona Bali dengan paket 7 hari yang kami susun dengan cermat. Rasakan pantai yang masih alami, kuil-kuil kuno, sawah berundak hijau, dan budaya yang hidup. Tour ini mencakup akomodasi, tur berpemandu, dan pengalaman tak terlupakan yang akan membuat liburan Bali Anda benar-benar magis.",
        highlights: [
          "Kunjungi Kuil Tanah Lot yang ikonik saat matahari terbenam",
          "Jelajahi Sawah Berundak Tegalalang yang menakjubkan",
          "Bersantai di Pantai Seminyak yang indah",
          "Rasakan pertunjukan tari Bali tradisional",
          "Kunjungi kuil air suci Tirta Empul",
          "Nikmati kuliner Bali asli",
          "Snorkeling di Blue Lagoon",
          "Tur Hutan Monyet Ubud",
        ],
        itinerary: [
          {
            day: 1,
            title: "Kedatangan & Eksplorasi Bali Selatan",
            activities: [
              "Penjemputan bandara dan check-in hotel",
              "Kunjungi Kuil Uluwatu di tepi tebing",
              "Tonton Tari Api Kecak tradisional saat matahari terbenam",
              "Makan malam di restoran seafood Pantai Jimbaran",
              "Kembali ke hotel untuk istirahat",
            ],
          },
          {
            day: 2,
            title: "Budaya & Alam Ubud",
            activities: [
              "Sarapan di hotel",
              "Kunjungi Sawah Berundak Tegalalang",
              "Tur perkebunan kopi dan tasting",
              "Makan siang di restoran lokal",
              "Jelajahi Hutan Monyet Ubud",
              "Belanja di Pasar Seni Ubud",
              "Makan malam Bali tradisional",
              "Kembali ke hotel",
            ],
          },
          {
            day: 3,
            title: "Kuil Air & Gunung Berapi",
            activities: [
              "Sarapan pagi",
              "Kunjungi kuil air suci Tirta Empul",
              "Titik pandang Gunung Batur",
              "Makan siang dengan pemandangan gunung berapi",
              "Kunjungi Air Terjun Tegenungan",
              "Malam bebas di hotel",
              "Makan malam di hotel",
            ],
          },
          {
            day: 4,
            title: "Aktivitas Pantai & Air",
            activities: [
              "Sarapan di hotel",
              "Snorkeling di Blue Lagoon",
              "Makan siang BBQ di pantai",
              "Waktu bebas di Pantai Sanur",
              "Menikmati matahari terbenam di pantai",
              "Makan malam seafood",
              "Kembali ke hotel",
            ],
          },
          {
            day: 5,
            title: "Tanah Lot & Seminyak",
            activities: [
              "Sarapan di hotel dan check-out",
              "Kunjungi Kuil Tanah Lot",
              "Transfer ke Seminyak",
              "Check-in di resor pantai",
              "Waktu bebas di Pantai Seminyak",
              "Makan malam di restoran tepi pantai",
            ],
          },
          {
            day: 6,
            title: "Hari Bebas & Spa",
            activities: [
              "Sarapan di resor",
              "Pagi bebas - pantai atau kolam renang",
              "Makan siang di resor",
              "Perawatan spa Bali tradisional",
              "Matahari terbenam di pantai",
              "Makan malam perpisahan dengan pertunjukan budaya",
            ],
          },
          {
            day: 7,
            title: "Keberangkatan",
            activities: [
              "Sarapan di resor",
              "Waktu bebas hingga check-out",
              "Belanja last-minute",
              "Makan siang (atas biaya sendiri)",
              "Transfer bandara",
              "Keberangkatan",
            ],
          },
        ],
        inclusions: [
          "6 malam akomodasi (hotel bintang 4)",
          "Sarapan harian",
          "Transfer bandara (kedatangan & keberangkatan)",
          "Kendaraan pribadi ber-AC",
          "Pemandu tur berbahasa Inggris",
          "Semua biaya masuk atraksi",
          "4 makan siang dan 5 makan malam",
          "Perlengkapan snorkeling",
          "Perawatan spa tradisional",
          "Air mineral selama tur",
          "Asuransi perjalanan",
        ],
        exclusions: [
          "Tiket pesawat internasional",
          "Pengeluaran pribadi",
          "Tip untuk pemandu dan sopir",
          "Makanan tambahan yang tidak disebutkan",
          "Aktivitas opsional",
          "Visa perjalanan (jika diperlukan)",
          "Minuman beralkohol",
        ],
        meetingPoint:
          "Bandara Internasional Ngurah Rai (DPS) - Hall Kedatangan",
        importantInfo: [
          "Sepatu jalan yang nyaman direkomendasikan",
          "Bawa sunscreen, topi, dan kacamata hitam",
          "Pakaian sopan diperlukan untuk kunjungan kuil",
          "Kamera untuk mengabadikan momen",
          "Paspor valid diperlukan (minimal 6 bulan masa berlaku)",
          "Minimal 2 orang per pemesanan",
          "Cocok untuk semua tingkat kebugaran",
        ],
        cancelPolicy:
          "Pembatalan gratis hingga 14 hari sebelum keberangkatan. Pengembalian 50% untuk pembatalan 7-14 hari sebelumnya. Tidak ada pengembalian untuk pembatalan kurang dari 7 hari sebelum keberangkatan.",
      },
    },
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
    language: "en",
    translations: {
      id: {
        name: "Petualangan Tokyo",
        tagline: "Modern Bertemu Tradisional",
        location: "Tokyo, Jepang",
        description:
          "Temukan perpaduan sempurna tradisi dan modernitas di ibukota Jepang",
        overview:
          "Rasakan perpaduan unik budaya ultra-modern dan tradisional Tokyo. Dari kuil kuno hingga jalanan bercahaya neon, pasar ramai hingga taman yang tenang, perjalanan 5 hari ini akan membenamkan Anda di jantung ibukota Jepang yang menakjubkan.",
        highlights: [
          "Kunjungi Kuil Senso-ji ikonik di Asakusa",
          "Rasakan Shibuya Crossing yang terkenal",
          "Jelajahi Kuil Meiji tradisional",
          "Belanja di distrik Harajuku yang trendy",
          "Nikmati pemandangan panoramik dari Tokyo Skytree",
          "Kelas membuat sushi autentik",
          "Perjalanan sehari ke Gunung Fuji",
          "Pengalaman upacara teh tradisional",
        ],
        itinerary: [
          {
            day: 1,
            title: "Kedatangan & Shinjuku",
            activities: [
              "Penjemputan bandara dan check-in hotel",
              "Jelajahi distrik Shinjuku",
              "Kunjungi dek observasi Tokyo Metropolitan Building",
              "Makan malam di izakaya lokal",
              "Jalan malam di Kabukicho",
            ],
          },
          {
            day: 2,
            title: "Tokyo Tradisional",
            activities: [
              "Sarapan di hotel",
              "Kunjungi Kuil Senso-ji dan Nakamise Shopping Street",
              "Makan siang tradisional di Asakusa",
              "Pengalaman upacara teh",
              "Kunjungi Kuil Meiji",
              "Eksplorasi jalanan Harajuku",
              "Makan malam di Shibuya",
            ],
          },
          {
            day: 3,
            title: "Perjalanan Sehari ke Gunung Fuji",
            activities: [
              "Sarapan pagi",
              "Bus ke Gunung Fuji",
              "Kunjungi Stasiun ke-5 Fuji",
              "Pemandangan Danau Kawaguchi",
              "Makan siang tradisional dengan pemandangan Fuji",
              "Desa Oshino Hakkai",
              "Kembali ke Tokyo",
              "Malam bebas",
            ],
          },
          {
            day: 4,
            title: "Tokyo Modern",
            activities: [
              "Sarapan di hotel",
              "Kunjungi Tokyo Skytree",
              "Distrik elektronik Akihabara",
              "Kelas membuat sushi dan makan siang",
              "Belanja di Ginza",
              "Museum seni digital Teamlab Borderless",
              "Makan malam perpisahan di kapal Sungai Sumida",
            ],
          },
          {
            day: 5,
            title: "Keberangkatan",
            activities: [
              "Sarapan di hotel",
              "Belanja last-minute di Ueno",
              "Check-out",
              "Transfer bandara",
              "Keberangkatan",
            ],
          },
        ],
        inclusions: [
          "4 malam akomodasi di hotel pusat Tokyo",
          "Sarapan harian",
          "Transfer bandara",
          "Perjalanan sehari ke Gunung Fuji dengan pemandu",
          "Semua biaya masuk",
          "Pemandu berbahasa Inggris",
          "Kelas membuat sushi",
          "Pengalaman upacara teh",
          "3 makan siang dan 3 makan malam",
          "Tiket Tokyo Metro 72 jam",
          "Asuransi perjalanan",
        ],
        exclusions: [
          "Penerbangan internasional",
          "Japan Rail Pass",
          "Pengeluaran pribadi",
          "Makanan yang tidak disebutkan",
          "Tips",
          "Aktivitas opsional",
          "Visa perjalanan",
        ],
        meetingPoint: "Bandara Internasional Narita/Haneda - Hall Kedatangan",
        importantInfo: [
          "Sepatu jalan yang nyaman sangat penting",
          "Uang tunai disarankan untuk toko kecil",
          "Hormati etika kuil",
          "Cuaca bisa bervariasi - bawa pakaian berlapis",
          "Bahasa Inggris banyak digunakan di area wisata",
          "Minimal 2 orang per pemesanan",
        ],
        cancelPolicy:
          "Pembatalan gratis hingga 14 hari sebelum keberangkatan. Pengembalian 50% untuk 7-14 hari. Tidak ada pengembalian kurang dari 7 hari.",
      },
    },
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
    language: "en",
    translations: {
      id: {
        name: "Romansa Paris",
        tagline: "Kota Cahaya & Cinta",
        location: "Paris, Prancis",
        description: "Jatuh cinta dengan Kota Cahaya dan pesonanya yang abadi",
        overview:
          "Selami romansa dan keanggunan Paris. Dari Menara Eiffel ikonik hingga kafe yang menawan, museum kelas dunia hingga pesiar Sungai Seine yang indah, rasakan keajaiban yang membuat Paris menjadi kota paling banyak dikunjungi di dunia.",
        highlights: [
          "Menara Eiffel dengan akses skip-the-line",
          "Tur berpemandu Museum Louvre",
          "Makan malam pesiar Sungai Seine",
          "Perjalanan sehari ke Istana Versailles",
          "Montmartre dan Sacré-Cœur",
          "Workshop pastry Prancis",
          "Katedral Notre-Dame (eksterior)",
          "Belanja di Champs-Élysées",
        ],
        itinerary: [
          {
            day: 1,
            title: "Kedatangan & Menara Eiffel",
            activities: [
              "Penjemputan bandara",
              "Check-in hotel",
              "Sore di Menara Eiffel",
              "Jalan-jalan di Sungai Seine",
              "Makan malam selamat datang di bistro",
            ],
          },
          {
            day: 2,
            title: "Seni & Budaya",
            activities: [
              "Sarapan di hotel",
              "Tur Museum Louvre skip-the-line",
              "Makan siang di Le Marais",
              "Kunjungi Musée d'Orsay",
              "Malam di Latin Quarter",
              "Makan malam Prancis tradisional",
            ],
          },
          {
            day: 3,
            title: "Perjalanan Sehari ke Versailles",
            activities: [
              "Sarapan pagi",
              "Kereta ke Versailles",
              "Tur berpemandu Istana Versailles",
              "Jelajahi taman",
              "Makan siang di Versailles",
              "Kembali ke Paris",
              "Malam bebas",
            ],
          },
          {
            day: 4,
            title: "Montmartre & Romansa",
            activities: [
              "Sarapan di hotel",
              "Tur jalan kaki Montmartre",
              "Basilika Sacré-Cœur",
              "Alun-alun seniman",
              "Makan siang di kafe lokal",
              "Workshop pastry Prancis",
              "Makan malam pesiar Sungai Seine",
            ],
          },
          {
            day: 5,
            title: "Belanja & Eksplorasi",
            activities: [
              "Sarapan di hotel",
              "Belanja di Champs-Élysées",
              "Arc de Triomphe",
              "Makan siang di kafe",
              "Kunjungi eksterior Notre-Dame",
              "Sainte-Chapelle",
              "Makan malam perpisahan di restoran Michelin",
            ],
          },
          {
            day: 6,
            title: "Keberangkatan",
            activities: [
              "Sarapan di hotel",
              "Belanja last-minute",
              "Check-out",
              "Transfer bandara",
            ],
          },
        ],
        inclusions: [
          "5 malam hotel bintang 4 di pusat Paris",
          "Sarapan harian",
          "Transfer bandara",
          "Tiket Menara Eiffel skip-the-line",
          "Tur berpemandu Museum Louvre",
          "Perjalanan sehari ke Versailles",
          "Makan malam pesiar Sungai Seine",
          "Workshop pastry",
          "Tiket Paris Metro",
          "3 makan siang dan 4 makan malam",
          "Pemandu berbahasa Inggris",
          "Asuransi perjalanan",
        ],
        exclusions: [
          "Penerbangan internasional",
          "Pengeluaran pribadi",
          "Tip untuk pemandu",
          "Makanan tambahan",
          "Aktivitas opsional",
          "Visa perjalanan",
          "Minuman beralkohol",
        ],
        meetingPoint: "Bandara Charles de Gaulle (CDG) - Hall Kedatangan",
        importantInfo: [
          "Sepatu jalan yang nyaman diperlukan",
          "Museum tutup pada hari tertentu",
          "Frasa bahasa Prancis membantu tapi tidak wajib",
          "Copet di area wisata - hati-hati",
          "Paspor valid diperlukan",
          "Cocok untuk pasangan dan keluarga",
        ],
        cancelPolicy:
          "Pembatalan gratis 14+ hari sebelumnya. Pengembalian 50% 7-14 hari. Tidak ada pengembalian kurang dari 7 hari.",
      },
    },
  },
];
