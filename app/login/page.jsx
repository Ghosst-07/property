"use client";
import React, { useState } from "react";
import Link from "next/link";
import InputComponent from "../components/inputfield";

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailOrMobileChange = (e) => {
    setEmailOrMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic here
  };

  return (
    <div
      className="flex justify-center items-center  md:px-0 px-10 pt-8 md:pt-32 w-full h-screen bg-gray-100"
      style={{
        backgroundImage: "url('/login-bg.jpg')",
        backgroundSize: "10%", // Add this line to scale the background image
      }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 md:px-10 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">
            Login
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              {" "}
              <InputComponent
                label="Email or Mobile Number"
                placeholder="Email or Mobile Number"
                type="text"
                value={emailOrMobile}
                onChange={(newValue) => setEmailOrMobile(newValue)}
                id="emailOrMobile"
              />
            </div>

            <div className="mb-10">
              <InputComponent
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(newValue) => setPassword(newValue)}
                id="passwordInput"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Don't have an account?</p>
            <Link href="/register">
              <p className="text-blue-500 hover:text-blue-700">Register here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
