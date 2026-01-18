import { CheckCircle } from "lucide-react";

interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: string;
}

// Data untuk steps
const howItWorksData = [
  {
    id: 1,
    step: "01",
    title: "Choose Destination",
    description:
      "Browse our wide selection of amazing destinations and pick your perfect getaway",
    icon: "🗺️",
  },
  {
    id: 2,
    step: "02",
    title: "Pick Date",
    description:
      "Select your preferred travel dates and customize your itinerary to fit your schedule",
    icon: "📅",
  },
  {
    id: 3,
    step: "03",
    title: "Book & Pay",
    description:
      "Complete your booking with secure payment options and receive instant confirmation",
    icon: "💳",
  },
  {
    id: 4,
    step: "04",
    title: "Enjoy Trip",
    description:
      "Pack your bags and get ready for an unforgettable adventure with our expert guides",
    icon: "✈️",
  },
];

// Step Card Component
function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div id="how-it-works" className="relative flex flex-col items-center">
      {/* Step Number Circle */}
      <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-2xl transform hover:scale-110 transition-all duration-300">
        <div className="text-center">
          <div className="text-5xl mb-1">{step.icon}</div>
        </div>

        {/* Connector Line - positioned from circle */}
        {!isLast && (
          <div className="hidden lg:block absolute top-1/2 left-full w-[calc(100vw/4-8rem)] h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transform -translate-y-1/2 z-0"></div>
        )}
      </div>

      {/* Step Number Badge */}
      <div className="bg-blue-100 text-blue-600 font-bold text-sm px-4 py-1 rounded-full mb-3">
        STEP {step.step}
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {step.title}
        </h3>
        <p className="text-gray-600 text-base max-w-xs mx-auto">
          {step.description}
        </p>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Simple and easy booking process to start your dream vacation in just
            4 steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {howItWorksData.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              isLast={index === howItWorksData.length - 1}
            />
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You'll Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Instant booking confirmation",
              "24/7 customer support",
              "Flexible cancellation policy",
              "Best price guarantee",
              "Secure payment processing",
              "Travel insurance options",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
