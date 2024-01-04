import React from "react";
import SearchBox from "../searchbar";

function MainContainer() {
  return (
    <div className=" bg-gradient-to-tl from-cyan-400 to-emerald-400 flex h-[810px]">
      <div className="flex mt-44  justify-end w-full h-[500px] absolute ">
        <img src="/bg.png" alt="logo" className="" />
      </div>
      <div className="flex flex-col relative z-10">
        <h1 className="font-bold mt-40 ml-3 md:ml-40 md:mt-64 text-white text-4xl md:text-7xl">
          Find the Perfect <br /> Property Today
        </h1>
        <div className="md:ml-40 md:mr-96 mb-3 ml-3 mr-10 mt-2 md:w-1/4 md:mb-10">
          <h1 className=" text-white text-xs md:text-sm  ">
            Discover your dream home on our online real estate platform. Find
            cozy apartments, spacious family houses, and commercial spaces. Your
            perfect property is just a click away!
          </h1>
        </div>
        <div className="md:mb-32 mb-20 px-2">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
