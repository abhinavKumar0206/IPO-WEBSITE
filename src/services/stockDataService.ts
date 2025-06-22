
interface StockData {
  company: string;
  symbol: string;
  open: string;
  high: string;
  low: string;
  prevClose: string;
  lte: string;
  change: string;
  changePercent: string;
  volume: string;
  value: string;
  week52High: string;
  week52Low: string;
  day30Change: string;
  today: string;
  id: number;
}

// NIFTY 50 company symbols
const NIFTY_50_SYMBOLS = [
  'RELIANCE.NS', 'TCS.NS', 'HDFCBANK.NS', 'INFY.NS', 'HINDUNILVR.NS',
  'ICICIBANK.NS', 'KOTAKBANK.NS', 'HDFC.NS', 'BHARTIARTL.NS', 'SBIN.NS',
  'BAJFINANCE.NS', 'ASIANPAINT.NS', 'MARUTI.NS', 'HCLTECH.NS', 'AXISBANK.NS',
  'LT.NS', 'DMART.NS', 'SUNPHARMA.NS', 'TITAN.NS', 'ULTRACEMCO.NS',
  'WIPRO.NS', 'NESTLEIND.NS', 'BAJAJFINSV.NS', 'NTPC.NS', 'TECHM.NS'
];

const COMPANY_NAMES = {
  'RELIANCE.NS': 'Reliance Industries',
  'TCS.NS': 'Tata Consultancy Services',
  'HDFCBANK.NS': 'HDFC Bank',
  'INFY.NS': 'Infosys',
  'HINDUNILVR.NS': 'Hindustan Unilever',
  'ICICIBANK.NS': 'ICICI Bank',
  'KOTAKBANK.NS': 'Kotak Mahindra Bank',
  'HDFC.NS': 'HDFC',
  'BHARTIARTL.NS': 'Bharti Airtel',
  'SBIN.NS': 'State Bank of India',
  'BAJFINANCE.NS': 'Bajaj Finance',
  'ASIANPAINT.NS': 'Asian Paints',
  'MARUTI.NS': 'Maruti Suzuki',
  'HCLTECH.NS': 'HCL Technologies',
  'AXISBANK.NS': 'Axis Bank',
  'LT.NS': 'Larsen & Toubro',
  'DMART.NS': 'Avenue Supermarts',
  'SUNPHARMA.NS': 'Sun Pharmaceutical',
  'TITAN.NS': 'Titan Company',
  'ULTRACEMCO.NS': 'UltraTech Cement',
  'WIPRO.NS': 'Wipro',
  'NESTLEIND.NS': 'Nestle India',
  'BAJAJFINSV.NS': 'Bajaj Finserv',
  'NTPC.NS': 'NTPC',
  'TECHM.NS': 'Tech Mahindra'
};

// Base prices for realistic stock data simulation
const BASE_STOCK_PRICES = {
  'RELIANCE.NS': 2850,
  'TCS.NS': 4200,
  'HDFCBANK.NS': 1650,
  'INFY.NS': 1850,
  'HINDUNILVR.NS': 2400,
  'ICICIBANK.NS': 1200,
  'KOTAKBANK.NS': 1750,
  'HDFC.NS': 2900,
  'BHARTIARTL.NS': 1100,
  'SBIN.NS': 750,
  'BAJFINANCE.NS': 7200,
  'ASIANPAINT.NS': 2800,
  'MARUTI.NS': 11500,
  'HCLTECH.NS': 1650,
  'AXISBANK.NS': 1100,
  'LT.NS': 3600,
  'DMART.NS': 3800,
  'SUNPHARMA.NS': 1200,
  'TITAN.NS': 3200,
  'ULTRACEMCO.NS': 9500,
  'WIPRO.NS': 550,
  'NESTLEIND.NS': 2200,
  'BAJAJFINSV.NS': 1650,
  'NTPC.NS': 350,
  'TECHM.NS': 1700
};

export class StockDataService {
  static async fetchNifty50Data(): Promise<StockData[]> {
    console.log('Generating realistic NIFTY 50 stock data...');
    
    // Since direct API calls are blocked by CORS, we'll generate realistic market data
    // In a production environment, you would use a proxy server or a different API
    const stockData = NIFTY_50_SYMBOLS.map((symbol, index) => {
      const basePrice = BASE_STOCK_PRICES[symbol as keyof typeof BASE_STOCK_PRICES] || 1000;
      
      // Generate realistic intraday price movements
      const openVariation = (Math.random() - 0.5) * 0.02; // ±1% from base
      const open = basePrice * (1 + openVariation);
      
      // High and Low based on typical intraday volatility
      const volatility = Math.random() * 0.03 + 0.005; // 0.5% to 3.5% volatility
      const high = open * (1 + volatility * Math.random());
      const low = open * (1 - volatility * Math.random());
      
      // Current price (LTE) between high and low
      const lte = low + (high - low) * Math.random();
      
      // Previous close slightly different from open
      const prevClose = open * (1 + (Math.random() - 0.5) * 0.01);
      
      // Calculate change and percentage
      const change = lte - prevClose;
      const changePercent = (change / prevClose) * 100;
      
      // Generate realistic volume (in crores)
      const baseVolume = Math.random() * 50 + 5; // 5-55 crores
      const volume = baseVolume;
      
      // Calculate value (price * volume)
      const value = (lte * volume * 10000000) / 10000000; // Convert to crores
      
      // 52-week high/low
      const week52High = basePrice * (1.2 + Math.random() * 0.3); // 20-50% above base
      const week52Low = basePrice * (0.7 - Math.random() * 0.2); // 50-70% of base
      
      // 30-day change
      const day30Change = (Math.random() - 0.5) * 20; // ±10%
      
      return {
        id: index + 1,
        company: COMPANY_NAMES[symbol as keyof typeof COMPANY_NAMES] || symbol.replace('.NS', ''),
        symbol,
        open: open.toFixed(2),
        high: high.toFixed(2),
        low: low.toFixed(2),
        prevClose: prevClose.toFixed(2),
        lte: lte.toFixed(2),
        change: change.toFixed(2),
        changePercent: changePercent.toFixed(2),
        volume: volume.toFixed(2),
        value: value.toFixed(2),
        week52High: week52High.toFixed(2),
        week52Low: week52Low.toFixed(2),
        day30Change: day30Change.toFixed(2),
        today: 'graph'
      };
    });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Realistic stock data generated successfully');
    return stockData;
  }
}
