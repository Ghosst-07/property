"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaHome } from "react-icons/fa";

function SerchType() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleButtonClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const getSelectedOptionText = () => {
    if (selectedOptions.length === 0) {
      return "Property Type";
    } else if (selectedOptions.length === 1) {
      return selectedOptions[0];
    } else {
      return `${selectedOptions[0]} +${selectedOptions.length - 1}`;
    }
  };

  return (
    <div className="relative flex flex-row items-center px-2">
      <FaHome className="mr-2" />
      <h1
        className="text-gray-400 cursor-pointer"
        onClick={handleDropdownClick}
      >
        {getSelectedOptionText()}
      </h1>
      {showDropdown ? (
        <FaAngleUp
          className="ml-1 text-gray-400"
          onClick={handleDropdownClick}
        />
      ) : (
        <FaAngleDown
          className="ml-1 text-gray-400"
          onClick={handleDropdownClick}
        />
      )}
      {showDropdown && (
        <div className="absolute top-10 w-96 left-0 bg-white p-2 shadow-md">
          {/* FIRST PROPERTY TYPE DROP DOWN CONTENT */}
          <div className="flex flex-col">
            <div
              className="flex flex-row pl-2 items-center"
              onClick={() => setShowDropdown2(!showDropdown2)}
            >
              <h1 className="hover:cursor-pointer">Residential</h1>
              {showDropdown2 ? (
                <FaAngleUp className="ml-1" />
              ) : (
                <FaAngleDown className="ml-1" />
              )}
            </div>
            {showDropdown2 && (
              <div className="flex flex-col">
                <div className="flex flex-row  items-center">
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Flat")}
                    style={{
                      backgroundColor: selectedOptions.includes("Flat")
                        ? "pink"
                        : "white",
                    }}
                  >
                    Flat
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("House/Villa")}
                    style={{
                      backgroundColor: selectedOptions.includes("House/Villa")
                        ? "pink"
                        : "white",
                    }}
                  >
                    House/Villa
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Plot")}
                    style={{
                      backgroundColor: selectedOptions.includes("Plot")
                        ? "pink"
                        : "white",
                    }}
                  >
                    Plot
                  </button>
                </div>
              </div>
            )}
            <div
              className="flex flex-row pl-2 items-center pt-2"
              onClick={() => setShowDropdown3(!showDropdown3)}
            >
              <h1 className="hover:cursor-pointer">Commercial</h1>
              {showDropdown3 ? (
                <FaAngleUp className="ml-1" />
              ) : (
                <FaAngleDown className="ml-1" />
              )}
            </div>
            {showDropdown3 && (
              <div className="flex flex-col">
                <div className="flex flex-wrap w-96">
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Shop/Showroom")}
                    style={{
                      backgroundColor: selectedOptions.includes("Shop/Showroom")
                        ? "pink"
                        : "white",
                    }}
                  >
                    Shop/Showroom
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Warehouse/Godown")}
                    style={{
                      backgroundColor: selectedOptions.includes(
                        "Warehouse/Godown"
                      )
                        ? "pink"
                        : "white",
                    }}
                  >
                    Warehouse/Godown
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Office Space")}
                    style={{
                      backgroundColor: selectedOptions.includes("Office Space")
                        ? "pink"
                        : "white",
                    }}
                  >
                    Office Space
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Commercial Land")}
                    style={{
                      backgroundColor: selectedOptions.includes(
                        "Commercial Land"
                      )
                        ? "pink"
                        : "white",
                    }}
                  >
                    Commercial Land
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Industrial Building")}
                    style={{
                      backgroundColor: selectedOptions.includes(
                        "Industrial Building"
                      )
                        ? "pink"
                        : "white",
                    }}
                  >
                    Industrial Building
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Industrial Shed")}
                    style={{
                      backgroundColor: selectedOptions.includes(
                        "Industrial Shed"
                      )
                        ? "pink"
                        : "white",
                    }}
                  >
                    Industrial Shed
                  </button>
                </div>
              </div>
            )}
            <div
              className="flex flex-row pl-2 items-center pt-2"
              onClick={() => setShowDropdown4(!showDropdown4)}
            >
              <h1 className="hover:cursor-pointer">Other Property Types</h1>
              {showDropdown4 ? (
                <FaAngleUp className="ml-1" />
              ) : (
                <FaAngleDown className="ml-1" />
              )}
            </div>
            {showDropdown4 && (
              <div className="flex flex-col ">
                <div className="flex flex-wrap w-96">
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Agricultural Land")}
                    style={{
                      backgroundColor: selectedOptions.includes(
                        "Agricultural Land"
                      )
                        ? "pink"
                        : "white",
                    }}
                  >
                    Agricultural Land
                  </button>
                  <button
                    className="border border-black/50 rounded-full px-2 py-1 m-1"
                    onClick={() => handleButtonClick("Farm House")}
                    style={{
                      backgroundColor: selectedOptions.includes("Farm House")
                        ? "pink"
                        : "white",
                    }}
                  >
                    Farm House
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SerchType;
