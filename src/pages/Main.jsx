import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Main() {
  const featuredApps = [
    {
      name: "PDF Document Editor: Kudo AI",
      category: "Productivity",
      description: "AI-powered document creation and editing",
      link: "https://apps.apple.com/us/app/pdf-document-editor-kudo-ai/id6745721395",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "GuardMe: Who Touched My Phone",
      category: "Security",
      description: "Advanced phone security and intrusion detection",
      link: "https://apps.apple.com/us/app/guardme-who-touched-my-phone/id6743700095",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Find Device Tracker: AccuFind",
      category: "Utilities",
      description: "Precise device tracking and location services",
      link: "https://apps.apple.com/us/app/find-device-tracker-accufind/id6470138524",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Zion Studios
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
                Crafting iOS applications that enhance lives worldwide
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                We develop innovative mobile solutions across productivity,
                security, health, gaming, and utilities. Each app is designed
                with precision, user-centric design, and cutting-edge
                technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/apps"
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Our Apps
                </Link>
                <a
                  href="https://apps.apple.com/us/developer/zion-studios-llc/id1685918923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-all duration-300"
                >
                  View on App Store
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-600 font-medium">
                  iOS Applications
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  100K+
                </div>
                <div className="text-gray-600 font-medium">Downloads</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  4.6★
                </div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Apps Section */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most popular apps that are making a difference in
                users' daily lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredApps.map((app, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${app.color}`} />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {app.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {app.description}
                    </p>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View on App Store
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/apps"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                View All Apps
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Our Apps?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust Zion Studios for their
              mobile application needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/developer/zion-studios-llc/id1685918923"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Browse All Apps
              </a>
              <Link
                to="/apps"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
