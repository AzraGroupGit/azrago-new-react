import { useLanguage } from "../../context/LanguageContext";
import FeatureCard from "../ui/FeaturedCard";

function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyChooseUs.features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.whyChooseUs.cta.title}
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              {t.whyChooseUs.cta.subtitle}
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t.whyChooseUs.cta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
