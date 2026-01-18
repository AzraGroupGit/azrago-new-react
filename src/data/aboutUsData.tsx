export interface AboutUsData {
  foundedYear: number;
  mission: string;
  values: {
    title: string;
    description: string;
  }[];
  team?: {
    name: string;
    position: string;
    initials: string;
    quote: string;
  };
  stats: {
    travelers: number;
    destinations: number;
    tours: number;
    guides: number;
  };
}

export const aboutUsData: AboutUsData = {
  foundedYear: 2010,
  mission:
    "To create authentic, immersive travel experiences that connect people with cultures, landscapes, and communities around the world while maintaining the highest standards of sustainability and customer satisfaction.",
  values: [
    {
      title: "Authenticity",
      description:
        "We believe in genuine experiences that reflect the true spirit of each destination.",
    },
    {
      title: "Sustainability",
      description:
        "Committed to responsible tourism that benefits local communities and preserves nature.",
    },
    {
      title: "Excellence",
      description:
        "Every detail matters - from accommodation to guides, we ensure top quality.",
    },
    {
      title: "Personalization",
      description:
        "Tailored journeys that match your interests, pace, and travel style.",
    },
  ],
  team: {
    name: "Sarah Johnson",
    position: "Founder & CEO",
    initials: "SJ",
    quote:
      "Travel transforms us. We're here to make that transformation unforgettable.",
  },
  stats: {
    travelers: 10000,
    destinations: 85,
    tours: 250,
    guides: 120,
  },
};
