
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Settings, MoreHorizontal, Bell } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { UserProfile } from "@/components/UserProfile";

const FinanceDashboard = () => {
  const { user } = useUser();
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");

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

  // Mock heat map data (simplified representation)
  const heatMapSectors = [
    { name: "Information technology", color: "bg-green-500", size: "large" },
    { name: "Financials", color: "bg-red-500", size: "medium" },
    { name: "Consumer staples", color: "bg-green-400", size: "small" },
    { name: "NVDA", color: "bg-green-600", size: "small" },
    { name: "AAPL", color: "bg-green-500", size: "small" },
    { name: "MSFT", color: "bg-red-400", size: "small" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-6">
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
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search"
                className="pl-10 w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <Bell className="w-5 h-5 text-gray-400" />
            {user && <UserProfile />}
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Indexes Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Indexes</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-blue-400">S&P 500 ETF</div>
                <div className="text-xl font-bold">509.90</div>
                <div className="text-red-400 text-sm">-3.05 -0.40%</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <div className="text-green-400">Dow Jones ETF</div>
                <div className="text-xl font-bold">30,000</div>
                <div className="text-green-400 text-sm">-3.05 +0.56%</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <div className="text-blue-400">NASDAQ</div>
                <div className="text-xl font-bold">452.90</div>
                <div className="text-red-400 text-sm">-3.05 -0.96%</div>
              </div>
            </div>
          </div>

          <div className="h-40">
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
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Global Markets</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="text-gray-400 text-center">
              <div className="text-sm mb-2">World Map Visualization</div>
              <div className="text-xs">Market indicators by region</div>
            </div>
            {/* Simulated market indicators */}
            <div className="absolute top-4 left-4 bg-green-500 rounded-full px-2 py-1 text-xs">
              FTSE +0.5%
            </div>
            <div className="absolute top-4 right-4 bg-red-500 rounded-full px-2 py-1 text-xs">
              NIKKEI -0.8%
            </div>
            <div className="absolute bottom-4 left-4 bg-green-400 rounded-full px-2 py-1 text-xs">
              DAX +1.2%
            </div>
          </div>
        </div>

        {/* Heat Map Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Heat Map</h2>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="text-xs text-gray-400">D</Button>
              <Button size="sm" variant="ghost" className="text-xs text-gray-400">W</Button>
              <Button size="sm" variant="ghost" className="text-xs text-gray-400">M</Button>
              <Button size="sm" variant="ghost" className="text-xs text-gray-400">Y</Button>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="text-sm text-gray-400">Industries</div>
            <select className="bg-gray-700 border-gray-600 text-white text-sm rounded px-3 py-1">
              <option>Popular</option>
            </select>
          </div>

          <div className="h-48 grid grid-cols-4 gap-1">
            {heatMapSectors.map((sector, index) => (
              <div 
                key={index}
                className={`${sector.color} rounded text-xs p-2 flex items-center justify-center text-white font-medium ${
                  sector.size === 'large' ? 'col-span-2 row-span-2' : 
                  sector.size === 'medium' ? 'col-span-2' : ''
                }`}
              >
                {sector.name}
              </div>
            ))}
          </div>
        </div>

        {/* Top News Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Top News</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto">
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
        <div className="bg-gray-800 rounded-lg p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Top Gainers</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-400">Symbol</TableHead>
                <TableHead className="text-gray-400">Name</TableHead>
                <TableHead className="text-gray-400">Price</TableHead>
                <TableHead className="text-gray-400">% Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topGainers.map((stock, index) => (
                <TableRow key={index} className="border-gray-700 hover:bg-gray-700">
                  <TableCell className="text-white font-medium">{stock.symbol}</TableCell>
                  <TableCell className="text-gray-300">{stock.name}</TableCell>
                  <TableCell className="text-white">{stock.price}</TableCell>
                  <TableCell className="text-green-400">{stock.change}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
