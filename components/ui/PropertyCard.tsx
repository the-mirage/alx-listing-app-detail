import React from "react";
import { Star, Heart } from "lucide-react";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const calculateDiscountedPrice = () => {
    if (!property.discount) return property.price;
    const discountPercent = parseInt(property.discount);
    return property.price - (property.price * discountPercent) / 100;
  };

  const discountedPrice = calculateDiscountedPrice();

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Heart Icon */}
        <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
          <Heart className="h-5 w-5 text-white hover:text-red-500 fill-black/20 hover:fill-red-500" />
        </button>

        {/* Discount Badge */}
        {property.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {property.discount}% OFF
          </div>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Property Info */}
      <div className="space-y-1">
        {/* Location and Rating */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 truncate">
              {property.address.city}, {property.address.country}
            </h3>
            <p className="text-gray-500 text-sm truncate">{property.name}</p>
          </div>

          <div className="flex items-center space-x-1 ml-2">
            <Star className="h-4 w-4 text-black fill-black" />
            <span className="text-sm font-medium text-gray-900">
              {property.rating}
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="text-gray-500 text-sm">
          {property.offers.bed} bed
          {parseInt(property.offers.bed) > 1 ? "s" : ""} ·{" "}
          {property.offers.shower} bath
          {parseInt(property.offers.shower) > 1 ? "s" : ""} ·{" "}
          {property.offers.occupants} guests
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="pt-1">
          <div className="flex items-center space-x-2">
            {property.discount ? (
              <>
                <span className="font-semibold text-gray-900">
                  ${discountedPrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${property.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="font-semibold text-gray-900">
                ${property.price.toLocaleString()}
              </span>
            )}
            <span className="text-sm text-gray-500">night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
