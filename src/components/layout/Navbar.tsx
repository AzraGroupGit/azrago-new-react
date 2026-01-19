// src/assets/components/layout/Navbar.tsx

import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Globe } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { languages } from "../../data/language";

function Navbar() {
  const [isOnHero, setIsOnHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  // Check if current page is not home page
  const isDetailPage = location.pathname !== "/";

  // Navigation items with translations
  const navItems = [
    { name: t.nav.home, href: "#hero", key: "home" },
    { name: t.nav.destinations, href: "#destinations", key: "destinations" },
    { name: t.nav.whyChooseUs, href: "#why-choose-us", key: "whyChooseUs" },
    { name: t.nav.howItWorks, href: "#how-it-works", key: "howItWorks" },
    { name: t.nav.articles, href: "#articles", key: "articles" },
    { name: t.nav.aboutUs, href: "#about-us", key: "aboutUs" },
  ];

  // Handle language change
  const handleLanguageChange = (langCode: "id" | "en") => {
    setLanguage(langCode);
    setIsLanguageDropdownOpen(false);

    // If on mobile, also close mobile menu
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Skip hero detection if not on home page
    if (isDetailPage) {
      setIsOnHero(false);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnHero(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isDetailPage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();

    // If on detail page, navigate to home first
    if (isDetailPage) {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const target = document.querySelector(href) as HTMLElement;
        if (target) {
          const navbarHeight = 80;
          const targetPosition = target.offsetTop - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // On home page, just scroll
      const target = document.querySelector(href) as HTMLElement;
      if (target) {
        const navbarHeight = 80;
        const targetPosition = target.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }

    setIsMobileMenuOpen(false);
  };

  // Force white navbar on detail pages
  const shouldBeWhite = !isOnHero || isDetailPage;

  // Toggle language dropdown
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".language-dropdown")) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-300
        ${
          shouldBeWhite
            ? "bg-white shadow-md"
            : "bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-transparent backdrop-blur-sm"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div
              className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              transition-all duration-300
              ${shouldBeWhite ? "bg-gradient-to-br from-blue-600 to-blue-500" : "bg-blue-600"}
            `}
            >
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p
                className={`
                font-bold text-xl
                transition-colors duration-300
                ${shouldBeWhite ? "text-gray-900" : "text-white"}
              `}
              >
                TravelHub
              </p>
              <p
                className={`
                text-xs
                transition-colors duration-300
                ${shouldBeWhite ? "text-gray-500" : "text-gray-300"}
              `}
              >
                {t.nav.tagline || "Your Journey Partner"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  font-medium text-sm
                  transition-all duration-300
                  hover:scale-105
                  ${
                    shouldBeWhite
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-400"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Side - Language Selector & Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector Dropdown */}
            <div className="relative language-dropdown">
              <button
                onClick={toggleLanguageDropdown}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl
                  font-medium text-sm transition-all duration-300
                  ${
                    shouldBeWhite
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }
                `}
              >
                <Globe className="w-4 h-4" />
                <span>
                  {languages[language].flag} {language === "id" ? "ID" : "EN"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
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
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div
                  className={`
                    absolute top-full right-0 mt-2 w-56
                    rounded-xl shadow-xl overflow-hidden
                    animate-fadeIn
                    ${shouldBeWhite ? "bg-white" : "bg-gray-800/95 backdrop-blur-md"}
                  `}
                >
                  <div className="p-2">
                    <p
                      className={`
                      px-3 py-2 text-xs font-semibold uppercase tracking-wider
                      ${shouldBeWhite ? "text-gray-500" : "text-gray-400"}
                    `}
                    >
                      {t.nav.selectLanguage || "Select Language"}
                    </p>

                    {Object.entries(languages).map(([code, lang]) => (
                      <button
                        key={code}
                        onClick={() =>
                          handleLanguageChange(code as "id" | "en")
                        }
                        className={`
                          w-full flex items-center justify-between px-3 py-3
                          rounded-lg transition-all duration-200
                          ${
                            language === code
                              ? shouldBeWhite
                                ? "bg-blue-50 text-blue-600"
                                : "bg-white/10 text-white"
                              : shouldBeWhite
                                ? "hover:bg-gray-100 text-gray-700"
                                : "hover:bg-white/5 text-gray-300"
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        {language === code && (
                          <div
                            className={`w-2 h-2 rounded-full ${shouldBeWhite ? "bg-blue-600" : "bg-blue-400"}`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`
                flex items-center gap-2
                px-6 py-2.5 rounded-xl font-semibold text-sm
                transition-all duration-300 transform hover:scale-105
                ${
                  shouldBeWhite
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-xl"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                }
              `}
            >
              <Phone className="w-4 h-4" />
              {t.nav.contactUs}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Mobile Language Button */}
            <button
              onClick={toggleLanguageDropdown}
              className={`
                p-2.5 rounded-xl
                transition-colors duration-300
                ${
                  shouldBeWhite
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                p-2.5 rounded-xl
                transition-colors duration-300
                ${
                  shouldBeWhite
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Language Dropdown */}
        {isLanguageDropdownOpen && (
          <div className="lg:hidden mb-4 animate-fadeIn">
            <div
              className={`
                rounded-2xl p-4
                ${shouldBeWhite ? "bg-gray-50" : "bg-gray-800/90 backdrop-blur-md"}
              `}
            >
              <p
                className={`
                px-2 py-2 text-xs font-semibold uppercase tracking-wider mb-2
                ${shouldBeWhite ? "text-gray-500" : "text-gray-400"}
              `}
              >
                {t.nav.selectLanguage || "Select Language"}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => handleLanguageChange(code as "id" | "en")}
                    className={`
                      flex flex-col items-center justify-center p-3
                      rounded-xl transition-all duration-200
                      ${
                        language === code
                          ? shouldBeWhite
                            ? "bg-blue-100 border-2 border-blue-500"
                            : "bg-white/20 border-2 border-blue-400"
                          : shouldBeWhite
                            ? "border border-gray-200 hover:bg-white hover:shadow-sm"
                            : "border border-gray-700 hover:bg-white/10"
                      }
                    `}
                  >
                    <span className="text-2xl mb-1">{lang.flag}</span>
                    <span
                      className={`text-sm font-medium ${shouldBeWhite ? "text-gray-800" : "text-white"}`}
                    >
                      {lang.name.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fadeIn">
            <div
              className={`
                rounded-2xl p-6 space-y-4
                ${shouldBeWhite ? "bg-gray-50" : "bg-gray-800/90 backdrop-blur-md"}
              `}
            >
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    block py-3 px-4 rounded-xl font-medium
                    transition-all duration-300
                    ${
                      shouldBeWhite
                        ? "text-gray-700 hover:bg-white hover:shadow-md"
                        : "text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                {t.nav.contactUs}
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
