// src/data/languages.ts

export const languages = {
  id: {
    code: "id",
    name: "Bahasa Indonesia",
    shortName: "ID",
    flag: "🇮🇩",
    locale: "id-ID",
  },
  en: {
    code: "en",
    name: "English",
    shortName: "EN",
    flag: "🇺🇸",
    locale: "en-US",
  },
};

export type LanguageCode = keyof typeof languages;
