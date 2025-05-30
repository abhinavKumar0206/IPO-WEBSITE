
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Investments",
    value: "₹2,45,000",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active IPOs",
    value: "12",
    change: "+3",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Portfolio Value",
    value: "₹3,78,500",
    change: "-2.1%",
    trend: "down",
    icon: TrendingDown,
  },
  {
    title: "Subscriptions",
    value: "8",
    change: "+2",
    trend: "up",
    icon: Users,
  },
];

export const DashboardStats = () => {
  return (
    <div className="space-y-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Icon className={`w-6 h-6 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
