
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Settings, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { UserProfile } from "@/components/UserProfile";

const FinanceDashboard = () => {
  const { user } = useUser();
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");

  // Mock data for indexes
  const indexData = [
    { name: "S&P 500", symbol: "SPX", price: "5,431.60", change: "+12.44", changePercent: "+0.23%" },
    { name: "Dow Jones", symbol: "DJI", price: "42,175.11", change: "+139.53", changePercent: "+0.33%" },
    { name: "NASDAQ", symbol: "IXIC", price: "16,794.87", change: "-23.26", changePercent: "-0.14%" },
    { name: "Russell 2000", symbol: "RUT", price: "2,245.52", change: "+8.91", changePercent: "+0.40%" }
  ];

  const chartData = [
    { time: "09:30", spx: 5420, dji: 42100, ixic: 16820 },
    { time: "10:00", spx: 5425, dji: 42120, ixic: 16810 },
    { time: "11:00", spx: 5428, dji: 42140, ixic: 16800 },
    { time: "12:00", spx: 5430, dji: 42160, ixic: 16795 },
    { time: "13:00", spx: 5429, dji: 42170, ixic: 16798 },
    { time: "14:00", spx: 5431, dji: 42175, ixic: 16794 }
  ];

  const topGainers = [
    { symbol: "NVDA", name: "NVIDIA Corp", price: "$142.38", change: "+5.82%", changeValue: "+7.83" },
    { symbol: "TSLA", name: "Tesla Inc", price: "$248.98", change: "+4.73%", changeValue: "+11.26" },
    { symbol: "META", name: "Meta Platforms", price: "$563.33", change: "+3.21%", changeValue: "+17.52" },
    { symbol: "GOOGL", name: "Alphabet Inc", price: "$175.48", change: "+2.94%", changeValue: "+5.02" },
    { symbol: "MSFT", name: "Microsoft Corp", price: "$416.42", change: "+1.87%", changeValue: "+7.65" }
  ];

  const topLosers = [
    { symbol: "AMZN", name: "Amazon.com Inc", price: "$188.44", change: "-2.31%", changeValue: "-4.46" },
    { symbol: "AAPL", name: "Apple Inc", price: "$224.37", change: "-1.89%", changeValue: "-4.32" },
    { symbol: "NFLX", name: "Netflix Inc", price: "$701.35", change: "-1.76%", changeValue: "-12.55" },
    { symbol: "AMD", name: "Advanced Micro", price: "$144.26", change: "-1.42%", changeValue: "-2.08" },
    { symbol: "CRM", name: "Salesforce Inc", price: "$325.90", change: "-1.15%", changeValue: "-3.79" }
  ];

  const marketIndices = [
    { name: "VIX", value: "15.24", change: "-0.89", isNegative: true },
    { name: "DXY", value: "106.42", change: "+0.15", isNegative: false },
    { name: "TNX", value: "4.285%", change: "+0.023", isNegative: false },
    { name: "GC=F", value: "$2,653.20", change: "-8.40", isNegative: true }
  ];

  const newsItems = [
    {
      title: "Fed Officials Signal Possible Rate Cuts Ahead",
      time: "2 hours ago",
      source: "Reuters"
    },
    {
      title: "Tech Stocks Rally on Strong Earnings Reports",
      time: "4 hours ago", 
      source: "Bloomberg"
    },
    {
      title: "Oil Prices Rise Amid Middle East Tensions",
      time: "6 hours ago",
      source: "CNBC"
    },
    {
      title: "Dollar Strengthens Against Major Currencies",
      time: "8 hours ago",
      source: "Financial Times"
    }
  ];

  const chartConfig = {
    spx: { label: "S&P 500", color: "#3b82f6" },
    dji: { label: "Dow Jones", color: "#10b981" },
    ixic: { label: "NASDAQ", color: "#f59e0b" }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold">Finance Dashboard</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search stocks, ETFs, indices..."
                className="pl-10 w-80"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {user && <UserProfile />}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Market Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {indexData.map((index) => (
            <div key={index.symbol} className="bg-card rounded-lg p-4 border">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">{index.symbol}</div>
                <div className={`flex items-center text-sm ${index.changePercent.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {index.changePercent.includes('+') ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  {index.changePercent}
                </div>
              </div>
              <div className="text-lg font-semibold">{index.name}</div>
              <div className="text-2xl font-bold">{index.price}</div>
              <div className={`text-sm ${index.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                {index.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="xl:col-span-2 bg-card rounded-lg border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Market Overview</h2>
              <div className="flex gap-2">
                {["1D", "5D", "1M", "3M", "6M", "1Y", "5Y"].map((timeframe) => (
                  <Button
                    key={timeframe}
                    variant={selectedTimeframe === timeframe ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className="text-xs"
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>

            <div className="h-80 mb-4">
              <ChartContainer config={chartConfig} className="h-full">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="spx" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="dji" stroke="#10b981" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="ixic" stroke="#f59e0b" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {marketIndices.map((index) => (
                <div key={index.name} className="text-center">
                  <div className="text-sm text-muted-foreground">{index.name}</div>
                  <div className="font-semibold">{index.value}</div>
                  <div className={`text-sm ${index.isNegative ? 'text-red-600' : 'text-green-600'}`}>
                    {index.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News Section */}
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Market News</h2>
              <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {newsItems.map((news, index) => (
                <div key={index} className="border-b border-border pb-3 last:border-b-0">
                  <h3 className="font-medium text-sm mb-2 hover:text-primary cursor-pointer">
                    {news.title}
                  </h3>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{news.source}</span>
                    <span>{news.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Gainers and Losers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Tabs defaultValue="gainers" className="bg-card rounded-lg border">
            <div className="p-6 pb-0">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
                <TabsTrigger value="losers">Top Losers</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="gainers" className="p-6 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>% Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topGainers.map((stock) => (
                    <TableRow key={stock.symbol}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-xs text-muted-foreground">{stock.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{stock.price}</TableCell>
                      <TableCell className="text-green-600">{stock.changeValue}</TableCell>
                      <TableCell className="text-green-600">{stock.change}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="losers" className="p-6 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>% Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topLosers.map((stock) => (
                    <TableRow key={stock.symbol}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-xs text-muted-foreground">{stock.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{stock.price}</TableCell>
                      <TableCell className="text-red-600">{stock.changeValue}</TableCell>
                      <TableCell className="text-red-600">{stock.change}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>

          {/* Additional Market Data */}
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Market Sectors</h2>
            <div className="space-y-3">
              {[
                { name: "Technology", change: "+1.23%", isPositive: true },
                { name: "Healthcare", change: "+0.87%", isPositive: true },
                { name: "Financial", change: "+0.45%", isPositive: true },
                { name: "Energy", change: "-0.32%", isPositive: false },
                { name: "Consumer Disc.", change: "-0.18%", isPositive: false },
                { name: "Real Estate", change: "-0.76%", isPositive: false }
              ].map((sector, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{sector.name}</span>
                  <span className={`text-sm ${sector.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {sector.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
