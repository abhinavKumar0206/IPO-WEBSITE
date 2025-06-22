import { Header } from "@/components/Header";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Header } from "@radix-ui/react-accordion";
import { AlertCircle, Building, DollarSign, Star, ThumbsDown, ThumbsUp, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const activeClientsData = [
  { year: "2016-17", angelOne: 27, zerodha: 0 },
  { year: "2017-18", angelOne: 35, zerodha: 100 },
  { year: "2018-19", angelOne: 40, zerodha: 350 },
  { year: "2019-20", angelOne: 45, zerodha: 420 },
  { year: "2020-21", angelOne: 52, zerodha: 650 },
  { year: "2021-22", angelOne: 65, zerodha: 750 },
  { year: "2022-23", angelOne: 75, zerodha: 800 },
  { year: "2023-24", angelOne: 81, zerodha: 810 }
];

const complaintsData = [
  { year: "2016-17", angelOne: 220, zerodha: 50 },
  { year: "2017-18", angelOne: 320, zerodha: 120 },
  { year: "2018-19", angelOne: 350, zerodha: 350 },
  { year: "2019-20", angelOne: 330, zerodha: 320 },
  { year: "2020-21", angelOne: 280, zerodha: 450 },
  { year: "2021-22", angelOne: 1450, zerodha: 920 },
  { year: "2022-23", angelOne: 520, zerodha: 580 },
  { year: "2023-24", angelOne: 350, zerodha: 380 }
];

const shareHoldingData = [
  { category: "Retail Individual", angelOne: 42, zerodha: 29 },
  { category: "HNI", angelOne: 8.5, zerodha: 7.2 },
  { category: "Institutional", angelOne: 5.8, zerodha: 0.8 }
];

const financialData = [
  { year: "2019-20", angelOneRevenue: 1200, zerodhaRevenue: 650, angelOneProfit: 450, zerodhaProfit: 350 },
  { year: "2020-21", angelOneRevenue: 2100, zerodhaRevenue: 2650, angelOneProfit: 750, zerodhaProfit: 400 },
  { year: "2021-22", angelOneRevenue: 2850, zerodhaRevenue: 4550, angelOneProfit: 1100, zerodhaProfit: 2100 },
  { year: "2022-23", angelOneRevenue: 2150, zerodhaRevenue: 2100, angelOneProfit: 650, zerodhaProfit: 800 }
];

const brokerageCharges = [
  { type: "Auto Square Off", angelOne: 23.6, zerodha: 59 },
  { type: "Call & Trade", angelOne: 20, zerodha: 50 },
  { type: "DP Charges", angelOne: 15.34, zerodha: 15.93 }
];

const BrokerComparison = () => {
  const [selectedBroker, setSelectedBroker] = useState<"angelOne" | "zerodha">("angelOne");

  return (
    <div className="min-h-screen bg-gray-50">
    <Header/>  
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Broker Comparison</h1>
            <p className="text-gray-600 mt-2">Compare brokers across different parameters</p>
          </div>
        </div>
      </div>

      {/* Broker Selection Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Angel One Card */}
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Angel One</h3>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 fill-yellow-200 text-yellow-200" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.7</div>
                  <Badge className="bg-orange-100 text-orange-800">VS</Badge>
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600">
                Open Demat Account
              </Button>
            </CardContent>
          </Card>

          {/* Zerodha Card */}
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    Z
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Zerodha</h3>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 fill-yellow-200 text-yellow-200" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.6</div>
                </div>
              </div>
              <Button className="w-full bg-teal-500 hover:bg-teal-600">
                Open Demat Account
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="clients" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Active Clients</span>
            </TabsTrigger>
            <TabsTrigger value="charges" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>Charges</span>
            </TabsTrigger>
            <TabsTrigger value="complaints" className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>Complaints</span>
            </TabsTrigger>
            <TabsTrigger value="holding" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span>Share Holding</span>
            </TabsTrigger>
            <TabsTrigger value="proscons" className="flex items-center space-x-2">
              <ThumbsUp className="w-4 h-4" />
              <span>Pros & Cons</span>
            </TabsTrigger>
            <TabsTrigger value="ratings" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Ratings</span>
            </TabsTrigger>
            <TabsTrigger value="financials" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Financials</span>
            </TabsTrigger>
          </TabsList>

          {/* Active Clients Tab */}
          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>Active Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={activeClientsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="angelOne" 
                      stroke="#f97316" 
                      strokeWidth={3}
                      name="Angel One"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="zerodha" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      name="Zerodha"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Charges Tab */}
          <TabsContent value="charges">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Opening and Maintenance Charges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-gray-300 p-3 text-left">Charges</th>
                          <th className="border border-gray-300 p-3 text-center">Angel One</th>
                          <th className="border border-gray-300 p-3 text-center">Zerodha</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Account Opening Charges</td>
                          <td className="border border-gray-300 p-3 text-center">0</td>
                          <td className="border border-gray-300 p-3 text-center">200</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Account Maintenance Charges</td>
                          <td className="border border-gray-300 p-3 text-center">₹0 for the first year then ₹ 23.6/Month</td>
                          <td className="border border-gray-300 p-3 text-center">₹ 300 per year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Brokerage Charges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-gray-300 p-3 text-left">Brokerage Charges</th>
                          <th className="border border-gray-300 p-3 text-center">Angel One</th>
                          <th className="border border-gray-300 p-3 text-center">Zerodha</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Intraday</td>
                          <td className="border border-gray-300 p-3 text-center">₹ 20 or 0.25% (Whichever is lower)</td>
                          <td className="border border-gray-300 p-3 text-center">₹ 20 or 0.03% / executed order whichever is lower</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Futures</td>
                          <td className="border border-gray-300 p-3 text-center">₹ 20 or 0.25% (Whichever is lower)</td>
                          <td className="border border-gray-300 p-3 text-center">₹ 20 or 0.03% / executed order whichever is lower</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Options</td>
                          <td className="border border-gray-300 p-3 text-center">₹ 20 or 0.25% (Whichever is lower)</td>
                          <td className="border border-gray-300 p-3 text-center">₹ 20 per executed order (on Turnover)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Delivery</td>
                          <td className="border border-gray-300 p-3 text-center">Zero</td>
                          <td className="border border-gray-300 p-3 text-center">Zero</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Brokerage Charges Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {brokerageCharges.map((charge, index) => (
                      <div key={index} className="text-center">
                        <h4 className="font-semibold mb-4">{charge.type}</h4>
                        <div className="flex justify-center space-x-4">
                          <div className="bg-gradient-to-b from-teal-300 to-teal-500 p-6 rounded-lg text-white">
                            <div className="text-2xl font-bold">{charge.angelOne}</div>
                          </div>
                          <div className="bg-gradient-to-b from-blue-300 to-blue-500 p-6 rounded-lg text-white">
                            <div className="text-2xl font-bold">{charge.zerodha}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Complaints Tab */}
          <TabsContent value="complaints">
            <Card>
              <CardHeader>
                <CardTitle>Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={complaintsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="angelOne" 
                      stroke="#f97316" 
                      strokeWidth={3}
                      name="Angel One"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="zerodha" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      name="Zerodha"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Share Holding Tab */}
          <TabsContent value="holding">
            <Card>
              <CardHeader>
                <CardTitle>Share Holding</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={shareHoldingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="angelOne" fill="#f97316" name="Angel One" />
                    <Bar dataKey="zerodha" fill="#3b82f6" name="Zerodha" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pros & Cons Tab */}
          <TabsContent value="proscons">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded flex items-center justify-center text-white text-sm font-bold">A</div>
                    <span>Angel One</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <ThumbsUp className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="font-semibold text-blue-800">Pros</h4>
                      </div>
                      <div className="mt-2 space-y-2 text-sm">
                        <p>• Angel One charges zero account opening charges as well as zero annual maintenance charges for only the first year</p>
                        <p>• Zero brokerage charges for equity delivery and remaining segments like intraday and F&O which is flat Rs. 20 per trade.</p>
                        <p>• Zerodha is a self-clearing broker. They don't charge clearing charges from customers</p>
                        <p>• Set long-standing stop loss and target orders for your stock investments.</p>
                        <p>• An all-new mobile app built for both passive investors and active day traders, with significant speed and user experience enhancements.</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <ThumbsDown className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="font-semibold text-red-800">Cons</h4>
                      </div>
                      <div className="mt-2 space-y-2 text-sm">
                        <p>• Call and trade fee is charged at an extra Rs 20 per executed order.</p>
                        <p>• User interface is a bit complex as it is not for beginners.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">Z</div>
                    <span>Zerodha</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <ThumbsUp className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="font-semibold text-blue-800">Pros</h4>
                      </div>
                      <div className="mt-2 space-y-2 text-sm">
                        <p>• You don't pay any brokerage when you buy shares using cash-and-carry (CNC). Delivery trade has no leverage. Once bought, shares get delivered to your demat account and if sold, shares will get debited from your demat account.</p>
                        <p>• They offer services under a simple pricing model. They charge 0.03% or Rs 20 per executed order, whichever is lower, regardless of the trade size. The maximum brokerage paid by the customer is Rs 20 per trade.</p>
                        <p>• Zerodha is a self-clearing broker. They don't charge clearing charges from customers</p>
                        <p>• Set long-standing stop loss and target orders for your stock investments.</p>
                        <p>• An all-new mobile app built for both passive investors and active day traders, with significant speed and user experience enhancements.</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <ThumbsDown className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="font-semibold text-red-800">Cons</h4>
                      </div>
                      <div className="mt-2 space-y-2 text-sm">
                        <p>• Doesn't provide stock tips, research reports or recommendations.</p>
                        <p>• Lifetime free AMC demat account plans are not available.</p>
                        <p>• An additional charge of Rs 50 per executed order for MIS/BO/CO positions which are not square off by the customer.</p>
                        <p>• Call & Trade is available at an additional fee of Rs 50 per executed order.</p>
                        <p>• 3-in-1 trading account is not available as Zerodha doesn't provide banking services.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Ratings Tab */}
          <TabsContent value="ratings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    A
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1,2,3,4].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-yellow-200 text-yellow-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Angel One</h3>
                  <div className="text-4xl font-bold mb-6">4.7</div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Trust Factor</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ease of Use</span>
                      <div className="flex space-x-1">
                        {[1,2,3].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Technology</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-teal-500 hover:bg-teal-600">
                    Open Demat Account
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    Z
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1,2,3,4].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 fill-yellow-200 text-yellow-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Zerodha</h3>
                  <div className="text-4xl font-bold mb-6">4.6</div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Trust Factor</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ease of Use</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Technology</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-teal-500 hover:bg-teal-600">
                    Open Demat Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials">
            <Card>
              <CardHeader>
                <CardTitle>Financials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Revenue</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={financialData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="angelOneRevenue" fill="#f97316" name="Angel One" />
                        <Bar dataKey="zerodhaRevenue" fill="#3b82f6" name="Zerodha" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Profit/Loss</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={financialData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="angelOneProfit" fill="#f97316" name="Angel One" />
                        <Bar dataKey="zerodhaProfit" fill="#3b82f6" name="Zerodha" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BrokerComparison;
