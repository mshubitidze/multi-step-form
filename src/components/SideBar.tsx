import { steps, TypeofStepsElement } from "../App";

export default function SideBar({
  currentStep,
}: {
  currentStep: TypeofStepsElement;
}) {
  return (
    <div className="flex bg-cover flex-col gap-4 bg-sidebar-image rounded-xl py-10 pl-10 pr-20">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-row gap-4 items-center">
          {currentStep === step ? (
            <div className="w-10 h-10 flex bg-[#BCE2FF] justify-center text-lg items-center border-2 border-white rounded-full">
              <p className="text-dark-blue font-bold">{idx + 1}</p>
            </div>
          ) : (
            <div className="w-10 h-10 flex justify-center text-lg items-center border-2 border-white rounded-full">
              <p className="text-white">{idx + 1}</p>
            </div>
          )}

          <div>
            <p className="text-light-gray text-md whitespace-nowrap font-semibold">
              STEP {idx + 1}
            </p>
            <p className="text-white font-bold whitespace-nowrap text-lg">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
