import { Header } from "@/components/Header";

import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/landing" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">Careers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Together, Let's Build The<br />
              Future Of Fintech !
            </h1>
            <div className="mb-8">
              <p className="text-xl text-gray-600 mb-2">
                Join Bluestock Fintech to create disruptive
              </p>
              <p className="text-xl text-gray-600 mb-2">
                fin-tech products, while
              </p>
              <p className="text-xl text-gray-600">
                working from anywhere!
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
              See Job Openings
            </Button>
          </div>

          {/* Right Content - App Preview and Downloads */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Phone Mockup */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-4 shadow-2xl">
                  <div className="bg-gray-100 rounded-2xl p-4">
                    {/* Phone Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">BLUESTOCK</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="bg-white rounded-lg p-2 mb-4">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                        <span className="text-xs text-gray-500">Search</span>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-600">Namaste, Yash Kale 🙏</p>
                      <p className="text-xs text-gray-500">Good to have you here</p>
                    </div>

                    {/* Market Overview */}
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">📈 Market Overview</h3>
                      
                      {/* Stock Items */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-xs text-red-500 mr-2">📉 SENSEX</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-red-500">71315</p>
                            <div className="w-12 h-6 bg-red-100 rounded flex items-center justify-center">
                              <div className="w-8 h-1 bg-red-500 rounded"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-xs text-red-500 mr-2">📉 NIFTY 50</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-red-500">21618</p>
                            <div className="w-12 h-6 bg-red-100 rounded flex items-center justify-center">
                              <div className="w-8 h-1 bg-red-500 rounded"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-xs text-green-500 mr-2">📈 BANK NIFTY</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-green-500">47867</p>
                            <div className="w-12 h-6 bg-green-100 rounded flex items-center justify-center">
                              <div className="w-8 h-1 bg-green-500 rounded"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-xs text-green-500 mr-2">📈 NIFTY IT</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-green-500">35665</p>
                            <div className="w-12 h-6 bg-green-100 rounded flex items-center justify-center">
                              <div className="w-8 h-1 bg-green-500 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-gray-600">🗓️ Market today!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">4.4 K+</div>
                  <div className="text-2xl font-bold">DOWNLOADS</div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Enjoy Free Learning, Analytics Club</h3>
                  <p className="text-blue-100 mb-6">Get the link to download the App</p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium">
                    Send App Link
                  </Button>
                </div>

                <div className="flex items-center space-x-4">
                  {/* QR Code */}
                  <div className="bg-white p-3 rounded-lg">
                    {/* <div className="w-16 h-16 bg-black"></div> */}
                    <img 
                    src="/tag.png" 
                    alt="BlueStock Logo" 
                    className="w-8 h-8 mr-3"
                  />
                  </div>

                  {/* App Store Buttons */}
                  <div className="space-y-2">
                    <div className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      
                      <div>
                        <div className="text-xs">GET IT ON</div>
                        <div className="font-bold">Google Play</div>
                      </div>
                    </div>
                    <div className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <div>
                        <div className="text-xs">Download on the</div>
                        <div className="font-bold">App Store</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HR Contact Info */}
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-600">
            All official communication with the HR team at Bluestock Fintech will be through{' '}
            <a href="mailto:hr@bluestock.in" className="text-blue-600 hover:underline font-medium">
              hr@bluestock.in
            </a>
          </p>
        </div>
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
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
                <li><a href="#" className="hover:text-gray-900">Blogs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Offerings</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Compare Broker</a></li>
                <li><a href="#" className="hover:text-gray-900">Fin Calculators</a></li>
                <li><Link to="/ipo" className="hover:text-gray-900">IPO</Link></li>
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
                  <div className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-bold inline-block">
                    #startupindia
                  </div>
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

export default Careers;
