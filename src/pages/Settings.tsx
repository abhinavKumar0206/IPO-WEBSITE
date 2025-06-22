
import { useUser } from "@/contexts/UserContext";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Award,
  BarChart3,
  Bell,
  Edit,
  FileText,
  Gift,
  History,
  Home,
  Navigation,
  Palette,
  Quote,
  Search,
  Settings as SettingsIcon,
  Shield,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const { user } = useUser();
  const sidebarIcons = [
    { icon: Home, href: "/dashboard" },
    { icon: Bell, href: "#" },
    { icon: TrendingUp, href: "/trading" },
    { icon: BarChart3, href: "#" },
    { icon: FileText, href: "#" },
    { icon: Users, href: "#" },
    { icon: SettingsIcon, href: "/settings", active: true },
    { icon: Gift, href: "#" },
  ];

  const settingsItems = [
    { label: "Account", active: true, icon: SettingsIcon },
    { label: "Notifications & Messages", icon: Bell },
    { label: "Security & Privacy", icon: Shield },
    { label: "Appearance", icon: Palette },
    { label: "Chart Settings", icon: BarChart3 },
    { label: "Navigation Settings", icon: Navigation },
    { label: "Quotes Preferences", icon: Quote },
    { label: "Documents", icon: FileText },
    { label: "Community Settings", icon: Users },
    { label: "History", icon: History },
    { label: "Beneficiaries", icon: Users },
    { label: "Rewards", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar Icons */}
      <div className="w-16 bg-black flex flex-col items-center py-6 space-y-4 border-r border-gray-800">
        {sidebarIcons.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              item.active 
                ? 'bg-teal-600 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <item.icon className="w-4 h-4" />
          </Link>
        ))}
      </div>

      {/* Settings Sidebar */}
      <div className="w-64 bg-gray-900 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-4">Settings</h1>
        </div>
        
        <nav className="space-y-1">
          {settingsItems.map((item, index) => (
            <div
              key={index}
              className={`p-3 rounded cursor-pointer transition-colors text-sm flex items-center space-x-3 ${
                item.active 
                  ? 'bg-teal-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-6">
            {/* User Info */}
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{user?.name || "User"}</div>
                <div className="text-xs text-gray-400">Account: 4453728992</div>
              </div>
            </div>

            {/* Balance Info */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-xs text-gray-400">Portfolio Balance</div>
                <div className="text-lg font-bold">$623,098.17</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-400">Available Funds</div>
                <div className="text-lg font-bold">$129,912.50</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              type="text" 
              placeholder="Search" 
              className="pl-10 bg-gray-800 border-gray-700 text-white w-64"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
            <p className="text-gray-400">View and manage account details such as name, email address, contact information, etc.</p>
          </div>

          {/* Profile Section */}
          <div className="flex items-center justify-between bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-xl">JR</AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute -bottom-1 -right-1 rounded-full w-6 h-6 p-0 border-gray-600"
                >
                  <Edit className="w-3 h-3" />
                </Button>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Account Number</div>
                <div className="font-bold text-lg">4453728992</div>
              </div>
            </div>
            <Button 
              variant="destructive" 
              className="bg-red-600 hover:bg-red-700"
            >
              Deactivate Account
            </Button>
          </div>

          {/* Personal Information */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Personal Information</h3>
              <Button variant="outline" size="sm" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2">Name</label>
                <div className="text-white font-medium">{user?.name || "User"}</div>
              </div>
              {/* <div>
                <label className="block text-xs text-gray-400 mb-2">Last Name</label>
                <div className="text-white font-medium">Patil</div>
              </div> */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">Date of Birth</label>
                <div className="text-white font-medium">December 17, 1990</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Email Address</label>
                <div className="text-white font-medium">pratikpatil@hotmail.com</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Phone Number</label>
                <div className="text-white font-medium">(123) 456-7890</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Username</label>
                <div className="text-white font-medium">Willtradebertain</div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Address</h3>
              <Button variant="outline" size="sm" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2">Country</label>
                <div className="text-white font-medium">India</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">City/State</label>
                <div className="text-white font-medium">Pune, MH</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Street Address</label>
                <div className="text-white font-medium">4517 Kothrud</div>
              </div>
            </div>
          </div>

          {/* Employer */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Employer</h3>
              <Button variant="outline" size="sm" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2">Company Name</label>
                <div className="text-white font-medium">Designer Inc.</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">City/State</label>
                <div className="text-white font-medium">Chicago, Illinois</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
