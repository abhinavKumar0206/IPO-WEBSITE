import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigationItems = [
    { name: "IPO", href: "/ipo" },
    { name: "Community", href: "/community" },
    { name: "Products", href: "/products" },
    { name: "Brokers", href: "/brokers" },
    { name: "Live News", href: "https://www.cnbctv18.com/", external: true },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/dp.jpg"
                alt="Bluestock Logo"
                className="w-10 h-10 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BLUESTOCK
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navigationItems.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                )
              )}

              {/* More Dropdown */}
              {/* More Dropdown - Clickable & Persistent */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2 space-x-1 focus:outline-none"
                  >
                    <span>More</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {isDropdownOpen && (
                    <div
                      className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-48 z-50 py-2"
                      onMouseLeave={() => setIsDropdownOpen(false)} // Optional auto-close
                    >
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/careers"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Careers
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Contact Us
                      </Link>
                      <Link
                        to="/mutual-fund"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Mutual Fund
                      </Link>
                      <Link
                        to="/stock-school"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Stock School
                      </Link>
                      <Link
                        to="/sectors"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Sector
                      </Link>
                      <Link
                        to="/blogs"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/analytics"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Analytics
                      </Link>
                      <Link
                        to="/shark-investors"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}  
                      > 
                        Shark Investors
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
          </div>  


          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Sign In
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0 overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/dp.jpg"
                      alt="Bluestock Logo"
                      className="w-10 h-10 rounded-xl shadow-lg"
                    />
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      BLUESTOCK
                    </span>
                  </div>
                </div>

                <div className="flex-1 py-6 flex flex-col justify-between">
                  {/* Main Navigation */}
                  <nav className="space-y-2 px-6">
                    {navigationItems.map((item) =>
                      item.external ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </nav>

                  {/* More Options - Clearly Separated Section */}
                  <div className="mt-8 border-t pt-6 px-6">
                    <div className="text-xs uppercase text-gray-400 mb-2 tracking-wide">More Options</div>
                    <nav className="space-y-2">
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/careers"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Careers
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                      <Link
                        to="/mutual-fund"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Mutual Fund 
                      </Link>
                      <Link
                        to="/stock-school"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Stock School
                        </Link>
                      <Link
                        to="/sectors"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sector
                      </Link>
                      <Link
                        to="/blogs"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/analytics"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      > 
                        Analytics
                      </Link>
                      <Link
                        to="/shark-investors"
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Shark Investors
                      </Link>
                    </nav>
                  </div>
                </div>


                <div className="p-6 border-t space-y-4">
                  <Link
                    to="/login"
                    className="block w-full text-center py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
