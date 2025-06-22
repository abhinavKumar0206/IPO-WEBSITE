import axios from "axios";
import { useEffect, useState } from "react";
import { IPOCard } from "./IPOCard";

interface IPOItem {
  ipo_id: number;
  company_name: string;
  price_band: string;
  open_date: string;
  close_date: string;
  issue_size: string;
  issue_type: string;
  listing_date: string;
  company_logo: string;
}

export const IPOGrid = () => {
  const [ipos, setIpos] = useState<IPOItem[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/ipos")
      .then(res => setIpos(res.data))
      .catch(err => console.error("Error fetching IPOs:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {ipos.map((ipo) => (
        <IPOCard
          key={ipo.ipo_id}
          id={ipo.ipo_id}
          logo={ipo.company_logo || "📈"}
          company={ipo.company_name}
          priceRange={ipo.price_band}
          openDate={ipo.open_date}
          closeDate={ipo.close_date}
          issueSize={ipo.issue_size}
          issueType={ipo.issue_type}
          listingDate={ipo.listing_date}
        />
      ))}
    </div>
  );
};
