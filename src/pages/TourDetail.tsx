// src/pages/TourDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import { destinationsData } from "../data/dataDummy";

function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [guests, setGuests] = useState(2);

  const tour = destinationsData.find((d) => d.id === Number(id));

  const handleBookNow = () => {
    navigate(`/booking/${id}`);
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tour Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <button
                onClick={() => navigate("/")}
                className="hover:text-blue-600"
              >
                Home
              </button>
              <span>/</span>
              <span>Destinations</span>
              <span>/</span>
              <span className="text-gray-900">{tour.name}</span>
            </div>

            {/* Title & Rating */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {tour.name}
                </h1>
                <p className="text-lg text-gray-600 mb-3">{tour.tagline}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                    <span className="text-gray-600">{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(tour.rating)}
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-gray-500">
                      ({tour.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${tour.price}
                </p>
                <p className="text-sm text-gray-500">per person</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {tour.gallery && (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Main Image */}
              <div className="lg:col-span-3">
                <img
                  src={tour.gallery[selectedImage]}
                  alt={tour.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
                {tour.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    onClick={() => setSelectedImage(index)}
                    className={`w-full h-24 lg:h-28 object-cover rounded-xl cursor-pointer transition-all ${
                      selectedImage === index
                        ? "ring-4 ring-blue-500"
                        : "hover:opacity-75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex border-b">
                  {["overview", "itinerary", "included"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-6 py-4 font-semibold capitalize transition-colors ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Tour Overview</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {tour.overview}
                      </p>

                      {tour.highlights && (
                        <>
                          <h4 className="text-xl font-bold mb-4">
                            Tour Highlights
                          </h4>
                          <ul className="space-y-3">
                            {tour.highlights.map((highlight, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <svg
                                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-gray-700">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}

                  {/* Itinerary Tab */}
                  {activeTab === "itinerary" && tour.itinerary && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">
                        Day by Day Itinerary
                      </h3>
                      <div className="space-y-6">
                        {tour.itinerary.map((day) => (
                          <div
                            key={day.day}
                            className="border-l-4 border-blue-500 pl-6"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                                Day {day.day}
                              </span>
                              <h4 className="text-xl font-bold">{day.title}</h4>
                            </div>
                            <ul className="space-y-2">
                              {day.activities.map((activity, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2 text-gray-700"
                                >
                                  <span className="text-blue-600 mt-1">•</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Included Tab */}
                  {activeTab === "included" && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {tour.inclusions && (
                        <div>
                          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <svg
                              className="w-6 h-6 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            What's Included
                          </h4>
                          <ul className="space-y-2">
                            {tour.inclusions.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-gray-700"
                              >
                                <svg
                                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tour.exclusions && (
                        <div>
                          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <svg
                              className="w-6 h-6 text-red-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            What's Not Included
                          </h4>
                          <ul className="space-y-2">
                            {tour.exclusions.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-gray-700"
                              >
                                <svg
                                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold mb-4">Book This Tour</h3>

                {/* Date Picker */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Guests */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold flex-1 text-center">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price per person</span>
                    <span className="font-semibold">${tour.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-semibold">{guests} person(s)</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-blue-600">
                      ${tour.price * guests}
                    </span>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg mb-3"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>

                <button className="w-full bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 rounded-xl border-2 border-blue-600 transition-all">
                  Contact Us
                </button>

                {/* Info */}
                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Free cancellation up to 7 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TourDetail;
