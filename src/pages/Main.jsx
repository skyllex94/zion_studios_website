import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/hero/hero.webp";
import siteThumbnail from "../assets/thumbnails/site_thumbnail1.png";

function Main() {
  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section - Stone Systems Style */}
        <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              {/* Left - Text Content (70%) */}
              <div className="lg:w-[70%] text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="block">Software Solutions</span>
                  <span className="block">for Individuals</span>
                  <span className="block">& Small Businesses</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  We build modern, professional websites that represent your brand in the best possible way. We set you up with back-end solutions to see and gather leads so you can make the most out of your website—easy and convenient.
                </p>

                {/* Team/People Images */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 mb-6">
                  <div className="flex -space-x-3 flex-shrink-0">
                    <img 
                      src="https://i.pravatar.cc/150?img=68" 
                      alt="Team Member" 
                      className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0" 
                    />
                    <img 
                      src="https://i.pravatar.cc/150?img=33" 
                      alt="Team Member" 
                      className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0" 
                    />
                    <img 
                      src="https://i.pravatar.cc/150?img=47" 
                      alt="Team Member" 
                      className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0" 
                    />
                    <img 
                      src="https://i.pravatar.cc/150?img=12" 
                      alt="Team Member" 
                      className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0" 
                    />
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xs border-4 border-white shadow-lg flex-shrink-0">
                      +3
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium sm:ml-4">
                    Trusted by <strong className="text-gray-900">15+</strong> businesses & <strong className="text-gray-900">7000+</strong> app users
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/kkanchev94/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  >
                    Book A Call
                  </a>
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 border border-gray-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

{/* Right - Hero Image (30%) */}
              <div className="lg:w-[30%] hidden lg:flex justify-center lg:justify-end">
              <img
                  src={heroImage} 
                  alt="Hero" 
                  className="w-full max-w-[200px] lg:max-w-[240px] object-contain animate-float mt-8 lg:mt-0" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Functional Website Section */}
        <div className="bg-[#fafafa] py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Simple systems that actually work
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Creating functional modern websites
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left - Features */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Functional Website</h3>
                    <p className="text-sm text-gray-600 mt-1">Get a website that instantly turns leads into text conversations that go DIRECTLY to your phone.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Actually Get Found Online</h3>
                    <p className="text-sm text-gray-600 mt-1">If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.172a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Showcase Your Best Reviews</h3>
                    <p className="text-sm text-gray-600 mt-1">We all have one or two bad reviews... That doesn't mean your customers need to see them.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M4 3h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Mobile Friendly</h3>
                    <p className="text-sm text-gray-600 mt-1">87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Local Google Rankings</h3>
                    <p className="text-sm text-gray-600 mt-1">This should go without saying but we'll still say it. We make sure your business is found on Google.</p>
                  </div>
                </div>
              </div>

              {/* Right - Image with tilt */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-white rounded-xl shadow-2xl p-3 border border-gray-100 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={siteThumbnail} 
                    alt="Website Preview" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - For Contractors */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get More Customers & Reviews for Your Contracting Business
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop chasing leads. Let us build you a professional website that gets found on Google, 
              turns visitors into leads, and collects 5-star reviews automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/kkanchev94/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Book Your Free Consultation
              </a>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Get Found Online</h3>
                <p className="text-gray-400 text-sm">Rank higher on Google and attract local customers searching for your services.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Convert More Leads</h3>
                <p className="text-gray-400 text-sm">Turn website visitors into text messages that go directly to your phone.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.172a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Build 5-Star Reviews</h3>
                <p className="text-gray-400 text-sm">Automatically collect and showcase your best reviews from happy customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
