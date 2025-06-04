
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Users, CheckCircle, Info } from "lucide-react";
import { Header } from "@/components/Header";

interface BrokerData {
  name: string;
  rating: number;
  reviews: string;
  accounts: string;
  logoUrl: string;
  features: string[];
  charges: {
    accountOpening: string;
    maintenance: string;
    delivery: string;
    intraday: string;
  };
  description: string;
}

const brokersData: BrokerData[] = [
  {
    name: "Upstox",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    },
    description: "Modern discount broker with advanced trading platform"
  },
  {
    name: "Zerodha",
    rating: 4.8,
    reviews: "25K",
    accounts: "80.5K",
    logoUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹300",
      delivery: "₹0",
      intraday: "₹20"
    },
    description: "India's largest discount broker with transparent pricing"
  },
  {
    name: "AngelOne",
    rating: 4.0,
    reviews: "18K",
    accounts: "65.2K",
    logoUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹240",
      delivery: "₹0",
      intraday: "₹20"
    },
    description: "Full-service broker with comprehensive research"
  },
  {
    name: "Groww",
    rating: 4.5,
    reviews: "12K",
    accounts: "40.8K",
    logoUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹300",
      delivery: "₹0",
      intraday: "₹20"
    },
    description: "User-friendly platform for beginners and experienced traders"
  },
  {
    name: "Dhan",
    rating: 4.4,
    reviews: "8K",
    accounts: "25.2K",
    logoUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹0",
      delivery: "₹0",
      intraday: "₹20"
    },
    description: "Advanced trading platform with zero AMC"
  },
  {
    name: "Alice Blue",
    rating: 4.0,
    reviews: "10K",
    accounts: "35.5K",
    logoUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹300",
      delivery: "₹0",
      intraday: "₹15"
    },
    description: "Technology-driven discount broker"
  },
  {
    name: "HDFC Securities",
    rating: 4.2,
    reviews: "20K",
    accounts: "75.3K",
    logoUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹500",
      delivery: "₹25",
      intraday: "₹25"
    },
    description: "Full-service broker with comprehensive research and advisory"
  },
  {
    name: "ICICI Direct",
    rating: 4.1,
    reviews: "22K",
    accounts: "68.7K",
    logoUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=100&h=100&fit=crop&crop=center",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ 0",
      maintenance: "₹500",
      delivery: "₹25",
      intraday: "₹25"
    },
    description: "Established full-service broker with strong research"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const BrokerCard = ({ broker }: { broker: BrokerData }) => {
  return (
    <Card className="h-full bg-purple-50 border-purple-100">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{broker.name}</h3>
            <StarRating rating={broker.rating} />
            
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{broker.reviews} Reviews</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{broker.accounts} Accounts</span>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-900 mb-2">Open Demat A/c for FREE</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-white hover:bg-gray-50">
                  Open A/C ✈
                </Button>
                <Button variant="link" size="sm" className="text-purple-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-24 h-16 bg-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={broker.logoUrl} 
              alt={`${broker.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Trading Options</h4>
            <div className="space-y-2">
              {broker.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Charges</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">A/C Opening Charge</span>
                <span className="font-medium">{broker.charges.accountOpening}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Maintenance Charge</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{broker.charges.maintenance}</span>
                  <Info className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delivery Brokerage</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{broker.charges.delivery}</span>
                  <Info className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Intraday Brokerage</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{broker.charges.intraday}</span>
                  <Info className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Brokers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-purple-600">Made to</span>
              <span className="text-green-500">Trade</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Compare and choose the best broker for your trading needs. Open your demat account with zero charges.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {brokersData.map((broker) => (
            <BrokerCard key={broker.name} broker={broker} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Brokers;
