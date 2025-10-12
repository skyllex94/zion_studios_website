import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const apps = [
  {
    id: 1,
    name: "PDF Document Editor: Kudo AI",
    category: "Productivity",
    description:
      "Advanced PDF editing tool with AI-powered features for document management, editing, and collaboration.",
    appStoreUrl:
      "https://apps.apple.com/us/app/pdf-document-editor-kudo-ai/id6445884062",
    features: [
      "AI-powered editing",
      "Document collaboration",
      "Cloud sync",
      "Multiple format support",
    ],
  },
  {
    id: 2,
    name: "GuardMe: Who Touched My Phone",
    category: "Utilities",
    description:
      "Security app that detects and alerts you when someone tries to access your phone without permission.",
    appStoreUrl:
      "https://apps.apple.com/us/app/guardme-who-touched-my-phone/id6743700095",
    features: [
      "Intrusion detection",
      "Photo capture",
      "Instant alerts",
      "Security logging",
    ],
  },
  {
    id: 3,
    name: "Find Device Tracker: AccuFind",
    category: "Utilities",
    description:
      "Precise device tracking and location services to help you find your lost or misplaced devices quickly.",
    appStoreUrl:
      "https://apps.apple.com/us/app/find-device-tracker-accufind/id6470138524",
    features: [
      "GPS tracking",
      "Location history",
      "Geofencing",
      "Offline mode",
    ],
  },
  {
    id: 4,
    name: "Brown Noise for Sleep: Gamma",
    category: "Health & Fitness",
    description:
      "High-quality brown noise generator designed to help you relax, focus, and get better sleep.",
    appStoreUrl:
      "https://apps.apple.com/us/app/brown-noise-for-sleep-gamma/id6470138525",
    features: [
      "Multiple noise types",
      "Sleep timer",
      "Background play",
      "Customizable settings",
    ],
  },
  {
    id: 5,
    name: "Werewolf - Mafia Offline Game",
    category: "Games",
    description:
      "Classic social deduction game perfect for parties and gatherings. Play offline with friends and family.",
    appStoreUrl:
      "https://apps.apple.com/us/app/werewolf-mafia-offline-game/id6470138526",
    features: [
      "Offline multiplayer",
      "Multiple roles",
      "Custom game settings",
      "Party mode",
    ],
  },
  {
    id: 6,
    name: "Electronic Signature Creator",
    category: "Productivity",
    description:
      "Create legally binding electronic signatures for documents with ease and security.",
    appStoreUrl:
      "https://apps.apple.com/us/app/electronic-signature-creator/id6470138527",
    features: [
      "Legal signatures",
      "Document management",
      "Cloud storage",
      "Mobile signing",
    ],
  },
  {
    id: 7,
    name: "Water Eject Airpods: WaterDrop",
    category: "Utilities",
    description:
      "Safely eject water from your AirPods and other audio devices with advanced sound wave technology.",
    appStoreUrl:
      "https://apps.apple.com/us/app/water-eject-airpods-waterdrop/id6470138528",
    features: [
      "Water ejection technology",
      "Multiple device support",
      "Sound wave patterns",
      "Quick and safe process",
    ],
  },
  {
    id: 8,
    name: "VPN Proxy Master Secure Shield",
    category: "Productivity",
    description:
      "Advanced VPN service with ad-blocking capabilities for secure and private browsing.",
    appStoreUrl:
      "https://apps.apple.com/us/app/vpn-proxy-master-secure-shield/id1459783875",
    features: [
      "Secure VPN connection",
      "Ad-blocking",
      "Global server network",
      "Privacy protection",
    ],
  },
];

function CurrentApps() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Apps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of innovative mobile applications designed
              to enhance your digital experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {apps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {app.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {app.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {app.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on App Store
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Want to see all our apps in one place?
            </p>
            <a
              href="https://apps.apple.com/us/developer/zion-studios-llc/id1685918923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Apps on App Store
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
      </div>
      <Footer />
    </div>
  );
}

export default CurrentApps;
