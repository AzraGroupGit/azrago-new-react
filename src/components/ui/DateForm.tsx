// src/components/ui/DateForm.tsx

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function DateForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="date" className="text-sm font-medium text-white mb-2">
        {t.hero?.dateLabel || "Date"}
      </label>

      <div className="relative group">
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="
            bg-white/10 backdrop-blur-sm border border-white/20
            text-white text-sm rounded-xl
            block w-full p-3 pl-10
            transition-all duration-300
            focus:ring-2 focus:ring-blue-500/60
            focus:border-blue-400 focus:bg-white/20
            placeholder:text-gray-300
            hover:bg-white/15 hover:border-white/30
          "
          placeholder={t.hero?.datePlaceholder || "Select date"}
        />

        {/* Calendar Icon */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-3
            flex items-center
            text-gray-300
            transition-colors duration-300
            group-focus-within:text-blue-400
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
