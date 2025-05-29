
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface InvestorCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const InvestorCard = ({ name, description, imageUrl }: InvestorCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="text-center pb-4">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          View Holdings
        </Button>
      </CardFooter>
    </Card>
  );
};
