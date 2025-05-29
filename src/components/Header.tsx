
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">PRODUCTS</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">PRICING</a>
              <Link to="/shark-investors" className="text-gray-600 hover:text-gray-900 transition-colors">SHARK INVESTORS</Link>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">COMMUNITY</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">MEDIA</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">SUPPORT</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Sign Up Now
              </Button>
            </Link>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
