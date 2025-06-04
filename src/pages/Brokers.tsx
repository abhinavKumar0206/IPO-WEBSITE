
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Users, CheckCircle, Info } from "lucide-react";

interface BrokerData {
  name: string;
  rating: number;
  reviews: string;
  accounts: string;
  logoColor: string;
  features: string[];
  charges: {
    accountOpening: string;
    maintenance: string;
    delivery: string;
    intraday: string;
  };
}

const brokersData: BrokerData[] = [
  {
    name: "Upstox",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-purple-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "AngelOne",
    rating: 4.0,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-orange-500",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Groww",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-green-500",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Dhan",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-green-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Alice Blue",
    rating: 4.0,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-blue-500",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Axis Direct",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-purple-700",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Fyers",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-blue-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Geojit",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-teal-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "HDFC Securities",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-blue-700",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "IIFL Securities",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-indigo-800",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Kotak Securities",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-red-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Motilal Oswal",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-yellow-500",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Nuvama",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-red-500",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Paytm Money",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-blue-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "SBI Securities",
    rating: 4.5,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-blue-800",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "Sharekhan",
    rating: 4.0,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-orange-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "SMC Global",
    rating: 4.0,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-green-700",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
  },
  {
    name: "5Paisa",
    rating: 4.0,
    reviews: "15K",
    accounts: "50.2K",
    logoColor: "bg-pink-600",
    features: ["Equity", "Commodity", "Currency", "Futures", "Options"],
    charges: {
      accountOpening: "₹ Rs. 0",
      maintenance: "₹300",
      delivery: "₹20",
      intraday: "₹20"
    }
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
    <Card className="h-full">
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
                <Button variant="outline" size="sm">Open A/C ✈</Button>
                <Button variant="link" size="sm">Learn More</Button>
              </div>
            </div>
          </div>
          
          <div className={`w-24 h-16 ${broker.logoColor} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-bold text-lg">{broker.name.charAt(0)}</span>
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
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-2">
            <h1 className="text-3xl font-bold text-purple-600 mb-2">
              Made to<span className="text-green-500">Trade</span>
            </h1>
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
