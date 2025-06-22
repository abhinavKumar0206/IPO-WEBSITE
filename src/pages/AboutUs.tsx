import { Header } from "@/components/Header";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    <Header />


      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <Link to="/landing" className="hover:text-gray-900">Home</Link> 
          <span className="mx-2">&gt;</span> 
          <span className="text-gray-900">About Us</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Bluestock is mobile app for stock market<br />
            learning, analytics & club
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We are passionate about helping you succeed in the stock market by providing cutting-edge tools and a supportive community that empowers traders at every level.
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Join us on this journey, and let's make your stock trading experience better.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-500 text-white rounded-lg p-8">
              <div className="text-3xl font-bold mb-2">5 Thousand</div>
              <div className="text-lg">Customers</div>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-8">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-lg">Team Members</div>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-8">
              <div className="text-3xl font-bold mb-2">4.9 ⭐</div>
              <div className="text-lg">Rating</div>
            </div>
          </div>
        </div>

        {/* Recent News Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 tracking-wider mb-2">TRADERS TALK</p>
            <h2 className="text-3xl font-bold text-gray-900">Recent News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-red-600 font-semibold mb-2">Business Standard</div>
              <p className="text-sm text-gray-600">Rs 20 trillion & rising: AUM of active equity mutual funds surges</p>
            </div>
            <div className="text-center">
              <div className="text-black font-bold text-xl mb-2">Medium</div>
              <p className="text-sm text-gray-600">Bluestock is a mobile app for stock market learning, analytics, and club, supportive community of traders.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-red-600 font-bold">BW</span>
                <span className="text-blue-600 font-bold ml-2">BUSINESSWORLD</span>
              </div>
              <p className="text-sm text-gray-600">Mutual Funds Experience Fourhold Surge in SIP Collections, Reaching Rs 35,000 Cr in Q3</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" className="text-blue-600 border-blue-600">
              Media & Press Releases ⓘ
            </Button>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-blue-500 text-white rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6">Want to join us ?</h2>
          <p className="text-lg mb-6 max-w-2xl">
            We're taking complicated stuff and making it super simple. Our teams are full of smart and savvy folks working on challenging tasks.
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            And we're always looking for customer-obsessed people. Think you're customer-focused enough? Write to us at hello@bluestock.in
          </p>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3">
            APPLY NOW
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="what-is-bluestock" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-black">
                What is Bluestock?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Bluestock is a mobile app designed for stock market enthusiasts, offering a range of features such as educational content, advanced analytics tools, paper trading for practice, real-time market news, portfolio tracking, and a community platform for discussions and collaboration. Additionally, it provides access to expert insights, interactive learning elements, user forums, performance leaderboards, customizable alerts, and investment challenges to create a comprehensive and engaging experience for users interested in learning, analytics, and participation in the stock market.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="platforms-supported" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-black">
                What platforms does Bluestock support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Bluestock is available on both Android and iOS platforms. You can download it from Google Play Store for Android devices and App Store for iOS devices. We also offer a web version for desktop users.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="educational-content" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-black">
                Is there educational content on the app?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes, Bluestock offers comprehensive educational content including practice problem sets, 20-point trading IQ tests, trading psychology courses, risk management tutorials, and technical indicators training. Our Learn Chart feature provides structured learning paths for traders of all levels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="free-to-use" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-black">
                Is Bluestock free to use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Bluestock offers both free and premium features. Users can access basic functionalities for free, with the option to subscribe to a premium plan for additional benefits including advanced analytics, exclusive community access, early bird ideas, and direct Q&A sessions with experts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical-support" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-black">
                How can I get technical support for the app?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                For technical support, you can reach out to us through multiple channels. Send your queries to hello@bluestock.in for general app and website-related issues. For IT/Tech specific feedback, you can contact our technical team at cto@bluestock.in. We also have an active community forum where you can get help from other users and our support team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
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
                <li><Link to="/products" className="hover:text-gray-900">Products</Link></li>
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

export default AboutUs;
