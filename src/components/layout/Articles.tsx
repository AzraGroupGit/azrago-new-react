// src/assets/components/layout/Articles.tsx

import { useLanguage } from "../../context/LanguageContext";
import { articlesData } from "../../data/articlesData";
import ArticleCard from "../ui/ArticleCard";

function Articles() {
  const { t, language } = useLanguage();

  // Filter articles berdasarkan bahasa
  const filteredArticles = articlesData.filter((article) => {
    return (
      article.language === "all" ||
      article.language === language ||
      !article.language ||
      (language === "id" && article.translations?.id) ||
      (language === "en" && article.translations?.en)
    );
  });

  // Tampilkan hanya 3 artikel terbaru
  const featuredArticles = filteredArticles.slice(0, 3);
  const totalArticles = filteredArticles.length;

  return (
    <section
      id="articles"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.articles?.title || "Latest Articles & Travel Tips"}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.articles?.subtitle ||
              "Get inspired with our latest travel stories, destination guides, and expert tips"}
          </p>
        </div>

        {/* Articles Grid */}
        {featuredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {t.articles?.noResults || "No articles found"}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* View All Button - hanya tampil jika ada lebih dari 3 artikel */}
            {totalArticles > 3 && (
              <div className="text-center">
                <button
                  className="
                    bg-gradient-to-r from-blue-600 to-blue-700 
                    hover:from-blue-700 hover:to-blue-800 
                    text-white font-bold py-4 px-8 rounded-xl 
                    transition-all duration-300 transform hover:scale-105 
                    shadow-lg hover:shadow-xl
                    flex items-center justify-center gap-2 mx-auto
                  "
                >
                  <span>
                    {t.articles?.viewAllButton || "View All Articles"}
                  </span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                    {totalArticles}
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Articles;
