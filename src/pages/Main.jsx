import React from "react";
import appStore from "../assets/app-store.png";
import mainImage from "../assets/landing-image.gif";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-white py-10 lg:pt-20">
          <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
            <div>
              <h1 className="mt-10 xl:container text-start font-black text-4xl text-black-900 sm:mx-auto md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
                Zion Studios
                <br className="block" />
              </h1>
              <h2 className="xl:container text-start text-2xl text-black-500 sm:mx-auto md:text-2xl lg:w-auto lg:text-left xl:text-4xl mt-5">
                We develop iOS mobile applications, bringing value and creating
                solutions
              </h2>
              <div className="relative mt-8 space-y-8 text-start">
                <p className="text-gray-700 dark:text-gray-300 sm:text-lg">
                  We strive to provide people from all across the globe with
                  actual positive services they can use, creating value through
                  creating and maintaining software.
                </p>

                <div className="grid md:flex lg:justify-start">
                  <div className="flex justify-center">
                    <span className="font-medium dark:text-white md:block" />
                  </div>

                  <div className="font-semibold dark:text-gray-300">
                    🌟
                    <span className="pl-2 ">
                      Review our VPN service based for iOS systems.
                    </span>
                    <a
                      href="https://apps.apple.com/us/app/vpn-secure-proxy-shield/id1459783875"
                      target="_blank"
                      rel="noreferrer"
                      className="flex space-x-4 mt-4"
                    >
                      <img
                        src={appStore}
                        alt="front-gif"
                        className="font-medium dark:text-white md:block h-20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="mt-12">
                <div className="flex justify-center">
                  <img
                    src={mainImage}
                    className="landing-image"
                    alt="vpn display"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default Main;
