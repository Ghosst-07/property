"use client";
import useGlobalStore from "@/app/store/globalStore";
import usePostPropertyStore from "@/app/store/postpropertydataStore";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

function FirstStep() {
  const { propertyData } = usePostPropertyStore();
  const { data: session } = useSession();
  const { addOneStep } = useGlobalStore();
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState("residential");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCommercialType, setSelectedCommercialType] = useState(null);
  const [selectedCommercialSubtype, setSelectedCommercialSubtype] =
    useState(null);

  const buttons = [{ label: "Sell" }, { label: "Rent/Lease" }];
  const propertyTypes = [
    "Flat/Apartment",
    "Independent House/Villa",
    "Independent/Builder Floor",
    "Plot/Land",
    "1 RK/Studio Apartment",
    "Serviced Apartment",
    "Farmhouse",
    "Other",
  ];
  const commercialTypes = [
    "Office",
    "Hospitality",
    "Retail",
    "Plot / Land",
    "Storage",
    "Industry",
    "Other",
  ];

  const office = [
    "Ready to move office space",
    "Bare shell office space",
    "Co-working office space",
  ];

  const retail = ["Commercial shop/space", "Commercial Showrooms"];

  const plot = ["Commercial land", "Agricultural land", "Industrial land"];

  const storage = ["Warehouse", "Cold storage"];

  const industry = ["Factory", "Manufacturing"];

  const hospitality = ["Hotel/Resorts", "Guest-House/Banquet-Halls"];

  const handleCommercialSubtypeClick = (value) => {
    setSelectedCommercialSubtype(value);
  };

  const handleCommercialTypeClick = (value) => {
    setSelectedCommercialSubtype(null);
    setSelectedCommercialType(value);
  };

  const handleTypeClick = (value) => {
    setSelectedType(value);
  };

  const handleRadioButton = (value) => {
    setSelectedRadioButton(value);
  };

  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  const isContinueButtonDisabled = () => {
    if (
      selectedButton === null ||
      selectedRadioButton === null ||
      (selectedRadioButton === "residential" && selectedType === null) ||
      (selectedRadioButton === "commercial" &&
        selectedCommercialType === null) ||
      (selectedRadioButton === "commercial" &&
        selectedCommercialType === "Hospitality" &&
        selectedCommercialSubtype === null) ||
      (selectedRadioButton === "commercial" &&
        selectedCommercialType === "Retail" &&
        selectedCommercialSubtype === null) ||
      (selectedRadioButton === "commercial" &&
        selectedCommercialType === "Plot / Land" &&
        selectedCommercialSubtype === null) ||
      (selectedRadioButton === "commercial" &&
        selectedCommercialType === "Storage" &&
        selectedCommercialSubtype === null) ||
      (selectedRadioButton === "commercial" &&
        selectedCommercialType === "Industry" &&
        selectedCommercialSubtype === null) ||
      (selectedRadioButton === "commercial" &&
        selectedCommercialType === "Office" &&
        selectedCommercialSubtype === null)
    ) {
      return true;
    }
    propertyData["lookingto"] = selectedButton;
    propertyData["kindofproperty"] = selectedRadioButton;
    if (selectedRadioButton === "residential") {
      propertyData["propertytype"] = selectedType;
    } else if (selectedRadioButton === "commercial") {
      propertyData["propertytype"] = selectedCommercialType;
      propertyData["propertysubtype"] = selectedCommercialSubtype;
    }

    return false;
  };

  return (
    <div className=" flex-col ">
      <div className="">
        <h2 className="text-center text-4xl">Let's get started</h2>
      </div>
      <div className="pt-10 flex flex-col w-full justify-center items-center ">
        <h1>I'm Looking to</h1>
        <div className="flex flex-wrap gap-2">
          {buttons.map((button) => (
            <button
              key={button.label}
              className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                selectedButton === button.label ? "border-[1px]" : "border-0"
              }`}
              onClick={() => handleButtonClick(button.label)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center pt-8">
        <h1>What kind of property do you have?</h1>
        <div className="flex flex-wrap gap-2 pt-1 ">
          <label className="inline-flex items-center justify-center">
            <input
              type="radio"
              value="residential"
              checked={selectedRadioButton === "residential"}
              onChange={() => setSelectedRadioButton("residential")}
              className="form-radio h-5 w-5 text-pink-500"
            />
            <span className="ml-2 text-gray-700">Residential</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="commercial"
              checked={selectedRadioButton === "commercial"}
              onChange={() => setSelectedRadioButton("commercial")}
              className="form-radio h-5 w-5 text-pink-500"
            />
            <span className="ml-2 text-gray-700">Commercial</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col pl-10 justify-center items-center pt-2">
        {selectedRadioButton === "residential" && (
          <div className="flex flex-wrap w-[450px] gap-2 pl-6">
            {propertyTypes.map((type) => (
              <div key={type}>
                <button
                  className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                    selectedType === type ? "border-[1px]" : "border-0"
                  }`}
                  onClick={() => handleTypeClick(type)}
                >
                  {type}
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedRadioButton === "commercial" && (
          <div className="flex flex-wrap gap-2 w-[400px] pl-6">
            {commercialTypes.map((type) => (
              <div key={type}>
                <button
                  className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                    selectedCommercialType === type
                      ? "border-[1px]"
                      : "border-0"
                  }`}
                  onClick={() => handleCommercialTypeClick(type)}
                >
                  {type}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedRadioButton === "commercial" &&
        selectedCommercialType === "Hospitality" && (
          <div className="flex flex-col gap-2 justify-center items-center pt-10">
            <h1>What kind of hospitality property is it?</h1>
            <div className="flex flex-wrap gap-2 pt-1 ">
              {hospitality.map((type) => (
                <div key={type}>
                  <button
                    className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                      selectedCommercialSubtype === type
                        ? "border-[1px]"
                        : "border-0"
                    }`}
                    onClick={() => handleCommercialSubtypeClick(type)}
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      {selectedRadioButton === "commercial" &&
        selectedCommercialType === "Retail" && (
          <div className="flex flex-col gap-2 justify-center items-center pt-10">
            <h1>What kind of retail property is it?</h1>
            <div className="flex flex-wrap gap-2 pt-1 ">
              {retail.map((type) => (
                <div key={type}>
                  <button
                    className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                      selectedCommercialSubtype === type
                        ? "border-[1px]"
                        : "border-0"
                    }`}
                    onClick={() => handleCommercialSubtypeClick(type)}
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      {selectedRadioButton === "commercial" &&
        selectedCommercialType === "Plot / Land" && (
          <div className="flex flex-col gap-2 justify-center items-center pt-10">
            <h1>What kind of plot/land is it?</h1>
            <div className="flex flex-wrap gap-2 pt-1 ">
              {plot.map((type) => (
                <div key={type}>
                  <button
                    className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                      selectedCommercialSubtype === type
                        ? "border-[1px]"
                        : "border-0"
                    }`}
                    onClick={() => handleCommercialSubtypeClick(type)}
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      {selectedRadioButton === "commercial" &&
        selectedCommercialType === "Storage" && (
          <div className="flex flex-col gap-2 justify-center items-center pt-10">
            <h1>What kind of storage property is it?</h1>
            <div className="flex flex-wrap gap-2 pt-1 ">
              {storage.map((type) => (
                <div key={type}>
                  <button
                    className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                      selectedCommercialSubtype === type
                        ? "border-[1px]"
                        : "border-0"
                    }`}
                    onClick={() => handleCommercialSubtypeClick(type)}
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      {selectedRadioButton === "commercial" &&
        selectedCommercialType === "Industry" && (
          <div className="flex flex-col gap-2 justify-center items-center pt-10">
            <h1>What kind of industry property is it?</h1>
            <div className="flex flex-wrap gap-2 pt-1 ">
              {industry.map((type) => (
                <div key={type}>
                  <button
                    className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                      selectedCommercialSubtype === type
                        ? "border-[1px]"
                        : "border-0"
                    }`}
                    onClick={() => handleCommercialSubtypeClick(type)}
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      {selectedRadioButton === "commercial" &&
        selectedCommercialType === "Office" && (
          <div className="flex flex-col gap-2 justify-center items-center pt-10">
            <h1>What kind of office is it?</h1>
            <div className="flex flex-wrap gap-2 pt-1 ">
              {office.map((type) => (
                <div key={type}>
                  <button
                    className={`rounded-3xl border-pink-500  bg-pink-100 px-3 py-1 ${
                      selectedCommercialSubtype === type
                        ? "border-[1px]"
                        : "border-0"
                    }`}
                    onClick={() => handleCommercialSubtypeClick(type)}
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      <div className="pt-10 flex w-full justify-center items-center">
        <button
          className={`rounded-3xl px-5 py-3 text-white ${
            isContinueButtonDisabled()
              ? "bg-gray-500"
              : "bg-pink-500 hover:bg-pink-700"
          }`}
          disabled={isContinueButtonDisabled()}
          onClick={() => {
            addOneStep();
            addOneStep();
            addOneStep();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default FirstStep;
