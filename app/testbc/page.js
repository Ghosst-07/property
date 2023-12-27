"use client";
import React from "react";
import bcrypt from "bcryptjs";

function TEST() {
  const check = async () => {
    const test = await bcrypt.compare(
      "saad",
      "$2a$10$Z4bCjFOFRhoo3aFjzPy7s.lHNlPtzej01g9fN97k8Fe.katbUzyu"
    );
    console.log(test);
  };

  return (
    <div className=" flex flex-col pt-44">
      <h1 className="text-4xl font-bold text-center"></h1>
      <button className="bg-red-500" onClick={check}>
        {" "}
        this is a button{" "}
      </button>
    </div>
  );
}

export default TEST;
