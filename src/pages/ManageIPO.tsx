
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { LayoutDashboard, FileText, Users, Settings, Key, HelpCircle, Search, Info, FileBarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("IPO Information");

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
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Upcoming IPO Information</h1>
                <p className="text-sm text-gray-600">Manage your IPO Details</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search" 
                  className="pl-10 w-64 bg-gray-50 border-gray-200"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
              <Button variant="outline">Cancel</Button>
              <UserProfile />
            </div>
          </header>
          
          <main className="p-6 bg-gray-50">
            <div className="flex space-x-6">
              {/* Left Sidebar Tabs */}
              <div className="w-80 space-y-2">
                <div 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
                    activeTab === "IPO Information" ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("IPO Information")}
                >
                  <Info className="w-5 h-5" />
                  <span className="font-medium">IPO Information</span>
                </div>
                <div 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
                    activeTab === "IPO Info" ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("IPO Info")}
                >
                  <FileBarChart className="w-5 h-5" />
                  <span className="font-medium">IPO Info</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">IPO Information</CardTitle>
                    <p className="text-sm text-gray-600">Enter IPO Details</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Company Logo Section */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Company Logo</Label>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">NSE</span>
                        </div>
                        <div>
                          <p className="font-medium">NSE India</p>
                          <p className="text-sm text-gray-600">Tech Lead</p>
                          <p className="text-sm text-gray-600">Pune</p>
                        </div>
                        <div className="ml-auto space-x-2">
                          <Button className="bg-blue-600 hover:bg-blue-700">Upload Logo</Button>
                          <Button variant="outline">Delete</Button>
                        </div>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" placeholder="Vodafone Idea" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priceBand">Price Band</Label>
                        <Input id="priceBand" placeholder="Not Issued" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="open">Open</Label>
                        <Input id="open" placeholder="Not Issued" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="close">Close</Label>
                        <Input id="close" placeholder="Not Issued" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="issueSize">Issue Size</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="2300 Cr." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2300">2300 Cr.</SelectItem>
                            <SelectItem value="2400">2400 Cr.</SelectItem>
                            <SelectItem value="2500">2500 Cr.</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="issueType">Issue Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Issue Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="book-built">Book Built</SelectItem>
                            <SelectItem value="fixed-price">Fixed Price</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="listingDate">Listing Date</Label>
                        <Input id="listingDate" placeholder="Not Issued" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                            <SelectItem value="listed">Listed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* New Listed IPO Details Section */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h3>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="ipoPrice">IPO PRICE</Label>
                          <Input id="ipoPrice" placeholder="₹ 383" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="listingPrice">LISTING PRICE</Label>
                          <Input id="listingPrice" placeholder="₹ 435" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="listingGain">LISTING GAIN</Label>
                          <Input id="listingGain" placeholder="13.58 %" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="listingDateNew">LISTING DATE</Label>
                          <Input id="listingDateNew" placeholder="2024-05-30" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="cmp">CMP</Label>
                          <Input id="cmp" placeholder="₹410" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currentReturn">CURRENT RETURN</Label>
                          <Input id="currentReturn" placeholder="7.05 %" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="rhp">RHP</Label>
                          <Input id="rhp" placeholder="Enter RHP PDF Link" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="drhp">DRHP</Label>
                          <Input id="drhp" placeholder="Enter DRHP PDF Link" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ManageIPO;
