import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

function Stepper({
  length,
  currentStep,
}: {
  length: number;
  currentStep: number;
}) {
  return (
    <>
      <div className="flex justify-between">
        {new Array(length).fill(0).map((_, i) => (
          <div
            key={i}
            className={cn(
              "relative flex flex-col items-center justify-center w-1/2 before:content-[''] before:bg-green-300 before:absolute before:w-full  before:h-[4px] before:right-2/4 before:top-1/2 before:-translate-y-2/4 first:before:hidden",
              i + 1 <= currentStep
                ? "before:bg-green-500"
                : "before:bg-green-300",
            )}
          >
            <div
              className={cn(
                "relative z-10 flex items-center justify-center w-8 h-8 font-semibold text-white  rounded-full",
                currentStep === i + 1 ? "bg-green-500" : "bg-blue-500",
                i + 1 <= currentStep
                  ? "bg-green-500"
                  : "bg-green-300 text-green-500",
              )}
            >
              {i + 1 <= currentStep ? <Check /> : i + 1}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stepper;
