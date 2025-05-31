
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Upcomming", value: 15, color: "#3B82F6" },
  { name: "New Listed", value: 26, color: "#8B5CF6" },
  { name: "Ongoing", value: 2, color: "#10B981" },
];

export const MainBoardIPO = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Main Board IPO</CardTitle>
          <p className="text-sm text-gray-500">From 01 Jan 2024</p>
        </div>
        <Button variant="link" className="text-blue-600 text-sm">
          View Report
        </Button>
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
            <div className="text-center bg-blue-600 text-white rounded-lg p-4">
              <div className="text-xs">Afternoon</div>
              <div className="text-xs">IPO Pick & BSE</div>
              <div className="text-2xl font-bold">15</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm font-medium">15</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">Upcomming</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm font-medium">26</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">New Listed</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium">2</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">Ongoing</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
