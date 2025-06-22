
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export const OrderPanel = () => {
  const [orderType, setOrderType] = useState('Market Price');
  const [quantity, setQuantity] = useState('100');
  const [stopPrice, setStopPrice] = useState('400.00');
  const [timeInForce, setTimeInForce] = useState('Day');
  const [stopPriceEnabled, setStopPriceEnabled] = useState(true);

  return (
    <div className="w-80 bg-gray-900 border-l border-gray-800 p-4">
      {/* Buy/Sell Toggle */}
      <div className="flex space-x-2 mb-6">
        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">Buy</Button>
        <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800">Sell</Button>
      </div>

      <div className="space-y-4">
        {/* Order Type */}
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Order Type</label>
          <Select value={orderType} onValueChange={setOrderType}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="Market Price">Market Price</SelectItem>
              <SelectItem value="Limit">Limit</SelectItem>
              <SelectItem value="Stop">Stop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quantity */}
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Quantity (Shares)</label>
          <div className="flex space-x-2">
            <Input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="flex-1 bg-gray-800 border-gray-700 text-white"
            />
            <Button variant="outline" size="sm" className="px-3 border-gray-600 text-gray-300">10</Button>
            <Button variant="outline" size="sm" className="px-3 border-gray-600 text-gray-300">50</Button>
            <Button variant="outline" size="sm" className="px-3 border-gray-600 text-gray-300">100</Button>
            <Button variant="outline" size="sm" className="px-3 border-gray-600 text-gray-300">500</Button>
          </div>
        </div>

        {/* Time-in-Force */}
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Time-in-Force</label>
          <Select value={timeInForce} onValueChange={setTimeInForce}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="Day">Day</SelectItem>
              <SelectItem value="GTC">GTC</SelectItem>
              <SelectItem value="IOC">IOC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stop Price Toggle */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-400">Stop Price</label>
          <Switch
            checked={stopPriceEnabled}
            onCheckedChange={setStopPriceEnabled}
          />
        </div>

        {/* Stop Price Input */}
        {stopPriceEnabled && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white">$</span>
            <Input
              value={stopPrice}
              onChange={(e) => setStopPrice(e.target.value)}
              className="flex-1 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        )}

        {/* Summary */}
        <div className="border-t border-gray-800 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Est. Loss:</span>
            <span className="text-red-500">12,097.36</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Buying Power</span>
            <span className="text-white">$112,912.50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Transaction Fees</span>
            <span className="text-white">$4.00</span>
          </div>
          <div className="flex justify-between text-sm font-bold">
            <span className="text-gray-400">Estimated Total</span>
            <span className="text-white">$40,000</span>
          </div>
        </div>

        {/* Buy Button */}
        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 h-12 text-lg font-medium text-black">
          Buy MSFT
        </Button>

        {/* Disclaimer */}
        <button className="w-full text-sm text-gray-400 hover:text-white flex items-center justify-center space-x-1">
          <span>Disclaimer</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
