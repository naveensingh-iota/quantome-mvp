// ============================================
// FILE: src/components/dashboard/DashboardTopNav.tsx
// ============================================
import React from "react";
import { ChevronRight, LayoutDashboard, Home, Search, ChevronsRight } from "lucide-react";
import sisyphusLogo from "@/assets/sisyphus-logo.svg";
import logoText from "@/assets/logo-text.svg";
import { Input } from "@/components/ui/input";

interface TopNavProps {
  userName?: string;
  userAvatar?: string;
  currentDate?: string;
  breadcrumbs?: { label: string; path?: string }[];
  onDashboardClick?: () => void;
}

export const DashboardTopNav: React.FC<TopNavProps> = ({
  userName = "Mariana",
  userAvatar,
  currentDate = "Monday, 22 May",
  breadcrumbs = [
    { label: "Talents" },
    { label: "Recommended" }
  ],
  onDashboardClick,
}) => {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top Row */}
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left - Date with Double Chevron */}
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-gray-600">
            <ChevronsRight className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-900">{currentDate}</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Sisyphus Logo & Text */}
          <button onClick={onDashboardClick} className="flex items-center gap-2">
            <img
              src={sisyphusLogo}
              alt="Sisyphus"
              className="h-6 w-6"
            />
            <img src={logoText} alt="Sisyphus" className="h-5" />
          </button>

          {/* Dashboard Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
          </button>

          {/* User Avatar */}
          <button className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-gray-600">
                {userName.charAt(0).toUpperCase()}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Row - Breadcrumbs and Welcome */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Home className="w-4 h-4" />
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="w-3 h-3" />
                  <span className="hover:text-gray-700 cursor-pointer">{crumb.label}</span>
                </React.Fragment>
              ))}
            </div>
            {/* Welcome Message */}
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome, {userName}.
            </h1>
          </div>

          {/* Search Input */}
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-10 bg-white border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};