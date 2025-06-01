import { useState } from "react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IPOTable } from "@/components/IPOTable";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LayoutDashboard, FileText, Users, Settings, Key, HelpCircle, Search, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
  { title: "Manage IPO", icon: FileText, url: "/manage-ipo", active: true },
  { title: "IPO Subscription", icon: FileText, url: "#" },
  { title: "IPO Allotment", icon: FileText, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
  { title: "API Manager", icon: Key, url: "#" },
  { title: "Accounts", icon: Users, url: "#" },
  { title: "Help", icon: HelpCircle, url: "#" },
];

const ManageIPO = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [activeTab, setActiveTab] = useState("IPO Information");

  if (showRegisterForm) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <Sidebar className="border-r bg-white">
            <SidebarHeader className="p-4 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BS</span>
                </div>
                <span className="text-lg font-bold text-gray-900">Bluestock Fintech</span>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">MENU</h3>
              </div>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.slice(0, 4).map((item) => (
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
              
              <div className="px-4 py-2 mt-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">OTHERS</h3>
              </div>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.slice(4).map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
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
            
            <SidebarFooter className="p-4 border-t">
              <div className="text-xs text-gray-500 text-center">
                © 2024 BlueStock
              </div>
            </SidebarFooter>
          </Sidebar>
          
          <SidebarInset className="flex-1">
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold text-gray-900">Upcoming IPO Information</h1>
                <span className="text-gray-500">Manage your IPO Details</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search" 
                    className="pl-10 w-64 bg-gray-50 border-gray-200"
                  />
                </div>
                <Button 
                  onClick={() => setShowRegisterForm(false)}
                  variant="outline"
                  className="text-blue-600 border-blue-600"
                >
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Register
                </Button>
                <UserProfile />
              </div>
            </header>
            
            <main className="flex h-screen">
              {/* Left Sidebar Navigation */}
              <div className="w-80 bg-gray-50 border-r p-6">
                <div className="space-y-2">
                  <div
                    className={`p-3 rounded-lg cursor-pointer flex items-center space-x-3 ${
                      activeTab === "IPO Information" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("IPO Information")}
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-xs text-white">i</span>
                    </div>
                    <span className="font-medium">IPO Information</span>
                  </div>
                  <div
                    className={`p-3 rounded-lg cursor-pointer flex items-center space-x-3 ${
                      activeTab === "IPO Info" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("IPO Info")}
                  >
                    <div className="w-5 h-5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-medium">IPO Info</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-4xl">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">IPO Information</h2>
                    <p className="text-gray-600">Enter IPO Details</p>
                  </div>

                  <div className="bg-white rounded-lg border p-6 space-y-8">
                    {/* Company Logo Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Logo</h3>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">NSE India</h4>
                          <p className="text-sm text-gray-500">Tech Lead</p>
                          <p className="text-sm text-gray-500">Pune</p>
                        </div>
                        <div className="flex space-x-2 ml-auto">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Logo
                          </Button>
                          <Button variant="outline">Delete</Button>
                        </div>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2 block">
                          Company Name
                        </Label>
                        <Input 
                          id="companyName"
                          placeholder="Vodafone Idea"
                          defaultValue="Vodafone Idea"
                        />
                      </div>

                      <div>
                        <Label htmlFor="priceBand" className="text-sm font-medium text-gray-700 mb-2 block">
                          Price Band
                        </Label>
                        <Input 
                          id="priceBand"
                          placeholder="Not Issued"
                          defaultValue="Not Issued"
                        />
                      </div>

                      <div>
                        <Label htmlFor="open" className="text-sm font-medium text-gray-700 mb-2 block">
                          Open
                        </Label>
                        <Input 
                          id="open"
                          placeholder="Not Issued"
                          defaultValue="Not Issued"
                        />
                      </div>

                      <div>
                        <Label htmlFor="close" className="text-sm font-medium text-gray-700 mb-2 block">
                          Close
                        </Label>
                        <Input 
                          id="close"
                          placeholder="Not Issued"
                          defaultValue="Not Issued"
                        />
                      </div>

                      <div>
                        <Label htmlFor="issueSize" className="text-sm font-medium text-gray-700 mb-2 block">
                          Issue Size
                        </Label>
                        <Input 
                          id="issueSize"
                          placeholder="2300 Cr."
                          defaultValue="2300 Cr."
                        />
                      </div>

                      <div>
                        <Label htmlFor="issueType" className="text-sm font-medium text-gray-700 mb-2 block">
                          Issue Type
                        </Label>
                        <Select defaultValue="book-built">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Issue Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="book-built">Book Built</SelectItem>
                            <SelectItem value="fixed-price">Fixed Price</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="listingDate" className="text-sm font-medium text-gray-700 mb-2 block">
                          LISTING DATE
                        </Label>
                        <Input 
                          id="listingDate"
                          placeholder="Not Issued"
                          defaultValue="Not Issued"
                        />
                      </div>

                      <div>
                        <Label htmlFor="status" className="text-sm font-medium text-gray-700 mb-2 block">
                          Status
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                            <SelectItem value="coming">Coming</SelectItem>
                            <SelectItem value="new-listed">New Listed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* New Listed IPO Details Section */}
                    <div className="border-t pt-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="ipoPrice" className="text-sm font-medium text-gray-700 mb-2 block">
                            IPO PRICE
                          </Label>
                          <Input 
                            id="ipoPrice"
                            placeholder="₹ 383"
                            defaultValue="₹ 383"
                          />
                        </div>

                        <div>
                          <Label htmlFor="listingPrice" className="text-sm font-medium text-gray-700 mb-2 block">
                            LISTING PRICE
                          </Label>
                          <Input 
                            id="listingPrice"
                            placeholder="₹ 435"
                            defaultValue="₹ 435"
                          />
                        </div>

                        <div>
                          <Label htmlFor="listingGain" className="text-sm font-medium text-gray-700 mb-2 block">
                            LISTING GAIN
                          </Label>
                          <Input 
                            id="listingGain"
                            placeholder="13.58 %"
                            defaultValue="13.58 %"
                          />
                        </div>

                        <div>
                          <Label htmlFor="listingDateNew" className="text-sm font-medium text-gray-700 mb-2 block">
                            LISTING DATE
                          </Label>
                          <Input 
                            id="listingDateNew"
                            type="date"
                            defaultValue="2024-05-30"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cmp" className="text-sm font-medium text-gray-700 mb-2 block">
                            CMP
                          </Label>
                          <Input 
                            id="cmp"
                            placeholder="₹410"
                            defaultValue="₹410"
                          />
                        </div>

                        <div>
                          <Label htmlFor="currentReturn" className="text-sm font-medium text-gray-700 mb-2 block">
                            CURRENT RETURN
                          </Label>
                          <Input 
                            id="currentReturn"
                            placeholder="7.05 %"
                            defaultValue="7.05 %"
                          />
                        </div>

                        <div>
                          <Label htmlFor="rhp" className="text-sm font-medium text-gray-700 mb-2 block">
                            RHP
                          </Label>
                          <Input 
                            id="rhp"
                            placeholder="Enter RHP PDF Link"
                          />
                        </div>

                        <div>
                          <Label htmlFor="drhp" className="text-sm font-medium text-gray-700 mb-2 block">
                            DRHP
                          </Label>
                          <Input 
                            id="drhp"
                            placeholder="Enter DRHP PDF Link"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r bg-white">
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Bluestock Fintech</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="px-4 py-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">MENU</h3>
            </div>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.slice(0, 4).map((item) => (
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
            
            <div className="px-4 py-2 mt-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">OTHERS</h3>
            </div>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.slice(4).map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
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
          
          <SidebarFooter className="p-4 border-t">
            <div className="text-xs text-gray-500 text-center">
              © 2024 BlueStock
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold text-gray-900">Upcoming IPO | Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search IPO" 
                  className="pl-10 w-64 bg-gray-50 border-gray-200"
                />
              </div>
              <Button 
                onClick={() => setShowRegisterForm(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
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
