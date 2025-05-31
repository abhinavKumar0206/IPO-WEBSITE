
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { IPOAnalytics } from "@/components/IPOAnalytics";
import { QuickLinks } from "@/components/QuickLinks";
import { MainBoardIPO } from "@/components/MainBoardIPO";
import { UserProfile } from "@/components/UserProfile";
import { Input } from "@/components/ui/input";
import { LayoutDashboard, FileText, Users, Settings, Key, HelpCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard", active: true },
  { title: "Manage IPO", icon: FileText, url: "#" },
  { title: "IPO Subscription", icon: FileText, url: "#" },
  { title: "IPO Allotment", icon: FileText, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
  { title: "API Manager", icon: Key, url: "#" },
  { title: "Accounts", icon: Users, url: "#" },
  { title: "Help", icon: HelpCircle, url: "#" },
];

const Dashboard = () => {
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
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <IPOAnalytics />
              </div>
              <div className="lg:col-span-1">
                <QuickLinks />
              </div>
              <div className="lg:col-span-1">
                <MainBoardIPO />
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
