import { useState } from "react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IPOTable } from "@/components/IPOTable";
import { LayoutDashboard, FileText, Users, Settings, Key, HelpCircle, Search } from "lucide-react";
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
                <Button 
                  variant="ghost" 
                  onClick={() => setShowRegisterForm(false)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  ← Back to IPO List
                </Button>
                <h1 className="text-2xl font-bold text-gray-900">Register IPO</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search IPO" 
                    className="pl-10 w-64 bg-gray-50 border-gray-200"
                  />
                </div>
                <UserProfile />
              </div>
            </header>
            
            <main className="p-6 bg-gray-50">
              <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Company Details */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                          <Input placeholder="Enter company name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company Logo</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <p className="text-gray-500">Click to upload logo</p>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">About Company</label>
                          <textarea 
                            className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                            placeholder="Enter company description"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Price Details */}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Price Details</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Price Band (Low)</label>
                          <Input placeholder="₹ 0" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Price Band (High)</label>
                          <Input placeholder="₹ 0" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Quantity</label>
                          <Input placeholder="0" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Quantity</label>
                          <Input placeholder="0" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* IPO Details */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">IPO Details</h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Open Date</label>
                            <Input type="date" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Close Date</label>
                            <Input type="date" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Issue Size</label>
                          <Input placeholder="₹ 0 Cr." />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Issue Type</label>
                          <select className="w-full p-3 border border-gray-300 rounded-md">
                            <option>Book Built</option>
                            <option>Fixed Price</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Listing Date</label>
                          <Input type="date" />
                        </div>
                      </div>
                    </div>

                    {/* Listed Details */}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Listed Details</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Exchange</label>
                          <select className="w-full p-3 border border-gray-300 rounded-md">
                            <option>NSE</option>
                            <option>BSE</option>
                            <option>Both</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Symbol</label>
                          <Input placeholder="Enter symbol" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">ISIN</label>
                          <Input placeholder="Enter ISIN" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
                  <Button variant="outline" onClick={() => setShowRegisterForm(false)}>Cancel</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Register IPO</Button>
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
