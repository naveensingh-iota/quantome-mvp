import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, Briefcase, Calendar, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.jpg";

interface SidebarProps {
  userRole?: "talent" | "buyer";
}

export const DashboardSidebar: React.FC<SidebarProps> = ({ userRole = "talent" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", icon: Home, path: `/${userRole}/dashboard` },
    { name: "Projects", icon: Briefcase, path: `/${userRole}/projects` },
    { name: "Team", icon: Users, path: `/${userRole}/team` },
    { name: "Calendar", icon: Calendar, path: `/${userRole}/calendar` },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6">
      {/* Logo */}
      <button
        onClick={() => navigate(`/${userRole}/dashboard`)}
        className="mb-8"
      >
        <img
          src={logoImage}
          alt="Logo"
          className="h-10 w-10 rounded-lg object-cover"
        />
      </button>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col space-y-2">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
              isActive(item.path)
                ? "bg-blue-50 text-blue-600"
                : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
            )}
            title={item.name}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => navigate(`/${userRole}/settings`)}
          className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};