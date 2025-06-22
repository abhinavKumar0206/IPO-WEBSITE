import ManageIPO from "@/pages/ManageIPO";
import ViewIPO from "@/pages/ViewIPO";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Analytics from "./pages/Analytics";
import Blogs from "./pages/Blogs";
import BrokerComparison from "./pages/BrokerComparison";
import Brokers from "./pages/Brokers";
import CandlestickPatterns from "./pages/CandlestickPatterns";
import Careers from "./pages/Careers";
import ChartPatterns from "./pages/ChartPatterns";
import Community from "./pages/Community";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Detailed from "./pages/Detailed";
import FinanceDashboard from "./pages/FinanceDashboard";
import Index from "./pages/Index";
import IPO from "./pages/IPO";
import IPODetails from "./pages/IPODetails";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import MovingAverages from "./pages/MovingAverages";
import MutualFunds from "./pages/MutualFunds";
import Products from "./pages/Products";
import Sector from "./pages/Sector";
import SettingsPage from "./pages/Settings";
import SharkInvestors from "./pages/SharkInvestors";
import Signup from "./pages/Signup";
import StockSchool from "./pages/StockSchool";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import TechnicalBasics from "./pages/TechnicalBasics";
import TechnicalIndicators from "./pages/TechnicalIndicators";
import Trading from "./pages/Trading";
import TradingDashboard from "./pages/TradingDashboard";


const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Index />} />
      <Route path="/ipos" element={<Index />} />
      <Route path="/ipo/:id" element={<ViewIPO />} />
      <Route path="/manage-ipo" element={<ManageIPO />} />
      <Route path="*" element={<NotFound />} /> */}
      <Route path="/ipos" element={<ManageIPO />} />
      <Route path="/ipo/:id" element={<ViewIPO />} />
      <Route path="/ipos/:id" element={<Detailed />} />

      <Route path="/ipo" element={<IPO />} />
      <Route path="/view-all" element={<Index />} /> 
      <Route path="/" element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shark-investors" element={<SharkInvestors />} />
      <Route path="/brokers" element={<Brokers />} />
      <Route path="/broker-comparison" element={<BrokerComparison />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/finance-dashboard" element={<FinanceDashboard />} />
      <Route path="/trading-dashboard" element={<TradingDashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/mutual-fund" element={<MutualFunds />} />
      <Route path="/stock-school" element={<StockSchool />} />
      <Route path="/sectors" element={<Sector />} />  
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/community" element={<Community />} />
      <Route path="/products" element={<Products />} />
      <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
      <Route path="/TradingDashboard" element={<TradingDashboard />} />
      <Route path="/Trading" element={<Trading />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/ipo/inox-india-ipo" element={<IPODetails />} />
      <Route path="/technical-basics" element={<TechnicalBasics />} />
      <Route path="/candlestick-charts" element={<CandlestickPatterns />} />
      <Route path="/moving-averages" element={<MovingAverages />} />
      <Route path="/technical-indicators" element={<TechnicalIndicators />} />
      <Route path="/chart-patterns" element={<ChartPatterns />} />
      
      {/* Uncomment the line below to enable ManageIPO page */}
      {/* <Route path="/manage-ipo" element={<ManageIPO />} /> */}
      
      {/* Uncomment the line below to enable ManageIPO page */}
      {/* <Route path="/manage-ipo" element={<ManageIPO />} /> */}
      
      {/* Uncomment the line below to enable ManageIPO page */}
      {/* <Route path="/manage-ipo" element={<ManageIPO />} /> */}
      
      {/* Uncomment the line below to enable ManageIPO page */}
      {/* <Route path="/manage-ipo" element={<ManageIPO />} /> */}
      {/* Uncomment the line below to enable ManageIPO page */}
      {/* <Route path="/manage-ipo" element={<ManageIPO />} /> */}
    </Routes>
  );
};

export default App;
