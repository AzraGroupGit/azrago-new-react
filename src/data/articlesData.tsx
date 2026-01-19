// src/data/articlesData.tsx

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string | number;
  language?: "en" | "id" | "all";
  translations?: {
    id?: {
      title: string;
      excerpt: string;
      author: string;
      category: string;
      slug: string;
    };
    en?: {
      title: string;
      excerpt: string;
      author: string;
      category: string;
      slug: string;
    };
  };
}

export const articlesData: Article[] = [
  {
    id: 1,
    slug: "10-hidden-gems-bali-2025",
    title: "10 Hidden Gems in Bali You Must Visit in 2025",
    excerpt:
      "Discover the secret spots in Bali that only locals know about. From hidden waterfalls to secluded beaches, we've got you covered with the ultimate guide.",
    category: "Destination",
    author: "Sarah Johnson",
    date: "2025-01-15",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    readTime: 5,
    language: "en",
    translations: {
      id: {
        title: "10 Tempat Tersembunyi di Bali yang Harus Anda Kunjungi di 2025",
        excerpt:
          "Temukan spot rahasia di Bali yang hanya diketahui oleh penduduk lokal. Dari air terjun tersembunyi hingga pantai sepi, kami memberikan panduan terbaik untuk Anda.",
        author: "Sarah Johnson",
        category: "Destinasi",
        slug: "10-tempat-tersembunyi-bali-2025",
      },
    },
  },
  {
    id: 2,
    slug: "budget-travel-asia-under-30-dollars",
    title: "Budget Travel Tips: How to Explore Asia for Under $30/Day",
    excerpt:
      "Learn the secrets of budget travel from experienced backpackers. Find out how to save money on accommodation, food, and transportation across Asia.",
    category: "Travel Tips",
    author: "Mike Chen",
    date: "2025-01-12",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    readTime: 7,
    language: "en",
    translations: {
      id: {
        title: "Tips Travel Hemat: Jelajahi Asia dengan Kurang dari $30/Hari",
        excerpt:
          "Pelajari rahasia travel hemat dari backpacker berpengalaman. Temukan cara menghemat uang untuk akomodasi, makanan, dan transportasi di seluruh Asia.",
        author: "Mike Chen",
        category: "Tips Perjalanan",
        slug: "tips-travel-hemat-asia-kurang-30-dollar",
      },
    },
  },
  {
    id: 3,
    slug: "solo-female-travel-southeast-asia-guide",
    title: "The Ultimate Guide to Solo Female Travel in Southeast Asia",
    excerpt:
      "Safety tips, destination recommendations, and inspiring stories from solo female travelers exploring the beautiful countries of Southeast Asia.",
    category: "Travel Guide",
    author: "Emma Watson",
    date: "2025-01-10",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    readTime: 8,
    language: "all", // Available in both languages
  },
  {
    id: 4,
    slug: "best-street-food-markets-worldwide",
    title: "Best Street Food Markets Around the World",
    excerpt:
      "From Bangkok to Mexico City, explore the most vibrant street food markets that offer authentic local cuisine and unforgettable culinary experiences.",
    category: "Food & Culture",
    author: "David Lee",
    date: "2025-01-08",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
    readTime: 6,
    language: "en",
    translations: {
      id: {
        title: "Pasar Street Food Terbaik di Seluruh Dunia",
        excerpt:
          "Dari Bangkok hingga Mexico City, jelajahi pasar street food paling hidup yang menawarkan kuliner lokal autentik dan pengalaman kuliner tak terlupakan.",
        author: "David Lee",
        category: "Makanan & Budaya",
        slug: "pasar-street-food-terbaik-dunia",
      },
    },
  },
  {
    id: 5,
    slug: "sustainable-travel-reduce-carbon-footprint",
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    excerpt:
      "Practical tips and strategies for eco-conscious travelers who want to explore the world while minimizing their environmental impact.",
    category: "Eco Travel",
    author: "Lisa Green",
    date: "2025-01-05",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    readTime: 5,
    language: "all", // Available in both languages
  },
  {
    id: 6,
    slug: "travel-photography-tips-capture-memories",
    title: "Photography Tips for Capturing Your Travel Memories",
    excerpt:
      "Master the art of travel photography with these expert tips. Learn composition, lighting, and editing techniques to make your photos stand out.",
    category: "Photography",
    author: "Alex Turner",
    date: "2025-01-03",
    image:
      "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&h=600&fit=crop",
    readTime: 9,
    language: "en",
    translations: {
      id: {
        title: "Tips Fotografi untuk Mengabadikan Kenangan Perjalanan Anda",
        excerpt:
          "Kuasi seni fotografi perjalanan dengan tips ahli ini. Pelajari teknik komposisi, pencahayaan, dan editing untuk membuat foto Anda menonjol.",
        author: "Alex Turner",
        category: "Fotografi",
        slug: "tips-fotografi-kenangan-perjalanan",
      },
    },
  },
  // Artikel dalam bahasa Indonesia
  {
    id: 7,
    slug: "panduan-wisata-raja-ampat-lengkap",
    title: "Panduan Lengkap Wisata ke Raja Ampat untuk Pemula",
    excerpt:
      "Temukan semua yang perlu Anda ketahui sebelum mengunjungi surga bawah laut Raja Ampat. Dari akomodasi hingga aktivitas terbaik di lokasi.",
    category: "Destinasi",
    author: "Budi Santoso",
    date: "2025-01-20",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&h=600&fit=crop",
    readTime: 6,
    language: "id",
    translations: {
      en: {
        title: "Complete Guide to Raja Ampat Travel for Beginners",
        excerpt:
          "Discover everything you need to know before visiting the underwater paradise of Raja Ampat. From accommodation to best activities on site.",
        author: "Budi Santoso",
        category: "Destination",
        slug: "complete-guide-raja-ampat-beginners",
      },
    },
  },
  {
    id: 8,
    slug: "kuliner-khas-yogyakarta-wajib-coba",
    title: "Kuliner Khas Yogyakarta yang Wajib Dicoba Saat Liburan",
    excerpt:
      "Jelajahi kekayaan kuliner Yogyakarta dari gudeg hingga yangko. Temukan tempat makan terbaik di kota budaya ini beserta rekomendasi menu.",
    category: "Makanan & Budaya",
    author: "Dewi Lestari",
    date: "2025-01-18",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
    readTime: 5,
    language: "id",
    translations: {
      en: {
        title: "Must-Try Traditional Cuisine of Yogyakarta During Holiday",
        excerpt:
          "Explore the culinary richness of Yogyakarta from gudeg to yangko. Find the best places to eat in this cultural city along with menu recommendations.",
        author: "Dewi Lestari",
        category: "Food & Culture",
        slug: "must-try-traditional-cuisine-yogyakarta",
      },
    },
  },
  {
    id: 9,
    slug: "tips-memilih-hotel-murah-indonesia",
    title: "Tips Memilih Hotel Murah tapi Nyaman di Indonesia",
    excerpt:
      "Temukan strategi jitu untuk mendapatkan akomodasi murah namun berkualitas saat traveling di Indonesia. Dari booking tips hingga lokasi strategis.",
    category: "Tips Perjalanan",
    author: "Andi Wijaya",
    date: "2025-01-16",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    readTime: 4,
    language: "id",
    translations: {
      en: {
        title: "Tips for Choosing Cheap but Comfortable Hotels in Indonesia",
        excerpt:
          "Find smart strategies to get cheap but quality accommodation while traveling in Indonesia. From booking tips to strategic locations.",
        author: "Andi Wijaya",
        category: "Travel Tips",
        slug: "tips-choosing-cheap-comfortable-hotels-indonesia",
      },
    },
  },
];
