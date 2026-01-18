import { Calendar, User, ArrowRight } from "lucide-react";

interface Article {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Read More Link */}
        <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}

export default ArticleCard;
