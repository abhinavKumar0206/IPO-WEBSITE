
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUser } from "@/contexts/UserContext";
import { BarChart3, Bell, Eye, FileText, Globe, Home, Mail, Menu, MoreHorizontal, Search, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const TradingDashboard = () => {
  const { user } = useUser();

  // Mock data for portfolio performance
  const portfolioData = [
    { time: "Jan", value: 100000 },
    { time: "Feb", value: 120000 },
    { time: "Mar", value: 115000 },
    { time: "Apr", value: 135000 },
    { time: "May", value: 140000 },
    { time: "Jun", value: 155000 },
    { time: "Jul", value: 165000 },
    { time: "Aug", value: 160000 },
    { time: "Sep", value: 175000 },
    { time: "Oct", value: 180000 },
    { time: "Nov", value: 195000 },
    { time: "Dec", value: 200000 }
  ];

  const positions = [
    { symbol: "AAPL", shares: 100, avgPrice: 150.25, currentPrice: 175.30, pnl: "+16.68%" },
    { symbol: "GOOGL", shares: 50, avgPrice: 2800.00, currentPrice: 2950.75, pnl: "+5.38%" },
    { symbol: "MSFT", shares: 75, avgPrice: 300.50, currentPrice: 315.80, pnl: "+5.09%" },
    { symbol: "TSLA", shares: 25, avgPrice: 700.00, currentPrice: 850.25, pnl: "+21.46%" },
    { symbol: "AMZN", shares: 30, avgPrice: 3200.00, currentPrice: 3350.90, pnl: "+4.72%" }
  ];

  const watchlist = [
    { symbol: "NVDA", price: 435.67, change: "+2.45%", volume: "45.2M" },
    { symbol: "META", price: 298.55, change: "-1.23%", volume: "28.7M" },
    { symbol: "NFLX", price: 425.30, change: "+0.85%", volume: "12.5M" },
    { symbol: "AMD", price: 112.75, change: "+3.21%", volume: "35.8M" },
    { symbol: "CRM", price: 215.90, change: "-0.67%", volume: "8.9M" }
  ];

  const chartConfig = {
    value: { label: "Portfolio Value", color: "#8b5cf6" }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Sidebar - Matching Finance Dashboard */}
      <div className="w-16 bg-black flex flex-col items-center py-4 space-y-1">
        {/* Logo/Brand - White circle with dark center */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
        
        {/* Navigation Icons */}
        <div className="flex flex-col space-y-1">
          <Link to="/">
            <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
              <Home className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/finance-dashboard">
            <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
              <Eye className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/finance-dashboard">
            <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
              <Globe className="w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-blue-400 bg-gray-800 rounded-lg">
            <BarChart3 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
            <FileText className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
            <Users className="w-5 h-5" />
          </Button>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Bottom Icons */}
        <div className="flex flex-col space-y-1">
          <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
            <Mail className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-12 h-12 p-0 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium">Trading Account</div>
                  <div className="text-xs text-gray-400">Account: 4453728992</div>
                </div>
              </div>
              
              <div className="flex items-center gap-8 ml-8">
                <div className="text-sm">
                  <div className="text-gray-400">Portfolio Value</div>
                  <div className="text-xl font-bold">$823,098.17</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-400">Buying Power</div>
                  <div className="text-xl font-bold">$322,912.50</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-400">Day's P&L</div>
                  <div className="text-xl font-bold text-green-400">+$12,405.30</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search stocks..."
                  className="pl-10 w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-6 gap-6">
          {/* Portfolio Performance Chart */}
          <div className="col-span-4 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Portfolio Performance</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-gray-400 text-sm">Total Value</div>
                <div className="text-xl font-bold">$823,098.17</div>
                <div className="text-green-400 text-sm">+15.2% YTD</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm">Day's Change</div>
                <div className="text-xl font-bold">+$12,405.30</div>
                <div className="text-green-400 text-sm">+1.53%</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm">Total Return</div>
                <div className="text-xl font-bold">+$123,098.17</div>
                <div className="text-green-400 text-sm">+17.58%</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm">Cash</div>
                <div className="text-xl font-bold">$322,912.50</div>
                <div className="text-gray-400 text-sm">39.2% of portfolio</div>
              </div>
            </div>

            <div className="h-64">
              <ChartContainer config={chartConfig} className="h-full">
                <AreaChart data={portfolioData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} strokeWidth={2} />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Quick Actions</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Place Buy Order
              </Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Place Sell Order
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                View All Orders
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                Transfer Funds
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold mb-3">Market Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">NYSE</span>
                  <span className="text-green-400">Open</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">NASDAQ</span>
                  <span className="text-green-400">Open</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Market Close</span>
                  <span className="text-gray-400">4:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Positions */}
          <div className="col-span-3 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Current Positions</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-400 text-xs">Symbol</TableHead>
                  <TableHead className="text-gray-400 text-xs">Shares</TableHead>
                  <TableHead className="text-gray-400 text-xs">Avg Price</TableHead>
                  <TableHead className="text-gray-400 text-xs">Current</TableHead>
                  <TableHead className="text-gray-400 text-xs">P&L</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {positions.map((position, index) => (
                  <TableRow key={index} className="border-gray-700 hover:bg-gray-700">
                    <TableCell className="text-white font-medium text-sm">{position.symbol}</TableCell>
                    <TableCell className="text-gray-300 text-sm">{position.shares}</TableCell>
                    <TableCell className="text-gray-300 text-sm">${position.avgPrice}</TableCell>
                    <TableCell className="text-white text-sm">${position.currentPrice}</TableCell>
                    <TableCell className="text-green-400 text-sm">{position.pnl}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Watchlist */}
          <div className="col-span-3 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Watchlist</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-400 text-xs">Symbol</TableHead>
                  <TableHead className="text-gray-400 text-xs">Price</TableHead>
                  <TableHead className="text-gray-400 text-xs">Change</TableHead>
                  <TableHead className="text-gray-400 text-xs">Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {watchlist.map((stock, index) => (
                  <TableRow key={index} className="border-gray-700 hover:bg-gray-700">
                    <TableCell className="text-white font-medium text-sm">{stock.symbol}</TableCell>
                    <TableCell className="text-white text-sm">${stock.price}</TableCell>
                    <TableCell className={`text-sm ${stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stock.change}
                    </TableCell>
                    <TableCell className="text-gray-300 text-sm">{stock.volume}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;