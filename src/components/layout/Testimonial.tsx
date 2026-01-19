import { useLanguage } from "../../context/LanguageContext";
import TestimonialCard from "../ui/TestimonialCard";

function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="font-semibold">{t.testimonials.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.testimonials.items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {t.testimonials.stats.travelers.value}
              </div>
              <div className="text-white/80">
                {t.testimonials.stats.travelers.label}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {t.testimonials.stats.rating.value}
              </div>
              <div className="text-white/80">
                {t.testimonials.stats.rating.label}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {t.testimonials.stats.destinations.value}
              </div>
              <div className="text-white/80">
                {t.testimonials.stats.destinations.label}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {t.testimonials.stats.satisfaction.value}
              </div>
              <div className="text-white/80">
                {t.testimonials.stats.satisfaction.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
