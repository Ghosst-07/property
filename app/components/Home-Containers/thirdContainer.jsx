import React from "react";
import { FaCheckCircle, FaIdBadge, FaMoneyBill } from "react-icons/fa";

function ThirdContainer() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Why Choose PropertyKAKA
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            BUY and SELL Properties in minutes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide the best services for buying and selling properties. Here
            are some reasons why you should choose PropertyKAKA
          </p>
        </div>

        <div className="mt-10">
          <div className="mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* Reason 1 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-12 w-12 text-indigo-600 mx-auto mt-4" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Reason 1
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Reason 1 description goes here.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <FaIdBadge className="h-12 w-12 text-indigo-600 mx-auto mt-4" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Reason 2
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Reason 2 description goes here.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <FaMoneyBill className="h-12 w-12 text-indigo-600 mx-auto mt-4" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Reason 3
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Reason 3 description goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdContainer;
