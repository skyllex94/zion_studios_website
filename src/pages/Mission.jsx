import React from "react";
import { Link } from "react-router-dom";
import missionImg from "../assets/mission.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mission() {
  const values = [
    {
      title: "Innovation First",
      description:
        "We constantly push the boundaries of mobile technology to create groundbreaking iOS applications that solve real-world problems.",
      icon: "💡",
    },
    {
      title: "User-Centric Design",
      description:
        "Every app we build prioritizes exceptional user experience, intuitive interfaces, and accessibility for all users.",
      icon: "🎯",
    },
    {
      title: "Quality Excellence",
      description:
        "We maintain the highest standards of code quality, performance, and reliability in every application we develop.",
      icon: "⭐",
    },
    {
      title: "Global Impact",
      description:
        "Our mission extends beyond business success to creating positive impact on users' daily lives worldwide.",
      icon: "🌍",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Mission
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Empowering users worldwide through innovative iOS applications
                  that enhance productivity, security, and daily life
                  experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Building the Future of Mobile Technology
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    At Zion Studios, we are dedicated to creating exceptional
                    iOS applications that not only meet current needs but
                    anticipate future challenges. Our mission is to develop
                    software solutions that genuinely improve people's lives
                    while building a sustainable, innovative company.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We believe in the power of mobile technology to transform
                    how people work, communicate, and solve problems. Every app
                    we create represents our commitment to excellence, user
                    satisfaction, and technological advancement.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/apps"
                      className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 text-center"
                    >
                      Explore Our Apps
                    </Link>
                    <a
                      href="https://apps.apple.com/us/developer/zion-studios-llc/id1685918923"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors duration-200 text-center"
                    >
                      View on App Store
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={missionImg}
                      className="w-full h-auto rounded-lg shadow-lg"
                      alt="Zion Studios Mission"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision we make and every
                application we build
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              To become a leading mobile application development company
              recognized globally for innovation, quality, and user-centric
              solutions. We envision a world where mobile technology seamlessly
              integrates with daily life, making complex tasks simple and
              empowering users to achieve more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Apps Developed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <div className="text-blue-100">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-100">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mission;
