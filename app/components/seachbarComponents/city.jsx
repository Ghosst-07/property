"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

const SearchCity = () => {
  const [city, setCity] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setShowDropdown(true);
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setShowDropdown(false);
  };

  const handleClearCity = () => {
    setCity("");
    setShowDropdown(false);
  };

  const cities = ["Delhi", "Lucknow", "Sitapur", "Mumbai", "Pune"];

  return (
    <div className="relative flex flex-row items-center px-2 w-fit md:border-none border rounded-md md:mt-0 mt-1">
      <FaMapMarkerAlt className="ml-2" />
      <input
        type="text"
        placeholder="City"
        className="rounded-md py-2 px-2 w-32 focus:outline-none bg-transparent"
        value={city}
        onChange={handleCityChange}
      />
      {showDropdown && (
        <div className="z-10 absolute top-5 right-7 w-fit py-2 mt-3 bg-white rounded-md shadow-md">
          {cities
            .filter((c) => c.toLowerCase().includes(city.toLowerCase()))
            .map((c) => (
              <div
                key={c}
                className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                onClick={() => handleCitySelect(c)}
              >
                {c}
              </div>
            ))}
        </div>
      )}
      {city && (
        <div
          className="flex items-center ml-2 cursor-pointer"
          onClick={handleClearCity}
        >
          <FaTimes />
        </div>
      )}
    </div>
  );
};

export default SearchCity;
