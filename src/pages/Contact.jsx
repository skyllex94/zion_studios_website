import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import me from "../assets/icons/me.png";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          {/* About Me Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <img
                  src={me}
                  alt="Kamen Kanchev"
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Kamen Kanchev
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Founder & Lead Developer
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    I've been developing custom software solutions for the last 6 years. I founded Zion Studios 3 years ago to create innovative digital solutions—from professional websites to mobile apps—that help businesses grow and succeed.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our team specializes in building professional websites designed to convert visitors into leads, complete with SEO optimization, booking systems, and lead management tools. We also develop iOS applications that have helped over 10,000 users worldwide.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">10+</div>
                      <div className="text-sm text-gray-600">Websites</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Mobile Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">7K+</div>
                      <div className="text-sm text-gray-600">App Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a question about our services? Ready to get started? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-700"
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:zionstudiosapps@gmail.com"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        zionstudiosapps@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+16198175266"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        (619) 817-5266
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <p className="text-gray-600">Mon - Fri: 9AM - 6PM PST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Work Together
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're looking to build a professional website for your business or need help with your digital presence, we're here to help.
                </p>

                <a
                  href="https://calendly.com/kkanchev94/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 text-center"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}