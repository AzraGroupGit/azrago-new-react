// src/components/ui/DestinationCard.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {
  formatPrice,
  getDurationTranslation,
  getTranslatedDestination,
} from "../../utils/translationHelpers";
import type { Destination } from "../../data/dataDummy";

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  // Get translated destination data
  const translatedDest = getTranslatedDestination(destination, language);

  // Format price based on language
  const formattedPrice = formatPrice(destination.price, language);

  // Translate duration
  const translatedDuration = getDurationTranslation(
    destination.duration,
    language,
  );

  // Fallback image jika gambar utama error
  const fallbackImage = `https://via.placeholder.com/800x600/3b82f6/ffffff?text=${encodeURIComponent(translatedDest.name)}`;

  const handleViewDetails = () => {
    navigate(`/destination/${destination.id}`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden flex-shrink-0 group">
        <img
          src={imageError ? fallbackImage : destination.image}
          alt={translatedDest.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-yellow-600 font-bold flex items-center gap-1">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {destination.rating}
          </span>
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md">
            <span className="text-sm font-medium text-gray-800">
              {translatedDest.location}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
            {t.destinationCard.popular || "Popular"}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {translatedDest.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
          {translatedDest.tagline}
        </p>

        <p className="text-gray-700 mb-4 line-clamp-2 flex-grow text-sm">
          {translatedDest.description}
        </p>

        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-2 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">{translatedDuration}</span>
          </div>
          <div className="text-gray-500 text-sm">
            <span className="font-semibold">{destination.reviews}</span>{" "}
            {t.destinationCard.reviews || "reviews"}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 flex-shrink-0">
          <div>
            <span className="text-gray-500 text-xs">
              {t.destinationCard.startingFrom || "Starting from"}
            </span>
            <p className="text-2xl font-bold text-blue-600">
              {formattedPrice}
              <span className="text-sm font-normal text-gray-500 ml-1">
                {language === "id" ? "/orang" : "/person"}
              </span>
            </p>
          </div>
          <button
            onClick={handleViewDetails}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>{t.destinationCard.viewDetails || "View Details"}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
