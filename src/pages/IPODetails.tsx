import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingDown, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const IPODetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/landing" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">{'>'}</span>
          <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
          <span className="mx-2">{'>'}</span>
          <Link to="/ipo" className="hover:text-blue-600">IPO</Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-gray-900 font-medium">Inox India IPO</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Key Things to Know About Inox India IPO</h1>
        <p className="text-lg text-gray-600">Inox India IPO - Everything You Must Know</p>
        <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
          <span>19 Dec on blog • IPO • </span>
          <span>4 min read</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Featured IPO Card */}
            <Card className="mb-8 overflow-hidden">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-white text-4xl">🏭</div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Inox India IPO</h2>
                  <p className="text-gray-600 mb-6 max-w-2xl">
                    One of the leading manufacturers of cryogenic storage tanks, Inox India, 
                    is about to launch its IPO on 14 December 2023. The much-awaited IPO is 
                    expected to boost the overall stock market scenario.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Let's have a look at Inox IPO details here.
                  </p>
                </div>
              </div>
            </Card>

            {/* About Company */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">About Inox India Limited (INOXCVA)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  The Gujarat-based company, Inox India is a supplier of cryogenic 
                  equipment that excels in offering end-to-end solutions for equipment 
                  that involves ultra-low-temperature technology to its clients. From design 
                  engineering to manufacturing, INOXCVA is best suited for offering a plethora 
                  of products and services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With its 5 primary divisions viz Industrial Gas, LNG, and Cryo Scientific, the 
                  company manufactures industrial equipment dealing in industrial gases, healthcare, 
                  green hydrogen, chemicals, energy, aviation, and more.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Some of the important things you should know about Inox India IPO are:
                </p>
              </CardContent>
            </Card>

            {/* IPO Details Table */}
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-6 bg-gray-50 font-semibold text-gray-900 w-1/3">IPO Date</td>
                        <td className="py-4 px-6 text-gray-700">14 December, 2023 to 18 December, 2023</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-6 bg-gray-50 font-semibold text-gray-900">Price Band</td>
                        <td className="py-4 px-6 text-gray-700">Rs 627 to Rs 660 per share</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-6 bg-gray-50 font-semibold text-gray-900">Face Value</td>
                        <td className="py-4 px-6 text-gray-700">Rs 2 per share</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-6 bg-gray-50 font-semibold text-gray-900">Lot Size</td>
                        <td className="py-4 px-6 text-gray-700">22 Shares</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-6 bg-gray-50 font-semibold text-gray-900">Total Issue Size</td>
                        <td className="py-4 px-6 text-gray-700">
                          22,110,955 shares<br/>
                          <span className="text-sm text-gray-600">(aggregating up to Rs 1,459.32 Cr)</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 bg-gray-50 font-semibold text-gray-900">Offer for Sale</td>
                        <td className="py-4 px-6 text-gray-700">
                          22,110,955 shares of Rs 2<br/>
                          <span className="text-sm text-gray-600">(aggregating up to Rs 1,459.32 Cr)</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Additional IPO Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Inox India IPO Date
                    </h3>
                    <p className="text-gray-700 ml-5">
                      The Inox India IPO will open for subscription on 14th November 2023 and will 
                      close on 16th November 2023.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Listing Date
                    </h3>
                    <p className="text-gray-700 ml-5">
                      Inox India shares trading will begin on 21 December 2023 as per the 
                      tentative schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Offer Details
                    </h3>
                    <p className="text-gray-700 ml-5">
                      The company is aiming to raise approximately Rs 1,419 crores through the 
                      IPO as per the company.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Company Financials</CardTitle>
                <p className="text-gray-600">
                  During the financial year ending with 31 March 2023 and 31 March 2022, the 
                  revenue of Inox India Limited increased by approx 27.45% and profit after tax 
                  (PAT) rose by 17.07%.
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 py-3 px-4 text-left font-semibold text-gray-900">Year Ended on</th>
                        <th className="border border-gray-200 py-3 px-4 text-left font-semibold text-gray-900">30 Sep 2023</th>
                        <th className="border border-gray-200 py-3 px-4 text-left font-semibold text-gray-900">31 March 2023</th>
                        <th className="border border-gray-200 py-3 px-4 text-left font-semibold text-gray-900">31 March 2022</th>
                        <th className="border border-gray-200 py-3 px-4 text-left font-semibold text-gray-900">31 March 2021</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 py-3 px-4 font-semibold text-gray-900 bg-gray-50">Assets</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">115.81</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">1145.36</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">695.75</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">647.70</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 py-3 px-4 font-semibold text-gray-900 bg-gray-50">Revenue</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">540.00</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">684.20</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">603.71</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">504.88</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 py-3 px-4 font-semibold text-gray-900 bg-gray-50">Profit After Tax</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">102.34</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">152.71</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">158.50</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">96.17</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 py-3 px-4 font-semibold text-gray-900 bg-gray-50">Net Worth</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">554.24</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">545.46</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">502.26</td>
                        <td className="border border-gray-200 py-3 px-4 text-gray-700">371.91</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Post Card */}
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4">Social Post</h3>
                <div className="bg-white/20 rounded-lg p-4 mb-4">
                  <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-2"></div>
                  <div className="h-2 bg-white/30 rounded mb-2"></div>
                  <div className="h-2 bg-white/30 rounded w-3/4 mx-auto"></div>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  Share Now
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Newsletter</h3>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto"></div>
                </div>
                <Button variant="outline" className="w-full">
                  Subscribe
                </Button>
              </CardContent>
            </Card>

            {/* Top Gainers */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-green-600 text-lg">
                  <TrendingUp size={20} />
                  Top Gainers
                  <div className="ml-auto w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Elgni Invelta", price: "₹3,066.15", change: "+4%" },
                  { name: "Advait Parts", price: "₹1,954.85", change: "+3%" },
                  { name: "Zensar", price: "₹133.30", change: "+3%" },
                  { name: "Inox Towers", price: "₹2,220.15", change: "+2%" },
                  { name: "Nykaa", price: "₹175.40", change: "+2%" }
                ].map((stock, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <div className="font-medium text-gray-900">{stock.name}</div>
                      <div className="text-sm text-gray-600">{stock.price}</div>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">{stock.change}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Losers */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-red-600 text-lg">
                  <TrendingDown size={20} />
                  Top Losers
                  <div className="ml-auto w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Shanvi Geminfo", price: "₹7,023.30", change: "-5%" },
                  { name: "Shriramfoil Vascular", price: "₹1,957.85", change: "-4%" },
                  { name: "Bajaj Holdings", price: "₹8,699.30", change: "-4%" },
                  { name: "Patlite Industries", price: "₹2,723.80", change: "-3%" },
                  { name: "Nureca India", price: "₹2,605.40", change: "-3%" }
                ].map((stock, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <div className="font-medium text-gray-900">{stock.name}</div>
                      <div className="text-sm text-gray-600">{stock.price}</div>
                    </div>
                    <span className="text-red-600 font-semibold text-sm">{stock.change}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPODetails;
