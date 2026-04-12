import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import trustpilotIcon from "../assets/social-icons/trustpilot.webp";
import googleIcon from "../assets/social-icons/google.webp";
import fbIcon from "../assets/social-icons/fb.webp";
import heroImage from "../assets/hero/hero.webp";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you at ${formData.email} soon.`);
    setIsModalOpen(false);
    setFormData({ name: "", email: "" });
  };

  const featuredApps = [
    {
      name: "PDF Document Editor: Kudo AI",
      category: "Productivity",
      description: "AI-powered document creation and editing",
      link: "https://apps.apple.com/sn/app/pdf-document-editor-kudo-ai/id6745721395?platform=iphone",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "GuardMe: Who Touched My Phone",
      category: "Security",
      description: "Advanced phone security and intrusion detection",
      link: "https://apps.apple.com/us/app/guardme-who-touched-my-phone/id6743700095?platform=iphone",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Find Device Tracker: AccuFind",
      category: "Utilities",
      description: "Precise device tracking and location services",
      link: "https://apps.apple.com/us/app/find-device-tracker-accufind/id6741714865?platform=iphone",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        {/* Hero Section - Stone Systems Style */}
        <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              {/* Left - Text Content (70%) */}
              <div className="lg:w-[70%] text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Software Solutions for <br className="hidden md:block" /> Individuals & Small Businesses
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Cut the bullsh*t, app development isn't rocket science.<br className="hidden md:block" />
                  We'll give you the tools to succeed but you need to commit to using them!
                </p>

                {/* Team/People Images */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">M</div>
                  <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-gray-600 font-semibold">K</div>
                  <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold">+</div>
                </div>

                {/* Reviews - Now inside left section */}
                <div className="flex flex-wrap justify-start items-center gap-6 md:gap-8 mb-8">
                  {/* Facebook */}
                  <div className="flex items-center gap-3">
                    <img src={fbIcon} alt="Facebook" className="w-10 h-10 object-contain" />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-900">Facebook</p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.807 2.485c.214.659.67 1.175 1.252 1.42l2.485.361c1.022.149 1.454 1.414.698 2.041l-1.8 1.499c-.457.38-.653.992-.506 1.579l.361 2.485c.149 1.022-.764 1.835-1.477 1.313l-2.085-1.529c-.622-.456-1.442-.456-2.064 0l-2.085 1.529c-.713.522-1.626-.291-1.477-1.313l.361-2.485c.147-.587-.049-1.199-.506-1.579l-1.8-1.499c-.756-.627-.324-1.892.698-2.041l2.485-.361c.582-.245 1.038-.761 1.252-1.42l.807-2.485z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Google */}
                  <div className="flex items-center gap-3">
                    <img src={googleIcon} alt="Google" className="w-10 h-10 object-contain" />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-900">Google</p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.807 2.485c.214.659.67 1.175 1.252 1.42l2.485.361c1.022.149 1.454 1.414.698 2.041l-1.8 1.499c-.457.38-.653.992-.506 1.579l.361 2.485c.149 1.022-.764 1.835-1.477 1.313l-2.085-1.529c-.622-.456-1.442-.456-2.064 0l-2.085 1.529c-.713.522-1.626-.291-1.477-1.313l.361-2.485c.147-.587-.049-1.199-.506-1.579l-1.8-1.499c-.756-.627-.324-1.892.698-2.041l2.485-.361c.582-.245 1.038-.761 1.252-1.42l.807-2.485z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Trustpilot */}
                  <div className="flex items-center gap-3">
                    <img src={trustpilotIcon} alt="Trustpilot" className="w-10 h-10 object-contain" />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-900">Trustpilot</p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.807 2.485c.214.659.67 1.175 1.252 1.42l2.485.361c1.022.149 1.454 1.414.698 2.041l-1.8 1.499c-.457.38-.653.992-.506 1.579l.361 2.485c.149 1.022-.764 1.835-1.477 1.313l-2.085-1.529c-.622-.456-1.442-.456-2.064 0l-2.085 1.529c-.713.522-1.626-.291-1.477-1.313l.361-2.485c.147-.587-.049-1.199-.506-1.579l-1.8-1.499c-.756-.627-.324-1.892.698-2.041l2.485-.361c.582-.245 1.038-.761 1.252-1.42l.807-2.485z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://calendly.com/kkanchev94/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
                >
                  Book A Call
                </a>
              </div>

              {/* Right - Hero Image (30%) */}
              <div className="lg:w-[30%] flex justify-center lg:justify-end">
                <img 
                  src={heroImage} 
                  alt="Hero" 
                  className="w-full max-w-[200px] lg:max-w-[240px] object-contain animate-float mt-8 lg:mt-0" 
                />
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

      {/* Book A Call Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fadeIn">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-center">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Book A Call</h2>
              <p className="text-white/70 text-sm mt-1">Schedule your free consultation</p>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3.5 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get My Free Call
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  No commitment required. We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Main;
