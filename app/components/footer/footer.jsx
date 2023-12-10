import React from "react";
import { FaFacebook, FaTwitter, FaSnapchat, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer className="bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white">Contact us-</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="">
                    Email - example@asdas.com
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Toll free number -1234567
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Monday - Saturday (9:00AM to 11:00PM IST)
                  </a>
                </li>
              </ul>
              <p className="text-gray-400 mt-4">
                All rights reserved &copy; 2023
              </p>{" "}
            </div>
            <div className="col-span-2  flex justify-center items-center">
              <a href="#" className="text-white mr-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-white mr-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-white mr-4">
                <FaSnapchat />
              </a>
              <a href="#" className="text-white mr-4">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
