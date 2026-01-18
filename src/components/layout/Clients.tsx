// Data clients
const clientsData = [
  { id: 1, name: "TripAdvisor", logo: "🌍" },
  { id: 2, name: "Booking.com", logo: "🏨" },
  { id: 3, name: "Airbnb", logo: "🏠" },
  { id: 4, name: "Expedia", logo: "✈️" },
  { id: 5, name: "Agoda", logo: "🎫" },
  { id: 6, name: "Traveloka", logo: "🧳" },
  { id: 7, name: "Tiket.com", logo: "🎟️" },
  { id: 8, name: "Pegipegi", logo: "🌴" },
];

function Clients() {
  // Duplikasi data untuk infinite loop effect
  const duplicatedClients = [...clientsData, ...clientsData];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with the world's leading travel platforms to bring
            you the best experience
          </p>
        </div>

        {/* Animated Logos Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Sliding Container */}
          <div className="flex animate-slide">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="flex flex-col items-center justify-center p-6 transition-all duration-300">
                  {/* Logo */}
                  <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  {/* Name */}
                  <div className="text-xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Clients;
