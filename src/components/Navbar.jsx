import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/website-icon/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWebDevOpen, setIsWebDevOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsWebDevOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const directLinks = [
    { name: "Mobile Development", link: "/apps" },
    { name: "Mission", link: "/mission" },
    { name: "Contact Us", link: "/contact" },
  ];

  const webDevItems = [
    { name: "Services & Pricing", link: "/services" },
    { name: "Our Process", link: "/process" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Zion Studios"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center justify-end flex-1 gap-10">
            <div
              className="relative group"
              onMouseEnter={() => setIsWebDevOpen(true)}
              onMouseLeave={() => setIsWebDevOpen(false)}
            >
              <button
                className={`text-gray-600 hover:text-black font-medium text-sm uppercase tracking-wide transition-colors duration-200 flex items-center gap-1 py-4 ${isWebDevOpen ? "text-black" : ""}`}
              >
                Web Development
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isWebDevOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isWebDevOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                  {webDevItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-200 group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {directLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-600 hover:text-black font-medium text-sm uppercase tracking-wide transition-colors duration-200 py-4"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://calendly.com/kkanchev94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-medium text-sm uppercase tracking-wide px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-lg"
            >
              Book A Call
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-black transition-colors duration-200"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-6">
            <div className="space-y-1">
              <button
                onClick={() => setIsWebDevOpen(!isWebDevOpen)}
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-600 uppercase tracking-wide py-2"
              >
                <span>Web Development</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isWebDevOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isWebDevOpen && (
                <div className="bg-gray-50 rounded-lg py-2 space-y-1">
                  {webDevItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="block text-sm text-gray-600 py-2.5 px-4 hover:text-black transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {directLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block text-sm font-medium text-gray-600 uppercase tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4">
              <a
                href="https://calendly.com/kkanchev94/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black text-white font-medium text-sm uppercase tracking-wide px-6 py-4 rounded-full text-center hover:bg-gray-800 transition-all"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}