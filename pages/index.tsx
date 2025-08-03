import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Pill from "@/components/ui/Pill";
import PropertyCard from "@/components/ui/PropertyCard";
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(
    PROPERTYLISTINGSAMPLE
  );

  // Filter options
  const filterOptions = [
    "All",
    "Top Villa",
    "Self Checkin",
    "Pet Friendly",
    "Free Parking",
    "Pool",
    "Mountain View",
    "Beachfront",
    "City View",
    "Fireplace",
    "Free WiFi",
    "Hot Tub",
  ];

  // Handle filter selection
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);

    if (filter === "All") {
      setFilteredProperties(PROPERTYLISTINGSAMPLE);
    } else {
      const filtered = PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some(
          (cat) =>
            cat.toLowerCase().includes(filter.toLowerCase()) ||
            filter.toLowerCase().includes(cat.toLowerCase())
        )
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <span className="text-sm text-gray-500">
              {filteredProperties.length} properties found
            </span>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide pb-2">
            {filterOptions.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
                className="whitespace-nowrap"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Stay anywhere
          </h2>
          <p className="text-gray-600">
            {activeFilter === "All"
              ? "Explore our wide selection of properties worldwide"
              : `Properties matching "${activeFilter}"`}
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={`${property.name}-${index}`}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={() => handleFilterClick("All")}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Show all properties
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
