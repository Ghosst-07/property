import React from "react";
import { FaSearch } from "react-icons/fa";

function SerachButton() {
  return (
    <div>
      <button className="bg-red-500 rounded-full p-3 px-6 m-1 hover:bg-red-600">
        <div className="flex flex-row items-center  ">
          <FaSearch className="text-white mr-1" />
          <h1 className="text-white text-xl">Search</h1>
        </div>
      </button>
    </div>
  );
}

export default SerachButton;
