import React, { useState } from "react";
import { Search, Menu, User, Globe } from "lucide-react";

const Header: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [activeTab, setActiveTab] = useState("stays");

  const accommodationTypes = [
    { id: "rooms", label: "Rooms", icon: "🏠" },
    { id: "mansions", label: "Mansions", icon: "🏰" },
    { id: "countryside", label: "Countryside", icon: "🌾" },
    { id: "beachfront", label: "Beachfront", icon: "🏖️" },
    { id: "cabins", label: "Cabins", icon: "🏘️" },
    { id: "trending", label: "Trending", icon: "🔥" },
    { id: "pools", label: "Amazing pools", icon: "🏊‍♂️" },
    { id: "islands", label: "Islands", icon: "🏝️" },
    { id: "lakefront", label: "Lakefront", icon: "🏞️" },
    { id: "skiing", label: "Skiing", icon: "⛷️" },
    { id: "castles", label: "Castles", icon: "🏯" },
    { id: "camping", label: "Camping", icon: "⛺" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-red-500 cursor-pointer">
              🏠 airbnb
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveTab("stays")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "stays"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Stays
            </button>
            <button
              onClick={() => setActiveTab("experiences")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "experiences"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Experiences
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Airbnb your home
            </button>

            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="h-4 w-4 text-gray-700" />
            </button>

            <div className="flex items-center space-x-2 border border-gray-300 rounded-full py-1 px-2 hover:shadow-md transition-shadow cursor-pointer">
              <Menu className="h-4 w-4 text-gray-700" />
              <div className="bg-gray-700 rounded-full p-1">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="pb-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow max-w-4xl w-full">
              {/* Where */}
              <div className="flex-1 px-6 py-4">
                <label className="block text-xs font-medium text-gray-900 mb-1">
                  Where
                </label>
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none"
                />
              </div>

              <div className="w-px h-8 bg-gray-300"></div>

              {/* Check in */}
              <div className="flex-1 px-6 py-4">
                <label className="block text-xs font-medium text-gray-900 mb-1">
                  Check in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full text-sm text-gray-600 border-none outline-none"
                />
              </div>

              <div className="w-px h-8 bg-gray-300"></div>

              {/* Check out */}
              <div className="flex-1 px-6 py-4">
                <label className="block text-xs font-medium text-gray-900 mb-1">
                  Check out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full text-sm text-gray-600 border-none outline-none"
                />
              </div>

              <div className="w-px h-8 bg-gray-300"></div>

              {/* Who */}
              <div className="flex-1 px-6 py-4">
                <label className="block text-xs font-medium text-gray-900 mb-1">
                  Who
                </label>
                <input
                  type="text"
                  placeholder="Add guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none"
                />
              </div>

              {/* Search Button */}
              <div className="pr-2">
                <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full transition-colors">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide py-4">
            {accommodationTypes.map((type) => (
              <button
                key={type.id}
                className="flex flex-col items-center space-y-2 min-w-max px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {type.icon}
                </span>
                <span className="text-xs font-medium text-gray-600 whitespace-nowrap">
                  {type.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
