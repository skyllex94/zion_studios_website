import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import orderingExpressImg from "../assets/our_work/orderingexpress.png";
import gentestImg from "../assets/our_work/gentest.png";
import cvbuilderImg from "../assets/our_work/cvbuilder.png";

const websites = [
  {
    name: "OrderingExpress",
    description: "A complete online ordering system for restaurants and food businesses. Manage orders, menus, and deliveries all in one place.",
    url: "https://orderingexpress.com",
    image: orderingExpressImg,
  },
  {
    name: "Genetic Testing",
    description: "Professional genetic testing services website with booking system and detailed service information.",
    url: "https://genetictest-sv.com/",
    image: gentestImg,
  },
  {
    name: "CV Builder",
    description: "Create professional resumes quickly and easily. Build your career with our intuitive CV builder tool.",
    url: "https://dev-cv-builder.netlify.app/",
    image: cvbuilderImg,
  },
];

export default function OurWork() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Work
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out some of the websites we've built for our clients. Each one is designed to convert visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((site, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-48 object-contain object-top bg-gray-50"
                  />
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {site.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Visit Website
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

          <div className="mt-16 text-center">
            <a
              href="https://calendly.com/kkanchev94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200"
            >
              Want Us to Build Your Website?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}