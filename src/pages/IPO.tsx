import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Calendar, Clock, Facebook, Instagram, Linkedin, Plus, Star, Target, TrendingUp, Twitter, Users, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const IPO = () => {
  console.log('IPO component is rendering');

  const currentIpos = [
    {
      company: "Mobikwik Systems Pvt Ltd",
      open: "Dec 11, 24",
      close: "Dec 13, 24",
      bidLot: 13,
      price: "₹279 - ₹279",
      minAmount: "₹3,627",
      status: "LIVE",
      logo: "🏢",
      gmp: "+₹45",
      subscription: "2.5x"
    }
  ];

  const upcomingIpos = [
    {
      company: "Ventive Hospitality Ltd",
      open: "Dec 20, 24", 
      close: "Dec 24, 24",
      bidLot: 1200,
      price: "₹643 - ₹678",
      minAmount: "₹8,13,600",
      status: "UPCOMING",
      logo: "🏨",
      gmp: "₹0",
      subscription: "-"
    }
  ];

  const smeIpos = [
    {
      company: "Bajaj Housing Finance Ltd",
      open: "Sep 09, 24",
      close: "Sep 11, 24", 
      bidLot: 200,
      price: "₹66 - ₹70",
      minAmount: "₹14,000",
      status: "CLOSED",
      logo: "🏠",
      listing: "+85%"
    },
    {
      company: "Ola Electric Mobility Ltd",
      open: "Aug 02, 24",
      close: "Aug 06, 24",
      bidLot: 295,
      price: "₹72 - ₹76", 
      minAmount: "₹22,420",
      status: "CLOSED",
      logo: "⚡",
      listing: "+12%"
    }
  ];

  const closedIpos = [
    {
      company: "ACME Corp Ltd",
      open: "Nov 15, 24",
      close: "Nov 18, 24",
      bidLot: 150,
      price: "₹85 - ₹90",
      minAmount: "₹13,500",
      status: "CLOSED",
      logo: "🏭",
      listing: "-5%"
    },
    {
      company: "Tech Solutions Pvt Ltd",
      open: "Oct 25, 24",
      close: "Oct 28, 24",
      bidLot: 100,
      price: "₹120 - ₹130",
      minAmount: "₹13,000",
      status: "CLOSED",
      logo: "💻",
      listing: "+25%"
    }
  ];

  const faqData = [
    {
      question: "What is an IPO?",
      answer: "An Initial Public Offering (IPO) is the first sale of stock by a company to the public. Companies use IPOs to raise capital for expansion, debt repayment, or other corporate purposes."
    },
    {
      question: "How to invest in an IPO?",
      answer: "To invest in an IPO, you need a demat account and trading account. You can apply through your broker's platform, ASBA, or UPI during the IPO subscription period."
    },
    {
      question: "What is the benefit of an IPO?",
      answer: "IPO investments can offer potential capital appreciation, opportunity to invest in growing companies at an early stage, and potential listing gains."
    },
    {
      question: "What are the disadvantages of an IPO?",
      answer: "IPOs carry risks including price volatility, limited operating history for new companies, market risks, and potential losses if the stock performs poorly."
    },
    {
      question: "What is the difference between book building issue and fixed price issue?",
      answer: "In book building, the price is determined through bidding within a price band. In fixed price issues, shares are offered at a predetermined fixed price."
    },
    {
      question: "Is it mandatory to have a PAN number to apply in an IPO?",
      answer: "Yes, PAN is mandatory for all IPO applications as per SEBI regulations for KYC compliance and tax purposes."
    },
    {
      question: "Where do I get an IPO application form?",
      answer: "IPO applications can be submitted online through your broker's platform, banks supporting ASBA, or UPI apps. Physical forms are also available at designated centers."
    },
    {
      question: "How one can apply in IPO's online?",
      answer: "You can apply online through your broker's trading platform, bank's net banking portal (ASBA), or UPI apps that support IPO applications."
    },
    {
      question: "How one can apply in IPO's offline?",
      answer: "Offline applications can be made by filling physical application forms available at designated collection centers, banks, or broker offices."
    },
    {
      question: "Can a minor apply in an IPO?",
      answer: "Yes, minors can apply for IPOs through their guardian. The application must be made by the guardian on behalf of the minor with proper documentation."
    },
    {
      question: "What is the previous vs. minimum from an IPO?",
      answer: "The minimum investment is the lot size multiplied by the price per share. Previous refers to historical performance data of similar offerings."
    },
    {
      question: "How is IPO status calculated?",
      answer: "IPO status shows subscription levels across different categories (retail, HNI, institutional) and indicates demand versus supply for the offering."
    },
    {
      question: "Can one apply for an IPO from in excess Indian without opening bank account?",
      answer: "No, you need an Indian bank account linked to your demat account to apply for IPOs in India. ASBA or UPI requires Indian banking relationships."
    },
    {
      question: "What is the minimum unit maximum investment one could do in the this category?",
      answer: "Retail investors can invest minimum one lot and maximum up to ₹2 lakhs. HNI category allows investments above ₹2 lakhs with higher lot requirements."
    },
    {
      question: "How to apply more than one application in an IPO?",
      answer: "Multiple applications from the same PAN are not allowed and will be rejected. However, family members with different PANs can apply separately."
    }
  ];

  const renderEnhancedIPOTable = (data: any[], title: string, type: 'current' | 'upcoming' | 'closed' = 'current') => (
    <Card className="mb-8 shadow-lg border-0 bg-white">
      <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-8 bg-blue-600 rounded-full"></div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
            <p className="text-gray-600 text-sm mt-1">{data.length} IPO{data.length > 1 ? 's' : ''} available</p>
          </div>
        </div>
        <a href="/view-all" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 border-b-2 border-gray-100">
                <TableHead className="font-bold text-gray-900 py-4 px-6">Company</TableHead>
                <TableHead className="font-bold text-gray-900 py-4 px-4">Timeline</TableHead>
                <TableHead className="font-bold text-gray-900 py-4 px-4">Lot Size</TableHead>
                <TableHead className="font-bold text-gray-900 py-4 px-4">Price Band</TableHead>
                <TableHead className="font-bold text-gray-900 py-4 px-4">Min Investment</TableHead>
                {type === 'current' && <TableHead className="font-bold text-gray-900 py-4 px-4">GMP</TableHead>}
                {type === 'current' && <TableHead className="font-bold text-gray-900 py-4 px-4">Subscription</TableHead>}
                {type === 'closed' && <TableHead className="font-bold text-gray-900 py-4 px-4">Listing Gain</TableHead>}
                <TableHead className="font-bold text-gray-900 py-4 px-4">Status</TableHead>
                <TableHead className="font-bold text-gray-900 py-4 px-4 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((ipo, index) => (
                <TableRow key={index} className="hover:bg-blue-50/50 transition-colors border-b border-gray-100">
                  <TableCell className="py-6 px-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                        {ipo.logo}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{ipo.company}</div>
                        <div className="text-gray-500 text-sm">Public Limited Company</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-green-600" />
                        Open: {ipo.open}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-red-600" />
                        Close: {ipo.close}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-4">
                    <div className="text-center">
                      <div className="font-bold text-lg text-gray-900">{ipo.bidLot}</div>
                      <div className="text-xs text-gray-500">shares</div>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-4">
                    <div className="font-bold text-blue-600 text-lg">{ipo.price}</div>
                  </TableCell>
                  <TableCell className="py-6 px-4">
                    <div className="font-bold text-purple-600 text-lg">{ipo.minAmount}</div>
                  </TableCell>
                  {type === 'current' && (
                    <TableCell className="py-6 px-4">
                      <div className="font-bold text-green-600">{ipo.gmp}</div>
                    </TableCell>
                  )}
                  {type === 'current' && (
                    <TableCell className="py-6 px-4">
                      <div className="font-bold text-orange-600">{ipo.subscription}</div>
                    </TableCell>
                  )}
                  {type === 'closed' && (
                    <TableCell className="py-6 px-4">
                      <div className={`font-bold ${ipo.listing?.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {ipo.listing}
                      </div>
                    </TableCell>
                  )}
                  <TableCell className="py-6 px-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${
                      ipo.status === 'LIVE' ? 'bg-green-100 text-green-800 border border-green-200' :
                      ipo.status === 'UPCOMING' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                      'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                      {ipo.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-6 px-4 text-center">
                    <Button 
                      variant={ipo.status === 'LIVE' ? 'default' : 'outline'}
                      size="sm"
                      disabled={ipo.status === 'CLOSED'}
                      className={`px-6 py-2 font-bold transition-all duration-200 ${
                        ipo.status === 'LIVE' ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl' :
                        ipo.status === 'UPCOMING' ? 'text-blue-600 border-blue-600 hover:bg-blue-50' :
                        'text-gray-600 border-gray-300'
                      }`}
                    >
                      {ipo.status === 'LIVE' ? 'APPLY NOW' : ipo.status === 'UPCOMING' ? 'GET NOTIFIED' : 'VIEW DETAILS'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
    {/* Use Reusable Header */}
    <Header />
            

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              IPO Investment Hub
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover, research, and invest in the most promising Initial Public Offerings. 
              Make informed investment decisions with our comprehensive IPO analysis and real-time updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-lg">
                <Star className="mr-2 h-5 w-5" />
                View Live IPOs
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold rounded-xl">
                <Target className="mr-2 h-5 w-5" />
                IPO Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Live IPOs", value: "1", icon: TrendingUp, color: "green" },
            { label: "Upcoming IPOs", value: "1", icon: Calendar, color: "blue" },
            { label: "Avg Returns", value: "+24%", icon: TrendingUp, color: "purple" },
            { label: "Total Applications", value: "50K+", icon: Users, color: "orange" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Current IPOs */}
        {renderEnhancedIPOTable(currentIpos, "Current IPOs", 'current')}

        {/* Upcoming IPOs */}
        {renderEnhancedIPOTable(upcomingIpos, "Upcoming IPOs", 'upcoming')}

        {/* Application CTA Section */}
        <Card className="mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 border-0 shadow-xl">
          <CardContent className="text-center py-16 px-8">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-blue-600 font-bold text-xl">B</div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Investing?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Open your Demat Account with BLUESTOCK in just a few minutes and start applying for IPOs instantly.
              Get access to exclusive research reports, real-time market updates, and expert investment guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl shadow-lg">
                <Plus className="mr-2 h-5 w-5" />
                OPEN DEMAT ACCOUNT
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg font-bold rounded-xl">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* SME & Closed IPOs */}
        {renderEnhancedIPOTable(smeIpos, "SME IPOs", 'closed')}
        {renderEnhancedIPOTable(closedIpos, "Recently Closed IPOs", 'closed')}

        {/* FAQ Section */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-t-lg pb-8">
            <div className="text-center">
              <CardTitle className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </CardTitle>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to the most commonly asked questions about IPO investments and make informed decisions
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600 py-6 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Trading View</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">NSE Holidays</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">e-Voting CDSL</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">e-Voting NSDL</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Market Timings</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/careers" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About US</Link></li>
                <li><Link to="/community" className="text-gray-600 hover:text-blue-600 transition-colors">Community</Link></li>
                <li><Link to="/blogs" className="text-gray-600 hover:text-blue-600 transition-colors">Blogs</Link></li>
              </ul>
            </div>

            {/* Offerings */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Offerings</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Compare Broker</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Fin Calculators</Link></li>
                <li><Link to="/ipo" className="text-gray-600 hover:text-blue-600 transition-colors">IPO</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">All Brokers</Link></li>
                <li><Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Links</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Shark Investor</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Mutual Funds</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sitemap</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Indian Indices</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Bug Bounty Program</Link></li>
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Policy</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Refund Policy</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Disclaimer</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">Trust & Security</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Company Info */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
                {/* Social Media */}
                <div className="flex items-center space-x-4">
                  <Twitter className="w-6 h-6 text-blue-600 hover:text-blue-700 cursor-pointer" />
                  <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700 cursor-pointer" />
                  <Youtube className="w-6 h-6 text-red-600 hover:text-red-700 cursor-pointer" />
                  <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-700 cursor-pointer" />
                  <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-700 cursor-pointer" />
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                </div>

                {/* Company Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <img
                      src="/dp.jpg" 
                      alt="Bluestock Logo"
                    />
                  </div>
                  <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
                </div>
              </div>

              {/* Company Details */}
              <div className="text-sm text-gray-600 space-y-2">
                <p>Bluestock Fintech</p>
                <p>Pune, Maharashtra</p>
                <p className="mt-4">MSME Registration No:</p>
                <p>UDYAM-MH-01-v0138001</p>
              </div>
            </div>

            {/* Disclaimer & Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.
                  </p>
                  <p className="mb-4">
                    The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600 hover:underline">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in" className="text-blue-600 hover:underline">cto@bluestock.in</a>
                  </p>
                  <p className="mb-4">
                    Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/ sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational purposes only.
                  </p>
                  <p>
                    Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock markets are subject to market risks.
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-end">
                  <div className="mb-6">
                    <img src="#startupindia" alt="Startup India" className="h-12" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">Bluestock Fintech All Rights Reserved.</p>
              <p className="text-gray-600 text-sm mt-2 lg:mt-0">
                Made with <span className="text-red-500">♥</span> in Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IPO;
