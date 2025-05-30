
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const links = [
  { name: "NSE India", url: "https://www.nseindia.com", description: "National Stock Exchange" },
  { name: "BSE India", url: "https://www.bseindia.com", description: "Bombay Stock Exchange" },
  { name: "SEBI", url: "https://www.sebi.gov.in", description: "Securities and Exchange Board" },
  { name: "Money Control", url: "https://www.moneycontrol.com", description: "Financial News & Analysis" },
];

export const QuickLinks = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {links.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            className="w-full justify-between h-auto p-3"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="text-left">
                <div className="font-medium">{link.name}</div>
                <div className="text-xs text-gray-500">{link.description}</div>
              </div>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
