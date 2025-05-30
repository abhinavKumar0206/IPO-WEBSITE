
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Active", value: 12, color: "#3B82F6" },
  { name: "Upcoming", value: 8, color: "#10B981" },
  { name: "Closed", value: 15, color: "#6B7280" },
];

export const MainBoardIPO = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Main Board IPO</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                startAngle={90}
                endAngle={450}
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
              <div className="text-2xl font-bold">{total}</div>
              <div className="text-sm text-gray-600">Total IPOs</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.map((item) => (
            <div key={item.name} className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium">{item.value}</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">{item.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
