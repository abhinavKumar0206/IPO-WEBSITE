import { Header } from "../components/Header";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used for <Link> in the breadcrumb

const Blogs = () => {
  const blogPosts = [
    {
      title: "Top Reasons for Life Insurance Claim Rejection",
      date: "04 January 2024",
      readTime: "4 min read",
      link: "/blog/top-reasons-for-life-insurance-claim-rejection",
      imageText: "Life Insurance" // Text for placeholder image
    },
    {
      title: "Best PSU Stocks in India",
      date: "26 December 2023",
      readTime: "5 min read",
      link: "/blog/best-psu-stocks-in-india",
      imageText: "PSU Stocks"
    },
    {
      title: "Banking & Financial Services Fund",
      date: "18 December 2023",
      readTime: "7 min read",
      link: "/blog/banking-financial-services-fund",
      imageText: "Financial Fund"
    },
    {
      title: "INOX India IPO - Everything You Must Know",
      date: "15 December 2023",
      readTime: "4 min read",
      link: "/ipo/inox-india-ipo",
      imageText: "INOX IPO"
    },
    {
      title: "Types of Banking Frauds - How to Prevent Them",
      date: "08 December 2023",
      readTime: "5 min read",
      link: "/blog/types-of-banking-frauds",
      imageText: "Banking Frauds"
    },
    {
      title: "Popular Finance Podcasts In India",
      date: "30 November 2023",
      readTime: "3 min read",
      link: "/blog/popular-finance-podcasts-in-india",
      imageText: "Finance Podcasts"
    },
    {
      title: "Gandhar Oil Refinery IPO - Everything You Must Know",
      date: "21 December 2023",
      readTime: "6 min read",
      link: "/blog/gandhar-oil-refinery-ipo",
      imageText: "Gandhar IPO"
    },
    {
      title: "IREDA IPO - Everything You Must Know",
      date: "20 December 2023",
      readTime: "4 min read",
      link: "/blog/ireda-ipo",
      imageText: "IREDA IPO"
    },
    {
      title: "Tata Technologies IPO - Everything You Must Know",
      date: "20 December 2023",
      readTime: "8 min read",
      link: "/blog/tata-technologies-ipo",
      imageText: "Tata IPO"
    },
    {
      title: "Best Pet Insurance Policies in India",
      date: "23 November 2023",
      readTime: "5 min read",
      link: "/blog/best-pet-insurance-policies-in-india",
      imageText: "Pet Insurance"
    },
    {
      title: "Best Fintech Stocks in India",
      date: "27 October 2023",
      readTime: "6 min read",
      link: "/blog/best-fintech-stocks-in-india",
      imageText: "Fintech Stocks"
    },
    {
      title: "Best Stocks under Rs.5 in India",
      date: "20 October 2023",
      readTime: "5 min read",
      link: "/blog/best-stocks-under-rs5-in-india",
      imageText: "Stocks under Rs.5"
    }
  ];

  // Function to generate a random background color for the placeholder
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="min-h-screen bg-white font-inter">

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/landing" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900">Blogs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">BLUESTOCK BLOG</h1>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              {post.link ? (
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline text-inherit">
                  <div
                    className="w-full h-48 flex items-center justify-center text-white text-lg font-bold p-4 text-center"
                    style={{ backgroundColor: `#${getRandomColor()}` }} // Dynamic background color
                  >
                    {/* Using a placeholder image or a simple SVG for a stock-related visual */}
                    {/* Example of a stock chart SVG icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-16 h-16 text-white mb-2"
                    >
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 4.06 4.53 11.03a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                      <path d="m2.62 10.25 4.875 4.875a.75.75 0 0 0 1.06 0L12 11.25l3.44 3.44a.75.75 0 0 0 1.06 0l4.875-4.875c.413-.413 1.13-.198 1.13.364V18a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 18V10.614c0-.562.719-.777 1.13-.364Z" />
                    </svg>
                    <span className="ml-2">{post.imageText || "Blog Post"}</span> {/* Display text from data */}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <div className="text-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div
                    className="w-full h-48 flex items-center justify-center text-white text-lg font-bold p-4 text-center"
                    style={{ backgroundColor: `#${getRandomColor()}` }}
                  >
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-16 h-16 text-white mb-2"
                    >
                      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 4.06 4.53 11.03a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                      <path d="m2.62 10.25 4.875 4.875a.75.75 0 0 0 1.06 0L12 11.25l3.44 3.44a.75.75 0 0 0 1.06 0l4.875-4.875c.413-.413 1.13-.198 1.13.364V18a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 18V10.614c0-.562.719-.777 1.13-.364Z" />
                    </svg>
                    <span className="ml-2">{post.imageText || "Blog Post"}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 text-center">
                      {post.title}
                    </h3>
                    <div className="text-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <Button variant="outline" size="icon" className="w-8 h-8 rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="w-8 h-8 bg-blue-600 text-white border-blue-600 rounded-full hover:bg-blue-700 hover:border-blue-700">1</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 rounded-full hover:bg-gray-100">2</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 rounded-full hover:bg-gray-100">3</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 rounded-full hover:bg-gray-100">4</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 rounded-full hover:bg-gray-100">5</Button>
          </div>
          <Button variant="outline" size="icon" className="w-8 h-8 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
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
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkY2NTAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4jc3RhcnR1cGluc2FjPC90ZXh0Pgo8L2Fpdmc+Cg==" alt="Startup India" className="h-10" />
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

export default Blogs;
