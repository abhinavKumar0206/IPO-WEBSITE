
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardStats } from "@/components/DashboardStats";
import { IPOAnalytics } from "@/components/IPOAnalytics";
import { QuickLinks } from "@/components/QuickLinks";
import { MainBoardIPO } from "@/components/MainBoardIPO";
import { UserProfile } from "@/components/UserProfile";
import { LayoutDashboard, FileText, Users, Settings, Key, HelpCircle } from "lucide-react";
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
        <Sidebar className="border-r">
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <span className="text-lg font-bold text-gray-900">BLUESTOCK</span>
            </div>
          </SidebarHeader>
          
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
            <UserProfile />
          </header>
          
          <main className="p-6 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <IPOAnalytics />
              </div>
              <div>
                <QuickLinks />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MainBoardIPO />
              <DashboardStats />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
