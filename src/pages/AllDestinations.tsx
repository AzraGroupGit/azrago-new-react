import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { destinationsData } from "../data/dataDummy";
import Navbar from "../components/layout/Navbar";
import DestinationCard from "../components/ui/DestinationCard";
import Footer from "../components/layout/Footer";
import DropdownForm from "../components/ui/DropdownForm";

function AllDestinations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique locations
  const locations = useMemo(() => {
    const uniqueLocations = [
      ...new Set(destinationsData.map((d) => d.location)),
    ];
    return uniqueLocations;
  }, []);

  // Extract unique durations
  const durations = useMemo(() => {
    const uniqueDurations = [
      ...new Set(destinationsData.map((d) => d.duration)),
    ];
    return uniqueDurations;
  }, []);

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    let filtered = [...destinationsData];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (dest) =>
          dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Location filter
    if (selectedLocation !== "all") {
      filtered = filtered.filter((dest) => dest.location === selectedLocation);
    }

    // Duration filter
    if (selectedDuration !== "all") {
      filtered = filtered.filter((dest) => {
        const days = parseInt(dest.duration.split(" ")[0]);
        switch (selectedDuration) {
          case "1-3":
            return days >= 1 && days <= 3;
          case "4-7":
            return days >= 4 && days <= 7;
          case "8+":
            return days >= 8;
          default:
            return true;
        }
      });
    }

    // Price filter
    if (priceRange !== "all") {
      filtered = filtered.filter((dest) => {
        switch (priceRange) {
          case "low":
            return dest.price < 1500;
          case "medium":
            return dest.price >= 1500 && dest.price < 2500;
          case "high":
            return dest.price >= 2500;
          default:
            return true;
        }
      });
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedLocation, selectedDuration, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("all");
    setSelectedDuration("all");
    setPriceRange("all");
    setSortBy("popular");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedLocation !== "all" ||
    selectedDuration !== "all" ||
    priceRange !== "all";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore All Destinations
            </h1>
            <p className="text-lg text-gray-600">
              Discover amazing places around the world
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filters
                {hasActiveFilters && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                    Active
                  </span>
                )}
              </button>

              {/* Sort By (Desktop) */}
              <div className="hidden lg:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Filters Section */}
            <div
              className={`${showFilters ? "block" : "hidden"} lg:block mt-6 pt-6 border-t border-gray-200`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Location Filter */}
                <DropdownForm
                  label="Location"
                  options={locations}
                  placeholder="All Locations"
                />

                {/* Duration Filter */}
                <DropdownForm
                  label="Duration"
                  options={durations}
                  placeholder="All Durations"
                />

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under $1,500</option>
                    <option value="medium">$1,500 - $2,500</option>
                    <option value="high">$2,500+</option>
                  </select>
                </div>

                {/* Sort By (Mobile) */}
                <div className="lg:hidden">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rating</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredDestinations.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {destinationsData.length}
              </span>{" "}
              destinations
            </p>
          </div>

          {/* Destinations Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-24 h-24 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No destinations found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllDestinations;
