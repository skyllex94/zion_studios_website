import * as React from "react";

import "./App.css";

import appStore from "./assets/app-store.png";
import mainImage from "./assets/landing-image.gif";
import Footer from "./components/Footer";
import Features from "./components/Features";

function App() {
  return (
    <div>
      <div>
        <div className="bg-white pt-20 pb-20 lg:pt-20">
          <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
            <div>
              <h1 className="xl:container text-start font-black text-4xl text-black-900 sm:mx-auto md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
                Zion Studios
                <br className="block" />
                <scan className="text-start text-xl sm:mx-auto md:text-5xl lg:w-auto lg:text-left xl:text-5xl relative bg-gradient-to-b from-teal-700 to-teal-800 bg-clip-text text-transparent">
                  We develop iOS mobile applications, bringing value and
                  creating solutions
                </scan>
              </h1>
              <div className="relative mt-8 space-y-8 text-start">
                <p className="text-gray-700 dark:text-gray-300 sm:text-lg">
                  Our Virtual Private Network (VPN) is intended to give you one
                  of the best state of the art, secure experience as you are
                  doing your daily tasks. Privacy is a serious issue nowadays
                  and it's advisable to keep all of your personal data
                  connection secure and reliable.
                </p>
                <span className="block font-semibold text-gray-500 dark:text-gray-400">
                  Connect quickly and efficiently to trusted server around the
                  world
                </span>
                <div className="grid md:flex lg:justify-start">
                  <div className="flex justify-center">
                    <span className="font-medium dark:text-white md:block" />
                  </div>

                  <div className="font-semibold dark:text-gray-300">
                    🌟
                    <span className="pl-2 ">
                      Start your FREE 3-days trial with high-speed browsing.
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

export default App;
