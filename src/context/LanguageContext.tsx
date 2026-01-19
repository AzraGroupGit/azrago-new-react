// src/contexts/LanguageContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";
import { enTranslations } from "../data/translation/en";
import { idTranslations } from "../data/translation/id";
import LanguageSelector from "../components/common/LanguageSelector";
import { languages } from "../data/language";

export type LanguageCode = "id" | "en";

type Translations = typeof enTranslations;

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
  // Tambahkan helper functions
  formatPrice: (price: number) => string;
  translateDuration: (duration: string) => string;
  getCurrencySymbol: () => string;
  getTranslatedText: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const translations = {
  en: enTranslations,
  id: idTranslations,
};

// Export LanguageProvider
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [hasSelectedLanguage, setHasSelectedLanguage] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load language preference from localStorage on initial load
  useEffect(() => {
    const savedLang = localStorage.getItem(
      "preferred-language",
    ) as LanguageCode;

    // Cek apakah ada bahasa yang sudah disimpan
    if (savedLang && (savedLang === "id" || savedLang === "en")) {
      console.log("Found saved language:", savedLang);
      setLanguageState(savedLang);
      setHasSelectedLanguage(true);
    } else {
      console.log("No language preference found, showing selector");
      setHasSelectedLanguage(false);
    }

    setIsLoading(false);
  }, []);

  const handleSetLanguage = (lang: LanguageCode) => {
    console.log("Setting language to:", lang);
    setLanguageState(lang);
    // Simpan hanya preferred-language, tidak perlu language-selected
    localStorage.setItem("preferred-language", lang);
    setHasSelectedLanguage(true);
  };

  // Helper function untuk format harga
  const formatPrice = (price: number): string => {
    if (language === "id") {
      // Convert USD to IDR (approximate rate 1 USD = 15,000 IDR)
      const idrPrice = price * 15000;
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(idrPrice);
    } else {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    }
  };

  // Helper function untuk translate durasi
  const translateDuration = (duration: string): string => {
    if (language === "id") {
      return duration
        .replace("Days", "Hari")
        .replace("Day", "Hari")
        .replace("Nights", "Malam")
        .replace("Night", "Malam")
        .replace("D", "H")
        .replace("N", "M");
    }
    return duration;
  };

  // Helper function untuk mendapatkan simbol mata uang
  const getCurrencySymbol = (): string => {
    return language === "id" ? "Rp" : "$";
  };

  // Helper function untuk translate teks umum
  const getTranslatedText = (text: string): string => {
    // Simple keyword translation (bisa diperluas sesuai kebutuhan)
    const keywordTranslations: Record<string, Record<LanguageCode, string>> = {
      days: { en: "days", id: "hari" },
      nights: { en: "nights", id: "malam" },
      from: { en: "from", id: "mulai dari" },
      "per person": { en: "per person", id: "per orang" },
      rating: { en: "rating", id: "penilaian" },
      reviews: { en: "reviews", id: "ulasan" },
      popular: { en: "popular", id: "populer" },
    };

    const key = text.toLowerCase();
    if (keywordTranslations[key]) {
      return keywordTranslations[key][language];
    }
    return text;
  };

  // Show loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading application...</p>
        </div>
      </div>
    );
  }

  // Show language selector if no language selected
  if (!hasSelectedLanguage) {
    return <LanguageSelector onSelectLanguage={handleSetLanguage} />;
  }

  // Show app with context
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
        formatPrice,
        translateDuration,
        getCurrencySymbol,
        getTranslatedText,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
