
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { time: '09:30', price: 395 },
  { time: '10:00', price: 385 },
  { time: '10:30', price: 390 },
  { time: '11:00', price: 400 },
  { time: '11:30', price: 398 },
  { time: '12:00', price: 410 },
  { time: '12:30', price: 406 },
  { time: '13:00', price: 415 },
  { time: '13:30', price: 420 },
  { time: '14:00', price: 425 },
  { time: '14:30', price: 418 },
  { time: '15:00', price: 430 },
  { time: '15:30', price: 428 },
  { time: '16:00', price: 406.32 }
];

const rsiData = [
  { time: 'Jan', value: 45 },
  { time: 'Feb', value: 52 },
  { time: 'Mar', value: 48 },
  { time: 'May', value: 65 },
  { time: 'Jun', value: 58 },
  { time: 'Jul', value: 42 },
  { time: 'Sep', value: 55 },
  { time: 'Oct', value: 48 },
  { time: 'Nov', value: 40 }
];

export const TradingChart = () => {
  return (
    <div className="h-full bg-gray-900 p-4">
      {/* Price Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-green-500">406.32</span>
          <span className="text-green-500">+0.26%</span>
          <span className="text-gray-400">After hours: 406.83 +0.27 +0.07%</span>
          <span className="text-gray-400">19:59 04/28 EDT</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Volume: 56,254,761</span>
        </div>
      </div>

      {/* OHLC Data */}
      <div className="flex items-center space-x-6 mb-4 text-sm">
        <span className="text-gray-400">Open <span className="text-white">408.36</span></span>
        <span className="text-gray-400">High <span className="text-white">409.36</span></span>
        <span className="text-gray-400">Low <span className="text-white">408.36</span></span>
        <span className="text-gray-400">Close <span className="text-white">406.86</span></span>
        <span className="text-green-500">+6.50 +2.14%</span>
        <span className="text-gray-400">Vol <span className="text-white">56,254,761</span></span>
      </div>

      {/* Main Chart */}
      <div className="h-96 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              domain={['dataMin - 10', 'dataMax + 10']}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <ReferenceLine y={427.63} stroke="#F59E0B" strokeDasharray="2 2" />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#06B6D4" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* RSI Chart */}
      <div className="h-32 border-t border-gray-800 pt-4">
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-cyan-500">RSI (6,14,24)</span>
          <span className="text-white">RSI 14:62:56</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rsiData}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              domain={[30, 80]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <ReferenceLine y={70} stroke="#EF4444" strokeDasharray="2 2" />
            <ReferenceLine y={30} stroke="#10B981" strokeDasharray="2 2" />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#06B6D4" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Time Frame Buttons */}
      <div className="flex space-x-2 mt-4">
        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">1m</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">5m</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">15m</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">30m</button>
        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">1h</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">2h</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">4h</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">D</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">W</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">M</button>
        <button className="px-3 py-1 text-gray-400 text-sm hover:text-white">All</button>
        <span className="text-gray-400 text-sm ml-4">2m ▼</span>
      </div>
    </div>
  );
};
