import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TalentOnboarding } from "./pages/auth/TalentOnboarding";
import { TalentTypeSelection } from "./pages/auth/TalentTypeSelection";
import { TalentProfileForm } from "./pages/talent/TalentProfileForm";
import { BuyerOnboarding } from "./pages/auth/BuyerOnboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/talent/login" replace />} />

        {/* Talent Flow */}
        <Route path="/talent/login" element={<TalentOnboarding />} />
        <Route path="/talent/type-selection" element={<TalentTypeSelection />} />
        <Route path="/talent/profile" element={<TalentProfileForm />} />

        {/* Buyer Flow */}
        <Route path="/buyer/login" element={<BuyerOnboarding />} />

        <Route path="*" element={<Navigate to="/talent/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;