// src/components/ui/SearchButton.tsx

import { useLanguage } from "../../context/LanguageContext";

function SearchButton() {
  const { t } = useLanguage();

  const handleSearch = () => {};

  return (
    <button
      type="button"
      onClick={handleSearch}
      className="
        group
        flex items-center justify-center gap-2
        bg-gradient-to-r from-blue-600 to-blue-700 
        text-white
        px-4 py-3.5 rounded-xl
        shadow-lg
        hover:from-blue-700 hover:to-blue-800 
        hover:shadow-xl
        active:scale-[0.98]
        transition-all duration-300 ease-out
        w-full
        focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-2
        focus:ring-offset-blue-900/20
        mt-2
      "
    >
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="
          w-5 h-5
          transition-transform duration-300
          group-hover:scale-110
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Text */}
      <span className="text-sm font-semibold tracking-wide">
        {t.hero?.search || "Search"}
      </span>
    </button>
  );
}

export default SearchButton;
