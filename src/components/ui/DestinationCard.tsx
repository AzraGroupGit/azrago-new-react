import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Destination {
  id: number;
  name: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  // Fallback image jika gambar utama error
  const fallbackImage = `https://via.placeholder.com/800x600/3b82f6/ffffff?text=${encodeURIComponent(destination.name)}`;

  const handleViewDetails = () => {
    navigate(`/destination/${destination.id}`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img
          src={imageError ? fallbackImage : destination.image}
          alt={destination.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-yellow-500 font-semibold">
            ★ {destination.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {destination.name}
        </h3>
        <p className="text-gray-600 mb-4 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {destination.location}
        </p>

        <p className="text-gray-700 mb-4 line-clamp-2 flex-grow">
          {destination.description}
        </p>

        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className="text-gray-600">
            <svg
              className="w-5 h-5 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {destination.duration}
          </span>
          <span className="text-gray-500 text-sm">
            {destination.reviews} reviews
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 flex-shrink-0">
          <div>
            <span className="text-gray-500 text-sm">From</span>
            <p className="text-2xl font-bold text-blue-600">
              ${destination.price}
            </p>
          </div>
          <button
            onClick={handleViewDetails}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
