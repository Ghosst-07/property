"use client";
import React, { useState } from "react";
import Link from "next/link";
import InputComponent from "../components/inputfield";
import { FaEnvelope, FaLock, FaPhone, FaUser } from "react-icons/fa";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("Buyer");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
    number: "",
    policyAccepted: "",
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePolicyChange = (e) => {
    setPolicyAccepted(e.target.checked);
    setErrors((prevErrors) => ({
      ...prevErrors,
      policyAccepted: e.target.checked ? "" : "Policy must be accepted",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFields();
    if (isValid) {
      console.log({
        selectedOption,
        email,
        name,
        password,
        number,
        policyAccepted,
      });
      // TODO: Add registration logic here
    }
  };

  const validateFields = () => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^[0-9]{10}$/;
    const errorsCopy = {
      email: "",
      name: "",
      password: "",
      number: "",
      policyAccepted: "",
    };
    if (!emailRegex.test(email)) {
      errorsCopy.email = "Invalid email";
      isValid = false;
    }
    if (name.trim() === "") {
      errorsCopy.name = "Name is required";
      isValid = false;
    }
    if (password.trim() === "") {
      errorsCopy.password = "Password is required";
      isValid = false;
    }
    if (!numberRegex.test(number)) {
      errorsCopy.number = "Invalid number";
      isValid = false;
    }
    if (!policyAccepted) {
      errorsCopy.policyAccepted = "Policy must be accepted";
      isValid = false;
    }
    setErrors(errorsCopy);
    return isValid;
  };

  return (
    <div
      className="flex justify-center items-center md:px-0 px-10 pt-8 md:pt-32 w-full h-screen bg-gray-100"
      style={{ backgroundImage: "url('/login-bg.jpg')", backgroundSize: "20%" }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 md:px-10 py-5">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">
            Register
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-between">
              <label className="sr-only">I am</label>
              <div className="flex items-center">
                <div className="flex items-center mb-2 mr-4">
                  <input
                    className="mr-2 leading-tight appearance-none bg-gray-200 rounded-full w-3 h-3 md:w-4 md:h-4 checked:bg-pink-600 checked:border-transparent focus:outline-none focus:shadow-outline"
                    type="radio"
                    value="Buyer"
                    checked={selectedOption === "Buyer"}
                    onChange={handleOptionChange}
                  />
                  <label className="text-gray-700">Buyer</label>
                </div>
                <div className="flex items-center mb-2 mr-4">
                  <input
                    className="mr-2 leading-tight appearance-none bg-gray-200 rounded-full w-3 h-3 md:w-4 md:h-4 checked:bg-pink-600 checked:border-transparent focus:outline-none focus:shadow-outline"
                    type="radio"
                    value="Agent"
                    checked={selectedOption === "Agent"}
                    onChange={handleOptionChange}
                  />
                  <label className="text-gray-700">Agent</label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    className="mr-2 leading-tight appearance-none bg-gray-200 rounded-full w-3 h-3 md:w-4 md:h-4 checked:bg-pink-600 checked:border-transparent focus:outline-none focus:shadow-outline"
                    type="radio"
                    value="Builder"
                    checked={selectedOption === "Builder"}
                    onChange={handleOptionChange}
                  />
                  <label className="text-gray-700">Builder</label>
                </div>
              </div>
            </div>
            <div className="pt-2 mb-6">
              <InputComponent
                placeholder="Email"
                type="email"
                Icon={FaEnvelope}
                value={email}
                onChange={(newValue) => setEmail(newValue)}
                id="emailInput"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <InputComponent
                Icon={FaUser}
                placeholder="Name"
                type="text"
                value={name}
                onChange={(newValue) => setName(newValue)}
                id="nameInput"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-6">
              <InputComponent
                Icon={FaLock}
                placeholder="Password"
                showButton={true}
                type="password"
                value={password}
                onChange={(newValue) => setPassword(newValue)}
                id="passwordInput"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-row mb-6">
              <div className="border-b-2 border-gray-400 rounded pr-2  text-gray-700 leading-tight">
                <h1>+91 </h1>
              </div>
              <h1 className="px-1">|</h1>
              <InputComponent
                Icon={FaPhone}
                placeholder="Mobile Number"
                type="text"
                value={number}
                onChange={(newValue) => setNumber(newValue)} // modified onChange handler for number input
                id="NumberInput"
                className="w-full"
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={policyAccepted}
                  onChange={handlePolicyChange}
                />
                <span className="ml-2 text-sm">I agree to </span>
                <span className="text-blue-500 hover:text-blue-700">
                  T&C, Privacy Policy, & Cookie Policy
                </span>
              </label>
              {errors.policyAccepted && (
                <p className="text-red-500 text-sm">{errors.policyAccepted}</p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleSubmit}
                className={`bg-pink-600 hover:bg-pink-700 text-white 
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                  !policyAccepted && "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
                disabled={!policyAccepted}
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Already have an account?</p>
            <Link href="/login">
              <p className="text-blue-500 hover:text-blue-700">Login here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
