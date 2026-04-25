import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    number: "01",
    title: " Consultation & Discovery",
    description:
      "We hop on a quick call to understand your business, your goals, and what makes you different from the competition. This helps us create a website that actually represents YOU.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: " Design & Development",
    description:
      "We build your website with your branding, your services, and your customers in mind. Mobile-friendly, fast-loading, and designed to convert visitors into leads.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: " SEO Optimization",
    description:
      "We optimize your website so when someone Googles your trade in your area, YOUR name shows up. No tricks, just solid local SEO to get you found online.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: " Launch & Go Live",
    description:
      "Your website goes live and we make sure everything is working perfectly. Leads start coming in, and you can watch your business grow online.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7V10z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: " Ongoing Support",
    description:
      "We handle all updates, maintenance, and hosting. Your website stays fresh, fast, and secure. Month-to-month, no long-term contracts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const benefits = [
  "Mobile-optimized for all devices",
  "Built to rank on Google",
  "Instant lead notifications",
  "Easy appointment booking",
  "Google Reviews integration",
  "No long-term contracts",
  "Unlimited updates",
  "Fast page loading",
];

export default function Process() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Process
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              How we build you a professional website that actually works. Simple, straightforward, and focused on results.
            </p>
          </div>

          <div className="space-y-8 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-6 md:w-48 flex-shrink-0">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex justify-center absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What You Get
              </h2>
              <p className="text-gray-300">
                Everything included in every website we build.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-4"
                >
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sound Good?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Let's hop on a quick call and see how we can help grow your business online.
            </p>
            <a
              href="https://calendly.com/kkanchev94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}