import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/talent/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { AccountSettings } from "@/pages/talent/settings/AccountSettings";
import { NotificationSettings } from "@/pages/talent/settings/NotificationSettings";
import { PaymentSettings } from "@/pages/talent/settings/PaymentSettings";
import { SecuritySettings } from "@/pages/talent/settings/SecuritySettings";
import { TeamSettings } from "@/pages/talent/settings/TeamSettings";

export const TalentSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const tabs = ["Account", "Payment", "Notification", "Security", "Team"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Account":
        return <AccountSettings />;
      case "Payment":
        return <PaymentSettings />;
      case "Notification":
        return <NotificationSettings />;
      case "Security":
        return <SecuritySettings />;
      case "Team":
        return <TeamSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <DashboardLayout
      userRole="talent"
      userName="Mariana"
      notificationCount={3}
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                className="pl-10 bg-white border-gray-300"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {renderTabContent()}
        </div>
      </div>
    </DashboardLayout>
  );
};