import React from "react";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa";
import SearchCity from "./seachbarComponents/city";
import SearchType from "./seachbarComponents/type";
import SearchBudget from "./seachbarComponents/budget";
import SerachButton from "./seachbarComponents/button";

function SearchBox() {
  return (
    <div className="w-screen  flex justify-center">
      <div
        className="m-10 w-fit h-16 border border-black/50 flex flex-row 
    justify-center items-center rounded-full"
      >
        <SearchCity />
        <h1 className="text-xl font-extralight">|</h1>

        <SearchType />
        <h1 className="text-xl font-extralight">|</h1>

        <SearchBudget />

        <SerachButton />
      </div>
    </div>
  );
}

export default SearchBox;
