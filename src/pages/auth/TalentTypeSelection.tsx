import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OnboardingLayout } from "@/components/common/onboarding/OnboardingLayout";
import { OnboardingFormContainer } from "@/components/common/onboarding/OnboardingFormContainer";
import { User, Users } from "lucide-react";

export const TalentTypeSelection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [selectedType, setSelectedType] = useState<"solo" | "agency" | null>(null);

  const handleSelection = (type: "solo" | "agency") => {
    setSelectedType(type);
    // Auto-navigate after selection
    setTimeout(() => {
      navigate("/talent/onboarding/profile", { state: { email, type } });
    }, 300);
  };

  return (
    <OnboardingLayout currentStep={1} steps={[]}>
      <OnboardingFormContainer>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
            <p className="mt-2 text-base text-gray-600">
              You are one step to find the best Talent for your project. Sign up now using your email
            </p>
          </div>

          {/* Selection Cards */}
          <div className="space-y-3">
            {/* Solo Talent Option */}
            <button
              onClick={() => handleSelection("solo")}
              className={`w-full flex items-center justify-between px-4 py-3.5 border-2 rounded-lg transition-all text-left ${selectedType === "solo"
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">I'm a solo talent</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Lorem ipsum, solo talent solo ish
                  </p>
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedType === "solo" ? "border-primary" : "border-gray-300"
                  }`}
              >
                {selectedType === "solo" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                )}
              </div>
            </button>

            {/* Agency Option */}
            <button
              onClick={() => handleSelection("agency")}
              className={`w-full flex items-center justify-between px-4 py-3.5 border-2 rounded-lg transition-all text-left ${selectedType === "agency"
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">We're an agency</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    We are a great team of doers
                  </p>
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedType === "agency" ? "border-primary" : "border-gray-300"
                  }`}
              >
                {selectedType === "agency" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                )}
              </div>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
            href="/talent/login"
            className="font-semibold text-primary hover:underline"
            >
            Login
          </a>
        </p>
      </div>
    </OnboardingFormContainer>
    </OnboardingLayout >
  );
};