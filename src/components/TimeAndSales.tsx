
export const TimeAndSales = () => {
  const trades = [
    { time: '16:59:32', price: '420.56', size: '25' },
    { time: '16:59:32', price: '420.56', size: '25' },
    { time: '16:59:32', price: '420.56', size: '25' },
    { time: '16:59:32', price: '420.56', size: '25' },
    { time: '16:59:32', price: '420.56', size: '25' },
    { time: '16:59:32', price: '420.56', size: '25' },
    { time: '16:59:32', price: '420.56', size: '25' },
    { time: '16:59:32', price: '420.56', size: '25' }
  ];

  return (
    <div className="h-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">Time & Sales</h3>
        <button className="text-gray-400">≡</button>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-4 text-xs font-medium text-gray-400 pb-2 border-b border-gray-800">
          <div>Time</div>
          <div className="text-right">Price</div>
          <div className="text-right">Size</div>
        </div>
        
        {trades.map((trade, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 text-sm py-1">
            <div className="text-gray-400">{trade.time}</div>
            <div className="text-right text-white">{trade.price}</div>
            <div className="text-right text-white">{trade.size}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
