"use client";

import { usePathname } from "next/navigation";
import Navbar from "../app/components/navbar";

function PathNameNavbar() {
  return usePathname() === "/postproperty" ||
    usePathname() === "/dashboard" ? null : (
    <Navbar />
  );
}

export default PathNameNavbar;
