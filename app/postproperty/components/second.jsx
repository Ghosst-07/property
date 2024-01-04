import React, { useState } from "react";
import useGlobalStore from "@/app/store/globalStore";
import LocationDataStore from "@/app/store/locationStore";

function SeconStep() {
  const { locationData } = LocationDataStore();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { addOneStep } = useGlobalStore();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "address") {
      setAddress(value);
    } else if (id === "city") {
      setCity(value);
    } else if (id === "state") {
      setState(value);
    } else if (id === "zip") {
      setZip(value);
    }
  };

  const validateFields = () => {
    if (
      address.trim() === "" ||
      city.trim() === "" ||
      state.trim() === "" ||
      zip.trim() === ""
    ) {
      setIsButtonDisabled(true);
    } else {
      locationData.address = address;
      locationData.city = city;
      locationData.state = state;
      locationData.zip = zip;

      console.log(locationData);
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-10">
      <h1 className="text-5xl">Where is your property located?</h1>
      <h1 className="pt-2 text-gray-400">
        An accurate location helps you connect with the right buyer
      </h1>
      <div>
        <div className="mt-8">
          <label htmlFor="address" className="text-lg font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full px-4 py-2 mt-2 border   border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the address"
            value={address}
            onChange={handleInputChange}
            onBlur={validateFields}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="city" className="text-lg font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the city"
            value={city}
            onChange={handleInputChange}
            onBlur={validateFields}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="state" className="text-lg font-medium">
            State
          </label>
          <input
            type="text"
            id="state"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the state"
            value={state}
            onChange={handleInputChange}
            onBlur={validateFields}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="zip" className="text-lg font-medium">
            Zip Code
          </label>
          <input
            type="text"
            id="zip"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the zip code"
            value={zip}
            onChange={handleInputChange}
            onBlur={validateFields}
          />
        </div>
      </div>
      <div className="pt-10">
        <button
          className={`rounded-3xl px-5 py-3 text-white ${
            isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : " bg-pink-500"
          }`}
          disabled={isButtonDisabled}
          onClick={() => {
            console.log(locationData);
            addOneStep();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SeconStep;
