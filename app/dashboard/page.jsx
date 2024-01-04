"use client";
import React from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";

import {
  FaRegBell,
  FaRegBuilding,
  FaRegEnvelope,
  FaRegIdCard,
  FaRegObjectGroup,
  FaRegUser,
  FaSearch,
} from "react-icons/fa";
import BigPropertyCard from "../components/ListedProperties/BigPropertyCard";

function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);

  const name = session?.user?.name;

  return (
    <>
      <div className="flex justify-end w-full"></div>
      <div className="MAIN-DIV w-full h-screen flex flex-row">
        <div className="profile flex flex-col items-center z-10 bg-gradient-to-tl from-cyan-400 to-emerald-400 w-80 h-screen shadow-2xl">
          <div className="profilePICandNAME flex flex-col justify-center items-center pt-5 md:pt-20">
            <div className="profilepic flex justify-center items-center rounded-full w-32 h-32 bg-white">
              <FaRegUser size={60} />
            </div>
            <h1 className="text-white drop-shadow-md pt-5 items-center justify-center text-sm sm:text-base md:text-lg">
              Welcome
            </h1>
            <h1 className="text-white text-3xl drop-shadow-xl text-base sm:text-xl md:text-2xl">
              {name}
            </h1>
          </div>

          <div className="profileNAV flex flex-col gap-10 pt-24">
            <div className="DASHBOARD flex flex-row items-center gap-5 drop-shadow-md px-2 py-1 rounded-lg hover:bg-black/40">
              <FaRegIdCard color="white" size={25} />
              <h1 className="hover:cursor-pointer text-2xl text-white text-base sm:text-xl md:text-2xl">
                Dashboard
              </h1>
            </div>
            <div className="PROPERTIES flex flex-row items-center gap-5 drop-shadow-md px-2 py-1 rounded-lg hover:bg-black/40">
              <FaRegBuilding color="white" size={25} />
              <h1 className="hover:cursor-pointer text-2xl text-white text-base sm:text-xl md:text-2xl">
                Properties
              </h1>
            </div>
            <div className="LEADS flex flex- items-center gap-5 drop-shadow-md px-2 py-1 rounded-lg hover:bg-black/40">
              <FaRegObjectGroup color="white" size={25} />
              <h1 className="hover:cursor-pointer text-2xl text-white text-base sm:text-xl md:text-2xl">
                Enquiery
              </h1>
            </div>
            <div className="hover:cursor-pointer MESSAGES flex flex- items-center gap-5 drop-shadow-md px-2 py-1 rounded-lg hover:bg-black/40">
              <FaRegEnvelope color="white" size={25} />
              <h1 className="text-2xl text-white text-base sm:text-xl md:text-2xl">
                Messages
              </h1>
            </div>
            <button
              onClick={signOut}
              className="whitespace-nowrap rounded-full text-[15px] bg-red-500 text-white px-5 py-2"
            >
              Logout
            </button>
            <Link href="/">
              <h1 className="text-white font-bold text-3xl hover:cursor-pointer">
                PropertyKAKA
              </h1>
            </Link>
          </div>
        </div>
        <div className="md:block hidden Search z-1 flex bg-white w-full h-16 absolute">
          <div className="rounded-full p-2 flex flex-row justify-center items-center gap-2 bg-gray-50 w-full pl-64">
            <FaSearch color="gray" opacity={0.6} />
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent w-[1100px] text-gray-400 border-none focus:outline-none text-sm sm:text-base md:text-lg"
            />
            <button className="whitespace-nowrap rounded-full text-[13px] bg-gray-600 text-white px-5 py-2">
              + Add Property
            </button>
            <div className="flex flex-row gap-5 pl-2">
              <FaRegBell size={20} color="gray" />
              <FaRegEnvelope size={20} color="gray" />
            </div>
          </div>
        </div>
        <div className="profile w-full overflow-y-scroll">
          <div className="flex flex-col md:pt-20 pt-2 md:pl-20 pl-2">
            <h1 className="font-bold text-3xl">Recently Posted Properties-</h1>
            <div className="CARD LISTING flex flex-wrap w-full h-full pt-10  ">
              <BigPropertyCard
                location="Lucknow"
                price="20 LAK"
                propertyType="2BK FLAT"
                title="HOUSING SOCIETY"
                imageUrl="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
