import { Header } from "@/components/Header";

import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Users } from "lucide-react";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Community = () => {
  const [showMobileAppPopup, setShowMobileAppPopup] = useState(true);

  return (
    <div className="min-h-screen bg-white">
    <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/landing" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <span className="text-gray-900">Community</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The Most Active<br />
              Community of<br />
              Traders & Investors
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Choose to interact with thousands of active traders and 
              investors to learn and share your knowledge on our 
              buzzing forum.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-8 px-8 py-3">
              Join Our Community
            </Button>
          </div>
          
          {/* Community Chat Preview */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  O
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">Om Jaiswal</span>
                    <span className="text-sm text-gray-500">asked a new question</span>
                  </div>
                  <p className="text-gray-700 mt-1">What is long term investments ?</p>
                  <div className="flex space-x-4 mt-2">
                    <button className="text-blue-600 text-sm">120 Votes</button>
                    <button className="text-gray-500 text-sm">34 replies</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  A
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">Anish Wahale</span>
                    <span className="text-sm text-gray-500">asked a new question</span>
                  </div>
                  <p className="text-gray-700 mt-1">What is options trading ?</p>
                  <div className="flex space-x-4 mt-2">
                    <button className="text-blue-600 text-sm">75 Votes</button>
                    <button className="text-gray-500 text-sm">29 replies</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  G
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">Ganesh Karade</span>
                    <span className="text-sm text-gray-500">answered</span>
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg mt-2 text-sm">
                    Options trading is the buying of instruments that 
                    give you the right to buy or sell a specific 
                    security at a specific price on or specific date. 
                    Hope this helps!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading & Investment Club */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                be a part of trading & 
                investments club
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rich environment for</p>
                    <p className="text-gray-600">knowledge exchange</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Stay connected about</p>
                    <p className="text-gray-600">the latest stock market</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Access exclusive community</p>
                    <p className="text-gray-600">events, webinars and meet-ups</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Dynamic Discussions</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Expert Insights</h3>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Real-Time Interaction</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Bluestock Cares */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Bluestock Cares</h2>
          <p className="text-gray-600 mb-12">
            Interact with our members to engage,<br />
            clarify and contribute
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Interact With Our<br />
                Experts
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">Get valid suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">Raise issues or concerns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700">Ask your questions</span>
                </div>
              </div>
            </div>
            
            {/* Expert Chat */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    P
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">Pranith Deshmukh</span>
                      <span className="text-sm text-gray-500">asked a new question</span>
                    </div>
                    <p className="text-gray-700 mt-1">What is options trading ?</p>
                    <div className="flex space-x-4 mt-2">
                      <button className="text-blue-600 text-sm">121 Votes</button>
                      <button className="text-gray-500 text-sm">35 replies</button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    G
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">Ganesh Karade</span>
                      <div className="bg-orange-400 text-white text-xs px-2 py-1 rounded">
                        Bluestock Team
                      </div>
                    </div>
                    <div className="bg-blue-600 text-white px-4 py-3 rounded-lg mt-2">
                      <p className="text-sm">
                        Options trading is the buying of instruments 
                        that give you the right to buy or sell a specific 
                        security at a specific price on a specific date. 
                        Hope this helps!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Trading View</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">NSE Holidays</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">e-Voting CDSL</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">e-Voting NSDL</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Market Timings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About US</a></li>
                <li><Link to="/community" className="text-gray-600 hover:text-gray-900">Community</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Offerings</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Compare Broker</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Fin Calculators</a></li>
                <li><Link to="/ipo" className="text-gray-600 hover:text-gray-900">IPO</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">All Brokers</a></li>
                <li><Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Shark Investor</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Mutual Funds</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sitemap</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Indian Indices</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Bug Bounty Program</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Policy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Refund Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Disclaimer</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Trust & Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Community;
