
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Login } from "@/components/auth/Login";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import RegisterCourses from "./pages/RegisterCourses";
import FeeDetails from "./pages/FeeDetails";
import Grades from "./pages/Grades";
import HostelRequest from "./pages/HostelRequest";
import CourseList from "./pages/CourseList";
import DualDegree from "./pages/DualDegree";
import TADetails from "./pages/TADetails";
import MyProfile from "./pages/MyProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hostel-request" element={<HostelRequest />} />
            <Route path="/register-courses" element={<RegisterCourses />} />
            <Route path="/fee-details" element={<FeeDetails />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/course-list" element={<CourseList />} />
            <Route path="/dual-degree" element={<DualDegree />} />
            <Route path="/ta-details" element={<TADetails />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-gray-200 py-4 px-6">
          <p className="text-center text-sm text-gray-500">
            © 2017 All rights reserved. Version: 5.0.2.64616
          </p>
        </footer>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
