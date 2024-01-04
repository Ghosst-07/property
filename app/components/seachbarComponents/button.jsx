import React from "react";
import { FaSearch } from "react-icons/fa";

function SerachButton() {
  return (
    <div>
      <button
        className="bg-pink-600 rounded-md
       p-3 px-6 m-1 hover:bg-pink-700
       
       "
      >
        <div className="flex flex-row items-center  ">
          <FaSearch className="text-white mr-1" />
          <h1 className="text-white text-xl">Search</h1>
        </div>
      </button>
    </div>
  );
}

export default SerachButton;
