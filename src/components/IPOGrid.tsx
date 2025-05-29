
import { IPOCard } from "./IPOCard";

const ipoData = [
  {
    id: 1,
    logo: "🌟",
    company: "Nova Agritech Ltd.",
    priceRange: "Rs 39 - 41",
    openDate: "2024-01-22",
    closeDate: "2024-01-24",
    issueSize: "143.81 Cr.",
    issueType: "Book Built",
    listingDate: "2024-01-30"
  },
  {
    id: 2,
    logo: "📦",
    company: "EPACK Durable Ltd.",
    priceRange: "Rs 218 - 230",
    openDate: "2024-01-19",
    closeDate: "2024-01-23",
    issueSize: "640.05 Cr.",
    issueType: "Book Built",
    listingDate: "2024-01-29"
  },
  {
    id: 3,
    logo: "🏢",
    company: "RK Swamy Ltd.",
    priceRange: "Not Issued",
    openDate: "Not Issued",
    closeDate: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Book Built",
    listingDate: "Not Issued"
  },
  {
    id: 4,
    logo: "🏨",
    company: "Oravel Stays Ltd.",
    priceRange: "Not Issued",
    openDate: "Not Issued",
    closeDate: "Not Issued",
    issueSize: "8430 Cr.",
    issueType: "Book Built",
    listingDate: "Not Issued"
  },
  {
    id: 5,
    logo: "🚗",
    company: "Imagine marketing Ltd.",
    priceRange: "Not Issued",
    openDate: "Not Issued",
    closeDate: "Not Issued",
    issueSize: "2000 cr.",
    issueType: "Book Built",
    listingDate: "Not Issued"
  },
  {
    id: 6,
    logo: "🏥",
    company: "Kids Clinic India Ltd.",
    priceRange: "Not Issued",
    openDate: "Not Issued",
    closeDate: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Book Built",
    listingDate: "Not Issued"
  }
];

export const IPOGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {ipoData.map((ipo) => (
        <IPOCard key={ipo.id} {...ipo} />
      ))}
    </div>
  );
};
