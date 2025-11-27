import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TalentOnboarding } from "./pages/auth/TalentOnboarding";
import { TalentTypeSelection } from "./pages/auth/TalentTypeSelection";
import { TalentProfileForm } from "./pages/talent/TalentProfileForm";
import { AgencyProfileForm } from "./pages/auth/AgencyProfileForm";
import { AccountAlreadyExists } from "./pages/auth/AccountAlreadyExists";
import { BuyerOnboarding } from "./pages/auth/BuyerOnboarding";
import { BuyerDashboard } from "./pages/buyer/BuyerDashboard";
// import TalentDashboard from "./pages/talent/TalentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/talent/login" replace />} />

        {/* Talent Flow */}
        <Route path="/talent/login" element={<TalentOnboarding />} />
        <Route path="/talent/type-selection" element={<TalentTypeSelection />} />
        <Route path="/talent/profile" element={<TalentProfileForm />} />
        <Route path="/talent/agency-profile" element={<AgencyProfileForm />} />
        <Route path="/talent/account-exists" element={<AccountAlreadyExists />} />
        {/* <Route path="/talent/dashboard" element={<TalentDashboard />} /> */}

        {/* Buyer Flow */}
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/login" element={<BuyerOnboarding />} />

        <Route path="*" element={<Navigate to="/talent/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;