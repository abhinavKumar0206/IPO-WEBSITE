
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupTrading from "./pages/SignupTrading";
import TradingDashboard from "./pages/TradingDashboard";
import FinanceDashboard from "./pages/FinanceDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import SharkInvestors from "./pages/SharkInvestors";
import Dashboard from "./pages/Dashboard";
import ManageIPO from "./pages/ManageIPO";
import ViewIPO from "./pages/ViewIPO";
import BrokerComparison from "./pages/BrokerComparison";
import Brokers from "./pages/Brokers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup-trading" element={<SignupTrading />} />
            <Route path="/trading-dashboard" element={<TradingDashboard />} />
            <Route path="/finance-dashboard" element={<FinanceDashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/shark-investors" element={<SharkInvestors />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-ipo" element={<ManageIPO />} />
            <Route path="/ipo/:id" element={<ViewIPO />} />
            <Route path="/broker-comparison" element={<BrokerComparison />} />
            <Route path="/brokers" element={<Brokers />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
