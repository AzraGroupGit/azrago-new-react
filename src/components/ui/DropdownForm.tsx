// src/components/ui/DropdownForm.tsx

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

interface DropdownFormProps {
  label: string;
  options: string[];
  placeholder?: string;
}

function DropdownForm({ label, options, placeholder }: DropdownFormProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const { language } = useLanguage(); // HAPUS 't' di sini karena tidak digunakan
  const id = label.replace(/\s+/g, "-").toLowerCase();

  // Helper untuk placeholder berdasarkan bahasa
  const getPlaceholderText = () => {
    if (placeholder) return placeholder;

    if (language === "id") {
      if (
        label.toLowerCase().includes("destination") ||
        label.toLowerCase().includes("destinasi")
      ) {
        return "Pilih destinasi";
      }
      if (
        label.toLowerCase().includes("package") ||
        label.toLowerCase().includes("paket")
      ) {
        return "Pilih paket";
      }
      return `Pilih ${label.toLowerCase()}`;
    }

    // English default
    if (label.toLowerCase().includes("destination")) {
      return "Select destination";
    }
    if (label.toLowerCase().includes("package")) {
      return "Select package";
    }
    return `Select ${label.toLowerCase()}`;
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-sm font-medium text-white mb-2">
        {label}
      </label>

      <div className="relative group">
        <select
          id={id}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className="
            bg-white/10 backdrop-blur-sm border border-white/20
            text-white text-sm rounded-xl
            block w-full p-3 pr-10
            appearance-none
            transition-all duration-300
            focus:ring-2 focus:ring-blue-500/60
            focus:border-blue-400 focus:bg-white/20
            hover:bg-white/15 hover:border-white/30
            cursor-pointer
          "
        >
          <option value="" disabled className="text-gray-400 bg-gray-800">
            {getPlaceholderText()}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="text-gray-800 bg-white hover:bg-blue-50"
            >
              {option}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-3
            flex items-center
            transition-transform duration-300
            group-focus-within:-rotate-180
          "
        >
          <svg
            className="h-4 w-4 text-gray-300 group-focus-within:text-blue-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DropdownForm;
