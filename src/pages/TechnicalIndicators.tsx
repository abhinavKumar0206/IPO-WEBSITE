import { Header } from "@/components/Header";
import { Activity, BarChart3, ThumbsDown, ThumbsUp, TrendingUp } from 'lucide-react';


const TechnicalIndicators = () => {
  const moduleUnits = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'leading-vs-lagging', title: 'Leading Vs Lagging Indicators' },
    { id: 'types-of-indicators', title: 'Types of indicators' },
    { id: 'moving-averages', title: 'Moving Averages' },
    { id: 'trading-with-ma', title: 'Trading with Moving Averages' },
    { id: 'rsi-hidden-bullish', title: 'RSI Hidden Bullish Divergence' },
    { id: 'macd', title: 'Moving Average Convergence & Divergence (MACD)' },
    { id: 'macd-histogram', title: 'MACD Histogram' },
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
            <h2 className="text-xl font-bold text-gray-800 mb-6">Technical Indicators</h2>
            <nav className="space-y-2">
              {moduleUnits.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => scrollToSection(unit.id)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-gray-700 font-medium"
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
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=400&fit=crop" 
                  alt="Technical indicators dashboard"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Technical indicators are mathematical calculations based on price, volume, or open interest data. 
                  They help traders analyze market trends, momentum, and potential price movements.
                </p>
                <p>
                  These tools provide objective insights into market behavior and can significantly improve trading decisions 
                  when used correctly. Understanding different types of indicators and their applications is crucial for 
                  successful technical analysis.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* Leading Vs Lagging Indicators */}
            <section id="leading-vs-lagging" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Leading Vs Lagging Indicators</h2>
              <div className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="h-24 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="w-12 h-12 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-green-600 mb-2">Leading Indicators</h4>
                      <p className="text-sm text-gray-600">Predict future price movements</p>
                    </div>
                    <div className="text-center">
                      <div className="h-24 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="w-12 h-12 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-600 mb-2">Lagging Indicators</h4>
                      <p className="text-sm text-gray-600">Confirm existing trends</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  <strong>Leading Indicators:</strong> These provide early signals of potential trend changes. 
                  Examples include RSI, Stochastic Oscillator, and Williams %R. They help identify overbought 
                  and oversold conditions before price reversals occur.
                </p>
                <p>
                  <strong>Lagging Indicators:</strong> These confirm trends that are already in motion. 
                  Moving averages and MACD are examples. While they may not predict reversals, 
                  they provide reliable confirmation of trend direction.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* Types of Indicators */}
            <section id="types-of-indicators" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Indicators</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop" 
                  alt="Various technical indicator types"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-orange-600 mb-3">Trend Indicators</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Moving Averages</li>
                      <li>MACD</li>
                      <li>Parabolic SAR</li>
                      <li>ADX</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-red-600 mb-3">Momentum Indicators</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>RSI</li>
                      <li>Stochastic</li>
                      <li>Williams %R</li>
                      <li>CCI</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-purple-600 mb-3">Volume Indicators</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Volume</li>
                      <li>OBV</li>
                      <li>Chaikin Money Flow</li>
                      <li>VWAP</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-teal-600 mb-3">Volatility Indicators</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Bollinger Bands</li>
                      <li>ATR</li>
                      <li>Keltner Channels</li>
                      <li>VIX</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Moving Averages */}
            <section id="moving-averages" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Moving Averages</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" 
                  alt="Moving averages on chart"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Moving averages smooth out price data to identify trends more clearly. 
                  They are calculated by averaging price over a specific number of periods.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Simple Moving Average (SMA):</strong> Equal weight to all periods</li>
                  <li><strong>Exponential Moving Average (EMA):</strong> More weight to recent prices</li>
                  <li><strong>Weighted Moving Average (WMA):</strong> Linear weighting system</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>

            {/* Trading with Moving Averages */}
            <section id="trading-with-ma" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Trading with Moving Averages</h2>
              <div className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold mb-4 text-center">Moving Average Strategies</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-green-600 font-bold">Golden Cross</span>
                      </div>
                      <span className="text-sm text-gray-600">Bullish Signal</span>
                    </div>
                    <div className="text-center">
                      <div className="h-16 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-red-600 font-bold">Death Cross</span>
                      </div>
                      <span className="text-sm text-gray-600">Bearish Signal</span>
                    </div>
                    <div className="text-center">
                      <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-blue-600 font-bold">Support/Resistance</span>
                      </div>
                      <span className="text-sm text-gray-600">Dynamic Levels</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Moving averages can be used in various trading strategies:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Crossover Strategy:</strong> Buy when price crosses above MA, sell when below</li>
                  <li><strong>Golden Cross:</strong> Bullish signal when short MA crosses above long MA</li>
                  <li><strong>Death Cross:</strong> Bearish signal when short MA crosses below long MA</li>
                  <li><strong>Dynamic Support/Resistance:</strong> MAs act as support in uptrends, resistance in downtrends</li>
                </ul>
              </div>
              <FeedbackRow />
            </section>

            {/* RSI Hidden Bullish Divergence */}
            <section id="rsi-hidden-bullish" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">RSI Hidden Bullish Divergence</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" 
                  alt="RSI divergence pattern"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Hidden bullish divergence occurs when price makes higher lows while RSI makes lower lows. 
                  This suggests the uptrend will likely continue despite temporary weakness.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Key Characteristics:</h4>
                  <ul className="list-disc list-inside space-y-1 text-green-700">
                    <li>Price: Higher lows in an uptrend</li>
                    <li>RSI: Lower lows</li>
                    <li>Signal: Trend continuation (bullish)</li>
                    <li>Action: Look for buying opportunities</li>
                  </ul>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* MACD */}
            <section id="macd" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Moving Average Convergence & Divergence (MACD)</h2>
              <div className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold mb-4 text-center">MACD Components</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <Activity className="w-8 h-8 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">MACD Line</span>
                    </div>
                    <div className="text-center">
                      <div className="h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                        <Activity className="w-8 h-8 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium">Signal Line</span>
                    </div>
                    <div className="text-center">
                      <div className="h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">Histogram</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  MACD consists of three components that work together to identify trend changes and momentum:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>MACD Line:</strong> Difference between 12-day and 26-day EMA</li>
                  <li><strong>Signal Line:</strong> 9-day EMA of the MACD line</li>
                  <li><strong>Histogram:</strong> Difference between MACD line and signal line</li>
                </ul>
                <p>
                  Key signals include crossovers, divergences, and zero-line crossings.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* MACD Histogram */}
            <section id="macd-histogram" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">MACD Histogram</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
                  alt="MACD histogram visualization"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The MACD histogram represents the difference between the MACD line and its signal line. 
                  It provides early signals of potential trend changes.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Histogram Signals:</h4>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li><strong>Rising histogram:</strong> Increasing bullish momentum</li>
                    <li><strong>Falling histogram:</strong> Increasing bearish momentum</li>
                    <li><strong>Zero crossing:</strong> MACD line crosses signal line</li>
                    <li><strong>Divergences:</strong> Price vs histogram direction differences</li>
                  </ul>
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

export default TechnicalIndicators;