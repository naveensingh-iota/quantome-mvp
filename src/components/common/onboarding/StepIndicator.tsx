import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
  desc: string;
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
    <div className="space-y-0">
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep;
        const isCurrent = step.id === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="relative">
            {/* Step Item */}
            <div className="flex items-start gap-3 py-5">
              {/* Step Circle */}
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-all z-10 shrink-0",
                  isCompleted && "bg-white",
                  isCurrent && "bg-white",
                  !isCompleted && !isCurrent && "border-4 border-white bg-transparent"
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5 text-blue-600" />
                ) : isCurrent ? (
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                ) : (
                  <div className="h-3 w-3 rounded-full bg-white" />
                )}
              </div>

              {/* Step Content */}
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-white leading-tight">
                  {step.title}
                </span>
                <span className="text-xs text-white mt-1">
                  {step.desc}
                </span>
              </div>
            </div>

            {/* Progress Line */}
            {!isLast && (
              <div className="absolute left-5 top-16 w-0.5 h-10 -translate-x-1/2 bg-white" />
            )}
          </div>
        );
      })}
    </div>
  );
};