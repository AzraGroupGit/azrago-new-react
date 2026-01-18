import { useNavigate } from "react-router-dom";
import { destinationsData } from "../../data/dataDummy";
import DestinationCard from "../ui/DestinationCard";

function PopularDestinations() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/destinations");
  };

  return (
    <section id="destinations" className="py-16 md:py-24 from-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most loved travel packages and create unforgettable
            memories
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-xl border-2 border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            onClick={handleViewAll}
          >
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
