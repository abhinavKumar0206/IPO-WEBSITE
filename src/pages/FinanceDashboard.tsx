
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Settings, MoreHorizontal, Bell, Home, TrendingUp, PieChart, FileText, Users, Zap, Mail } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { UserProfile } from "@/components/UserProfile";

const FinanceDashboard = () => {
  const { user } = useUser();
  const [selectedTimeframe, setSelectedTimeframe] = useState("D");

  // Mock data for the main indexes chart
  const indexChartData = [
    { time: "09:30", spx: 509.90, dow: 30000, nasdaq: 452.90 },
    { time: "10:00", spx: 511.20, dow: 30050, nasdaq: 454.20 },
    { time: "11:00", spx: 508.75, dow: 29980, nasdaq: 451.80 },
    { time: "12:00", spx: 510.30, dow: 30020, nasdaq: 453.50 },
    { time: "13:00", spx: 507.85, dow: 29950, nasdaq: 450.75 },
    { time: "14:00", spx: 509.90, dow: 30000, nasdaq: 452.90 },
    { time: "15:00", spx: 506.85, dow: 29900, nasdaq: 449.90 },
    { time: "16:00", spx: 506.85, dow: 29900, nasdaq: 449.90 }
  ];

  const topGainers = [
    { symbol: "AAPL", name: "Apple", price: "125", change: "6.36%" },
    { symbol: "JPM", name: "JPM Chase", price: "121", change: "21.75%" },
    { symbol: "UBER", name: "Uber", price: "80", change: "3.84%" },
    { symbol: "NVDA", name: "Nvidia", price: "435", change: "5.65%" },
    { symbol: "GOOGL", name: "Alphabet", price: "234", change: "6.45%" },
    { symbol: "MSFT", name: "Microsoft", price: "436", change: "9.54%" },
    { symbol: "TGT", name: "Target", price: "89", change: "11.85%" },
    { symbol: "NFLX", name: "Netflix", price: "123", change: "4.90%" },
    { symbol: "AMZN", name: "Amazon", price: "467", change: "5.98%" },
    { symbol: "META", name: "Meta Apps", price: "123", change: "18.94%" }
  ];

  const newsItems = [
    { title: "Retail Sales Slump Takes Toll on Mar...", time: "10 min ago" },
    { title: "Tech Giant's Earnings Soar, Stock Hits...", time: "2 min ago" },
    { title: "High-Profile IPO Falls Short of Expect...", time: "12 hrs ago" },
    { title: "Electric Vehicle Stocks Skyrocket as...", time: "22 hrs ago" },
    { title: "Market Sentiment Turns Bearish, Stock...", time: "2 hrs ago" },
    { title: "Chip Shortage Woes Continue, Tech...", time: "3 days ago" },
    { title: "Chip Shortage Woes Continue, Tech...", time: "3 days ago" },
    { title: "Chip Shortage Woes Continue, Tech...", time: "3 days ago" },
    { title: "Chip Shortage Woes Continue, Tech...", time: "3 days ago" },
    { title: "Chip Shortage Woes Continue, Tech...", time: "3 days ago" },
    { title: "Chip Shortage Woes Continue, Tech...", time: "3 days ago" }
  ];

  const chartConfig = {
    spx: { label: "S&P 500 ETF", color: "#8b5cf6" },
    dow: { label: "Dow Jones ETF", color: "#10b981" },
    nasdaq: { label: "NASDAQ", color: "#f59e0b" }
  };

  // Heat map sectors with proper color coding
  const heatMapSectors = {
    "Information technology": { color: "bg-emerald-500", size: "col-span-4 row-span-6", companies: ["NVDA", "AAPL", "ADBE", "INTC", "CSCO", "CRM"] },
    "Financials": { color: "bg-red-500", size: "col-span-2 row-span-3", companies: ["JPM", "BAC", "WFC", "GS"] },
    "Consumer staples": { color: "bg-emerald-400", size: "col-span-2 row-span-3", companies: ["PG", "KO", "WMT", "COST"] }
  };

  const worldMarkets = [
    { name: "S&P500", value: "-0.5%", color: "bg-emerald-500", position: "top-16 left-20" },
    { name: "FTSE", value: "-0.5%", color: "bg-emerald-500", position: "top-12 left-1/2" },
    { name: "DAX", value: "-0.6%", color: "bg-red-500", position: "top-20 left-1/2" },
    { name: "NASDAQ", value: "-0.5%", color: "bg-red-500", position: "top-24 left-16" },
    { name: "Dow Jones", value: "+0.56%", color: "bg-red-500", position: "top-28 left-20" },
    { name: "S&P500 ETF", value: "-0.36%", color: "bg-red-500", position: "top-32 left-24" },
    { name: "S&P500", value: "+0.1%", color: "bg-emerald-500", position: "top-40 right-20" },
    { name: "S&P500", value: "+0.1%", color: "bg-emerald-500", position: "bottom-20 right-16" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-6">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-blue-400">
            <TrendingUp className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
            <PieChart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
            <FileText className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
            <Users className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
            <Zap className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1"></div>
        
        <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
          <Settings className="w-5 h-5" />
        </Button>
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
                  <div className="text-sm font-medium">Pratik Patil</div>
                  <div className="text-xs text-gray-400">Account: 4453728992</div>
                </div>
              </div>
              
              <div className="flex items-center gap-8 ml-8">
                <div className="text-sm">
                  <div className="text-gray-400">Portfolio Balance</div>
                  <div className="text-xl font-bold">$623,098.17</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-400">Available Funds</div>
                  <div className="text-xl font-bold">$122,912.50</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search"
                  className="pl-10 w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-6 gap-6">
          {/* Indexes Section */}
          <div className="col-span-3 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Indexes</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-blue-400 text-sm">S&P 500 ETF</div>
                <div className="text-xl font-bold">509.90</div>
                <div className="text-red-400 text-sm">-3.05 -0.40%</div>
              </div>
              
              <div>
                <div className="text-green-400 text-sm">Dow Jones ETF</div>
                <div className="text-xl font-bold">30,000</div>
                <div className="text-green-400 text-sm">-3.05 +0.56%</div>
              </div>
              
              <div>
                <div className="text-yellow-400 text-sm">NASDAQ</div>
                <div className="text-xl font-bold">452.90</div>
                <div className="text-red-400 text-sm">-3.05 -0.96%</div>
              </div>
            </div>

            <div className="h-48">
              <ChartContainer config={chartConfig} className="h-full">
                <LineChart data={indexChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="spx" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="dow" stroke="#10b981" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="nasdaq" stroke="#f59e0b" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </div>
          </div>

          {/* Global Markets Section */}
          <div className="col-span-3 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Global Markets</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-80 bg-gray-700 rounded-lg relative overflow-hidden">
              {/* World Map SVG */}
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-30">
                <path d="M100 50 L200 50 L250 100 L200 150 L100 150 Z" fill="#4B5563" />
                <path d="M300 80 L400 80 L450 130 L400 180 L300 180 Z" fill="#4B5563" />
                <path d="M500 60 L600 60 L650 110 L600 160 L500 160 Z" fill="#4B5563" />
                <path d="M150 200 L250 200 L300 250 L250 300 L150 300 Z" fill="#4B5563" />
                <path d="M350 220 L450 220 L500 270 L450 320 L350 320 Z" fill="#4B5563" />
                <path d="M550 180 L650 180 L700 230 L650 280 L550 280 Z" fill="#4B5563" />
              </svg>
              
              {/* Market indicators */}
              {worldMarkets.map((market, index) => (
                <div 
                  key={index}
                  className={`absolute ${market.position} ${market.color} rounded-full px-3 py-1 text-xs font-medium`}
                >
                  <div className="text-center">
                    <div className="text-xs">{market.name}</div>
                    <div className="text-xs">{market.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heat Map Section */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Heat Map</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-4 mb-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">Industries</div>
                <select className="bg-gray-700 border-gray-600 text-white text-sm rounded px-3 py-1 w-full">
                  <option>Popular</option>
                </select>
              </div>
              
              <div className="text-sm text-gray-400 mb-2">Time frame</div>
              <div className="flex gap-2">
                {['D', 'W', 'M', 'Y'].map((timeframe) => (
                  <Button 
                    key={timeframe}
                    size="sm" 
                    variant={selectedTimeframe === timeframe ? "default" : "ghost"} 
                    className="text-xs px-3"
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>

            <div className="h-80 grid grid-cols-8 grid-rows-12 gap-1">
              {/* Information Technology - Large green section */}
              <div className="col-span-4 row-span-8 bg-emerald-500 rounded text-xs p-2 flex flex-col">
                <div className="font-medium mb-2">Information technology</div>
                <div className="grid grid-cols-2 gap-1 flex-1">
                  <div className="bg-emerald-600 rounded p-1 text-center text-xs">NVDA</div>
                  <div className="bg-emerald-400 rounded p-1 text-center text-xs">AAPL</div>
                  <div className="bg-emerald-500 rounded p-1 text-center text-xs">ADBE</div>
                  <div className="bg-emerald-600 rounded p-1 text-center text-xs">INTC</div>
                  <div className="bg-emerald-400 rounded p-1 text-center text-xs">CSCO</div>
                  <div className="bg-emerald-500 rounded p-1 text-center text-xs">CRM</div>
                </div>
              </div>
              
              {/* Financials - Red section */}
              <div className="col-span-4 row-span-4 bg-red-500 rounded text-xs p-2">
                <div className="font-medium mb-2">Financials</div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-red-600 rounded p-1 text-center text-xs">JPM</div>
                  <div className="bg-red-400 rounded p-1 text-center text-xs">BAC</div>
                  <div className="bg-red-500 rounded p-1 text-center text-xs">WFC</div>
                  <div className="bg-red-600 rounded p-1 text-center text-xs">GS</div>
                </div>
              </div>
              
              {/* Consumer Staples - Green section */}
              <div className="col-span-4 row-span-4 bg-emerald-400 rounded text-xs p-2">
                <div className="font-medium mb-2">Consumer staples</div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-emerald-500 rounded p-1 text-center text-xs">PG</div>
                  <div className="bg-emerald-300 rounded p-1 text-center text-xs">KO</div>
                  <div className="bg-emerald-400 rounded p-1 text-center text-xs">WMT</div>
                  <div className="bg-emerald-500 rounded p-1 text-center text-xs">COST</div>
                </div>
              </div>
              
              {/* Additional sectors */}
              <div className="col-span-4 row-span-4 bg-red-400 rounded text-xs p-2 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-medium">Healthcare</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top News Section */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Top News</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {newsItems.map((news, index) => (
                <div key={index} className="flex justify-between items-start gap-3">
                  <div className="text-sm text-gray-300 flex-1 cursor-pointer hover:text-white">
                    {news.title}
                  </div>
                  <div className="text-xs text-gray-500 whitespace-nowrap">
                    {news.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Gainers Section */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Top Gainers</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-400 text-xs">Symbol</TableHead>
                  <TableHead className="text-gray-400 text-xs">Name</TableHead>
                  <TableHead className="text-gray-400 text-xs">Price</TableHead>
                  <TableHead className="text-gray-400 text-xs">% Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topGainers.map((stock, index) => (
                  <TableRow key={index} className="border-gray-700 hover:bg-gray-700">
                    <TableCell className="text-white font-medium text-sm">{stock.symbol}</TableCell>
                    <TableCell className="text-gray-300 text-sm">{stock.name}</TableCell>
                    <TableCell className="text-white text-sm">{stock.price}</TableCell>
                    <TableCell className="text-green-400 text-sm">{stock.change}</TableCell>
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

export default FinanceDashboard;
