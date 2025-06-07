
import { useState, useEffect } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Settings, MoreHorizontal } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { UserProfile } from "@/components/UserProfile";

const FinanceDashboard = () => {
  const { user } = useUser();
  const [selectedTimeframe, setSelectedTimeframe] = useState("D");

  // Mock financial data
  const indexData = [
    { name: "S&P 500 ETF", symbol: "SPY", price: 509.90, change: -3.05, changePercent: -0.40 },
    { name: "Dow Jones ETF", symbol: "DIA", price: 30.000, change: -3.05, changePercent: 0.56 },
    { name: "NASDAQ", symbol: "QQQ", price: 452.90, change: -3.05, changePercent: -0.96 }
  ];

  const chartData = [
    { time: "09:30", spy: 512, dia: 30.1, qqq: 455 },
    { time: "10:00", spy: 511, dia: 30.05, qqq: 454 },
    { time: "11:00", spy: 510.5, dia: 30.02, qqq: 453.5 },
    { time: "12:00", spy: 510, dia: 30.0, qqq: 453 },
    { time: "13:00", spy: 509.5, dia: 29.98, qqq: 452.5 },
    { time: "14:00", spy: 510.2, dia: 30.01, qqq: 453.2 },
    { time: "15:00", spy: 509.8, dia: 29.99, qqq: 452.8 },
    { time: "16:00", spy: 509.90, dia: 30.000, qqq: 452.90 }
  ];

  const globalMarkets = [
    { region: "NIKKEI", value: "-0.90%", status: "red" },
    { region: "Dow", value: "+0.56%", status: "green" },
    { region: "S&P 500", value: "-0.40%", status: "red" },
    { region: "FTSE", value: "-0.32%", status: "red" },
    { region: "DAX", value: "+0.24%", status: "green" },
    { region: "CAC", value: "-0.18%", status: "red" }
  ];

  const heatMapData = [
    // Technology sector
    { symbol: "AAPL", sector: "Technology", change: 2.34, size: "large" },
    { symbol: "MSFT", sector: "Technology", change: 1.89, size: "large" },
    { symbol: "GOOGL", sector: "Technology", change: -0.45, size: "medium" },
    { symbol: "META", sector: "Technology", change: 3.12, size: "medium" },
    { symbol: "NVDA", sector: "Technology", change: 4.67, size: "small" },
    { symbol: "TSLA", sector: "Technology", change: -2.31, size: "medium" },
    // Financial sector
    { symbol: "JPM", sector: "Financial", change: 1.23, size: "large" },
    { symbol: "BAC", sector: "Financial", change: 0.89, size: "medium" },
    { symbol: "WFC", sector: "Financial", change: -0.67, size: "medium" },
    { symbol: "GS", sector: "Financial", change: 2.15, size: "small" },
    // Healthcare
    { symbol: "JNJ", sector: "Healthcare", change: 0.45, size: "large" },
    { symbol: "PFE", sector: "Healthcare", change: -1.23, size: "medium" },
    { symbol: "UNH", sector: "Healthcare", change: 1.67, size: "medium" },
    // Consumer
    { symbol: "AMZN", sector: "Consumer", change: 2.89, size: "large" },
    { symbol: "WMT", sector: "Consumer", change: 0.34, size: "medium" },
    { symbol: "HD", sector: "Consumer", change: -0.78, size: "medium" }
  ];

  const topNews = [
    { title: "Retail Sales Slump Takes Toll on Markets", time: "10 min ago" },
    { title: "Tech Giant's Earnings Soar, Stock Hits Record High", time: "2 min ago" },
    { title: "High-Profile IPO Falls Short of Expectations", time: "12 hrs ago" },
    { title: "Electric Vehicle Stocks Skyrocket as New Policy Announced", time: "22 hrs ago" },
    { title: "Market Sentiment Turns Bearish, Stocks Decline", time: "2 hrs ago" },
    { title: "Chip Shortage Woes Continue, Tech Stocks Mixed", time: "3 days ago" }
  ];

  const topGainers = [
    { symbol: "AAPL", name: "Apple", price: 125, change: 6.36 },
    { symbol: "JPM", name: "JPM Chase", price: 121, change: 21.75 },
    { symbol: "UBER", name: "Uber", price: 80, change: 3.84 },
    { symbol: "NVDA", name: "Nvidia", price: 435, change: 5.85 },
    { symbol: "GOOGL", name: "Alphabet", price: 234, change: 6.45 },
    { symbol: "MSFT", name: "Microsoft", price: 438, change: 9.54 },
    { symbol: "TGT", name: "Target", price: 89, change: 11.85 },
    { symbol: "NFLX", name: "Netflix", price: 123, change: 4.90 }
  ];

  const chartConfig = {
    spy: { label: "S&P 500", color: "#8b5cf6" },
    dia: { label: "Dow Jones", color: "#06b6d4" },
    qqq: { label: "NASDAQ", color: "#f59e0b" }
  };

  const getHeatMapColor = (change: number) => {
    if (change > 2) return "bg-green-600";
    if (change > 0) return "bg-green-400";
    if (change > -2) return "bg-red-400";
    return "bg-red-600";
  };

  const getHeatMapSize = (size: string) => {
    switch (size) {
      case "large": return "w-16 h-16";
      case "medium": return "w-12 h-12";
      case "small": return "w-8 h-8";
      default: return "w-12 h-12";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <span className="font-semibold">Finance Dashboard</span>
          </div>
          {user && (
            <div className="text-sm">
              <div className="text-gray-400">Portfolio Balance</div>
              <div className="font-bold">$623,098.17</div>
            </div>
          )}
          {user && (
            <div className="text-sm">
              <div className="text-gray-400">Available Funds</div>
              <div className="font-bold">$122,912.50</div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search stocks, ETFs..."
              className="w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          {user && <UserProfile />}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Indexes Section */}
        <div className="col-span-7 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Indexes</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {indexData.map((index) => (
              <div key={index.symbol} className="text-center">
                <div className="text-sm text-gray-400">{index.symbol}</div>
                <div className="text-xl font-bold">{index.price}</div>
                <div className={`text-sm ${index.changePercent < 0 ? 'text-red-400' : 'text-green-400'}`}>
                  {index.change > 0 ? '+' : ''}{index.change} {index.changePercent > 0 ? '+' : ''}{index.changePercent}%
                </div>
              </div>
            ))}
          </div>

          <div className="h-64 mb-4">
            <ChartContainer config={chartConfig} className="h-full">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="spy" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="dia" stroke="#06b6d4" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="qqq" stroke="#f59e0b" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </div>

          <div className="flex gap-2">
            {["1m", "5m", "15m", "30m", "1h", "D", "W", "M"].map((timeframe) => (
              <Button
                key={timeframe}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`text-xs ${selectedTimeframe === timeframe ? "text-cyan-400" : "text-gray-400"}`}
              >
                {timeframe}
              </Button>
            ))}
          </div>
        </div>

        {/* Global Markets */}
        <div className="col-span-5 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Global Markets</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="h-64 bg-gray-700 rounded-lg p-4 relative overflow-hidden">
            {/* World Map Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-500 text-sm">World Map Visualization</div>
            </div>
            
            {/* Market indicators positioned around the map */}
            <div className="relative h-full">
              {globalMarkets.map((market, index) => (
                <div
                  key={market.region}
                  className={`absolute rounded-full px-3 py-1 text-xs font-medium ${
                    market.status === 'green' ? 'bg-green-600' : 'bg-red-600'
                  }`}
                  style={{
                    top: `${20 + (index * 15)}%`,
                    left: `${10 + (index * 12)}%`
                  }}
                >
                  <div>{market.region}</div>
                  <div>{market.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heat Map */}
        <div className="col-span-4 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Heat Map</h2>
            <div className="flex gap-2">
              <select className="bg-gray-700 border-gray-600 rounded px-2 py-1 text-xs">
                <option>Popular</option>
                <option>Technology</option>
                <option>Financial</option>
              </select>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-1 h-64">
            {heatMapData.map((item) => (
              <div
                key={item.symbol}
                className={`${getHeatMapColor(item.change)} ${getHeatMapSize(item.size)} rounded flex flex-col items-center justify-center text-xs font-semibold`}
              >
                <div>{item.symbol}</div>
                <div>{item.change > 0 ? '+' : ''}{item.change}%</div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span>Industries</span>
              <span>Time frame</span>
            </div>
          </div>
        </div>

        {/* Top News */}
        <div className="col-span-4 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Top News</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-3">
            {topNews.map((news, index) => (
              <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                <div className="text-sm font-medium mb-1 hover:text-cyan-400 cursor-pointer">
                  {news.title}
                </div>
                <div className="text-xs text-gray-400">{news.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Gainers */}
        <div className="col-span-4 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Top Gainers</h2>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-400">Symbol</TableHead>
                <TableHead className="text-gray-400">Name</TableHead>
                <TableHead className="text-gray-400">Price</TableHead>
                <TableHead className="text-gray-400">% Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topGainers.map((stock) => (
                <TableRow key={stock.symbol}>
                  <TableCell className="font-medium">{stock.symbol}</TableCell>
                  <TableCell className="text-gray-300">{stock.name}</TableCell>
                  <TableCell className="text-green-400">{stock.price}</TableCell>
                  <TableCell className="text-green-400">+{stock.change}%</TableCell>
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
