import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import missionImg from "../assets/mission.jpg";

function Mission() {
  const services = [
    {
      title: "Contractor Websites",
      description:
        "Professional websites for contractors and tradespeople. Get found on Google and turn visitors into leads.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "iOS Applications",
      description:
        "From productivity to security, we develop innovative iOS apps that enhance lives worldwide.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M4 3h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
        </svg>
      ),
    },
    {
      title: "Local SEO",
      description:
        "We make sure your business gets found online when customers search for your services.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Lead Generation",
      description:
        "Websites that convert visitors into text messages sent directly to your phone.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "Results That Matter",
      description: "We focus on building software that actually works and brings real results—not just pretty designs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "No Long-Term Contracts",
      description: "All our plans are month-to-month. No commitments. Cancel anytime if you're not satisfied.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
    },
    {
      title: "Real Support",
      description: "Need help? We've got you. Real humans, real answers, no waiting on hold forever.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "10+", label: "Websites Built" },
    { number: "15+", label: "iOS Apps Developed" },
    { number: "10K+", label: "App Users Worldwide" },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our Mission
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Helping contractors and small business owners grow their digital presence with professional websites that actually work.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Software Solutions That Give Results
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Zion Studios, we believe every contractor and small business owner deserves a professional online presence—without the enterprise price tag. We create websites that don't just look good; they work hard to bring you customers.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We're also passionate about mobile technology. Our iOS applications enhance productivity, security, and daily life for users around the world.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you need a website that ranks on Google, an appointment booking system, or an AI receptionist, we've got you covered.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200 text-center shadow-lg"
                  >
                    View Our Services
                  </Link>
                  <a
                    href="https://calendly.com/kkanchev94/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition-all duration-200 text-center"
                  >
                    Book a Call
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={missionImg}
                    className="w-full h-auto"
                    alt="Zion Studios Mission"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Two sides to our business, both focused on delivering real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's build you a professional website that actually works. Schedule a free consultation today.
            </p>
            <a
              href="https://calendly.com/kkanchev94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mission;