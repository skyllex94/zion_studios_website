import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutModal from "./Modals/AboutModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Zion Studios
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Building powerful websites that help contractors get more customers and reviews. We create functional, SEO-optimized sites that turn visitors into leads.
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href="tel:+16198175266"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (619) 817-5266
                </a>
                <a
                  href="mailto:zionstudiosapps@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  zionstudiosapps@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Services & Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/process"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mission"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <a
                    href="https://calendly.com/kkanchev94/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>

            {/* VPN Section (Smaller) */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-white">
                Featured App
              </h4>
              <h5 className="text-blue-400 font-medium mb-2">
                VPN Proxy Master
              </h5>
              <p className="text-gray-300 text-sm mb-4">
                Secure VPN + AdBlocker for iOS
              </p>
              <a
                href="https://apps.apple.com/us/app/vpn-secure-proxy-shield/id1459783875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-4 h-4 mr-2"
                  alt="App Store"
                />
                Download
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Zion Studios LLC. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  About
                </button>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy
                </Link>
                <Link
                  to="/opt-in"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Opt-In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && <AboutModal setShowModal={setShowModal} />}
    </React.Fragment>
  );
}
