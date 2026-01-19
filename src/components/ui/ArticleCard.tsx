// src/components/ui/ArticleCard.tsx

import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
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

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  const { t, language } = useLanguage();

  // Get translated article content
  const getTranslatedArticle = () => {
    if (language === "id" && article.translations?.id) {
      return {
        title: article.translations.id.title || article.title,
        excerpt: article.translations.id.excerpt || article.excerpt,
        author: article.translations.id.author || article.author,
        category: article.translations.id.category || article.category,
        slug: article.translations.id.slug || article.slug,
      };
    }

    if (language === "en" && article.translations?.en) {
      return {
        title: article.translations.en.title || article.title,
        excerpt: article.translations.en.excerpt || article.excerpt,
        author: article.translations.en.author || article.author,
        category: article.translations.en.category || article.category,
        slug: article.translations.en.slug || article.slug,
      };
    }

    // Fallback to original
    return {
      title: article.title,
      excerpt: article.excerpt,
      author: article.author,
      category: article.category,
      slug: article.slug,
    };
  };

  const translatedArticle = getTranslatedArticle();

  // Format date based on language
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (language === "id") {
        return new Intl.DateTimeFormat("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(date);
      } else {
        return new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(date);
      }
    } catch (error) {
      // If date is already in string format like "Jan 15, 2025"
      return dateString;
    }
  };

  // Format read time
  const formatReadTime = (readTime: string | number) => {
    if (typeof readTime === "number") {
      return `${readTime} ${t.articles?.readTime || "min read"}`;
    }
    return readTime;
  };

  return (
    <article
      className="
      bg-white rounded-2xl overflow-hidden shadow-lg 
      hover:shadow-2xl transition-all duration-300 
      transform hover:-translate-y-2 group
      flex flex-col h-full
    "
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={article.image}
          alt={translatedArticle.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className="
            bg-gradient-to-r from-blue-600 to-blue-700 
            text-white text-xs font-bold px-3 py-1.5 
            rounded-full shadow-lg
          "
          >
            {translatedArticle.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-gray-400" />
              <span>{translatedArticle.author}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{formatReadTime(article.readTime)}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="
          text-xl font-bold text-gray-900 mb-3 
          line-clamp-2 group-hover:text-blue-600 
          transition-colors duration-300
        "
        >
          {translatedArticle.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {translatedArticle.excerpt}
        </p>

        {/* Read More Link */}
        <button
          className="
          mt-auto flex items-center gap-2 
          text-blue-600 font-semibold text-sm 
          group-hover:gap-3 transition-all duration-300
          hover:text-blue-700
        "
        >
          {t.articles?.readMore || "Read More"}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}

export default ArticleCard;
