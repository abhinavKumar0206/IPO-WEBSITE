
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, CandlestickChart } from "recharts";
import { Search, Bell, Settings, Globe, BarChart3, BookOpen, TrendingUp } from "lucide-react";

const TradingDashboard = () => {
  const [stopPrice, setStopPrice] = useState("400.00");
  const [quantity, setQuantity] = useState("100");
  
  // Mock stock data for MSFT
  const stockData = [
    { time: "Jan", price: 380, volume: 2400000, rsi: 65 },
    { time: "Feb", price: 390, volume: 1800000, rsi: 68 },
    { time: "Mar", price: 385, volume: 2100000, rsi: 62 },
    { time: "May", price: 395, volume: 2800000, rsi: 72 },
    { time: "Jun", price: 400, volume: 2200000, rsi: 70 },
    { time: "Jul", price: 405, volume: 1900000, rsi: 75 },
    { time: "Sep", price: 408, volume: 2600000, rsi: 68 },
    { time: "Oct", price: 406, volume: 2300000, rsi: 71 },
    { time: "Nov", price: 406.32, volume: 2500000, rsi: 69 },
  ];

  const timeAndSales = [
    { time: "16:59:32", price: 420.56, size: 25 },
    { time: "16:59:32", price: 420.56, size: 25 },
    { time: "16:59:32", price: 420.56, size: 25 },
    { time: "16:59:32", price: 420.56, size: 25 },
    { time: "16:59:32", price: 420.56, size: 25 },
  ];

  const chartConfig = {
    price: {
      label: "Price",
      color: "#00ff88",
    },
    volume: {
      label: "Volume",
      color: "#0088ff",
    },
    rsi: {
      label: "RSI",
      color: "#ff8800",
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">P</span>
          </div>
          <div className="text-sm">
            <div className="font-medium">Pratik Patil</div>
            <div className="text-gray-400">Account: 44337289992</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm">
            <div className="text-gray-400">Portfolio Balance</div>
            <div className="font-bold">$623,098.17</div>
          </div>
          <div className="text-sm">
            <div className="text-gray-400">Available Funds</div>
            <div className="font-bold">$122,912.50</div>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search"
              className="w-48 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <Bell className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="flex items-center gap-6 px-4 py-2 bg-gray-800 border-b border-gray-700">
        <Button variant="ghost" className="text-cyan-400 bg-gray-700">Chart</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">Options</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">News</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">Financials</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">Analysts</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">Risk Analysis</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">Releases</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">Notes</Button>
        <Button variant="ghost" className="text-gray-300 hover:text-white">Profile</Button>
        <Button className="bg-cyan-500 text-black hover:bg-cyan-400 ml-auto">Trade</Button>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-16 bg-gray-800 flex flex-col items-center py-4 gap-6">
          <TrendingUp className="w-6 h-6 text-gray-400" />
          <Globe className="w-6 h-6 text-gray-400" />
          <BarChart3 className="w-6 h-6 text-gray-400" />
          <BookOpen className="w-6 h-6 text-gray-400" />
          <Settings className="w-6 h-6 text-gray-400" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Chart Section */}
          <div className="flex-1 p-4">
            {/* Stock Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">MSFT</h1>
                <span className="text-gray-400">Microsoft Corp NASDAQ</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stock Price Info */}
            <div className="grid grid-cols-7 gap-4 mb-6 text-sm">
              <div>
                <div className="text-gray-400">Open</div>
                <div>400.23</div>
              </div>
              <div>
                <div className="text-gray-400">Low</div>
                <div>400.10</div>
              </div>
              <div>
                <div className="text-gray-400">High</div>
                <div>408.36</div>
              </div>
              <div>
                <div className="text-gray-400">52 wk high</div>
                <div>430.60</div>
              </div>
              <div>
                <div className="text-gray-400">52 wk low</div>
                <div>273.13</div>
              </div>
              <div>
                <div className="text-gray-400">Avg Vol (3M)</div>
                <div>21.73M</div>
              </div>
              <div>
                <div className="text-gray-400">Shares Outstanding</div>
                <div>7.43B</div>
              </div>
            </div>

            {/* Current Price */}
            <div className="mb-6">
              <div className="text-4xl font-bold text-green-400">406.32</div>
              <div className="text-green-400">+0.26%</div>
              <div className="text-gray-400 text-sm">After hours: 406.83 +0.27 +0.07% | 19:59 04/28 EDT</div>
            </div>

            {/* Chart Controls */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm">Open 406.36 High 408.36 Low 406.36 Close 406.36 +6.50 +2.14% Vol 56,254,761</span>
            </div>

            {/* Main Chart */}
            <div className="h-96 mb-6">
              <ChartContainer config={chartConfig} className="h-full">
                <LineChart data={stockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#00ff88" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>

            {/* Volume Chart */}
            <div className="h-32 mb-6">
              <ChartContainer config={chartConfig} className="h-full">
                <BarChart data={stockData}>
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Bar dataKey="volume" fill="#0088ff" />
                </BarChart>
              </ChartContainer>
            </div>

            {/* RSI Chart */}
            <div className="h-32">
              <ChartContainer config={chartConfig} className="h-full">
                <LineChart data={stockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="rsi" 
                    stroke="#ff8800" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>

            {/* Time Frame Controls */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm text-gray-400">Time frame:</span>
              <div className="flex gap-2">
                {["1m", "5m", "15m", "30m", "1h", "2h", "4h", "D", "W", "M", "All", "2m"].map((timeframe) => (
                  <Button 
                    key={timeframe}
                    variant="ghost" 
                    size="sm"
                    className={`text-xs ${timeframe === "1h" ? "text-cyan-400" : "text-gray-400"}`}
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Trading Panel */}
          <div className="w-80 bg-gray-800 p-4 border-l border-gray-700">
            {/* Buy/Sell Buttons */}
            <div className="flex gap-2 mb-6">
              <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">Buy</Button>
              <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">Sell</Button>
            </div>

            {/* Order Form */}
            <div className="space-y-4 mb-6">
              <div>
                <Label className="text-gray-300">Order Type</Label>
                <select className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white">
                  <option>Market Price</option>
                  <option>Limit</option>
                  <option>Stop</option>
                </select>
              </div>

              <div>
                <Label className="text-gray-300">Quantity (Shares)</Label>
                <Input 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mt-1 bg-gray-700 border-gray-600 text-white"
                />
                <div className="flex gap-2 mt-2">
                  {["10", "50", "100", "500"].map((qty) => (
                    <Button 
                      key={qty}
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(qty)}
                      className="text-xs border-gray-600 text-gray-300"
                    >
                      {qty}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-gray-300">Time-in-Force</Label>
                <select className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white">
                  <option>Day</option>
                  <option>GTC</option>
                  <option>IOC</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Switch />
                <Label className="text-gray-300">Stop Price</Label>
              </div>

              <div>
                <Input 
                  value={stopPrice}
                  onChange={(e) => setStopPrice(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="400.00"
                />
              </div>

              <div className="text-sm text-gray-400">
                <div>Est. Loss: <span className="text-red-400">12,097.36</span></div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Buying Power</span>
                  <span>$122,912.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Transaction Fees</span>
                  <span>$4.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Total</span>
                  <span>$40,000</span>
                </div>
              </div>

              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                Buy MSFT
              </Button>

              <Button variant="ghost" className="w-full text-gray-300">
                Disclaimer →
              </Button>
            </div>

            {/* Time & Sales */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Time & Sales</h3>
                <Settings className="w-4 h-4 text-gray-400" />
              </div>
              
              <div className="space-y-2">
                {timeAndSales.map((trade, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-400">{trade.time}</span>
                    <span>{trade.price}</span>
                    <span className="text-gray-400">{trade.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;
