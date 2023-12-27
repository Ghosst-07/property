"use client";
import React, { useState } from "react";
import { FaAngleDown, FaHome, FaUser } from "react-icons/fa";
import NavBuy from "./navbarComponents/buy";
import { NavSell } from "./navbarComponents/sell";
import NavRent from "./navbarComponents/rent";
import NavHelp from "./navbarComponents/help";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const Cities = [
  {
    label: "Cities",
    items: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Kolkata",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Surat",
      "Jaipur",
    ],
  },
];

const MenuItems = [
  { label: "Buy", items: [<NavBuy />] },
  { label: "Sell", items: [<NavSell />] },
  { label: "Rent", items: [<NavRent />] },
  { label: "Help", items: [<NavHelp />] },
];

const Navbar = () => {
  const [selectedcity, setSelectedCity] = useState("Cities");

  const [activeMenu, setActiveMenu] = useState(null);

  const handleHover = (menu) => {
    if (activeMenu !== menu) {
      setActiveMenu(menu);
    }
  };

  const handleClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="fixed z-50 navbar">
      <nav className="flex h-16 bg-gradient-to-tl from-cyan-400 to-emerald-400 ">
        <div className="flex items-center  ml-4">
          <Link href="/">
            <div>
              <span className="text-white font-bold text-xl md:3xl mr-4">
                PropertyKAKA
              </span>
            </div>
          </Link>
          <div className="Cities-dropdown flex flex-nowrap">
            {Cities.map((option) => (
              <div key={selectedcity} className="relative pl-4">
                <button
                  className="text-white font-bold flex items-center"
                  onMouseEnter={() => handleHover(option.label)}
                >
                  {selectedcity} <FaAngleDown className="ml-1" />
                </button>
                {activeMenu === option.label && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                    onMouseLeave={handleLeave}
                  >
                    <ul className="py-2">
                      {option.items.map((item) => (
                        <li
                          onClick={() => {
                            setActiveMenu(null);
                            setSelectedCity(item);
                          }}
                          key={item}
                          className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Right Side of navbar */}

        <div className="flex items-center bg-red justify-end w-full  mb:pr-5">
          <Link href="/postproperty">
            <button className="text-black bg-white p-2 px-3 rounded-full hover:bg-white/90 mr-4 ">
              <div className="flex flex-row justify-center items-center">
                <FaHome className="mr-1" /> Post Property
              </div>
            </button>
          </Link>
          <Link href="/login">
            <button className="text-black bg-white p-2 px-3 rounded-full hover:bg-white/90 mr-4 ">
              <div className="flex flex-row justify-center items-center">
                <FaUser className="mr-1" /> Login
              </div>
            </button>
          </Link>
        </div>
      </nav>
      {/* Second Navbar */}
      <nav className="flex h-16  shadow-md bg-white">
        <div className="w-screen flex justify-center">
          <div className="flex items-center ml-4">
            {MenuItems.map((item) => (
              <div key={item.label} className="relative ">
                <button
                  className="text-gray-700 font-bold hover:text-gray-900 
                  flex items-center px-4"
                  onMouseEnter={() => handleHover(item.label)}
                  onClick={() => handleClick(item.label)}
                >
                  <h1 className=""> {item.label}</h1>{" "}
                  <FaAngleDown className="" />
                </button>
                {activeMenu === item.label && (
                  <div
                    className="absolute left-0 mt-2 w-fit bg-white rounded-md shadow-lg z-10"
                    onMouseLeave={handleLeave}
                  >
                    <ul className="py-2">
                      {item.items.map((subItem) => (
                        <li
                          key={subItem}
                          className="hover-bg-gray-100 px-4 py-2 cursor-pointer"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <style>
        {`
          @media (max-width: 768px) {
            .login-button {
              display: none;
            }
            .Cities-dropdown {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
