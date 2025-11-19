import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="space-y-6">
      {steps.map((step) => {
        const isCompleted = step.id < currentStep;
        const isCurrent = step.id === currentStep;

        return (
          <div key={step.id} className="flex items-center gap-3">
            {/* Step Circle */}
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                isCompleted &&
                "border-white bg-white text-primary",
                isCurrent &&
                "border-white bg-transparent text-white",
                !isCompleted &&
                !isCurrent &&
                "border-gray-400 bg-transparent text-gray-400"
              )}
            >
              {isCompleted ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-semibold">{step.id}</span>
              )}
            </div>

            {/* Step Title */}
            <span
              className={cn(
                "text-sm font-medium transition-all",
                (isCompleted || isCurrent) && "text-white",
                !isCompleted && !isCurrent && "text-gray-400"
              )}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};