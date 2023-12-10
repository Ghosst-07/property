import React from "react";

const SecondContainer = () => {
  return (
    <div className="property-container">
      <h1 className="py-20 text-center text-4xl font-semibold">
        Discover Your Ideal Spaces for <br /> Life, Work, and Leisure
      </h1>

      <div className="flex justify-center items-center w-full pb-20">
        <div className="w-full md:w-[1000px] lg:w-[1200px] flex flex-row">
          <div className="w-full md:w-[600px] lg:w-[800px]">
            <img
              className="rounded-l-lg object-cover"
              src="https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY="
              alt=""
              srcSet=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-full md:w-[400px] lg:w-[500px] rounded-r-lg bg-gray-100">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="md:text-4xl text-xl pt-10 font-semibold pb-5">
                Find Your Space
              </h1>
              <p className="text-center md:text-lg text-sm md:px-8 px-2 mb-10 ">
                Unearth a plethora of choices from apartments and lands, to
                builder floors, villas, and beyond.
              </p>
              <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-2xl hover:scale-110 transition-transform">
                Explore More!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
