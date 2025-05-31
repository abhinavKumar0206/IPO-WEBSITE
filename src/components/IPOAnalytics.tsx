
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "IPO in Loss", value: 9, color: "#A78BFA" },
  { name: "Total IPO", value: 30, color: "#FB923C" },
  { name: "IPO in Gain", value: 20, color: "#06B6D4" },
];

export const IPOAnalytics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">IPO Dashboard India</CardTitle>
        <div className="flex items-center text-sm text-green-600">
          <span className="mr-1">↗</span>
          <span className="font-medium">20 IPO in Gain</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">9</div>
              <div className="text-sm text-gray-600">IPO in Loss</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400" />
              <span className="text-sm font-medium">20</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">IPO in Gain</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-orange-400" />
              <span className="text-sm font-medium">30</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">Total IPO</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <span className="text-sm font-medium">9</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">IPO in Loss</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
