
import { Link } from 'react-router-dom';
import { OrderPanel } from '../components/OrderPanel';
import { TimeAndSales } from '../components/TimeAndSales';
import { TradingChart } from '../components/TradingChart';
import { TradingMetrics } from '../components/TradingMetrics';

const Trading = () => {
  // Mock user object; replace with actual user data as needed
  const user = { name: "User" };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-12 bg-black border-r border-gray-800 flex flex-col items-center py-4 space-y-6">
        {/* Logo/Brand */}
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        
        {/* Navigation Icons */}
        <div className="flex flex-col space-y-4">
          {/* Dashboard - Globe Icon */}
          <Link to="/dashboard" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </Link>
          
          {/* Trading (Active) - Graph Icon */}
          <div className="w-8 h-8 flex items-center justify-center text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polyline points="22,6 12,16 8,12 2,18"/>
              <path d="M16 6h6v6"/>
            </svg>
          </div>
          
          {/* Home */}
          <Link to="/" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </Link>
          
          {/* Menu/List */}
          <Link to="/finance-dashboard"> 
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </Link>
          
          {/* Portfolio */}
          <Link to="/signup" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </Link>
        </div>
        
        <div className="flex-1"></div>
        
        {/* Bottom Icons */}
        <div className="flex flex-col space-y-4">
          {/* Settings - Account */}
          <Link to="/settings" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </Link>
          
          {/* Mail */}
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </button>
          
          {/* Help */}
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <circle cx="12" cy="17" r="1"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="h-16 bg-black border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              <span className="text-white font-medium">{user?.name || "User"}</span>
              <span className="text-gray-400 text-sm">Account: 4453728892</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div>
                <span className="text-gray-400">Portfolio Balance</span>
                <div className="text-white font-medium">$623,098.17</div>
              </div>
              <div>
                <span className="text-gray-400">Available Funds</span>
                <div className="text-white font-medium">$122,912.50</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white text-sm w-64"
              />
              <svg className="absolute right-2 top-1.5 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="h-12 bg-gray-900 border-b border-gray-800 flex items-center px-6">
          <div className="flex space-x-6 text-sm">
            <button className="text-cyan-400 border-b border-cyan-400 pb-2">Chart</button>
            <button className="text-gray-400 hover:text-white">Options</button>
            <button className="text-gray-400 hover:text-white">News</button>
            <button className="text-gray-400 hover:text-white">Financials</button>
            <button className="text-gray-400 hover:text-white">Analysis</button>
            <button className="text-gray-400 hover:text-white">Risk Analysis</button>
            <button className="text-gray-400 hover:text-white">Releases</button>
            <button className="text-gray-400 hover:text-white">Notes</button>
            <button className="text-gray-400 hover:text-white">Profile</button>
            <button className="text-white bg-gray-700 px-3 py-1 rounded">Trade</button>
          </div>
          <div className="ml-auto">
            <button className="text-gray-400">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Trading Metrics */}
        <TradingMetrics />

        {/* Main Trading Layout */}
        <div className="flex-1 flex">
          {/* Chart Area */}
          <div className="flex-1">
            <TradingChart />
          </div>

          {/* Right Panel - Order Panel and Time & Sales */}
          <div className="w-80 flex flex-col">
            <div className="flex-1">
              <OrderPanel />
            </div>
            <div className="h-80 border-t border-gray-800">
              <TimeAndSales />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
