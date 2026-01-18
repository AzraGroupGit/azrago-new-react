function SearchButton() {
  return (
    <button
      type="button"
      className="
        group
        flex items-center justify-center gap-2
        bg-white text-gray-800
        px-4 py-3 rounded-xl
        shadow-md
        hover:bg-gray-100 hover:shadow-lg
        active:scale-95
        transition-all duration-300 ease-out
        w-full md:w-auto
        focus:outline-none focus:ring-2 focus:ring-blue-500/40
      "
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="
          w-5 h-5
          transition-transform duration-300
          group-hover:translate-x-0.5
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Text */}
      <span className="text-sm font-medium tracking-wide">Search</span>
    </button>
  );
}

export default SearchButton;
