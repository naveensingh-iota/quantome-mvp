
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import { TalentOnboarding } from "@/pages/auth/TalentOnboarding";
import { TalentTypeSelection } from "@/pages/auth/TalentTypeSelection";
import { AccountAlreadyExists } from "@/pages/auth/AccountAlreadyExists";
import { BuyerOnboarding } from "@/pages/auth/BuyerOnboarding";
import { AgencyProfileForm } from "@/pages/auth/AgencyProfileForm";

// Talent Pages
import { TalentProfileForm } from "@/pages/talent/TalentProfileForm";
import { TalentDashboard } from "@/pages/talent/TalentDashboard";

// Buyer Pages
import { BuyerDashboard } from "@/pages/buyer/BuyerDashboard";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/talent/login" replace />} />

      {/* Talent Flow */}
      <Route path="/talent/login" element={<TalentOnboarding />} />
      <Route path="/talent/type-selection" element={<TalentTypeSelection />} />
      <Route path="/talent/profile" element={<TalentProfileForm />} />
      <Route path="/talent/agency-profile" element={<AgencyProfileForm />} />
      <Route path="/talent/account-exists" element={<AccountAlreadyExists />} />
      <Route path="/talent/dashboard" element={<TalentDashboard />} />

      {/* Buyer Flow */}
      <Route path="/buyer/login" element={<BuyerOnboarding />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

      {/* Catch All */}
      <Route path="*" element={<Navigate to="/talent/login" replace />} />
    </Routes>
  );
};