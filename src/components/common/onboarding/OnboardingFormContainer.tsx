import React from "react";

interface OnboardingFormContainerProps {
  children: React.ReactNode;
}

export const OnboardingFormContainer: React.FC<OnboardingFormContainerProps> = ({
  children
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-full gap-10">
      {/* Form Content - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg">
          {children}
        </div>
      </div>

      {/* Footer - Absolute left with padding */}
      <div className="text-sm text-gray-500 pl-8">
        ©Quantom 2023
      </div>
    </div>
  );
};