// Required imports
import { IPOTable } from "@/components/IPOTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { UserProfile } from "@/components/UserProfile";
import axios from "axios";
import {
  FileText,
  HelpCircle,
  Key,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
  { title: "Manage IPO", icon: FileText, url: "/ipos", active: true },
  { title: "IPO Subscription", icon: FileText, url: "#" },
  { title: "IPO Allotment", icon: FileText, url: "#" },
  { title: "IPO Home", icon: FileText, url: "/" },
  { title: "Settings", icon: Settings, url: "#" },
  { title: "API Manager", icon: Key, url: "#" },
  { title: "Accounts", icon: Users, url: "#" },
  { title: "Help", icon: HelpCircle, url: "#" },
];

const ManageIPO = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [formData, setFormData] = useState({
    company_name: "",
    price_band: "",
    open_date: "",
    close_date: "",
    issue_size: "",
    issue_type: "book-built",
    listing_date: "",
    status: "ongoing",
    ipo_price: "",
    listing_price: "",
    listing_gain: "",
    current_market_price: "",
    current_return: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/ipo/register", formData);
      alert("IPO Registered Successfully!");
      setShowRegisterForm(false);
      setFormData({
        company_name: "",
        price_band: "",
        open_date: "",
        close_date: "",
        issue_size: "",
        issue_type: "book-built",
        listing_date: "",
        status: "ongoing",
        ipo_price: "",
        listing_price: "",
        listing_gain: "",
        current_market_price: "",
        current_return: "",
      });
    } catch (error) {
      console.error("Error registering IPO:", error);
      alert("Error registering IPO. Check console.");
    }
  };

  const SidebarBrand = () => (
    <SidebarHeader className="p-4 border-b flex items-center space-x-3">
      <img src="/dp.jpg" alt="Logo" className="w-8 h-8 rounded" />
      <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
    </SidebarHeader>
  );

  if (showRegisterForm) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <Sidebar className="border-r bg-white">
            <SidebarBrand />
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.active}>
                          <Link to={item.url} className="flex items-center space-x-3 px-3 py-2">
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t text-xs text-gray-500 text-center">
              © 2024 BlueStock
            </SidebarFooter>
          </Sidebar>

          <SidebarInset className="flex-1 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Register IPO</h1>
              <div className="space-x-4">
                <Button onClick={() => setShowRegisterForm(false)} variant="outline">
                  Cancel
                </Button>
                <Button onClick={handleRegister} className="bg-blue-600 hover:bg-blue-700">
                  Register
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><Label>Company Name</Label><Input value={formData.company_name} onChange={(e) => handleChange("company_name", e.target.value)} /></div>
              <div><Label>Price Band</Label><Input value={formData.price_band} onChange={(e) => handleChange("price_band", e.target.value)} /></div>
              <div><Label>Open Date</Label><Input type="date" value={formData.open_date} onChange={(e) => handleChange("open_date", e.target.value)} /></div>
              <div><Label>Close Date</Label><Input type="date" value={formData.close_date} onChange={(e) => handleChange("close_date", e.target.value)} /></div>
              <div><Label>Issue Size</Label><Input value={formData.issue_size} onChange={(e) => handleChange("issue_size", e.target.value)} /></div>
              <div>
                <Label>Issue Type</Label>
                <Select value={formData.issue_type} onValueChange={(val) => handleChange("issue_type", val)}>
                  <SelectTrigger><SelectValue placeholder="Select Issue Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="book-built">Book Built</SelectItem>
                    <SelectItem value="fixed-price">Fixed Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label>Listing Date</Label><Input type="date" value={formData.listing_date} onChange={(e) => handleChange("listing_date", e.target.value)} /></div>
              <div>
                <Label>Status</Label>
                <Select value={formData.status} onValueChange={(val) => handleChange("status", val)}>
                  <SelectTrigger><SelectValue placeholder="Select Status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="coming">Coming</SelectItem>
                    <SelectItem value="new-listed">New Listed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label>IPO Price</Label><Input value={formData.ipo_price} onChange={(e) => handleChange("ipo_price", e.target.value)} /></div>
              <div><Label>Listing Price</Label><Input value={formData.listing_price} onChange={(e) => handleChange("listing_price", e.target.value)} /></div>
              <div><Label>Listing Gain (%)</Label><Input value={formData.listing_gain} onChange={(e) => handleChange("listing_gain", e.target.value)} /></div>
              <div><Label>CMP</Label><Input value={formData.current_market_price} onChange={(e) => handleChange("current_market_price", e.target.value)} /></div>
              <div><Label>Current Return (%)</Label><Input value={formData.current_return} onChange={(e) => handleChange("current_return", e.target.value)} /></div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r bg-white">
          <SidebarBrand />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.active}>
                        <Link to={item.url} className="flex items-center space-x-3 px-3 py-2">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t text-xs text-gray-500 text-center">
            © 2024 BlueStock
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Manage IPO</h1>
            <div className="flex items-center space-x-4">
              <Input placeholder="Search IPO" className="pl-10 w-64 bg-gray-50 border-gray-200" />
              <Button onClick={() => setShowRegisterForm(true)} className="bg-blue-600 hover:bg-blue-700">
                Register IPO
              </Button>
              <UserProfile />
            </div>
          </header>
          <main className="p-6 bg-gray-50">
            <IPOTable />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ManageIPO;
