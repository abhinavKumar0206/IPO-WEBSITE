import { Link } from "react-router-dom";

interface IPOCardProps {
  id: number;
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
  id,
  logo,
  company,
  priceRange,
  openDate,
  closeDate,
  issueSize,
  issueType,
  listingDate,
}: IPOCardProps) => {
  return (
    <Link to={`/ipos/${id}`} className="block hover:shadow-md transition-shadow duration-200">
      <div className="bg-white rounded-lg border p-4 space-y-2">
        <div className="text-4xl">{logo}</div>
        <h3 className="text-lg font-bold text-gray-900">{company}</h3>
        <p className="text-sm text-gray-500">{priceRange}</p>

        <div className="text-sm text-gray-700">
          <p><strong>Open:</strong> {openDate}</p>
          <p><strong>Close:</strong> {closeDate}</p>
          <p><strong>Issue Size:</strong> {issueSize}</p>
          <p><strong>Issue Type:</strong> {issueType}</p>
          <p><strong>Listing:</strong> {listingDate}</p>
        </div>
      </div>
    </Link>
  );
};
