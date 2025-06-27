
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Building, 
  BookOpen, 
  CreditCard, 
  FolderOpen, 
  GraduationCap, 
  List, 
  Users, 
  FileText, 
  MessageSquare,
  Menu,
  X,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "My Profile", url: "/my-profile", icon: User },
  { title: "Hostel Request", url: "/hostel-request", icon: Building },
  { title: "Register For Courses", url: "/register-courses", icon: BookOpen },
  { title: "My Fee Details", url: "/fee-details", icon: CreditCard },
  { title: "Project Registration", url: "/project-registration", icon: FolderOpen },
  { title: "Grades", url: "/grades", icon: GraduationCap },
  { title: "My Course List", url: "/course-list", icon: List },
  { title: "Dual Degree", url: "/dual-degree", icon: Users },
  { title: "TA Details", url: "/ta-details", icon: FileText },
  { title: "Student Requests", url: "/student-requests", icon: MessageSquare },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto w-64`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Student Portal</span>
          </div>
          
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={18} />
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
