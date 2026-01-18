function DateForm() {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="date" className="text-sm font-medium text-white mb-2">
        Date
      </label>

      <div className="relative group">
        <input
          type="date"
          id="date"
          className="
            bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg
            block w-full p-2.5 pl-9
            transition-all duration-300
            focus:ring-2 focus:ring-blue-500/40
            focus:border-blue-500
          "
        />

        {/* Calendar Icon */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-3
            flex items-center
            text-gray-400
            transition-colors duration-300
            group-focus-within:text-blue-500
          "
        >
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
              d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DateForm;
