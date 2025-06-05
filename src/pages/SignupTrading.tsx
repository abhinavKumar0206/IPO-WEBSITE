
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/contexts/UserContext";

const SignupTrading = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Signup attempt:", { firstName, lastName, email, password, rememberDevice });
    
    // Simulate signup process
    setTimeout(() => {
      setUser({ name: `${firstName} ${lastName}`, email });
      
      toast({
        title: "Account created successfully!",
        description: "Welcome to the trading platform.",
      });
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex relative transition-colors duration-300 ${
      darkMode 
        ? "bg-gradient-to-br from-blue-500 via-purple-600 to-black" 
        : "bg-gradient-to-br from-blue-200 via-purple-200 to-gray-100"
    }`}>
      {/* Dark Mode Toggle */}
      <div className={`absolute top-6 right-6 flex items-center gap-3 z-10 transition-colors duration-300 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}>
        <span className="text-sm font-medium">Dark Mode</span>
        <Switch
          checked={darkMode}
          onCheckedChange={setDarkMode}
          className="data-[state=checked]:bg-cyan-500"
        />
      </div>

      {/* Left Section - Hero Content */}
      <div className={`flex-1 flex flex-col justify-center px-12 lg:px-16 transition-colors duration-300 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}>
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Navigate the Markets with Confidence
          </h1>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 mb-12">
            <div className={`backdrop-blur-sm rounded-full px-6 py-3 border transition-colors duration-300 ${
              darkMode 
                ? "bg-white/20 border-white/30" 
                : "bg-gray-800/10 border-gray-800/20"
            }`}>
              <span className="text-sm font-medium">Advanced Technical Analysis/Charting Tools</span>
            </div>
            <div className={`backdrop-blur-sm rounded-full px-6 py-3 border transition-colors duration-300 ${
              darkMode 
                ? "bg-white/20 border-white/30" 
                : "bg-gray-800/10 border-gray-800/20"
            }`}>
              <span className="text-sm font-medium">Community Feeds</span>
            </div>
            <div className={`backdrop-blur-sm rounded-full px-6 py-3 border transition-colors duration-300 ${
              darkMode 
                ? "bg-white/20 border-white/30" 
                : "bg-gray-800/10 border-gray-800/20"
            }`}>
              <span className="text-sm font-medium">Customizable UI for Your Trading Style</span>
            </div>
            <div className={`backdrop-blur-sm rounded-full px-6 py-3 border transition-colors duration-300 ${
              darkMode 
                ? "bg-white/20 border-white/30" 
                : "bg-gray-800/10 border-gray-800/20"
            }`}>
              <span className="text-sm font-medium">Customer Support</span>
            </div>
          </div>

          {/* Quote Symbol */}
          <div className="mb-6">
            <div className={`text-6xl font-bold transition-colors duration-300 ${
              darkMode ? "text-cyan-400" : "text-blue-600"
            }`}>"</div>
          </div>

          {/* Testimonial */}
          <div className="mb-8">
            <p className="text-xl mb-6 leading-relaxed">
              Game changing trading software that helped me <span className="font-semibold">analysis market trends</span> easily and <span className="font-semibold">make better decisions</span>
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                AO
              </div>
              <div>
                <p className="font-semibold">Aaron O'Donnell</p>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? "text-orange-400" : "text-blue-600"
                }`}>Pro Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className={`w-full max-w-md p-8 flex flex-col justify-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}>
        <div className="mb-8">
          <div className="flex gap-4 mb-6">
            <Button
              type="button"
              variant="outline"
              className={`flex-1 border-0 transition-colors duration-300 ${
                darkMode 
                  ? "bg-white text-gray-900 hover:bg-gray-100" 
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-blue-600 text-white border-0 hover:bg-blue-700"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Sign up with Facebook
            </Button>
          </div>

          <div className={`text-center mb-6 transition-colors duration-300 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>or</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`mt-1 transition-colors duration-300 ${
                    darkMode 
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Jam"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`mt-1 transition-colors duration-300 ${
                    darkMode 
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className={`transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 transition-colors duration-300 ${
                  darkMode 
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className={`transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 transition-colors duration-300 ${
                  darkMode 
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                required
              />
              <p className={`text-xs mt-1 transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>At least 8 characters, with numbers and symbols.</p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="remember-device"
                checked={rememberDevice}
                onCheckedChange={(checked) => setRememberDevice(!!checked)}
                className={`mt-1 transition-colors duration-300 ${
                  darkMode 
                    ? "border-gray-600 data-[state=checked]:bg-blue-600" 
                    : "border-gray-400 data-[state=checked]:bg-blue-600"
                }`}
              />
              <Label htmlFor="remember-device" className={`text-sm leading-relaxed transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Remember this device
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            <p className={`text-xs text-center transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              By logging in, you agree to follow our{" "}
              <a href="#" className={`hover:underline transition-colors duration-300 ${
                darkMode ? "text-cyan-400" : "text-blue-600"
              }`}>
                terms of service
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupTrading;
