import { Header } from "@/components/Header";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronRight, Search, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const mutualFunds = [
  {
    id: 1,
    name: "Axis Bluechip Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 4,
    returns: {
      oneYear: "15.2%",
      threeYear: "18.5%",
      fiveYear: "14.8%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹500",
    expenseRatio: "1.85%",
    fundSize: "₹25,840 Cr",
    logo: "🎯"
  },
  {
    id: 2,
    name: "ICICI Prudential Bluechip Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 4,
    returns: {
      oneYear: "14.8%",
      threeYear: "17.2%",
      fiveYear: "13.9%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹100",
    expenseRatio: "1.95%",
    fundSize: "₹42,156 Cr",
    logo: "🏦"
  },
  {
    id: 3,
    name: "SBI Bluechip Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 3,
    returns: {
      oneYear: "13.5%",
      threeYear: "16.8%",
      fiveYear: "12.7%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹500",
    expenseRatio: "1.75%",
    fundSize: "₹18,924 Cr",
    logo: "🏛️"
  },
  {
    id: 4,
    name: "Nippon India Large Cap Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 4,
    returns: {
      oneYear: "16.1%",
      threeYear: "19.3%",
      fiveYear: "15.2%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹100",
    expenseRatio: "1.89%",
    fundSize: "₹8,456 Cr",
    logo: "🗾"
  },
  {
    id: 5,
    name: "Canara Robeco Bluechip Equity Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 3,
    returns: {
      oneYear: "12.8%",
      threeYear: "15.9%",
      fiveYear: "11.8%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹1000",
    expenseRatio: "2.1%",
    fundSize: "₹5,234 Cr",
    logo: "🏭"
  },
  {
    id: 6,
    name: "Mirae Asset Large Cap Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 5,
    returns: {
      oneYear: "17.4%",
      threeYear: "20.1%",
      fiveYear: "16.8%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹500",
    expenseRatio: "1.65%",
    fundSize: "₹12,789 Cr",
    logo: "🏔️"
  },
  {
    id: 7,
    name: "HDFC Top 100 Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 4,
    returns: {
      oneYear: "15.7%",
      threeYear: "18.9%",
      fiveYear: "14.5%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹300",
    expenseRatio: "1.92%",
    fundSize: "₹21,567 Cr",
    logo: "🏢"
  },
  {
    id: 8,
    name: "Aditya Birla Sun Life Frontline Equity Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 3,
    returns: {
      oneYear: "13.9%",
      threeYear: "17.1%",
      fiveYear: "13.2%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹500",
    expenseRatio: "2.05%",
    fundSize: "₹9,876 Cr",
    logo: "☀️"
  },
  {
    id: 9,
    name: "UTI Mastershare Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 3,
    returns: {
      oneYear: "12.3%",
      threeYear: "16.2%",
      fiveYear: "12.1%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹500",
    expenseRatio: "1.88%",
    fundSize: "₹6,543 Cr",
    logo: "🎓"
  },
  {
    id: 10,
    name: "Kotak Bluechip Fund",
    category: "Large Cap",
    fundType: "Equity Funds",
    rating: 4,
    returns: {
      oneYear: "16.8%",
      threeYear: "19.5%",
      fiveYear: "15.9%"
    },
    riskLevel: "Moderate",
    minInvestment: "₹100",
    expenseRatio: "1.78%",
    fundSize: "₹15,432 Cr",
    logo: "🏦"
  }
];

const MutualFunds = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFunds = mutualFunds.filter(fund =>
    fund.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    <Header />
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/landing" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500">Mutual Funds</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Large Cap Mutual Funds</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in stable and established companies with our curated selection of large cap mutual funds. 
              These funds focus on well-established companies with large market capitalizations, offering steady growth potential with relatively lower risk.
            </p>
            <div className="flex justify-center">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for mutual funds..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Overview of Large Cap Mutual Funds</h2>
        </div>

        {/* Mutual Funds Grid */}
        <div className="space-y-6">
          {filteredFunds.map((fund) => (
            <Card key={fund.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  {/* Fund Info */}
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">{fund.logo}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{fund.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{fund.category}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{fund.fundType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating and Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          {renderStars(fund.rating)}
                          <span className="ml-2 text-sm text-gray-600">({fund.rating}/5)</span>
                        </div>
                        <p className="text-sm text-gray-500">Fund Rating</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-900">Risk Level: {fund.riskLevel}</p>
                        <p className="text-sm text-gray-500">Min Investment: {fund.minInvestment}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-900">Expense Ratio: {fund.expenseRatio}</p>
                        <p className="text-sm text-gray-500">Fund Size: {fund.fundSize}</p>
                      </div>
                    </div>

                    {/* Returns */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-lg font-semibold text-green-600">{fund.returns.oneYear}</span>
                        </div>
                        <p className="text-xs text-gray-500">1 Year</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-lg font-semibold text-green-600">{fund.returns.threeYear}</span>
                        </div>
                        <p className="text-xs text-gray-500">3 Years</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-lg font-semibold text-green-600">{fund.returns.fiveYear}</span>
                        </div>
                        <p className="text-xs text-gray-500">5 Years</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">
                      This fund invests primarily in large-cap equity securities, focusing on well-established companies 
                      with strong fundamentals and market leadership positions.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2 lg:ml-6">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                      Invest Now
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Trading View</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">NSE Holidays</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">e-Voting CDSL</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">e-Voting NSDL</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Market Timings</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About US</Link></li>
                <li><Link to="/community" className="text-gray-600 hover:text-gray-900">Community</Link></li>
                <li><Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Offerings</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Compare Broker</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Fin Calculators</a></li>
                <li><Link to="/ipo" className="text-gray-600 hover:text-gray-900">IPO</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">All Brokers</a></li>
                <li><Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Shark Investor</a></li>
                <li><Link to="/mutual-funds" className="text-gray-600 hover:text-gray-900">Mutual Funds</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sitemap</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Indian Indices</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Bug Bounty Program</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Policy</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Refund Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Disclaimer</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Trust & Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img 
                    src="/dp.jpg" 
                    alt="BlueStock Logo" 
                    className="w-8 h-8 mr-3"
                  />
                <div className="text-2xl font-bold text-blue-600">BLUESTOCK</div>
                <div className="text-sm text-gray-600">
                  <div>Bluestock Fintech</div>
                  <div>Pune, Maharashtra</div>
                  <div className="mt-2">MSME Registration No:</div>
                  <div>UDYAM-MH-01-v0138001</div>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="flex space-x-4 justify-center md:justify-end mb-2">
                  <a href="#" className="text-blue-500 hover:text-blue-600">🐦</a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">📘</a>
                  <a href="#" className="text-red-500 hover:text-red-600">📺</a>
                  <a href="#" className="text-blue-700 hover:text-blue-800">💼</a>
                  <a href="#" className="text-pink-500 hover:text-pink-600">📷</a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">📱</a>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI, issued in the interest of the investors.</p>
                  <p className="mt-2">The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600 hover:underline">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in" className="text-blue-600 hover:underline">cto@bluestock.in</a></p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <div>Bluestock Fintech All Rights Reserved.</div>
              <div className="flex items-center mt-2 md:mt-0">
                Made with ❤️ in Pune, Maharashtra
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MutualFunds;
