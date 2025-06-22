// src/components/RegisterIPOForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { Upload } from "lucide-react";
import { useState } from "react";

interface Props {
  onSuccess: () => void;
  onCancel: () => void;
}

export const RegisterIPOForm: React.FC<Props> = ({ onSuccess, onCancel }) => {
  const [form, setForm] = useState({
    companyName: "",
    priceBand: "",
    openDate: "",
    closeDate: "",
    issueSize: "",
    issueType: "book-built",
    listingDate: "",
    status: "coming",
    ipoPrice: "",
    listingPrice: "",
    listingGain: "",
    currentMarketPrice: "",
    currentReturn: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSelectChange = (id: string, value: string) => {
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8000/api/ipos/register", {
        company_name: form.companyName,
        price_band: form.priceBand,
        open_date: form.openDate,
        close_date: form.closeDate,
        issue_size: form.issueSize,
        issue_type: form.issueType,
        listing_date: form.listingDate,
        status: form.status,
        ipo_price: parseFloat(form.ipoPrice),
        listing_price: parseFloat(form.listingPrice),
        listing_gain: parseFloat(form.listingGain),
        current_market_price: parseFloat(form.currentMarketPrice),
        current_return: parseFloat(form.currentReturn),
      });
      onSuccess();
    } catch (err) {
      console.error("Failed to register IPO", err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" value={form.companyName} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="priceBand">Price Band</Label>
          <Input id="priceBand" value={form.priceBand} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="openDate">Open Date</Label>
          <Input id="openDate" type="date" value={form.openDate} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="closeDate">Close Date</Label>
          <Input id="closeDate" type="date" value={form.closeDate} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="issueSize">Issue Size</Label>
          <Input id="issueSize" value={form.issueSize} onChange={handleChange} />
        </div>
        <div>
          <Label>Issue Type</Label>
          <Select value={form.issueType} onValueChange={(val) => handleSelectChange("issueType", val)}>
            <SelectTrigger><SelectValue placeholder="Issue Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="book-built">Book Built</SelectItem>
              <SelectItem value="fixed-price">Fixed Price</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="listingDate">Listing Date</Label>
          <Input id="listingDate" type="date" value={form.listingDate} onChange={handleChange} />
        </div>
        <div>
          <Label>Status</Label>
          <Select value={form.status} onValueChange={(val) => handleSelectChange("status", val)}>
            <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="coming">Coming</SelectItem>
              <SelectItem value="ongoing">Ongoing</SelectItem>
              <SelectItem value="listed">Listed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="ipoPrice">IPO Price</Label>
          <Input id="ipoPrice" value={form.ipoPrice} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="listingPrice">Listing Price</Label>
          <Input id="listingPrice" value={form.listingPrice} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="listingGain">Listing Gain (%)</Label>
          <Input id="listingGain" value={form.listingGain} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="currentMarketPrice">Current Market Price</Label>
          <Input id="currentMarketPrice" value={form.currentMarketPrice} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="currentReturn">Current Return (%)</Label>
          <Input id="currentReturn" value={form.currentReturn} onChange={handleChange} />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
          <Upload className="w-4 h-4 mr-2" />
          Register IPO
        </Button>
      </div>
    </div>
  );
};
