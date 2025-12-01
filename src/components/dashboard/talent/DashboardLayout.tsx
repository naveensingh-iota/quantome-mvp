import React from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopNav } from "./DashboardTopNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: "talent" | "buyer";
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userRole = "talent",
  userName,
  userAvatar,
}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <DashboardSidebar userRole={userRole} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <DashboardTopNav
          userName={userName}
          userAvatar={userAvatar}
        />

        {/* Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};
