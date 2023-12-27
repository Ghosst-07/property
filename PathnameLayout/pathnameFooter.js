"use client";

import Footer from "@/app/components/footer/footer";
import { usePathname } from "next/navigation";

function PathNameFooter() {
  return usePathname() === "/postproperty" ||
    usePathname() === "/dashboard" ? null : (
    <Footer />
  );
}

export default PathNameFooter;
