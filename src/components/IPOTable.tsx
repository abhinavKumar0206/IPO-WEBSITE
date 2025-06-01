
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash, Edit } from "lucide-react";

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
          {ipoData.map((ipo) => (
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
                  <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                    <Eye className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 py-4 border-t">
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 bg-blue-600 text-white hover:bg-blue-700">
          1
        </Button>
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
          2
        </Button>
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
          ...
        </Button>
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
          9
        </Button>
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
          10
        </Button>
        <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
          &gt;
        </Button>
      </div>
    </div>
  );
};
