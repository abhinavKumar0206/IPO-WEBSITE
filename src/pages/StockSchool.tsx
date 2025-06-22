import { Header } from "@/components/Header";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Eye } from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";

const StockSchool = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const categories = [
    {
      title: "Basic Finance",
      description: "From the managing money, choosing the right banks, daily income and other financial...",
      modules: 4,
      views: "554,932",
      icon: "💰",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      title: "Beginners Stock Markets",
      description: "Learn stock market terminologies, methodologies, trading strategies and...",
      modules: 6,
      views: "332,726",
      icon: "👨‍💼",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Stock Investing",
      description: "Explore stock investment basics, analysis, and long-term strategies",
      modules: 10,
      views: "365,084",
      icon: "📈",
      color: "bg-green-50",
      iconBg: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      title: "Technical Analysis",
      description: "Explore basic to advanced topics for effective trading",
      modules: 13,
      views: "115,385",
      icon: "📊",
      color: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-600",
      link: "/technical-analysis"
    },
    {
      title: "Derivatives",
      description: "Become familiar with the principles and strategies of derivatives trading",
      modules: 4,
      views: "125,075",
      icon: "📈",
      color: "bg-pink-50",
      iconBg: "bg-pink-100",
      textColor: "text-pink-600"
    },
    {
      title: "Mutual Funds",
      description: "Learn important mutual fund concepts for effective financial planning",
      modules: 3,
      views: "78,511",
      icon: "🎯",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "Banking & Insurance",
      description: "Learn the basics of banking and insurance for sound financial management...",
      modules: 8,
      views: "267,024",
      icon: "🏛️",
      color: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      title: "Financial Planning",
      description: "Learn about financial planning strategies and services",
      modules: 6,
      views: "158,855",
      icon: "💼",
      color: "bg-amber-50",
      iconBg: "bg-amber-100",
      textColor: "text-amber-600"
    },
    {
      title: "Cryptocurrency",
      description: "Dive deep into the world of cryptocurrencies and blockchain",
      modules: 2,
      views: "137,199",
      icon: "₿",
      color: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      textColor: "text-yellow-600"
    }
  ];

  const alternativeInvestments = {
    title: "Alternative Investments",
    description: "Explore various alternative investments like debt, commodity, gold, cur...",
    modules: 6,
    views: "71,883",
    icon: "📈",
    color: "bg-teal-50",
    iconBg: "bg-teal-100",
    textColor: "text-teal-600"
  };

  const bookSummary = {
    title: "Book Summary",
    description: "Get summaries of popular finance books",
    modules: 37,
    views: "745,746",
    icon: "📚",
    color: "bg-rose-50",
    iconBg: "bg-rose-100",
    textColor: "text-rose-600"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    <Header />  

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-white">
        <nav className="text-sm text-gray-600">
          <Link to="/landing" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Stock School</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Page Title */}
        <div className="mb-8 bg-white py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Categories</h1>
          <p className="text-gray-600">Begin your financial market education by exploring a variety of categories.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <Card key={index} className={`${category.color} border-0 hover:shadow-lg transition-all duration-200 cursor-pointer group`}>
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">{category.modules} Modules</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">{category.views} views</span>
                    </div>
                  </div>
                </div>
                
                {category.link ? (
                  <Link to={category.link} className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group">
                    View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                ) : (
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group">
                    View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alternative Investments and Book Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <Card className={`${alternativeInvestments.color} border-0 hover:shadow-lg transition-all duration-200 cursor-pointer group`}>
            <CardContent className="p-6">
              <div className={`w-16 h-16 ${alternativeInvestments.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {alternativeInvestments.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{alternativeInvestments.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{alternativeInvestments.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">{alternativeInvestments.modules} Modules</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">{alternativeInvestments.views} views</span>
                  </div>
                </div>
              </div>
              
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group">
                View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </CardContent>
          </Card>

          <Card className={`${bookSummary.color} border-0 hover:shadow-lg transition-all duration-200 cursor-pointer group`}>
            <CardContent className="p-6">
              <div className={`w-16 h-16 ${bookSummary.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {bookSummary.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{bookSummary.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{bookSummary.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">{bookSummary.modules} Modules</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">{bookSummary.views} views</span>
                  </div>
                </div>
              </div>
              
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group">
                View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* App Download Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="tag.png" 
                alt="Mobile App Preview" 
                className="w-48 h-auto"
              />
            </div>
            <div>
              <div className="mb-4">
                <div className="text-yellow-400 text-2xl font-bold mb-2">4.4 K+</div>
                <div className="text-xl font-bold mb-4">DOWNLOADS</div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Enjoy Free Learning, Analytics Club</h2>
              <p className="text-blue-100 mb-6">Get the link to download the App</p>
              
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium mb-6">
                Send App Link
              </Button>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <img src="tag.png" alt="QR Code" className="w-16 h-16" />
                </div>
                <div className="space-y-2">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwIiByeD0iNSIvPgo8dGV4dCB4PSI2MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R29vZ2xlIFBsYXk8L3RleHQ+Cjwvc3ZnPgo=" alt="Google Play" className="h-10" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwIiByeD0iNSIvPgo8dGV4dCB4PSI2MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QXBwIFN0b3JlPC90ZXh0Pgo8L3N2Zz4K" alt="App Store" className="h-10" />
                </div>
              </div>
            </div>
          </div>
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

export default StockSchool;
