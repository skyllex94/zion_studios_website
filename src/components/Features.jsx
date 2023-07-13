import React from "react";

import { MdSpeed } from "react-icons/md";
import { TbFreeRights } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineLockOpen } from "react-icons/md";

export default function Features() {
  return (
    <div className=" bg-slate-400 px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10">
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-red-200">
            <CiMobile3 size={40} />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Mobile Optimized
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Our VPN is focused and made to serve iOS users and connect quickly
            to various locations across the globe.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-orange-200">
            <TbFreeRights size={40} />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">Free to Try</p>
          <p className="mt-2 text-sm text-slate-500">
            Whether you are sure about our services or not, you can always try
            us out with full-speed services and see how you like us free of
            charge for the first 3 days.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-b hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-yellow-200">
            <MdSpeed size={40} />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Blazing Fast
          </p>
          <p className="mt-2 text-sm text-slate-500">
            All our services are using best and premium servers, trusted and
            running on reliable machines for your ultimate and seamless
            experience.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-green-200">
            <MdOutlineLockOpen size={40} />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">Secure</p>
          <p className="mt-2 text-sm text-slate-500">
            We use strong industry standard encryption to ensure that your
            traffic cannot be intercepted at the access point or ISP level.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-teal-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">No Logs</p>
          <p className="mt-2 text-sm text-slate-500">
            We don't keep any logs about you as a user, or any of your
            activities online. You can rest assured your privacy is staying
            intact at all times.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 ">
          <span className="p-5 rounded-full bg-gray-500 text-white shadow-lg shadow-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Included Adblocker for Free
          </p>
          <p className="mt-2 text-sm text-slate-500">
            We try to provide the extra step of giving you the ultimate
            experience as you are browsing with an included adblocker you can
            turn on from our app.
          </p>
        </div>
      </div>
    </div>
  );
}
