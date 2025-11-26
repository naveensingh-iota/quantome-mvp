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
  // Only show step indicator if there are multiple steps
  const showSteps = steps.length > 1;

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Background Image */}
      <div
        className="hidden w-5/12 bg-cover bg-center p-8 lg:flex lg:flex-col relative"
        style={{
          backgroundImage: `url(${loginScreenImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-auto">
            <img
              src={logoImage}
              alt="Quantome Logo"
              className="h-12 w-12 rounded-lg object-cover bg-white p-1"
            />
          </div>

          {/* Step Indicator - Centered vertically */}
          {showSteps && (
            <div className="flex-1 flex py-12">
              <StepIndicator steps={steps} currentStep={currentStep} />
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Form Content */}
      <div className="flex flex-1 bg-gray-50 p-8">
        {children}
      </div>
    </div>
  );
};