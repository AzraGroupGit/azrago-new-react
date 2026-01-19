// src/assets/components/layout/Hero.tsx

import DateForm from "../ui/DateForm";
import DropdownForm from "../ui/DropdownForm";
import SearchButton from "../ui/SearchButton";
import { useLanguage } from "../../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  // Destination options based on language
  const destinationOptions = t.hero?.destinationOptions || [
    "Bali",
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Semarang",
    "Yogyakarta",
  ];

  // Tour package options based on language
  const packageOptions = t.hero?.packageOptions || [
    "1 Day Trip",
    "2 Days 1 Night",
    "3 Days 2 Nights",
    "5 Days 4 Nights",
    "Custom Package",
  ];

  return (
    <section id="hero" className="min-w-screen bg-gray-100">
      <div className="relative min-h-[85vh] lg:h-screen flex items-start lg:items-center pt-24 pb-12 md:pb-0 lg:pt-0 justify-center">
        {/* Background */}
        <img
          src="/images/hero-bali.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Title, Subtitle, Rating */}
            <div className="lg:flex-[2] text-center lg:text-left flex flex-col justify-between gap-4">
              <div>
                {/* Title */}
                <h1
                  className="
                    text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4
                    opacity-0 animate-fade-up
                  "
                  style={{ animationDelay: "0.1s" }}
                >
                  {t.hero?.title || "We Plan Your Perfect Get Away"}
                </h1>

                {/* Subtitle */}
                <p
                  className="
                    text-lg md:text-xl lg:text-2xl font-medium text-white
                    opacity-0 animate-fade-up
                  "
                  style={{ animationDelay: "0.3s" }}
                >
                  {t.hero?.subtitle ||
                    "Discover Most Engaging Place In Indonesia Best Price, Best Services & Best Choice"}
                </p>
              </div>

              {/* Social Media */}
              <div
                className="
                  flex justify-center gap-4
                  opacity-0 animate-fade-up
                "
                style={{ animationDelay: "0.35s" }}
              >
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all"
                  aria-label={t.hero?.instagram || "Instagram"}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5z" />
                    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.25 6a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/628xxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all"
                  aria-label={t.hero?.whatsapp || "WhatsApp"}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.91 11.91 0 0012.03 0C5.41 0 .02 5.39.02 12c0 2.11.55 4.17 1.59 6.02L0 24l6.15-1.61A11.94 11.94 0 0012.03 24C18.65 24 24 18.61 24 12c0-3.2-1.25-6.21-3.48-8.52z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@yourtravel.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all"
                  aria-label={t.hero?.email || "Email"}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 4h20v16H2V4zm18 2l-8 5-8-5v12h16V6z" />
                  </svg>
                </a>
              </div>

              {/* Trust Indicators */}
              <div
                className="
                  hidden lg:flex flex-row justify-center lg:justify-start gap-4 text-white
                  opacity-0 animate-fade-up
                  mt-8 lg:mt-0
                "
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex-1 bg-white/20 rounded-2xl p-4 backdrop-blur-md hover:bg-white/30 transition-all w-full text-center justify-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    500+
                  </p>
                  <p className="text-xs md:text-sm opacity-80 mt-1">
                    {t.hero?.happyCustomers || "Happy Customers"}
                  </p>
                </div>
                <div className="flex-1 bg-white/20 rounded-2xl p-4 backdrop-blur-md hover:bg-white/30 transition-all w-full text-center justify-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    50+
                  </p>
                  <p className="text-xs md:text-sm opacity-80 mt-1">
                    {t.hero?.destinationsCount || "Destinations"}
                  </p>
                </div>
                <div className="flex-1 bg-white/20 rounded-2xl p-4 backdrop-blur-md hover:bg-white/30 transition-all w-full text-center justify-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    4.9★
                  </p>
                  <p className="text-xs md:text-sm opacity-80 mt-1">
                    {t.hero?.rating || "Rating"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Order Form */}
            <div
              className="lg:flex-[1] opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-md backdrop-brightness-90 border border-white/30 h-full flex flex-col">
                <h3 className="text-white font-bold text-xl mb-4">
                  {t.hero?.bookTitle || "Book Your Trip"}
                </h3>
                <div className="flex flex-col gap-4 flex-grow">
                  <DropdownForm
                    label={t.hero?.destinationLabel || "Destination"}
                    options={destinationOptions}
                  />

                  <DateForm />

                  <DropdownForm
                    label={t.hero?.packageLabel || "Tour Package"}
                    options={packageOptions}
                  />

                  <SearchButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex absolute bottom-8 flex-col items-center">
          <svg
            className="w-6 h-6 text-white opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-white text-sm mt-1">
            {t.hero?.scrollDown || "Scroll Down"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
