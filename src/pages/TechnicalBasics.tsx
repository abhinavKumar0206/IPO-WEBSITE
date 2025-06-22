import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Header } from '../components/Header';

const TechnicalBasics = () => {
  const moduleUnits = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'types-of-charts', title: 'Types of Charts' },
    { id: 'trends', title: 'Trends' },
    { id: 'volume', title: 'Volume' },
    { id: 'classical-chart-patterns', title: 'Classical Chart Patterns' },
    { id: 'candlestick-reversal-patterns', title: 'Candlestick Reversal Patterns' },
    { id: 'technical-indicators', title: 'Technical Indicators' },
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
      {/* Header Placeholder - Replace with your own Header component */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg min-h-screen sticky top-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Technical Basics</h2>
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
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" 
                  alt="Financial charts and analysis"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analyzing statistical trends gathered from trading activity, such as price movement and volume.
                </p>
                <p>
                  Unlike fundamental analysis, which attempts to evaluate a security's value based on business results such as sales and earnings, technical analysis focuses on the study of price and volume.
                </p>
                <p>
                  Technical analysis tools are used to scrutinize the ways supply and demand for a security will affect changes in price, volume, and implied volatility.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* Types of Charts */}
            <section id="types-of-charts" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Charts</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
                  alt="Different types of financial charts"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Charts are the fundamental tools in technical analysis. There are several types of charts used by traders and analysts:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-blue-600 mb-2">Line Charts</h4>
                    <div className="h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-sm">📈 Simple Price Line</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-green-600 mb-2">Candlestick Charts</h4>
                    <div className="h-24 bg-gradient-to-r from-green-100 to-green-200 rounded flex items-center justify-center">
                      <span className="text-green-600 text-sm">🕯️ OHLC Data</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Line Charts:</strong> Connect closing prices over a specified time period</li>
                  <li><strong>Bar Charts:</strong> Show open, high, low, and close prices for each period</li>
                  <li><strong>Candlestick Charts:</strong> Similar to bar charts but more visually appealing</li>
                  <li><strong>Point and Figure Charts:</strong> Focus purely on price movements</li>
                </ul>
                <p>
                  Each chart type offers unique advantages and is suitable for different trading strategies and time frames.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* Trends */}
            <section id="trends" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Trends</h2>
              <div className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold mb-4 text-center">Market Trend Directions</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="h-20 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-2xl">📈</span>
                      </div>
                      <span className="text-green-600 font-medium">Uptrend</span>
                    </div>
                    <div className="text-center">
                      <div className="h-20 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-2xl">📉</span>
                      </div>
                      <span className="text-red-600 font-medium">Downtrend</span>
                    </div>
                    <div className="text-center">
                      <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-2xl">➡️</span>
                      </div>
                      <span className="text-gray-600 font-medium">Sideways</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  A trend is the general direction in which a security's price is moving. Trends are classified into three categories:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Uptrend:</strong> Higher highs and higher lows</li>
                  <li><strong>Downtrend:</strong> Lower highs and lower lows</li>
                  <li><strong>Sideways/Horizontal Trend:</strong> Price moves within a range</li>
                </ul>
                <p>
                  Understanding trends is crucial for successful trading as they help traders align their positions with the market's direction.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* Volume */}
            <section id="volume" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Volume</h2>
              <div className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold mb-4 text-center">Volume Analysis</h4>
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <div className="h-24 w-16 bg-blue-400 rounded-t-lg mb-2"></div>
                      <span className="text-sm text-blue-600">High Volume</span>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-16 bg-blue-200 rounded-t-lg mb-2 mt-12"></div>
                      <span className="text-sm text-blue-400">Low Volume</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Volume refers to the number of shares traded during a given period. It's a crucial indicator that confirms price movements and trends.
                </p>
                <p>
                  Key volume principles include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>High volume confirms strong price movements</li>
                  <li>Low volume suggests weak conviction in price moves</li>
                  <li>Volume should increase in the direction of the trend</li>
                  <li>Volume spikes often occur at trend reversals</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>

            {/* Classical Chart Patterns */}
            <section id="classical-chart-patterns" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Classical Chart Patterns</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop" 
                  alt="Chart patterns analysis"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Chart patterns are formations created by the price action of a security. These patterns can help predict future price movements:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Head and Shoulders:</strong> Reversal pattern indicating trend change</li>
                  <li><strong>Double Top/Bottom:</strong> Reversal patterns at key levels</li>
                  <li><strong>Triangles:</strong> Continuation patterns (ascending, descending, symmetrical)</li>
                  <li><strong>Flags and Pennants:</strong> Short-term continuation patterns</li>
                  <li><strong>Rectangles:</strong> Consolidation patterns</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>

            {/* Candlestick Reversal Patterns */}
            <section id="candlestick-reversal-patterns" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Candlestick Reversal Patterns</h2>
              <div className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold mb-4 text-center">Common Candlestick Patterns</h4>
                  <div className="grid grid-cols-4 gap-4">
                    {['Hammer', 'Doji', 'Engulfing', 'Star'].map((pattern, index) => (
                      <div key={pattern} className="text-center">
                        <div className="h-16 bg-gradient-to-b from-red-200 to-green-200 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-2xl">🕯️</span>
                        </div>
                        <span className="text-sm font-medium">{pattern}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Candlestick patterns provide insights into market sentiment and potential reversals:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Hammer:</strong> Bullish reversal at the bottom of downtrends</li>
                  <li><strong>Shooting Star:</strong> Bearish reversal at the top of uptrends</li>
                  <li><strong>Doji:</strong> Indecision in the market</li>
                  <li><strong>Engulfing Patterns:</strong> Strong reversal signals</li>
                  <li><strong>Morning/Evening Star:</strong> Three-candle reversal patterns</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>

            {/* Technical Indicators */}
            <section id="technical-indicators" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Indicators</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" 
                  alt="Technical indicators dashboard"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Technical indicators are mathematical calculations based on price, volume, or open interest. They help traders make informed decisions:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Moving Averages:</strong> Smooth out price data to identify trends</li>
                  <li><strong>RSI:</strong> Measures overbought and oversold conditions</li>
                  <li><strong>MACD:</strong> Shows relationship between two moving averages</li>
                  <li><strong>Bollinger Bands:</strong> Volatility indicator</li>
                  <li><strong>Stochastic Oscillator:</strong> Momentum indicator</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalBasics;