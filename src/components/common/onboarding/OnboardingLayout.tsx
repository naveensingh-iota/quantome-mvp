import React from "react";
import { StepIndicator } from "./StepIndicator";
import logoImage from "@/assets/logo.jpg";
import loginScreenImage from "@/assets/login-screen.svg";

interface Step {
  id: number;
  title: string;
  desc: string;
}

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  steps: Step[];
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  currentStep,
  steps,
}) => {
  const showSteps = steps.length > 1;

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Background Image */}
      <div
        className="hidden md:flex md:w-5/12 md:flex-col bg-cover bg-center p-8 relative max-w-[464px]"
        style={{
          backgroundImage: `url(${loginScreenImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-auto">
            <img
              src={logoImage}
              alt="Quantome Logo"
              className="h-12 w-12 rounded-lg object-cover bg-white p-1"
            />
          </div>
          {showSteps && (
            <div className="flex-1 flex py-12">
              <div className="max-w-[352px]">
                <StepIndicator steps={steps} currentStep={currentStep} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Form Content */}
      <div className="flex-1 bg-gray-50 flex flex-col">
        {/* Main Content Area - Centered */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-[360px] w-full">
            {children}
          </div>
        </div>

        {/* Footer - At Bottom */}
        <div className="p-8 pt-0">
          <div className="text-sm text-gray-500">
            ©Quantom 2023
          </div>
        </div>
      </div>
    </div>
  );
};