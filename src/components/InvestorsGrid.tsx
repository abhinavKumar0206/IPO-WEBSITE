
import { InvestorCard } from "./InvestorCard";

interface Investor {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface InvestorsGridProps {
  investors: Investor[];
  searchTerm: string;
}

export const InvestorsGrid = ({ investors, searchTerm }: InvestorsGridProps) => {
  const filteredInvestors = investors.filter(investor =>
    investor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredInvestors.map((investor) => (
        <InvestorCard
          key={investor.id}
          id={investor.id}
          name={investor.name}
          description={investor.description}
          imageUrl={investor.imageUrl}
        />
      ))}
    </div>
  );
};
