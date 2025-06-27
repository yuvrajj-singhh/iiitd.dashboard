
import { Bell, Mail, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
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
          <Button variant="ghost" size="sm" className="rounded-full">
            <User size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
}
