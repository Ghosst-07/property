import React from "react";
import SearchCity from "./seachbarComponents/city";
import SearchType from "./seachbarComponents/type";
import SearchBudget from "./seachbarComponents/budget";
import SerachButton from "./seachbarComponents/button";

function SearchBox() {
  return (
    <div className=" flex justify-left md:ml-36 ">
      <div
        className="  shadow-lg bg-white flex flex-wrap
    justify-center items-center rounded-md"
      >
        <SearchCity />

        <SearchType />

        <SearchBudget />

        <SerachButton />
      </div>
    </div>
  );
}

export default SearchBox;
