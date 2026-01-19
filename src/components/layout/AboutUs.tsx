import { useLanguage } from "../../context/LanguageContext";
import { aboutUsData } from "../../data/aboutUsData";

function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="font-semibold">{t.aboutUs.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.aboutUs.title} {aboutUsData.foundedYear}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.aboutUs.subtitle}
          </p>
        </div>

        {/* Main Content - Image + Text Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
                alt="Our Travel Team"
                className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold">
                  {new Date().getFullYear() - aboutUsData.foundedYear}+
                </div>
                <div className="text-sm font-medium">
                  {t.aboutUs.experienceBadge.years}{" "}
                  {t.aboutUs.experienceBadge.experience}
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            {/* Mission Statement */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.aboutUs.mission.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.aboutUs.mission.description}
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.aboutUs.values.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.aboutUs.values.items.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder/Team Info */}
            {aboutUsData.team && (
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                    {aboutUsData.team.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {aboutUsData.team.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t.aboutUs.team.position}
                    </p>
                    <p className="text-gray-500 text-sm mt-2 italic">
                      "{t.aboutUs.team.quote}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {aboutUsData.stats.travelers}+
              </div>
              <div className="text-gray-700 font-medium">
                {t.aboutUs.stats.travelers}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {aboutUsData.stats.destinations}+
              </div>
              <div className="text-gray-700 font-medium">
                {t.aboutUs.stats.destinations}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {aboutUsData.stats.tours}+
              </div>
              <div className="text-gray-700 font-medium">
                {t.aboutUs.stats.tours}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {aboutUsData.stats.guides}+
              </div>
              <div className="text-gray-700 font-medium">
                {t.aboutUs.stats.guides}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            {t.aboutUs.cta.button}
          </button>
          <p className="text-gray-500 mt-4">{t.aboutUs.cta.subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
