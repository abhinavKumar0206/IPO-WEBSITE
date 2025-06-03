
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash } from "lucide-react";
import { Link } from "react-router-dom";

interface IPOData {
  id: string;
  company: string;
  priceRange: string;
  openDate: string;
  closeDate: string;
  issueSize: string;
  issueType: string;
  listingDate: string;
  status: "Ongoing" | "Comming" | "New Listed";
}

const ipoData: IPOData[] = [
  {
    id: "1",
    company: "Life Insurance Corporation of India (LIC)",
    priceRange: "₹ 902 - 949",
    openDate: "2022-05-04",
    closeDate: "2022-05-09",
    issueSize: "21008.00 Cr.",
    issueType: "Book Built",
    listingDate: "2022-05-17",
    status: "New Listed"
  },
  {
    id: "2",
    company: "Paytm (One97 Communications)",
    priceRange: "₹ 2080 - 2150",
    openDate: "2021-11-08",
    closeDate: "2021-11-10",
    issueSize: "18300.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-11-18",
    status: "New Listed"
  },
  {
    id: "3",
    company: "Zomato Limited",
    priceRange: "₹ 72 - 76",
    openDate: "2021-07-14",
    closeDate: "2021-07-16",
    issueSize: "9375.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-07-23",
    status: "New Listed"
  },
  {
    id: "4",
    company: "Nykaa (FSN E-Commerce Ventures)",
    priceRange: "₹ 1085 - 1125",
    openDate: "2021-10-28",
    closeDate: "2021-11-01",
    issueSize: "5352.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-11-10",
    status: "New Listed"
  },
  {
    id: "5",
    company: "PolicyBazaar (PB Fintech)",
    priceRange: "₹ 940 - 980",
    openDate: "2021-11-01",
    closeDate: "2021-11-03",
    issueSize: "5710.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-11-15",
    status: "New Listed"
  },
  {
    id: "6",
    company: "CarTrade Tech Limited",
    priceRange: "₹ 1618 - 1690",
    openDate: "2021-08-09",
    closeDate: "2021-08-11",
    issueSize: "2999.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-08-20",
    status: "New Listed"
  },
  {
    id: "7",
    company: "MapMyIndia (C.E. Info Systems)",
    priceRange: "₹ 1000 - 1033",
    openDate: "2021-12-09",
    closeDate: "2021-12-13",
    issueSize: "1040.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-12-21",
    status: "New Listed"
  },
  {
    id: "8",
    company: "Fino Payments Bank",
    priceRange: "₹ 554 - 577",
    openDate: "2021-10-29",
    closeDate: "2021-11-01",
    issueSize: "1330.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-11-12",
    status: "New Listed"
  },
  {
    id: "9",
    company: "Brookfield India Real Estate Trust",
    priceRange: "₹ 274 - 275",
    openDate: "2021-01-25",
    closeDate: "2021-01-27",
    issueSize: "3800.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-02-03",
    status: "New Listed"
  },
  {
    id: "10",
    company: "IRFC (Indian Railway Finance Corporation)",
    priceRange: "₹ 25 - 26",
    openDate: "2021-01-18",
    closeDate: "2021-01-20",
    issueSize: "4633.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-01-29",
    status: "New Listed"
  },
  {
    id: "11",
    company: "Home First Finance Company",
    priceRange: "₹ 517 - 518",
    openDate: "2021-01-21",
    closeDate: "2021-01-25",
    issueSize: "1154.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-02-03",
    status: "New Listed"
  },
  {
    id: "12",
    company: "Indigo Paints Limited",
    priceRange: "₹ 1480 - 1490",
    openDate: "2021-01-20",
    closeDate: "2021-01-22",
    issueSize: "1175.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-02-02",
    status: "New Listed"
  },
  {
    id: "13",
    company: "Nazara Technologies Limited",
    priceRange: "₹ 1100 - 1101",
    openDate: "2021-03-17",
    closeDate: "2021-03-19",
    issueSize: "583.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-03-30",
    status: "New Listed"
  },
  {
    id: "14",
    company: "Laxmi Organic Industries",
    priceRange: "₹ 129 - 130",
    openDate: "2021-03-15",
    closeDate: "2021-03-17",
    issueSize: "600.00 Cr.",
    issueType: "Book Built",
    listingDate: "2021-03-25",
    status: "New Listed"
  },
  {
    id: "15",
    company: "Upcoming Tech IPO",
    priceRange: "₹ 800 - 900",
    openDate: "2024-12-15",
    closeDate: "2024-12-17",
    issueSize: "2500.00 Cr.",
    issueType: "Book Built",
    listingDate: "2024-12-25",
    status: "Comming"
  },
  {
    id: "16",
    company: "Future Retail IPO",
    priceRange: "₹ 1200 - 1350",
    openDate: "2024-11-20",
    closeDate: "2024-11-22",
    issueSize: "3200.00 Cr.",
    issueType: "Book Built",
    listingDate: "2024-12-02",
    status: "Ongoing"
  }
];

const getStatusBadge = (status: IPOData["status"]) => {
  switch (status) {
    case "Ongoing":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ongoing</Badge>;
    case "Comming":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Comming</Badge>;
    case "New Listed":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">New Listed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export const IPOTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(ipoData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentIPOs = ipoData.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-700">Company</TableHead>
            <TableHead className="font-semibold text-gray-700">Price Band</TableHead>
            <TableHead className="font-semibold text-gray-700">Open</TableHead>
            <TableHead className="font-semibold text-gray-700">Close</TableHead>
            <TableHead className="font-semibold text-gray-700">ISSUE SIZE</TableHead>
            <TableHead className="font-semibold text-gray-700">ISSUE Type</TableHead>
            <TableHead className="font-semibold text-gray-700">Listing Date</TableHead>
            <TableHead className="font-semibold text-gray-700">Status</TableHead>
            <TableHead className="font-semibold text-gray-700">Action</TableHead>
            <TableHead className="font-semibold text-gray-700">Delete/View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentIPOs.map((ipo) => (
            <TableRow key={ipo.id} className="hover:bg-gray-50">
              <TableCell className="font-medium">{ipo.company}</TableCell>
              <TableCell>{ipo.priceRange}</TableCell>
              <TableCell>{ipo.openDate}</TableCell>
              <TableCell>{ipo.closeDate}</TableCell>
              <TableCell>{ipo.issueSize}</TableCell>
              <TableCell>{ipo.issueType}</TableCell>
              <TableCell>{ipo.listingDate}</TableCell>
              <TableCell>{getStatusBadge(ipo.status)}</TableCell>
              <TableCell>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-1 h-8 w-8" asChild>
                    <Link to={`/ipo/${ipo.id}`}>
                      <Eye className="h-4 w-4 text-gray-500" />
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 py-4 border-t">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-8 h-8 p-0"
          onClick={goToPrevious}
          disabled={currentPage === 1}
        >
          &lt;
        </Button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant="ghost"
            size="sm"
            className={`w-8 h-8 p-0 ${
              currentPage === page 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "hover:bg-gray-100"
            }`}
            onClick={() => goToPage(page)}
          >
            {page}
          </Button>
        ))}
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-8 h-8 p-0"
          onClick={goToNext}
          disabled={currentPage === totalPages}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};
