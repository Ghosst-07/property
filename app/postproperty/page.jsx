"use client";

import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import FirstStep from "./components/first";
import SecondStep from "./components/second";
import useGlobalStore from "../store/globalStore";
import { HiMenuAlt3 } from "react-icons/hi";
import ThirdStep from "./components/third";
import FourthStep from "./components/fourth";

function PostProperty() {
  HiMenuAlt3;
  const { step } = useGlobalStore();
  return (
    <div className="pt-10">
      <Stepper
        steps={[
          { title: "Basic Details" },
          { title: "Location Details" },
          { title: "Property Profile" },
          { title: "Videos & Photos" },
          { title: "Pricing & Others" },
        ]}
        activeStep={step}
      />
      {step === 0 && <FirstStep />}
      {step === 1 && <SecondStep />}
      {step === 2 && <ThirdStep />}
      {step === 3 && <FourthStep />}
    </div>
  );
}

export default PostProperty;
