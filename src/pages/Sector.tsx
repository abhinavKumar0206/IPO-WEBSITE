import { Header } from "@/components/Header";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    name: 'Abrasives',
    description: 'The one that gives you all manufacturing.',
    icon: '🔧',
    companies: { total: 3, micro: 1, small: 2, mid: 0, large: 0 }
  },
  {
    name: 'Advertising & Media',
    description: 'The one that creates and distributes media content.',
    icon: '📺',
    companies: { total: 10, micro: 6, small: 2, mid: 1, large: 1 }
  },
  {
    name: 'Agriculture',
    description: 'The one that grows the vegetables and fruits to eat.',
    icon: '🌾',
    companies: { total: 41, micro: 32, small: 4, mid: 2, large: 3 }
  },
  {
    name: 'Air Conditioners',
    description: 'The one that is biggest in cool no noise.',
    icon: '❄️',
    companies: { total: 9, micro: 1, small: 1, mid: 2, large: 5 }
  },
  {
    name: 'Airlines',
    description: 'The one that takes us around the world in the shortest time.',
    icon: '✈️',
    companies: { total: 6, micro: 3, small: 2, mid: 1, large: 0 }
  },
  {
    name: 'Aluminium & Aluminium Products',
    description: 'The one that makes us strong everything.',
    icon: '🔩',
    companies: { total: 18, micro: 14, small: 2, mid: 1, large: 1 }
  },
  {
    name: 'Amusement Parks/ Recreation/Club',
    description: 'The one that makes us stuff and fun.',
    icon: '🎢',
    companies: { total: 6, micro: 4, small: 1, mid: 0, large: 1 }
  },
  {
    name: 'Aquaculture',
    description: 'The one that takes care of aquatic animals.',
    icon: '🐟',
    companies: { total: 8, micro: 5, small: 1, mid: 0, large: 2 }
  },
  {
    name: 'Auto Ancillary',
    description: 'The one that makes the car to keep our vehicles running.',
    icon: '🔧',
    companies: { total: 62, micro: 47, small: 12, mid: 2, large: 1 }
  },
  {
    name: 'Automobile Two & Three Wheelers',
    description: 'The one for people like me and smaller groups.',
    icon: '🏍️',
    companies: { total: 7, micro: 5, small: 1, mid: 1, large: 0 }
  },
  {
    name: 'Automobiles - Dealers & Distributors',
    description: 'The one through which automobiles become available to public.',
    icon: '🚗',
    companies: { total: 4, micro: 2, small: 0, mid: 1, large: 1 }
  },
  {
    name: 'Automobiles - Passenger Cars',
    description: 'The one that brings people together comfortably.',
    icon: '🚙',
    companies: { total: 4, micro: 2, small: 1, mid: 0, large: 1 }
  }
];

const Sector = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSectors = sectors.filter(sector =>
    sector.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    <Header />

      {/* Breadcrumb */}
      <div className="bg-white px-4 py-2 border-b">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm text-gray-500">
            <Link to="/landing" className="hover:text-gray-700">Home</Link> › Profile
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sector</h1>
          <p className="text-gray-600 mb-6">Go to your favourite sector and analyze it in detail.</p>
          
          <div className="flex justify-end mb-6">
            <div className="w-80">
              <Input
                type="text"
                placeholder="Search for a sector"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSectors.map((sector, index) => (
            <Card key={index} className="bg-gradient-to-br from-blue-400 to-blue-600 text-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{sector.icon}</span>
                </div>
                <CardTitle className="text-lg font-semibold">{sector.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm mb-4 text-blue-100">{sector.description}</p>
                
                <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                  {sector.companies.total} Listed Companies
                </div>
                
                <div className="grid grid-cols-4 gap-2 text-xs mb-4">
                  <div>
                    <div className="text-blue-100">MICRO</div>
                    <div className="font-semibold">{sector.companies.micro}</div>
                  </div>
                  <div>
                    <div className="text-blue-100">SMALL</div>
                    <div className="font-semibold">{sector.companies.small}</div>
                  </div>
                  <div>
                    <div className="text-blue-100">MID</div>
                    <div className="font-semibold">{sector.companies.mid}</div>
                  </div>
                  <div>
                    <div className="text-blue-100">LARGE</div>
                    <div className="font-semibold">{sector.companies.large}</div>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Details
                </Button>
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
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Mutual Funds</a></li>
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
                <div className="text-2xl font-bold text-blue-600"> BLUESTOCK</div>
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
                  <p className="mt-2">The users can write to hello@bluestock.in for any app, website related queries. Also you can send IT / Tech related feedback to cto@bluestock.in</p>
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

export default Sector;
