
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IPOCardProps {
  logo: string;
  company: string;
  priceRange: string;
  openDate: string;
  closeDate: string;
  issueSize: string;
  issueType: string;
  listingDate: string;
}

export const IPOCard = ({
  logo,
  company,
  priceRange,
  openDate,
  closeDate,
  issueSize,
  issueType,
  listingDate
}: IPOCardProps) => {
  const isNotIssued = priceRange === "Not Issued";
  
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl">
            {logo}
          </div>
          <h3 className="font-semibold text-gray-900 text-lg">{company}</h3>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Price Band</p>
              <p className="font-semibold text-gray-900">{priceRange}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Open</p>
              <p className="font-semibold text-gray-900">{openDate}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Close</p>
              <p className="font-semibold text-gray-900">{closeDate}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Issue Size</p>
              <p className="font-semibold text-gray-900">{issueSize}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Issue Type</p>
              <p className="font-semibold text-gray-900">{issueType}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Listing Date</p>
              <p className="font-semibold text-gray-900">{listingDate}</p>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50"
            disabled={isNotIssued}
          >
            RHP
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isNotIssued}
          >
            DRHP
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
