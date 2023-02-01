import { useState } from "react";
import "./App.css";
import AddOns from "./components/AddOns";
import SelectPlan from "./components/SelectPlan";
import SideBar from "./components/SideBar";
import Summary from "./components/Summary";
import YourInfo from "./components/YourInfo";

export const steps = [
  "YOUR INFO",
  "SELECT PLAN",
  "ADD-ONS",
  "SUMMARY",
] as const;

export type TypeofStepsElement = (typeof steps)[number];

export const plans = ["monthly", "yearly"] as const;

export type TypeofPlansElement = (typeof plans)[number];

export const planTypes = ["Arcade", "Advanced", "Pro"] as const;

export type TypePlanType = (typeof planTypes)[number];

function App() {
  const [currentStep, setCurrentStep] = useState<TypeofStepsElement>(steps[0]);
  const [planOption, setPlanOption] = useState<TypeofPlansElement>(plans[0]);
  const [planType, setPlanType] = useState<TypePlanType>(planTypes[0]);

  function handleBackClick(e: React.MouseEvent) {
    e.preventDefault();
    if (steps.indexOf(currentStep) != 0) {
      setCurrentStep(steps[steps.indexOf(currentStep) - 1]);
    }
  }

  function handleNextClick(e: React.MouseEvent) {
    e.preventDefault();
    if (steps.indexOf(currentStep) != steps.length - 1) {
      setCurrentStep(steps[steps.indexOf(currentStep) + 1]);
    }
  }

  const stepComponents = [
    <YourInfo />,
    <SelectPlan
      planOption={planOption}
      setPlanOption={setPlanOption}
      planType={planType}
      setPlanType={setPlanType}
    />,
    <AddOns />,
    <Summary />,
  ];

  return (
    <main className="h-screen w-full items-center justify-center flex">
      <div className="flex flex-row w-3/4 h-3/4 p-6 rounded-xl bg-white gap-8">
        <SideBar currentStep={currentStep} />
        <div className="w-full px-16 pt-10 pb-4 flex flex-col justify-between">
          {/* Step Component is rendered here */}
          {stepComponents[steps.indexOf(currentStep)]}
          <div className="flex flex-row justify-between">
            {currentStep != steps[0] ? (
              <button onClick={handleBackClick} className="text-light-gray">
                Go Back
              </button>
            ) : (
              <div></div>
            )}
            {currentStep === steps[steps.length - 1] ? (
              <button
                onClick={handleNextClick}
                className="bg-dark-blue text-lg text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextClick}
                className="bg-dark-blue text-lg text-white px-6 py-2 rounded-md"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
