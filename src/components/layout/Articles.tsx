import { articlesData } from "../../data/articlesData";
import ArticleCard from "../ui/ArticleCard";

function Articles() {
  // Tampilkan hanya 3 artikel terbaru
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section id="articles" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles & Travel Tips
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired with our latest travel stories, destination guides, and
            expert tips
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default Articles;
