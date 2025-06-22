import { BarChart3, ThumbsDown, ThumbsUp, TrendingDown, TrendingUp } from 'lucide-react';
import { Header } from '../components/Header';


const MovingAverages = () => {
  const moduleUnits = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-moving-average', title: 'What is Moving Average?' },
    { id: 'types-of-moving-average', title: 'Types of Moving Average' },
    { id: 'uses-of-moving-averages', title: 'Uses of Moving Averages' },
    { id: 'which-moving-average', title: 'Which Moving Average Should We Follow?' },
    { id: 'trading-signals-systems', title: 'Trading Signals & Systems' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FeedbackRow = () => (
    <div className="flex items-center justify-center space-x-4 py-6 border-t border-gray-200 bg-gray-50 rounded-lg my-8">
      <span className="text-gray-700 font-medium">Did you like this unit?</span>
      <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
        <ThumbsUp className="w-5 h-5 text-green-600" />
        <span className="text-green-700">Yes</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
        <ThumbsDown className="w-5 h-5 text-red-600" />
        <span className="text-red-700">No</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
        <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg min-h-screen sticky top-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Moving Averages</h2>
            <nav className="space-y-2">
              {moduleUnits.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => scrollToSection(unit.id)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-700 font-medium"
                >
                  {unit.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
              
              {/* Hero Image */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" 
                  alt="Financial charts and moving averages"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Moving averages are among the most popular and widely used technical indicators in trading and investment analysis. They provide a smoothed representation of price data over a specified period, helping traders identify trends and potential entry/exit points.
                </p>
                <p>
                  By filtering out the noise from random price fluctuations, moving averages reveal the underlying trend direction and momentum, making them essential tools for both novice and experienced traders.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* What is Moving Average */}
            <section id="what-is-moving-average" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Moving Average?</h2>
              
              {/* Visual Example */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <BarChart3 className="w-12 h-12 text-blue-600" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Moving Average Visualization</h3>
                    <p className="text-sm text-gray-600">Smoothing price action over time</p>
                  </div>
                </div>
                
                {/* Simple MA calculation example */}
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">5-Period Simple Moving Average Example:</h4>
                  <div className="grid grid-cols-5 gap-2 text-center text-sm mb-2">
                    <div className="bg-blue-100 p-2 rounded">Day 1: $100</div>
                    <div className="bg-blue-100 p-2 rounded">Day 2: $102</div>
                    <div className="bg-blue-100 p-2 rounded">Day 3: $98</div>
                    <div className="bg-blue-100 p-2 rounded">Day 4: $105</div>
                    <div className="bg-blue-100 p-2 rounded">Day 5: $103</div>
                  </div>
                  <div className="text-center font-semibold text-blue-600">
                    MA = (100 + 102 + 98 + 105 + 103) ÷ 5 = $101.6
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  A moving average is a calculation used to analyze data points by creating a series of averages of different subsets of the full data set. In financial markets, it represents the average price of a security over a specific number of periods.
                </p>
                <p>
                  The "moving" aspect comes from the fact that as new data becomes available, the oldest data point is dropped, and the newest is added, creating a continuously updated average that "moves" with time.
                </p>
                <p>
                  Moving averages smooth out price action to help traders:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Identify trend direction</li>
                  <li>Determine support and resistance levels</li>
                  <li>Generate buy and sell signals</li>
                  <li>Reduce market noise</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>

            {/* Types of Moving Average */}
            <section id="types-of-moving-average" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Moving Average</h2>
              
              {/* Comparison Chart */}
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=300&fit=crop" 
                  alt="Different types of moving averages comparison"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  There are several types of moving averages, each with unique characteristics:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Simple Moving Average (SMA)</h3>
                    <p>Calculates the arithmetic mean of prices over a specific period. All data points have equal weight.</p>
                    <div className="mt-3 text-sm bg-white p-3 rounded border">
                      <strong>Formula:</strong> SMA = (P1 + P2 + ... + Pn) ÷ n
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Exponential Moving Average (EMA)</h3>
                    <p>Gives more weight to recent prices, making it more responsive to new information and price changes.</p>
                    <div className="mt-3 text-sm bg-white p-3 rounded border">
                      <strong>More reactive:</strong> Responds faster to price changes
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Weighted Moving Average (WMA)</h3>
                    <p>Assigns different weights to data points, typically giving more importance to recent prices.</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <TrendingDown className="w-8 h-8 text-orange-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Hull Moving Average (HMA)</h3>
                    <p>Designed to reduce lag while maintaining smoothness, offering faster signals.</p>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Uses of Moving Averages */}
            <section id="uses-of-moving-averages" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Uses of Moving Averages</h2>
              
              {/* Trading Signals Visual */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Moving Average Trading Signals</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-green-700">Buy Signal</h4>
                    <p className="text-sm">Price crosses above MA</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingDown className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-red-700">Sell Signal</h4>
                    <p className="text-sm">Price crosses below MA</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-700">Support/Resistance</h4>
                    <p className="text-sm">MA acts as dynamic levels</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Moving averages serve multiple purposes in technical analysis:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Trend Identification:</strong> Determine if the market is in an uptrend, downtrend, or sideways movement</li>
                  <li><strong>Support and Resistance:</strong> Act as dynamic support in uptrends and resistance in downtrends</li>
                  <li><strong>Signal Generation:</strong> Crossovers between price and moving averages generate buy/sell signals</li>
                  <li><strong>Risk Management:</strong> Help set stop-loss levels and trailing stops</li>
                  <li><strong>Market Momentum:</strong> The slope of moving averages indicates trend strength</li>
                  <li><strong>Entry and Exit Points:</strong> Provide systematic approach to entering and exiting positions</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>

            {/* Which Moving Average Should We Follow */}
            <section id="which-moving-average" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Which Moving Average Should We Follow?</h2>
              
              {/* Timeframe comparison */}
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=300&fit=crop" 
                  alt="Trading timeframes and moving averages"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The choice of moving average depends on your trading style, timeframe, and market conditions:
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h3 className="text-xl font-semibold mb-2 text-red-700">Short-term Trading</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>5, 10, or 20-period EMAs</li>
                      <li>Quick signals for day trading</li>
                      <li>More responsive to price changes</li>
                      <li>Higher frequency of signals</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Medium-term Trading</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>50-period SMA or EMA</li>
                      <li>Balance between speed and accuracy</li>
                      <li>Good for swing trading</li>
                      <li>Filters out some noise</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h3 className="text-xl font-semibold mb-2 text-green-700">Long-term Investing</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>100 or 200-period SMAs</li>
                      <li>Fewer false signals</li>
                      <li>Better for trend following</li>
                      <li>Position trading strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Trading Signals & Systems */}
            <section id="trading-signals-systems" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Trading Signals & Systems</h2>
              
              {/* Golden Cross Visual */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Classic Moving Average Crossovers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                      <h4 className="font-semibold text-yellow-700">Golden Cross</h4>
                    </div>
                    <p className="text-sm mb-2">Short MA crosses above Long MA</p>
                    <p className="text-xs text-gray-600">Bullish signal - potential uptrend beginning</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
                      <h4 className="font-semibold text-red-700">Death Cross</h4>
                    </div>
                    <p className="text-sm mb-2">Short MA crosses below Long MA</p>
                    <p className="text-xs text-gray-600">Bearish signal - potential downtrend beginning</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Moving averages generate various trading signals:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Price Crossover Signals:</h3>
                    <ul className="list-disc list-inside">
                      <li>Buy when price crosses above the moving average</li>
                      <li>Sell when price crosses below the moving average</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Moving Average Crossover:</h3>
                    <ul className="list-disc list-inside">
                      <li>Golden Cross: Short MA crosses above long MA (bullish)</li>
                      <li>Death Cross: Short MA crosses below long MA (bearish)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multiple Moving Average System:</h3>
                    <ul className="list-disc list-inside">
                      <li>Use 3 or more MAs for confirmation</li>
                      <li>Trade only when all MAs align with the trend</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Conclusion</h2>
              
              {/* Summary infographic */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Key Takeaways</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">4</div>
                    <div className="text-sm">Main Types of Moving Averages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">∞</div>
                    <div className="text-sm">Timeframes to Choose From</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">📈</div>
                    <div className="text-sm">Trend Following Tool</div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Moving averages are fundamental tools in technical analysis that provide valuable insights into market trends and potential trading opportunities. While they are lagging indicators, their ability to smooth out price noise and identify trend direction makes them indispensable for traders and investors.
                </p>
                <p>
                  Success with moving averages requires understanding their limitations, combining them with other indicators, and adapting their parameters to suit your trading style and market conditions. Remember that no single indicator is perfect, and moving averages work best as part of a comprehensive trading strategy.
                </p>
                <p>
                  Practice using different types of moving averages and timeframes to find what works best for your trading approach and risk tolerance.
                </p>
              </div>
              <FeedbackRow />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingAverages;