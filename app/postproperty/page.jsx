"use client";
import React, { useState } from "react";

function PostProperty() {
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: 0,
    location: "",
    images: [], // Add images state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProperty((prevProperty) => ({
      ...prevProperty,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the property data
    console.log(property);
  };

  return (
    <>
      <div className="pt-32">
        <h1 className="text-2xl font-bold mb-4">Post Property</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={property.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
          />

          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
          ></textarea>

          <label htmlFor="price" className="block mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
          />

          <label htmlFor="location" className="block mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={property.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
          />

          <label htmlFor="images" className="block mb-2">
            Images:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleImageChange}
            className="mb-2"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PostProperty;
