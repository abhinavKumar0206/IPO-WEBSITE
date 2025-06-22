import { Header } from "@/components/Header";
import { BarChart3, Hammer, Shield, Star, Target, ThumbsDown, ThumbsUp, TrendingUp, Zap } from 'lucide-react';


const ChartPattern = () => {
  const moduleUnits = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'types-of-chart-pattern', title: 'Types of Chart Pattern' },
    { id: 'hammer', title: 'Hammer' },
    { id: 'inverted-hammer', title: 'Inverted Hammer' },
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
            <h2 className="text-xl font-bold text-gray-800 mb-6">Chart Patterns</h2>
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
              
              {/* Chart patterns specific image */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" 
                  alt="Chart patterns and technical analysis formations"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Pattern types overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center border-l-4 border-blue-400">
                  <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-blue-700">Continuation Patterns</h3>
                  <p className="text-sm text-gray-600">Trend continues after brief pause</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center border-l-4 border-green-400">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-green-700">Reversal Patterns</h3>
                  <p className="text-sm text-gray-600">Trend changes direction</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center border-l-4 border-purple-400">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-purple-700">Neutral Patterns</h3>
                  <p className="text-sm text-gray-600">Direction unclear</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Chart patterns are formations created by the price movements of securities on charts. These patterns are based on the work of technical analysts and represent the psychology of market participants, providing insights into potential future price movements.
                </p>
                <p>
                  Understanding chart patterns is essential for traders as they help identify optimal entry and exit points, predict price targets, and manage risk effectively.
                </p>
              </div>
              <FeedbackRow />
            </section>

            {/* Types of Chart Patterns */}
            <section id="types-of-chart-pattern" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Chart Pattern</h2>
              
              {/* Pattern categories visualization */}
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=300&fit=crop" 
                  alt="Different types of chart patterns and formations"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Chart patterns can be broadly categorized into three main types based on their implications for future price movement:
                </p>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="text-xl font-semibold text-green-700">Reversal Patterns</h3>
                    </div>
                    <p className="text-sm mb-2">Signal that the current trend is likely to change direction.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-1">Bullish Reversal:</h4>
                        <ul className="list-disc list-inside text-sm">
                          <li>Double Bottom</li>
                          <li>Head and Shoulders Bottom</li>
                          <li>Hammer</li>
                          <li>Inverted Hammer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Bearish Reversal:</h4>
                        <ul className="list-disc list-inside text-sm">
                          <li>Double Top</li>
                          <li>Head and Shoulders Top</li>
                          <li>Shooting Star</li>
                          <li>Gravestone Doji</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-center mb-3">
                      <BarChart3 className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-blue-700">Continuation Patterns</h3>
                    </div>
                    <p className="text-sm mb-2">Indicate that the current trend will continue after a brief pause.</p>
                    <ul className="list-disc list-inside text-sm grid md:grid-cols-2 gap-1">
                      <li>Triangles (Ascending, Descending, Symmetrical)</li>
                      <li>Flags and Pennants</li>
                      <li>Rectangles</li>
                      <li>Wedges</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-center mb-3">
                      <Target className="w-6 h-6 text-yellow-600 mr-2" />
                      <h3 className="text-xl font-semibold text-yellow-700">Neutral Patterns</h3>
                    </div>
                    <p className="text-sm mb-2">Suggest market indecision with no clear directional bias.</p>
                    <ul className="list-disc list-inside text-sm grid md:grid-cols-2 gap-1">
                      <li>Doji</li>
                      <li>Spinning Tops</li>
                      <li>Inside Bars</li>
                      <li>Harami Patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Hammer */}
            <section id="hammer" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hammer</h2>
              
              {/* Hammer specific visualization */}
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Hammer Chart Pattern</h3>
                <div className="flex justify-center items-end mb-4">
                  <div className="relative">
                    <div className="w-6 h-16 bg-green-500 relative">
                      <div className="w-1 h-20 bg-black absolute left-1/2 transform -translate-x-1/2 bottom-0"></div>
                      <div className="w-10 h-8 bg-green-400 absolute left-1/2 transform -translate-x-1/2 -top-4"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Hammer className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Bullish reversal pattern - buyers regain control</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Hammer is a powerful bullish reversal candlestick pattern that signals potential upward price movement after a downtrend. It represents a shift in market sentiment from bearish to bullish.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Shield className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="text-xl font-semibold">Formation Rules</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Must appear after a downtrend</li>
                      <li>Small real body at upper end</li>
                      <li>Lower shadow 2-3x body length</li>
                      <li>Little to no upper shadow</li>
                      <li>Body color less important</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold">Trading Strategy</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Wait for confirmation candle</li>
                      <li>Enter long on next open</li>
                      <li>Stop loss below hammer low</li>
                      <li>Target previous resistance</li>
                      <li>Consider volume increase</li>
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
                    <div className="w-6 h-16 bg-purple-500 relative">
                      <div className="w-1 h-20 bg-black absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                      <div className="w-10 h-8 bg-purple-400 absolute left-1/2 transform -translate-x-1/2 bottom-4"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Potential bullish reversal - needs confirmation</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Inverted Hammer appears at the bottom of downtrends and can signal a potential bullish reversal, though it requires more confirmation than a regular hammer.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Key Difference from Shooting Star:</h4>
                  <p className="text-sm">While they look identical, context matters - Inverted Hammer appears after decline (bullish), Shooting Star after advance (bearish).</p>
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
                    <div className="w-6 h-12 bg-red-500 relative">
                      <div className="w-1 h-24 bg-black absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                      <div className="w-10 h-6 bg-red-400 absolute left-1/2 transform -translate-x-1/2 bottom-2"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Bearish reversal signal at uptrend peaks</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The Shooting Star is a bearish reversal pattern that forms at the top of uptrends, indicating that sellers have stepped in to push prices down from their highs.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">Pattern Characteristics</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Forms after uptrend</li>
                      <li>Long upper shadow</li>
                      <li>Small real body at bottom</li>
                      <li>Minimal lower shadow</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Market Psychology</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Bulls push price higher</li>
                      <li>Bears take control</li>
                      <li>Price closes near open</li>
                      <li>Reversal potential</li>
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
                <h3 className="text-lg font-semibold mb-4 text-center">Marubuzo Patterns</h3>
                <div className="flex justify-center space-x-8 mb-4">
                  <div className="text-center">
                    <div className="w-8 h-20 bg-green-500 mb-2 mx-auto"></div>
                    <p className="text-xs font-semibold text-green-700">Bullish Marubuzo</p>
                    <p className="text-xs text-gray-600">Strong buying</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-20 bg-red-500 mb-2 mx-auto"></div>
                    <p className="text-xs font-semibold text-red-700">Bearish Marubuzo</p>
                    <p className="text-xs text-gray-600">Strong selling</p>
                  </div>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">No shadows - pure conviction candle</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Marubuzo is one of the strongest single candlestick patterns, showing complete dominance by either buyers or sellers throughout the entire trading session.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Trading Significance:</h4>
                  <p className="text-sm">Marubuzo patterns often lead to continuation moves in the same direction, making them excellent for trend-following strategies.</p>
                </div>
              </div>
              <FeedbackRow />
            </section>

            {/* Doji */}
            <section id="doji" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Doji</h2>
              
              {/* Doji visualization */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Doji Pattern Family</h3>
                <div className="flex justify-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="relative w-2 h-20 mx-auto">
                      <div className="w-1 h-20 bg-black absolute left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-6 h-1 bg-gray-600 absolute left-1/2 transform -translate-x-1/2 top-10"></div>
                    </div>
                    <p className="text-xs mt-2 font-semibold">Standard</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-2 h-20 mx-auto">
                      <div className="w-1 h-16 bg-black absolute left-1/2 transform -translate-x-1/2 bottom-0"></div>
                      <div className="w-6 h-1 bg-gray-600 absolute left-1/2 transform -translate-x-1/2 bottom-0"></div>
                    </div>
                    <p className="text-xs mt-2 font-semibold">Dragonfly</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-2 h-20 mx-auto">
                      <div className="w-1 h-16 bg-black absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                      <div className="w-6 h-1 bg-gray-600 absolute left-1/2 transform -translate-x-1/2 top-0"></div>
                    </div>
                    <p className="text-xs mt-2 font-semibold">Gravestone</p>
                  </div>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Market indecision - open equals close</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Doji patterns represent market equilibrium where neither buyers nor sellers could gain control, often signaling potential trend changes or important decision points.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Standard Doji</h4>
                    <p className="text-sm">Equal shadows, maximum indecision, potential reversal at key levels.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Dragonfly Doji</h4>
                    <p className="text-sm">Long lower shadow, bullish implications, strong support found.</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">Gravestone Doji</h4>
                    <p className="text-sm">Long upper shadow, bearish implications, resistance encountered.</p>
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

export default ChartPattern;
