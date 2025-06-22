import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IPO {
  ipo_id: number;
  company_name: string;
  price_band: string;
  open_date: string;
  close_date: string;
  issue_size: string;
  issue_type: string;
  listing_date: string;
  status: string;
}

export const IPOTable = () => {
  const [ipos, setIpos] = useState<IPO[]>([]);

  const fetchIPOs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/ipos");
      setIpos(res.data);
    } catch (err) {
      console.error("Failed to fetch IPOs", err);
    }
  };

  const handleDelete = async (ipo_id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this IPO?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/ipo/${ipo_id}`);
      setIpos((prev) => prev.filter((ipo) => ipo.ipo_id !== ipo_id));
      alert("IPO deleted successfully.");
    } catch (err) {
      console.error("Failed to delete IPO", err);
      alert("Error deleting IPO. Check console for details.");
    }
  };

  useEffect(() => {
    fetchIPOs();
  }, []);

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">IPO Listings</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Price Band</TableHead>
            <TableHead>Open Date</TableHead>
            <TableHead>Close Date</TableHead>
            <TableHead>Issue Size</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ipos.map((ipo) => (
            <TableRow key={ipo.ipo_id}>
              <TableCell>{ipo.company_name}</TableCell>
              <TableCell>{ipo.price_band}</TableCell>
              <TableCell>{new Date(ipo.open_date).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(ipo.close_date).toLocaleDateString()}</TableCell>
              <TableCell>{ipo.issue_size}</TableCell>
              <TableCell>
                <Badge variant="secondary">{ipo.status}</Badge>
              </TableCell>
              <TableCell className="space-x-2">
                <Link to={`/ipo/${ipo.ipo_id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(ipo.ipo_id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
