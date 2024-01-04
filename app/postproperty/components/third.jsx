import LocationDataStore from "@/app/store/locationStore";
import React from "react";

function ThirdStep() {
  const { locationData } = LocationDataStore();

  return (
    <div>
      {locationData.address}
      ThirdStep
    </div>
  );
}

export default ThirdStep;
