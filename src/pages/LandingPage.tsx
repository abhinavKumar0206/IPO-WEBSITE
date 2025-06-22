import { Header } from "@/components/Header"; // Adjust if in a different folder
import { Button } from "@/components/ui/button";
import { BarChart3, ChevronDown, Download, Shield, Smartphone, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Use Reusable Header */}
    <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                FREE ✅ 1M+ 🔥
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Free & Open<br />
                Stock Market Analytics<br />
                <span className="text-purple-600">For GenZ</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Experience a new age analytics & data science<br />
                that has been disrupting the market.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-gray-600">Share Code ⚡</span>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-mono">TH35OI</span>
                  <Button variant="outline" size="sm" className="ml-2">📋</Button>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
                Start Free Algo-trading Portal
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-32 w-32 text-blue-600 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">It's easy</span><br />
              <span className="text-purple-600">It's powerful</span><br />
              <span className="text-purple-600">It's beautiful</span>
            </h2>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Bluestock Highlights</h3>
            <p className="text-gray-600 mb-12">
              Risk-free live trade in futures and Options & built-in option chain<br />
              with advance & modern charts
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-6 mb-4">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Learn Chart</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>✓ PRACTICE PROBLEM-SETS</li>
                  <li>✓ 20 POINT TRADING IQ</li>
                  <li>✓ TRADING PSYCHOLOGY</li>
                  <li>✓ RISK MANAGEMENT</li>
                  <li>✓ TECHNICAL INDICATORS</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-6 mb-4">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>✓ AUTO BUY / SELL</li>
                  <li>✓ LIVE DATA</li>
                  <li>✓ SWING SCALPING</li>
                  <li>✓ STOCK CALCULATOR</li>
                  <li>✓ ADVANCE SCREENERS</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 rounded-lg p-6 mb-4">
                  <Users className="h-12 w-12 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Club</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>✓ EXCLUSIVE COMMUNITY</li>
                  <li>✓ EARLY BIRD IDEAS</li>
                  <li>✓ MARKET INSIGHTS</li>
                  <li>✓ DIRECT Q&A SESSIONS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Traders Love Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why do traders love bluestock?
              </h2>
              <p className="text-gray-600 mb-8">
                Bluestock is known for low cost, easy execution<br />
                and fast UPI, fund instant broker charges and many<br />
                features that make trading easier. The combination<br />
                user interface and free brokerage is of love to<br />
                200,000+ users.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-100 rounded-lg p-4 text-center">
                  <Smartphone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">In-Built</span>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Zero</span>
                </div>
                <div className="bg-red-100 rounded-lg p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Live</span>
                </div>
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">All Things finance, right here</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-teal-400 rounded-full w-64 h-64 flex items-center justify-center mx-auto">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm">Active<br />Trading<br />Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">On The Go</h2>
              <p className="text-gray-600 mb-8">
                Get real-time market data on the go with our mobile<br />
                app. Stay updated with your trades and portfolio<br />
                wherever you are, whenever you want it.
              </p>
              
              <div className="mb-8">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRkZGRkZGIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzc0MTUxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RUiBDb2RlPC90ZXh0Pgo8L3N2Zz4K" alt="QR Code" className="w-32 h-32 mx-auto" />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">Scan and download</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Bluestock App 2.0 is Live Now!</h3>
                <p className="text-gray-600 mb-4">Download it and enjoy features:</p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Play Store</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>App Store</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What do our users say?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Venkatesh</h3>
              <p className="text-gray-600 text-sm">
                Good app service is good & satisfied with the<br />
                service. I like this app. The best platform to<br />
                do trading investment for long term to<br />
                gain profit.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Santosh</h3>
              <p className="text-gray-600 text-sm">
                A good app and easy login. We are all<br />
                happy with this product. Our all problems<br />
                get resolved quickly. Thanks bluestock<br />
                family.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Saikoti</h3>
              <p className="text-gray-600 text-sm">
                Really helpful and Best App. The charts<br />
                especially are a cut above anything I have<br />
                used before. Good experience so far. Thank<br />
                you so much bluestock team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Movers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Market Movers</h2>
          <p className="text-gray-600 mb-8">Keep an Eye on the best and updated Equity - Tracker High, 52 week High, 52 week Low and more.</p>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">% Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">RELIANCE</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₹2,456.70</td>
                    <td className="px-6 py-4 text-sm text-green-600">+45.20</td>
                    <td className="px-6 py-4 text-sm text-green-600">+1.87%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">TCS</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₹3,234.15</td>
                    <td className="px-6 py-4 text-sm text-red-600">-12.30</td>
                    <td className="px-6 py-4 text-sm text-red-600">-0.38%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">HDFC BANK</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₹1,567.45</td>
                    <td className="px-6 py-4 text-sm text-green-600">+23.75</td>
                    <td className="px-6 py-4 text-sm text-green-600">+1.54%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare and choose</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-8">Best Stock Broker for you</h3>
            
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">A</span>
                </div>
                <span className="text-gray-700">Angel One</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl text-gray-400">VS</div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">Z</span>
                </div>
                <span className="text-gray-700">Zerodha</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <a href="/broker-comparison">   
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
                Compare
                </Button>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-block relative">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <TrendingUp className="h-32 w-32 text-blue-600 mx-auto opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <li><Link to="/about" className="hover:text-gray-900">About US</Link></li>
                <li><Link to="/community" className="hover:text-gray-900">Community</Link></li>
                <li><Link to="/blogs" className="hover:text-gray-900">Blogs</Link></li>
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

export default LandingPage;
