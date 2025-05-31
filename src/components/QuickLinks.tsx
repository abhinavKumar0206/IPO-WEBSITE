
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const links = [
  { 
    name: "NSE India", 
    url: "https://www.nseindia.com", 
    description: "Adipisicing elit, sed do eiusmod tempor",
    icon: "🔶"
  },
  { 
    name: "BSE India", 
    url: "https://www.bseindia.com", 
    description: "Adipisicing elit, sed do eiusmod tempor",
    icon: "📊"
  },
  { 
    name: "SEBI", 
    url: "https://www.sebi.gov.in", 
    description: "Adipisicing elit, sed do eiusmod tempor",
    icon: "🏛️"
  },
  { 
    name: "Money Control", 
    url: "https://www.moneycontrol.com", 
    description: "Adipisicing elit, sed do eiusmod tempor",
    icon: "💰"
  },
];

export const QuickLinks = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Links</CardTitle>
        <p className="text-sm text-gray-500">Adipisicing elit, sed do eiusmod tempor</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {links.map((link) => (
          <div key={link.name} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Visit Now
              </a>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
