
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
    company: "Adani Power",
    priceRange: "₹ 329 - 136",
    openDate: "2023-06-03",
    closeDate: "2024-06-05",
    issueSize: "45530.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing"
  },
  {
    id: "2",
    company: "VBL LTD",
    priceRange: "₹ 229 - 136",
    openDate: "2024-06-03",
    closeDate: "2024-06-05",
    issueSize: "1350.15 Cr.",
    issueType: "Book Built",
    listingDate: "2018-06-10",
    status: "Comming"
  },
  {
    id: "3",
    company: "Tata Motor",
    priceRange: "₹ 12549 - 136",
    openDate: "2024-06-03",
    closeDate: "2024-06-05",
    issueSize: "1340.15 Cr.",
    issueType: "Book Built",
    listingDate: "2016-06-10",
    status: "New Listed"
  },
  {
    id: "4",
    company: "HDFC LTD",
    priceRange: "₹ 1244 - 136",
    openDate: "2024-06-03",
    closeDate: "2024-06-05",
    issueSize: "830.15 Cr.",
    issueType: "Book Built",
    listingDate: "2029-06-11",
    status: "Comming"
  },
  {
    id: "5",
    company: "Tata Motor",
    priceRange: "₹ 629 - 136",
    openDate: "2024-06-01",
    closeDate: "2024-06-05",
    issueSize: "820.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing"
  },
  {
    id: "6",
    company: "Reliance Industries",
    priceRange: "₹ 1500 - 1800",
    openDate: "2024-07-01",
    closeDate: "2024-07-05",
    issueSize: "5000.15 Cr.",
    issueType: "Book Built",
    listingDate: "2024-07-10",
    status: "Comming"
  },
  {
    id: "7",
    company: "Infosys Ltd",
    priceRange: "₹ 2200 - 2500",
    openDate: "2024-08-01",
    closeDate: "2024-08-05",
    issueSize: "3500.15 Cr.",
    issueType: "Book Built",
    listingDate: "2024-08-10",
    status: "New Listed"
  },
  {
    id: "8",
    company: "TCS Limited",
    priceRange: "₹ 3000 - 3500",
    openDate: "2024-09-01",
    closeDate: "2024-09-05",
    issueSize: "7500.15 Cr.",
    issueType: "Book Built",
    listingDate: "2024-09-10",
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
