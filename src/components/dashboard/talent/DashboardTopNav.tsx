import React from "react";
import { ChevronDown, LayoutDashboard } from "lucide-react";
import sisyphusLogo from "@/assets/sisyphus-logo.svg";
import logoText from "@/assets/logo-text.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopNavProps {
  userName?: string;
  userAvatar?: string;
  onDashboardClick?: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onBillingClick?: () => void;
  onLogoutClick?: () => void;
}

export const DashboardTopNav: React.FC<TopNavProps> = ({
  userName = "Mariana",
  userAvatar,
  onDashboardClick,
  onProfileClick,
  onSettingsClick,
  onBillingClick,
  onLogoutClick,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Welcome Message */}
        <h2 className="text-lg font-semibold text-gray-900">
          Welcome, {userName}
        </h2>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Sisyphus Logo */}
          <button onClick={onDashboardClick} className="flex items-center gap-2">
            <img
              src={sisyphusLogo}
              alt="Sisyphus"
              className="h-8 w-6 rounded-lg object-cover"
            />
            <img src={logoText} alt="Sisyphus" />
          </button>

          {/* Dashboard Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
          </button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
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
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onProfileClick}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onSettingsClick}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onBillingClick}>
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogoutClick} className="text-red-600">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};