
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Listing Gains", value: 45, color: "#10B981" },
  { name: "Listing Loss", value: 25, color: "#EF4444" },
  { name: "Neutral", value: 30, color: "#6B7280" },
];

export const IPOAnalytics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">IPO Dashboard India</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">45%</div>
            <div className="text-sm text-gray-600">Listing Gains</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">25%</div>
            <div className="text-sm text-gray-600">Listing Loss</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">30%</div>
            <div className="text-sm text-gray-600">Neutral</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
