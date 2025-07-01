
import { Bell, Mail, Settings, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="lg:ml-0 ml-12">
          <h1 className="text-lg font-medium text-gray-900">
            Good Evening, Yuvraj Singh! Welcome to IIT-Delhi.
          </h1>
          <p className="text-sm text-gray-500">
            Your last login was on 27 Jun 25, 02:31 PM (from IP Address: 183.83.152.73).
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Bell size={18} />
          </Button>
          <Button variant="ghost" size="sm">
            <Mail size={18} />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings size={18} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full"
            onClick={() => navigate('/my-profile')}
          >
            <User size={18} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLogout}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
}
