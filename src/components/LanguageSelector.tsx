// src/components/LanguageSelector.tsx
import React from "react";
import { languages } from "../data/language";
import { useLanguage } from "../context/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { setLanguage } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            🌍 Selamat Datang / Welcome
          </h1>
          <p className="text-gray-600">
            Pilih bahasa preferensi Anda / Choose your preferred language
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => setLanguage(code as any)}
              className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{lang.flag}</span>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {lang.name}
                  </h3>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Anda dapat mengubah bahasa nanti di pengaturan
            <br />
            You can change language later in settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
