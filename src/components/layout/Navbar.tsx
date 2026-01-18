import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOnHero, setIsOnHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current page is not home page
  const isDetailPage = location.pathname !== "/";

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Destinations", href: "#destinations" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Articles", href: "#articles" },
    { name: "About Us", href: "#about-us" },
  ];

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
                Your Journey Partner
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
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

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`
                hidden md:flex items-center gap-2
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
              Contact Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                lg:hidden p-2 rounded-lg
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
                  key={item.name}
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
                Contact Us
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
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
