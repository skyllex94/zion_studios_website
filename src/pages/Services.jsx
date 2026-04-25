import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Essentials",
    price: "99",
    features: [
      "Functional Website Development",
      "Custom Design for Your Business",
      "Domain & Hosting Management",
      "Updates & Maintenance",
      "Google Reviews Integration",
    ],
    stripeLink: "https://buy.stripe.com/9B6dRa1fl5Jl5vZgI5bjW00",
    popular: false,
  },
  {
    name: "Bundle",
    price: "175",
    features: [
      "Everything in Essentials",
      "AI Optimization & Smart Forms",
      "AI Receptionist",
    ],
    stripeLink: "https://buy.stripe.com/28E8wQ4rx6Np9MfajHbjW02",
    popular: true,
  },
  {
    name: "Pro",
    price: "199",
    features: [
      "Everything in Bundle",
      "Chatbot Widget for Instant Chat",
      "Auto Call-Back Text Messages",
      "Improved SEO Ranking System",
    ],
    stripeLink: "https://buy.stripe.com/fZuaEY0bh1t5cYr77vbjW03",
    popular: false,
  },
];

const services = [
  {
    title: "Functional Modern Website",
    description:
      "Get a website that showcases your work in a clean way. On top of this have a way for your clients to instantly reach you to make them into paying customers.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Booking Appointment System",
    description:
      "We integrate a powerful, easy-to-use booking system directly into your website, allowing customers to schedule appointments, request services, and submit inquiries in seconds. Every interaction is captured and sent straight to your personal dashboard or mobile app.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "AI Receptionist",
    description:
      "Our AI Receptionist service gives your business a smart, always-available assistant that answers calls, responds to inquiries, and books appointments—24/7. It sounds natural, follows your business rules, and handles customer interactions just like a trained front desk staff member.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "Local SEO Optimization",
    description:
      "Get found on Google when potential customers search for your services. We optimize your website to rank higher in local search results, bringing more organic leads to your business.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Missed Call Text Back",
    description:
      "Never lose a lead again. When someone calls and misses, they instantly receive a text message with your booking link or contact info, so you can still capture that lead.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
  {
    title: "Google Reviews Integration",
    description:
      "Build trust and validation with Google Reviews integration. Showcase your best reviews on your website to turn visitors into paying customers.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.172a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply contact us through our website or book a call. Our team will walk you through what you need and build you a custom website for your business.",
  },
  {
    question: "What services does Zion Studios offer?",
    answer:
      "We offer functional website development with a focus on contractors, individuals, and service-based businesses. Our websites are designed to convert visitors into leads and customers.",
  },
  {
    question: "Is there a contract for your services?",
    answer:
      "No, we believe in flexibility. All our plans are available on a month-to-month basis with no long-term contracts. You can cancel at any time if you're not satisfied.",
  },
  {
    question: "How will you setup my website and how much is the website itself?",
    answer:
      "We don't charge for the website development—it is free. You pay a monthly charge for hosting, domain, and maintenance. This way you can see results before committing long-term.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 pt-28 lg:pt-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See What We Offer
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our services and choose the plan that best suits your needs.
              No contracts—cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  plan.popular
                    ? "border-black scale-105 lg:scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
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
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold py-4 rounded-xl transition-all duration-200 ${
                    plan.popular
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get {plan.name}
                </a>
                <p className="text-center text-sm text-gray-400 mt-4">
                  No contracts - cancel anytime
                </p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Contractors are busy doing their work, so we help with your digital footprint.
                Everything you need to turn visitors into customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4 text-gray-700">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Still Not Sure?
              </h2>
              <p className="text-lg text-gray-600">
                Frequently Asked Questions
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <div className="p-6 bg-white border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="https://calendly.com/kkanchev94/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-semibold text-lg px-10 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}