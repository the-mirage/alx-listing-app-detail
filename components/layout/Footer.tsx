import React from "react";
import { Globe, Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const supportLinks = [
    "Help Center",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighborhood concern",
  ];

  const hostingLinks = [
    "Airbnb your home",
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Join a free Hosting class",
  ];

  const airbnbLinks = [
    "Newsroom",
    "New features",
    "Careers",
    "Investors",
    "Airbnb.org emergency stays",
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Hosting
            </h3>
            <ul className="space-y-3">
              {hostingLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3">
              {airbnbLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest news and exclusive offers from Airbnb
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Left side - Copyright and Links */}
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <p className="text-sm text-gray-600">© 2025 Airbnb, Inc.</p>
              <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Privacy
                </a>
                <span className="hidden lg:block">·</span>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Terms
                </a>
                <span className="hidden lg:block">·</span>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Sitemap
                </a>
                <span className="hidden lg:block">·</span>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Company details
                </a>
              </div>
            </div>

            {/* Right side - Language, Currency and Social */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Language and Currency */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  <Globe className="h-4 w-4" />
                  <span>English (US)</span>
                </button>
                <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  $ USD
                </button>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
