// src/utils/translationHelpers.ts

import { Destination } from "../data/dataDummy";

export const getTranslatedDestination = (
  destination: Destination,
  language: "en" | "id",
): Omit<Destination, "translations" | "language"> => {
  if (language === "id" && destination.translations?.id) {
    return {
      id: destination.id,
      name: destination.translations.id.name || destination.name,
      tagline: destination.translations.id.tagline || destination.tagline,
      location: destination.translations.id.location || destination.location,
      price: destination.price,
      duration: destination.duration,
      rating: destination.rating,
      reviews: destination.reviews,
      image: destination.image,
      description:
        destination.translations.id.description || destination.description,
      gallery: destination.gallery,
      overview: destination.translations.id.overview || destination.overview,
      highlights:
        destination.translations.id.highlights || destination.highlights,
      itinerary: destination.translations.id.itinerary || destination.itinerary,
      inclusions:
        destination.translations.id.inclusions || destination.inclusions,
      exclusions:
        destination.translations.id.exclusions || destination.exclusions,
      meetingPoint:
        destination.translations.id.meetingPoint || destination.meetingPoint,
      importantInfo:
        destination.translations.id.importantInfo || destination.importantInfo,
      cancelPolicy:
        destination.translations.id.cancelPolicy || destination.cancelPolicy,
    };
  }

  if (language === "en" && destination.translations?.en) {
    return {
      id: destination.id,
      name: destination.translations.en.name || destination.name,
      tagline: destination.translations.en.tagline || destination.tagline,
      location: destination.translations.en.location || destination.location,
      price: destination.price,
      duration: destination.duration,
      rating: destination.rating,
      reviews: destination.reviews,
      image: destination.image,
      description:
        destination.translations.en.description || destination.description,
      gallery: destination.gallery,
      overview: destination.translations.en.overview || destination.overview,
      highlights:
        destination.translations.en.highlights || destination.highlights,
      itinerary: destination.translations.en.itinerary || destination.itinerary,
      inclusions:
        destination.translations.en.inclusions || destination.inclusions,
      exclusions:
        destination.translations.en.exclusions || destination.exclusions,
      meetingPoint:
        destination.translations.en.meetingPoint || destination.meetingPoint,
      importantInfo:
        destination.translations.en.importantInfo || destination.importantInfo,
      cancelPolicy:
        destination.translations.en.cancelPolicy || destination.cancelPolicy,
    };
  }

  // Fallback to original
  const { translations, language: lang, ...rest } = destination;
  return rest;
};

export const formatPrice = (price: number, language: "en" | "id"): string => {
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

export const getDurationTranslation = (
  duration: string,
  language: "en" | "id",
): string => {
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

export const getCurrencySymbol = (language: "en" | "id"): string => {
  return language === "id" ? "Rp" : "$";
};
