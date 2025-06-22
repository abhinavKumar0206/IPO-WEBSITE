import { Header } from "@/components/Header";

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { StockDataService } from '@/services/stockDataService';
import { ChevronRight, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface StockData {
  company: string;
  symbol: string;
  open: string;
  high: string;
  low: string;
  prevClose: string;
  lte: string;
  change: string;
  changePercent: string;
  volume: string;
  value: string;
  week52High: string;
  week52Low: string;
  day30Change: string;
  today: string;
  id: number;
}

const Analytics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await StockDataService.fetchNifty50Data();
      setStockData(data);
      toast({
        title: "Success",
        description: "Stock data updated successfully",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error fetching stock data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch stock data",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = stockData.filter(stock =>
    stock.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getChangeColor = (change: string) => {
    const value = parseFloat(change);
    return value >= 0 ? 'text-green-600' : 'text-red-600';
  };

  // Calculate market statistics
  const advances = stockData.filter(stock => parseFloat(stock.change) > 0).length;
  const declines = stockData.filter(stock => parseFloat(stock.change) < 0).length;
  const unchanged = stockData.filter(stock => parseFloat(stock.change) === 0).length;

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
            <span className="text-gray-500">Analytics</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* NIFTY 50 Section */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-gray-900">NIFTY 50</h1>
                <Button
                  onClick={fetchData}
                  disabled={isLoading}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>{isLoading ? 'Updating...' : 'Refresh Data'}</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Market Status */}
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-red-600 font-medium">Today Market has Closed</span>
                <span className="text-gray-600">as on {new Date().toLocaleDateString('en-IN', { 
                  day: '2-digit', 
                  month: 'short', 
                  year: 'numeric' 
                })} 16:00:00 IST</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">Advances - {advances}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-600">Declines - {declines}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Unchanged - {unchanged}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-900">Company</TableHead>
                  <TableHead className="font-semibold text-gray-900">OPEN</TableHead>
                  <TableHead className="font-semibold text-gray-900">HIGH</TableHead>
                  <TableHead className="font-semibold text-gray-900">LOW</TableHead>
                  <TableHead className="font-semibold text-gray-900">PREV. CLOSE</TableHead>
                  <TableHead className="font-semibold text-gray-900">LTE</TableHead>
                  <TableHead className="font-semibold text-gray-900">CHNG</TableHead>
                  <TableHead className="font-semibold text-gray-900">%CHNG</TableHead>
                  <TableHead className="font-semibold text-gray-900">VOLUME (in Crore)</TableHead>
                  <TableHead className="font-semibold text-gray-900">VALUE (in Crore)</TableHead>
                  <TableHead className="font-semibold text-gray-900">52W H</TableHead>
                  <TableHead className="font-semibold text-gray-900">52W L</TableHead>
                  <TableHead className="font-semibold text-gray-900">30 D %CHNG</TableHead>
                  <TableHead className="font-semibold text-gray-900">TODAY</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((stock) => (
                  <TableRow key={stock.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{stock.company}</TableCell>
                    <TableCell>{stock.open}</TableCell>
                    <TableCell>{stock.high}</TableCell>
                    <TableCell>{stock.low}</TableCell>
                    <TableCell>{stock.prevClose}</TableCell>
                    <TableCell>{stock.lte}</TableCell>
                    <TableCell className={getChangeColor(stock.change)}>{stock.change}</TableCell>
                    <TableCell className={getChangeColor(stock.changePercent)}>{stock.changePercent}%</TableCell>
                    <TableCell>{stock.volume}</TableCell>
                    <TableCell>{stock.value}</TableCell>
                    <TableCell>{stock.week52High}</TableCell>
                    <TableCell>{stock.week52Low}</TableCell>
                    <TableCell className={getChangeColor(stock.day30Change)}>{stock.day30Change}%</TableCell>
                    <TableCell>
                      <span className="text-blue-600 cursor-pointer hover:underline">{stock.today}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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

export default Analytics;
