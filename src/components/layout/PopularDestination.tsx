// src/assets/components/layout/PopularDestination.tsx
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { destinationsData } from "../../data/dataDummy";
import DestinationCard from "../ui/DestinationCard";

function PopularDestinations() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handleViewAll = () => {
    navigate("/destinations");
  };

  // Filter destinations based on language
  const filteredDestinations = destinationsData.filter((dest) => {
    return (
      dest.language === "all" ||
      dest.language === language ||
      !dest.language ||
      // Jika bahasa Indonesia, tampilkan juga destinasi English yang punya terjemahan
      (language === "id" && dest.language === "en" && dest.translations?.id) ||
      // Jika bahasa English, tampilkan juga destinasi Indonesia yang punya terjemahan
      (language === "en" && dest.language === "id" && dest.translations?.en)
    );
  });

  // Ambil hanya 3 destinasi untuk preview
  const previewDestinations = filteredDestinations.slice(0, 3);
  const totalDestinations = filteredDestinations.length;

  return (
    <section
      id="destinations"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.destinations?.title || "Popular Destinations"}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.destinations?.subtitle ||
              "Explore our most loved travel packages and create unforgettable memories"}
          </p>
        </div>

        {/* Preview Destinations (3 cards) */}
        {previewDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {t.destinations?.noResults || "No destinations found"}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {language === "id"
                ? "Beralih ke bahasa Inggris untuk melihat destinasi lebih banyak"
                : "Switch to Indonesian to see more destinations"}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previewDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>

            {/* View All Button - SELALU TAMPIL jika ada destinasi */}
            {totalDestinations > 0 && (
              <div className="text-center mt-12">
                <button
                  className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-xl border-2 border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group"
                  onClick={handleViewAll}
                >
                  <span className="flex items-center justify-center gap-2">
                    {t.destinations?.viewAllButton || "View All Destinations"}
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {totalDestinations}
                    </span>
                    <svg
                      className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform"
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
                  </span>
                  <p className="text-gray-500 text-sm mt-2">
                    {language === "id"
                      ? `Temukan ${totalDestinations - 3} destinasi lainnya`
                      : `Discover ${totalDestinations - 3} more destinations`}
                  </p>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default PopularDestinations;
