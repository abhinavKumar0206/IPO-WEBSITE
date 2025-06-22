import { Header } from "@/components/Header";
import { BarChart3, Hammer, Star, ThumbsDown, ThumbsUp, TrendingDown, TrendingUp, Zap } from 'lucide-react';


const CandlestickPatterns = () => {
  const moduleUnits = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'identify-patterns', title: 'Identify Patterns' },
    { id: 'hammer', title: 'Hammer' },
    { id: 'inverted-hammer', title: 'Inverted Hammer' },
    { id: 'spinning-top', title: 'Spinning Top Candlestick Patterns' },
    { id: 'shooting-star', title: 'Shooting Star' },
    { id: 'marubuzo', title: 'Marubuzo' },
    { id: 'doji', title: 'Doji' },
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
            <h2 className="text-xl font-bold text-gray-800 mb-6">Candlestick Patterns</h2>
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
              
              {/* Candlestick Image */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/candlestickPattern.png" 
                  alt="Candlestick chart patterns on trading screen"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Candlestick components */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-green-700">Bullish Patterns</h3>
                  </div>
                  <p className="text-sm">Indicate potential upward price movement</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <div className="flex items-center mb-3">
                    <TrendingDown className="w-6 h-6 text-red-600 mr-2" />
                    <h3 className="text-lg font-semibold text-red-700">Bearish Patterns</h3>
                  </div>
                  <p className="text-sm">Indicate potential downward price movement</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Candlestick patterns are a form of technical analysis that originated in Japan over 300 years ago. These patterns provide visual insights into market sentiment and potential price movements by analyzing the relationship between opening, closing, high, and low prices.
                </p>
                <p>
                  Each candlestick tells a story about the battle between buyers and sellers during a specific time period, making them invaluable tools for traders and investors.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* Identify Patterns */}
            <section id="identify-patterns" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Identify Patterns</h2>
              
              {/* Pattern identification guide */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Candlestick Anatomy</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded shadow text-center">
                    <div className="w-2 h-16 bg-green-500 mx-auto mb-2 relative">
                      <div className="w-1 h-24 bg-black absolute left-1/2 transform -translate-x-1/2 -top-4"></div>
                      <div className="w-6 h-8 bg-green-400 absolute left-1/2 transform -translate-x-1/2 top-2"></div>
                    </div>
                    <h4 className="font-semibold text-green-700">Body</h4>
                    <p className="text-xs">Open to Close</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <div className="w-2 h-16 bg-red-500 mx-auto mb-2 relative">
                      <div className="w-1 h-6 bg-black absolute left-1/2 transform -translate-x-1/2 -top-6"></div>
                    </div>
                    <h4 className="font-semibold text-gray-700">Upper Wick</h4>
                    <p className="text-xs">High Price</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <div className="w-2 h-16 bg-red-500 mx-auto mb-2 relative">
                      <div className="w-1 h-6 bg-black absolute left-1/2 transform -translate-x-1/2 bottom-0"></div>
                    </div>
                    <h4 className="font-semibold text-gray-700">Lower Wick</h4>
                    <p className="text-xs">Low Price</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <div className="flex justify-center space-x-2 mb-2">
                      <div className="w-2 h-8 bg-green-500"></div>
                      <div className="w-2 h-8 bg-red-500"></div>
                    </div>
                    <h4 className="font-semibold text-blue-700">Color</h4>
                    <p className="text-xs">Green (bullish) / Red (bearish)</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  To effectively identify candlestick patterns, you need to understand the four key components of each candlestick: the body, upper wick, lower wick, and color.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Pattern Recognition Tips:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Look for patterns at support/resistance levels</li>
                    <li>Consider the context of the overall trend</li>
                    <li>Confirm patterns with volume analysis</li>
                    <li>Wait for confirmation before taking action</li>
                  </ul>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Hammer */}
            <section id="hammer" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hammer</h2>
              
              {/* Hammer visualization */}
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Hammer Pattern</h3>
                <div className="flex justify-center items-end mb-4">
                  <div className="relative">
                    <div className="w-4 h-12 bg-green-500 relative">
                      <div className="w-1 h-16 bg-black absolute left-1/2 transform -translate-x-1/2 bottom-0"></div>
                      <div className="w-8 h-6 bg-green-400 absolute left-1/2 transform -translate-x-1/2 -top-3"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Hammer className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Small body, long lower wick, minimal upper wick</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Hammer is a bullish reversal pattern that typically appears at the bottom of a downtrend. It has a small body at the upper end of the trading range with a long lower shadow.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Characteristics</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Small real body</li>
                      <li>Long lower shadow (2x body length)</li>
                      <li>Little to no upper shadow</li>
                      <li>Appears after downtrend</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Trading Signal</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Bullish reversal signal</li>
                      <li>Wait for confirmation</li>
                      <li>Enter on next candle close</li>
                      <li>Stop loss below hammer low</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Inverted Hammer */}
            <section id="inverted-hammer" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Inverted Hammer</h2>
              
              {/* Inverted Hammer visualization */}
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Inverted Hammer Pattern</h3>
                <div className="flex justify-center items-start mb-4">
                  <div className="relative">
                    <div className="w-4 h-12 bg-purple-500 relative">
                      <div className="w-1 h-16 bg-black absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                      <div className="w-8 h-6 bg-purple-400 absolute left-1/2 transform -translate-x-1/2 bottom-3"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Small body, long upper wick, minimal lower wick</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Inverted Hammer is a bullish reversal pattern that appears at the end of a downtrend. It has a small body at the lower end with a long upper shadow.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Small real body at bottom</li>
                      <li>Long upper shadow</li>
                      <li>Little to no lower shadow</li>
                      <li>Forms after decline</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-2">Market Psychology</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Sellers push price down</li>
                      <li>Buyers regain control</li>
                      <li>Price closes near open</li>
                      <li>Potential reversal signal</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Spinning Top */}
            <section id="spinning-top" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Spinning Top Candlestick Patterns</h2>
              
              {/* Spinning Top visualization */}
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Spinning Top Pattern</h3>
                <div className="flex justify-center items-center mb-4">
                  <div className="relative">
                    <div className="w-3 h-6 bg-yellow-500 relative">
                      <div className="w-1 h-12 bg-black absolute left-1/2 transform -translate-x-1/2 -top-3"></div>
                      <div className="w-1 h-12 bg-black absolute left-1/2 transform -translate-x-1/2 bottom-3"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Small body with long wicks on both ends</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  A Spinning Top is a candlestick pattern characterized by a small real body and long upper and lower shadows. It indicates indecision in the market.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Interpretation</h4>
                  <p className="text-sm">Spinning tops suggest that neither buyers nor sellers could gain control, often signaling potential trend changes or continuation patterns depending on context.</p>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Shooting Star */}
            <section id="shooting-star" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Shooting Star</h2>
              
              {/* Shooting Star visualization */}
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Shooting Star Pattern</h3>
                <div className="flex justify-center items-start mb-4">
                  <div className="relative">
                    <div className="w-4 h-8 bg-red-500 relative">
                      <div className="w-1 h-20 bg-black absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                      <div className="w-8 h-4 bg-red-400 absolute left-1/2 transform -translate-x-1/2 bottom-1"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Small body, very long upper wick, appears at uptrend peaks</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Shooting Star is a bearish reversal pattern that appears at the top of uptrends. It has a small body and a long upper shadow.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">Pattern Requirements</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Appears after uptrend</li>
                      <li>Small real body</li>
                      <li>Long upper shadow</li>
                      <li>Little to no lower shadow</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Trading Strategy</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Bearish reversal signal</li>
                      <li>Wait for confirmation</li>
                      <li>Consider short position</li>
                      <li>Stop loss above high</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Marubuzo */}
            <section id="marubuzo" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Marubuzo</h2>
              
              {/* Marubuzo visualization */}
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Marubuzo Pattern</h3>
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="text-center">
                    <div className="w-6 h-16 bg-green-500 mb-2"></div>
                    <p className="text-xs">Bullish Marubuzo</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-16 bg-red-500 mb-2"></div>
                    <p className="text-xs">Bearish Marubuzo</p>
                  </div>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">No wicks - open equals low, close equals high (or vice versa)</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Marubuzo is a candlestick pattern with no shadows (wicks). It indicates strong conviction from either buyers or sellers throughout the entire trading period.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Bullish Marubuzo</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Open = Low, Close = High</li>
                      <li>Strong buying pressure</li>
                      <li>Continuation of uptrend</li>
                      <li>High confidence signal</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">Bearish Marubuzo</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Open = High, Close = Low</li>
                      <li>Strong selling pressure</li>
                      <li>Continuation of downtrend</li>
                      <li>High confidence signal</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Doji */}
            <section id="doji" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Doji</h2>
              
              {/* Doji visualization */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Doji Pattern Variations</h3>
                <div className="flex justify-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="relative w-2 h-16 mx-auto">
                      <div className="w-1 h-16 bg-black absolute left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-4 h-1 bg-gray-600 absolute left-1/2 transform -translate-x-1/2 top-8"></div>
                    </div>
                    <p className="text-xs mt-2">Standard Doji</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-2 h-16 mx-auto">
                      <div className="w-1 h-12 bg-black absolute left-1/2 transform -translate-x-1/2 bottom-0"></div>
                      <div className="w-4 h-1 bg-gray-600 absolute left-1/2 transform -translate-x-1/2 bottom-0"></div>
                    </div>
                    <p className="text-xs mt-2">Dragonfly Doji</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-2 h-16 mx-auto">
                      <div className="w-1 h-12 bg-black absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                      <div className="w-4 h-1 bg-gray-600 absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                    </div>
                    <p className="text-xs mt-2">Gravestone Doji</p>
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Open equals close - market indecision</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  A Doji is formed when the opening and closing prices are virtually equal. This pattern represents indecision in the market and can signal potential reversals.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Types of Doji</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li><strong>Standard Doji:</strong> Equal upper and lower shadows</li>
                      <li><strong>Dragonfly Doji:</strong> Long lower shadow, no upper shadow</li>
                      <li><strong>Gravestone Doji:</strong> Long upper shadow, no lower shadow</li>
                      <li><strong>Four Price Doji:</strong> All four prices are equal (rare)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 mb-2">Trading Implications</h4>
                    <p className="text-sm">Doji patterns are most significant when they appear after extended moves up or down, often signaling potential trend reversals or important support/resistance levels.</p>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandlestickPatterns;