"use client";
import React from "react";
import PropTypes from "prop-types";

function BigPropertyCard(props) {
  const { imageUrl, title, location, propertyType, price } = props;

  return (
    <div className="w-[380px] rounded overflow-hidden shadow-lg hover:scale-105 cursor-pointer">
      <div className="relative">
        <img
          className="w-full transition-transform duration-300"
          src={imageUrl}
          alt="Property"
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="font-bold text-xl">{title}</div>
            <p className="text-gray-700 text-base">{location}</p>
          </div>
          <div className="flex flex-col  ">
            <p className="text-gray-700 text-base">{propertyType}</p>
            <p className="text-gray-700 text-base font-bold">{price}</p>
          </div>
          <button className="bg-pink-500 hover:bg-pink-700 text-white rounded-lg p-2">
            view details
          </button>
        </div>
      </div>
    </div>
  );
}

BigPropertyCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  propertyType: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BigPropertyCard;
