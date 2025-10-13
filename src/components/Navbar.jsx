import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [{ name: "Mission", link: "/mission" }];

  const appsList = [
    {
      name: "All Apps",
      link: "https://apps.apple.com/us/developer/zion-studios-llc/id1685918923",
    },
    {
      name: "PDF Document Editor: Kudo AI",
      link: "https://apps.apple.com/sn/app/pdf-document-editor-kudo-ai/id6745721395?platform=iphone",
    },
    {
      name: "GuardMe: Who Touched My Phone",
      link: "https://apps.apple.com/us/app/guardme-who-touched-my-phone/id6743700095?platform=iphone",
    },
    {
      name: "Find Device Tracker: AccuFind",
      link: "https://apps.apple.com/us/app/find-device-tracker-accufind/id6741714865?platform=iphone",
    },
    {
      name: "Brown Noise for Sleep: Gamma",
      link: "https://apps.apple.com/us/app/brown-noise-for-sleep-gamma/id6741171503?platform=iphone",
    },
    {
      name: "Werewolf - Mafia Offline Game",
      link: "https://apps.apple.com/us/app/werewolf-mafia-offline-game/id6738326023?platform=iphone",
    },
    {
      name: "Electronic Signature Creator",
      link: "https://apps.apple.com/us/app/electronic-signature-creator/id6502412936?platform=iphone",
    },
    {
      name: "Water Eject Airpods: WaterDrop",
      link: "https://apps.apple.com/us/app/water-eject-airpods-waterdrop/id6449911513?platform=iphone",
    },
    {
      name: "VPN Proxy Master Secure Shield",
      link: "https://apps.apple.com/us/app/vpn-proxy-master-secure-shield/id1459783875?platform=iphone",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-bold text-lg lg:text-xl hover:text-gray-300 transition-colors duration-200"
          >
            Zion Studios
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Apps Dropdown */}
            <div className="relative">
              <button
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200 flex items-center space-x-1"
                onMouseEnter={() => setIsAppsOpen(true)}
              >
                <span>Our Apps</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isAppsOpen ? "rotate-180" : ""
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

              {/* Invisible spacer div to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>

              {/* Dropdown Menu */}
              {isAppsOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setIsAppsOpen(true)}
                  onMouseLeave={() => setIsAppsOpen(false)}
                >
                  {appsList.map((app, index) => (
                    <div key={index}>
                      {app.link.startsWith("http") ? (
                        <a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                        >
                          {app.name}
                        </a>
                      ) : (
                        <Link
                          to={app.link}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                        >
                          {app.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200"
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
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block text-gray-300 hover:text-white font-medium text-sm py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm font-medium mb-3">
                Our Apps:
              </p>
              <div className="space-y-2">
                {appsList.map((app, index) => (
                  <div key={index}>
                    {app.link.startsWith("http") ? (
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-300 hover:text-white py-2 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {app.name}
                      </a>
                    ) : (
                      <Link
                        to={app.link}
                        className="block text-sm text-gray-300 hover:text-white py-2 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {app.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
