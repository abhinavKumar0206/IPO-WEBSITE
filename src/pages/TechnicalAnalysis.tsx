import { Header } from "@/components/Header";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Eye } from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";

const TechnicalAnalysis = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const courses = [
    {
      title: "Basics of Technical analysis",
      description: "Learn about Basics of chart patterns, indicators,risk indicators & volumes",
      views: "35M+",
      reads: "35M+",
      icon: "📊",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      link: "/technical-basics"
    },
    {
      title: "Candlesticks Charts & Patterns",
      description: "Learn to read candlestick patterns and identify trends",
      views: "32M+",
      reads: "32M+",
      icon: "📈",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
      link: "/candlestick-charts"
    },
    {
      title: "Chart Patterns",
      description: "Learn to analyze chart patterns like head and shoulder, cup and handle",
      views: "8M+",
      reads: "8M+",
      icon: "📉",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      link: "/chart-patterns"
    },
    {
      title: "Technical Indicators",
      description: "Learn about how to identify the right indicators",
      views: "2.7M+",
      reads: "2.7M+",
      icon: "🔍",
      color: "bg-green-50",
      iconBg: "bg-green-100",
      link: "/technical-indicators"
    },
    {
      title: "Magic of Moving Averages",
      description: "Explore the types, uses and applications of moving averages",
      views: "2.8M+",
      reads: "2.8M+",
      icon: "📊",
      color: "bg-red-50",
      iconBg: "bg-red-100",
      link: "/moving-averages"
    },
    {
      title: "The world of Fibonacci",
      description: "Explore Fibonacci tools for volatile technical analysis & trading",
      views: "1.6M+",
      reads: "1.6M+",
      icon: "🌀",
      color: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      link: "/fibonacci-world" // Added missing link
    },
    {
      title: "Basics of Elliott Wave",
      description: "Learn the principles and patterns of Elliott Wave Theory",
      views: "2M+",
      reads: "2M+",
      icon: "🌊",
      color: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      link: "/elliott-wave" // Added missing link
    },
    {
      title: "Point and Figure Charts",
      description: "Learn how to construct, analyze and use point and figure charts",
      views: "2.1M+",
      reads: "2.1M+",
      icon: "📊",
      color: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      link: "/point-figure-charts" // Added missing link
    },
    {
      title: "Swing Trading",
      description: "Discover the art and science of swing trading",
      views: "2.8M+",
      reads: "2.8M+",
      icon: "⚡",
      color: "bg-pink-50",
      iconBg: "bg-pink-100",
      link: "/swing-trading" // Added missing link
    },
    {
      title: "Intraday Trading",
      description: "Explore effective trading techniques for intraday trading",
      views: "3.7M+",
      reads: "3.7M+",
      icon: "⏰",
      color: "bg-teal-50",
      iconBg: "bg-teal-100",
      link: "/intraday-trading" // Added missing link
    },
    {
      title: "Trading Psychology",
      description: "Learn how to overcome psychological challenges and bias in trading",
      views: "2.1M+",
      reads: "2.1M+",
      icon: "🧠",
      color: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      link: "/trading-psychology" // Added missing link
    },
    {
      title: "Intermarket analysis",
      description: "Learn about intermarket analysis to make wiser investment and trading",
      views: "1.9M+",
      reads: "1.9M+",
      icon: "🔗",
      color: "bg-violet-50",
      iconBg: "bg-violet-100",
      link: "/intermarket-analysis" // Added missing link
    },
    {
      title: "Algo Trading",
      description: "Discover the advantages, strategies, risks and regulatory aspects of Algo trading",
      views: "2M+",
      reads: "2M+",
      icon: "🤖",
      color: "bg-slate-50",
      iconBg: "bg-slate-100",
      link: "/algo-trading" // Added missing link
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-white">
        <nav className="text-sm text-gray-600">
          <Link to="/landing" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link to="/stock-school" className="hover:text-gray-900">Stock School</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Technical Analysis</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Analysis</h1>
              <p className="text-lg text-gray-600">Master the art of technical analysis with comprehensive courses covering chart patterns, indicators, and trading strategies.</p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-32 bg-pink-200 rounded-lg flex items-center justify-center">
                <span className="text-pink-600 text-6xl">📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link key={index} to={course.link} className="block"> {/* Wrap Card with Link */}
              <Card className={`${course.color} border-0 hover:shadow-lg transition-all duration-200 cursor-pointer group h-full`}> {/* Added h-full for consistent card height */}
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${course.iconBg} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    {course.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">{course.description}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-700">{course.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-700">{course.reads} reads</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm group flex items-center">
                      View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <Badge variant="outline" className="text-xs bg-white border-orange-200 text-orange-600">
                      ARTICLE
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
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
              </div>

              <div className="text-sm text-gray-600">
                <p className="mb-4">
                  Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI, issued in the interest of the investors.
                </p>
                <p className="mb-4">
                  The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600 hover:underline">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in" className="text-blue-600 hover:underline">cto@bluestock.in</a>
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

export default TechnicalAnalysis;