"use client";

import { useState } from "react";
import { FaRupeeSign, FaAngleDown, FaAngleUp } from "react-icons/fa";

function SearchBudget() {
  const budget = [
    "₹5 Lac",
    "₹10 Lac",
    "₹20 Lac",
    "₹30 Lac",
    "₹40 Lac",
    "₹50 Lac",
    "₹60 Lac",
    "₹70 Lac",
    "₹80 Lac",
    "₹90 Lac",
    "₹1 Cr",
    "₹1.2 Cr",
    "₹1.4 Cr",
    "₹1.6 Cr",
    "₹1.8 Cr",
    "₹2 Cr",
    "₹2.3 Cr",
    "₹2.6 Cr",
    "₹3 Cr",
    "₹3.5 Cr",
    "₹4 Cr",
    "₹4.5 Cr",
    "₹5 Cr",
    "₹10 Cr",
    "₹20 Cr",
  ];
  const [showMinDropdown, setShowMinDropdown] = useState(false);
  const [showMaxDropdown, setShowMaxDropdown] = useState(false);
  const [minBudget, setMinBudget] = useState("₹5 Lac");
  const [maxBudget, setMaxBudget] = useState("₹20 Cr");

  const handleMinDropdownClick = () => {
    setShowMinDropdown(!showMinDropdown);
  };

  const handleMaxDropdownClick = () => {
    setShowMaxDropdown(!showMaxDropdown);
  };

  const handleMinBudgetChange = (event) => {
    setMinBudget(parseInt(event.target.value));
  };

  const handleMaxBudgetChange = (event) => {
    setMaxBudget(parseInt(event.target.value));
  };

  const handleMinDropdownItemClick = (value) => {
    setMinBudget(value);
    setShowMinDropdown(false);
  };

  const handleMaxDropdownItemClick = (value) => {
    setMaxBudget(value);
    setShowMaxDropdown(false);
  };

  return (
    <div className="relative flex flex-row items-center px-2 w-fit border md:border-none py-2 mt-1 md:mt-0 rounded-md">
      <div className="flex flex-row items-center mr-1  ">
        <FaRupeeSign className="mr-2" />
        <h1
          className="text-black cursor-pointer"
          onClick={handleMinDropdownClick}
        >
          Min: {minBudget}
        </h1>
        {showMinDropdown ? (
          <FaAngleUp
            className="ml-1 text-gray-400"
            onClick={handleMinDropdownClick}
          />
        ) : (
          <FaAngleDown
            className="ml-1 text-gray-400"
            onClick={handleMinDropdownClick}
          />
        )}
      </div>

      {showMinDropdown && (
        <div className="absolute top-10 left-3 bg-white p-2 w-32 shadow-md">
          <div
            className="mt-2  pr-2  max-h-40 overflow-y-auto scrollbar-thin 
          scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          >
            {budget.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center cursor-pointer"
                  onClick={() => handleMinDropdownItemClick(value)}
                >
                  <h1>{value}</h1>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex  md:hidden md:w-fit w-12 mr-5  justify-center text-gray-300">
        |
      </div>
      <h1
        className="text-black cursor-pointer w-fit flex flex-row items-center"
        onClick={handleMaxDropdownClick}
      >
        Max: {maxBudget}
      </h1>
      {showMaxDropdown ? (
        <FaAngleUp
          className="ml-1 text-gray-400"
          onClick={handleMaxDropdownClick}
        />
      ) : (
        <FaAngleDown
          className="ml-1 text-gray-400"
          onClick={handleMaxDropdownClick}
        />
      )}

      {showMaxDropdown && (
        <div className="absolute top-10  right-0 bg-white p-2 mr-2 w-32 shadow-md">
          <div className=" mt-2 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {budget.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center cursor-pointer t"
                  onClick={() => handleMaxDropdownItemClick(value)}
                >
                  <h1>{value}</h1>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBudget;
