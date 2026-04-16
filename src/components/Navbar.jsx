import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/website-icon/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const closeAllDropdowns = () => {
    setIsProductsOpen(false);
    setIsAboutOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [{ name: "Our Work", link: "/our-work" }];

  const productsData = {
    "App Creation": [{ name: "View All Apps", link: "/apps" }],
    "Software-as-a-Service": [
      { name: "OrderingExpress", link: "https://orderingexpress.com" },
    ],
    "Website Building & Automation": [
      { name: "Website Design", link: "/#features" },
      { name: "Marketing Automation", link: "/#marketing" },
      { name: "Local SEO", link: "/#seo" },
      { name: "Missed Call Text Back", link: "/#missed-call" },
    ],
  };

  const aboutList = [
    { name: "Mission", link: "/mission" },
    { name: "Our Process", link: "/our-process" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Zion Studios"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-10">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                closeAllDropdowns();
                setIsProductsOpen(true);
              }}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`text-gray-600 hover:text-black font-medium text-sm uppercase tracking-wide transition-colors duration-200 flex items-center gap-1 py-4 ${isProductsOpen ? "text-black" : ""}`}
              >
                <span>Products</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
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
              {isProductsOpen && (
                <div className="absolute top-full right-0 mt-0 w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                  <div className="grid grid-cols-3 divide-x divide-gray-100">
                    {Object.entries(productsData).map(([category, items]) => (
                      <div key={category} className="py-4">
                        <div className="px-5 pb-3">
                          <h3 className="text-xs font-semibold text-black uppercase tracking-wider">
                            {category}
                          </h3>
                        </div>
                        <div>
                          {items.map((item, idx) => (
                            <div key={idx}>
                              {item.link.startsWith("http") ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-500 hover:text-black hover:bg-gray-50 transition-all duration-200 group/item"
                                >
                                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                                    {item.name}
                                  </span>
                                  <svg
                                    className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
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
                                </a>
                              ) : (
                                <Link
                                  to={item.link}
                                  className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-500 hover:text-black hover:bg-gray-50 transition-all duration-200 group/item"
                                  onClick={closeAllDropdowns}
                                >
                                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                                    {item.name}
                                  </span>
                                  <svg
                                    className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
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
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-600 hover:text-black font-medium text-sm uppercase tracking-wide transition-colors duration-200 py-4"
              >
                {item.name}
              </Link>
            ))}

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                closeAllDropdowns();
                setIsAboutOpen(true);
              }}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                className={`text-gray-600 hover:text-black font-medium text-sm uppercase tracking-wide transition-colors duration-200 flex items-center gap-1 py-4 ${isAboutOpen ? "text-black" : ""}`}
              >
                <span>About</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`}
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
              {isAboutOpen && (
                <div className="absolute top-full right-0 mt-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                  <div className="py-2">
                    {aboutList.map((item) => (
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Book A Call CTA */}
            <a
              href="https://calendly.com/kkanchev94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-medium text-sm uppercase tracking-wide px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-lg"
            >
              Book A Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-black transition-colors duration-200"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-6">
            <div className="space-y-1">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-600 uppercase tracking-wide py-2"
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
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
              {isProductsOpen && (
                <div className="bg-gray-50 rounded-lg py-2 space-y-4">
                  {Object.entries(productsData).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-4 pb-1">
                        <p className="text-xs font-semibold text-black uppercase tracking-wider">
                          {category}
                        </p>
                      </div>
                      <div className="space-y-1">
                        {items.map((item, idx) => (
                          <div key={idx}>
                            {item.link.startsWith("http") ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-gray-600 py-2 pl-6 hover:text-black transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </a>
                            ) : (
                              <Link
                                to={item.link}
                                className="block text-sm text-gray-600 py-2 pl-6 hover:text-black transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block text-sm font-medium text-gray-600 uppercase tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="space-y-1">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-600 uppercase tracking-wide py-2"
              >
                <span>About</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
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
              {isAboutOpen && (
                <div className="bg-gray-50 rounded-lg py-2 space-y-1">
                  {aboutList.map((item) => (
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
