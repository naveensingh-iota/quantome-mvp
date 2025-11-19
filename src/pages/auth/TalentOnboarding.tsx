import React from "react";
import { useNavigate } from "react-router-dom";
import { OnboardingLayout } from "@/components/common/onboarding/OnboardingLayout";
import { OnboardingFormContainer } from "@/components/common/onboarding/OnboardingFormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const TalentOnboarding: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!email) return;
    navigate("/talent/type-selection", { state: { email } });
  };

  const handleSocialLogin = (provider: "google" | "linkedin") => {
    console.log(`Login with ${provider}`);
    navigate("/talent/type-selection", { state: { provider } });
  };

  return (
    <OnboardingLayout currentStep={1} steps={[]}>
      <OnboardingFormContainer>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome</h1>
            <p className="mt-2 text-sm text-gray-600">
              You are one step to find the best Talent for your project. Sign
              up now using your email
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-gray-500">
              You can use the same email you're using at work
            </p>
          </div>

          <Button onClick={handleNext} disabled={!email} className="w-full bg-primary hover:bg-primary/90">
            Next
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-50 px-2 text-gray-500">
                Or use your social account
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-center bg-white"
              onClick={() => handleSocialLogin("google")}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="mr-2 h-4 w-4"
              />
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full justify-center bg-white"
              onClick={() => handleSocialLogin("linkedin")}
            >
              <svg className="mr-2 h-4 w-4" fill="#0A66C2" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/talent/login" className="font-medium text-primary hover:underline">
              Login
            </a>
          </p>
        </div>
      </OnboardingFormContainer>
    </OnboardingLayout>
  );
};