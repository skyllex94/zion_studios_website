import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactsModal from "./Modals/ContactsModal";
import AboutModal from "./Modals/AboutModal";
import PolicyModal from "./Modals/PolicyModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

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
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting exceptional iOS applications that enhance lives
                worldwide. We develop innovative mobile solutions across
                productivity, security, health, gaming, and utilities.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://apps.apple.com/us/developer/zion-studios-llc/id1685918923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </a>
                <a
                  href="mailto:zionstudiosapps@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  title="zionstudiosapps@gmail.com"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
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
                    to="/apps"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Our Apps
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
                <button
                  onClick={() => setShowAboutModal(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Contact
                </button>
                <button
                  onClick={() => setShowPolicyModal(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && <AboutModal setShowModal={setShowModal} />}
      {showAboutModal && <ContactsModal setShowModal={setShowAboutModal} />}
      {showPolicyModal && <PolicyModal setShowModal={setShowPolicyModal} />}
    </React.Fragment>
  );
}
