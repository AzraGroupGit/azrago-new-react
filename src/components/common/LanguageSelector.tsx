// src/components/common/LanguageSelector.tsx

import React, { useState } from "react";
import { languages } from "../../data/language";

interface LanguageSelectorProps {
  onSelectLanguage: (lang: "id" | "en") => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onSelectLanguage,
}) => {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const handleSelectLanguage = (code: "id" | "en") => {
    setSelectedLang(code);
    setTimeout(() => {
      onSelectLanguage(code);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full mx-4 border border-gray-100">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
            <span className="text-3xl text-white">✈️</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Travel<span className="text-blue-600">Explorer</span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Jelajahi dunia dengan pengalaman terbaik. Pilih bahasa yang Anda
            inginkan
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Explore the world with the best experiences. Choose your preferred
            language
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => handleSelectLanguage(code as "id" | "en")}
              disabled={selectedLang !== null}
              className={`w-full p-5 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group
                ${
                  selectedLang === code
                    ? "border-blue-500 bg-blue-50 scale-[1.02]"
                    : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                }
                ${selectedLang !== null && selectedLang !== code ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              <div className="flex items-center space-x-5">
                <span className="text-3xl">{lang.flag}</span>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {lang.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {code === "id"
                      ? "Gunakan bahasa Indonesia"
                      : "Use International English"}
                  </p>
                </div>
              </div>
              <div
                className={`transition-all duration-300 ${selectedLang === code ? "scale-100" : "scale-0"}`}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedLang && (
          <div className="text-center animate-pulse">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-blue-600 font-medium">
              {selectedLang === "id"
                ? "Menyiapkan pengalaman berbahasa Indonesia..."
                : "Preparing English experience..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
