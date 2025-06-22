import { Header } from "@/components/Header";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from 'react';
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [showMobileAppPopup, setShowMobileAppPopup] = useState(true);

  return (
    <div className="min-h-screen bg-white">
    <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/landing" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Contact US</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-16">How Can We Help You ?</h1>
        
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Email Us */}
          <div className="border border-gray-300 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Email us</h2>
            <p className="text-gray-600 mb-6">One of our agents will respond at the earliest</p>
            <Button 
              className="w-full bg-blue-100 hover:bg-blue-200 text-blue-600 border-0 flex items-center justify-between"
              variant="outline"
            >
              <span>hello@bluestock.in</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Us */}
          <div className="border border-gray-300 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Chat us</h2>
            <p className="text-gray-600 mb-6">Available from 8:00AM to 5:00PM</p>
            <Button 
              className="w-full bg-blue-100 hover:bg-blue-200 text-blue-600 border-0 flex items-center justify-between"
              variant="outline"
            >
              <span>Open Chat</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Interact With Us in Our Active Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Ask questions or discuss anything related to investing or trading<br />
            in the most active trading & investing community
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">
            JOIN NOW
          </Button>
        </div>

        {/* Mobile App Download - Only show if showMobileAppPopup is true */}
        {showMobileAppPopup && (
          <div className="fixed bottom-6 left-6 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-xs">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">Download Bluestock Mobile App</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowMobileAppPopup(false)}
              >
                ×
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                <div className="w-12 h-12 bg-black rounded grid grid-cols-3 gap-1 p-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-white rounded-sm"></div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">▶</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs">🍎</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Trading View</a></li>
                <li><a href="#" className="hover:text-gray-900">NSE Holidays</a></li>
                <li><a href="#" className="hover:text-gray-900">e-Voting CDSL</a></li>
                <li><a href="#" className="hover:text-gray-900">e-Voting NSDL</a></li>
                <li><a href="#" className="hover:text-gray-900">Market Timings</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/careers" className="hover:text-gray-900">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900">Contact Us</Link></li>
                <li><a href="#" className="hover:text-gray-900">About US</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
                <li><a href="#" className="hover:text-gray-900">Blogs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Offerings</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Compare Broker</a></li>
                <li><a href="#" className="hover:text-gray-900">Fin Calculators</a></li>
                <li><a href="#" className="hover:text-gray-900">IPO</a></li>
                <li><a href="#" className="hover:text-gray-900">All Brokers</a></li>
                <li><a href="#" className="hover:text-gray-900">Products</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Shark Investor</a></li>
                <li><a href="#" className="hover:text-gray-900">Mutual Funds</a></li>
                <li><a href="#" className="hover:text-gray-900">Sitemap</a></li>
                <li><a href="#" className="hover:text-gray-900">Indian Indices</a></li>
                <li><a href="#" className="hover:text-gray-900">Bug Bounty Program</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Policy</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Refund Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Disclaimer</a></li>
                <li><a href="#" className="hover:text-gray-900">Trust & Security</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <img 
                    src="/dp.jpg" 
                    alt="BlueStock Logo" 
                    className="w-8 h-8 mr-3"
                  />
                  <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Bluestock Fintech</p>
                  <p>Pune, Maharashtra</p>
                  <p>MSME Registration No:</p>
                  <p>UDYAM-MH-01-v0138001</p>
                </div>
                <div className="mt-4">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkY2NTAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4jc3RhcnR1cGluZGlhPC90ZXh0Pgo8L3N2Zz4K" alt="Startup India" className="h-10" />
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <p className="mb-4">
                  Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI, issued in the interest of the investors.
                </p>
                <p className="mb-4">
                  The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600 hover:underline">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in" className="text-blue-600 hover:underline">cto@bluestock.in</a>
                </p>
                <p className="mb-4">
                  Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational purposes only.
                </p>
                <p>
                  Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock markets are subject to market risks.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">Bluestock Fintech All Rights Reserved.</p>
              <p className="text-sm text-gray-600 mt-2 md:mt-0">
                Made with ❤️ in Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
