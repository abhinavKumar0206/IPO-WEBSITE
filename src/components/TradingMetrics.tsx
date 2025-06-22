
export const TradingMetrics = () => {
  return (
    <div className="bg-gray-900 border-b border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">MSFT</span>
                <span className="text-gray-400">Microsoft Corp NASDAQ</span>
                <div className="flex items-center space-x-1">
                  <span className="w-4 h-4 bg-gray-600 rounded-full"></span>
                  <span className="w-4 h-4 bg-gray-600 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-8 text-sm">
          <div className="text-right">
            <div className="text-gray-400">Open</div>
            <div className="text-white font-medium">401.23</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">Low</div>
            <div className="text-white font-medium">400.10</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">High</div>
            <div className="text-white font-medium">408.36</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">52 wk high</div>
            <div className="text-white font-medium">430.86</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">52 wk low</div>
            <div className="text-white font-medium">273.13</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">Avg Vol (3M)</div>
            <div className="text-white font-medium">21.73M</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">Shares Outstanding</div>
            <div className="text-white font-medium">7.43B</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">Mkt Cap</div>
            <div className="text-white font-medium">3.02T</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">P/E</div>
            <div className="text-white font-medium">0.74%</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400">View all</div>
            <div className="text-cyan-500">→</div>
          </div>
        </div>
      </div>
    </div>
  );
};
