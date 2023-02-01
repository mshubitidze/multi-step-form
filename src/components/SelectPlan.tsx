import { TypeofPlansElement, TypePlanType } from "../App";

type TCard = {
  name: TypePlanType;
  imgSrc: string;
  monthly: string;
  yearly: string;
};

export const cardData: TCard[] = [
  {
    name: "Arcade",
    imgSrc: "./images/icon-arcade.svg",
    monthly: "9",
    yearly: "90",
  },
  {
    name: "Advanced",
    imgSrc: "./images/icon-advanced.svg",
    monthly: "12",
    yearly: "120",
  },
  {
    name: "Pro",
    imgSrc: "./images/icon-pro.svg",
    monthly: "15",
    yearly: "150",
  },
];

export default function SelectPlan({
  planOption,
  setPlanOption,
  planType,
  setPlanType,
}: {
  planOption: TypeofPlansElement;
  setPlanOption: React.Dispatch<React.SetStateAction<TypeofPlansElement>>;
  planType: TypePlanType;
  setPlanType: React.Dispatch<React.SetStateAction<TypePlanType>>;
}) {
  function handleToggle() {
    setPlanOption(planOption === "yearly" ? "monthly" : "yearly");
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-bold pb-2 text-dark-blue">
          Select your plan
        </h1>
        <p className="text-light-gray text-lg">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        {cardData.map((card, idx) =>
          card.name === planType ? (
            <div
              onClick={() => setPlanType(card.name)}
              key={idx}
              className="flex bg-blue-50 cursor-pointer flex-col gap-10 justify-between border hover:bg-blue-50 rounded-xl border-border-purple p-3 lg:p-4"
            >
              <img width={50} height={50} src={card.imgSrc} alt="" />
              <div>
                <p className="text-lg text-dark-blue font-semibold">
                  {card.name}
                </p>
                {planOption === "yearly" ? (
                  <>
                    <p className="text-light-gray">${card.yearly}/yr</p>
                    <p className="text-dark-blue">2 months free</p>
                  </>
                ) : (
                  <p className="text-light-gray">${card.monthly}/mo</p>
                )}
              </div>
            </div>
          ) : (
            <div
              onClick={() => setPlanType(card.name)}
              key={idx}
              className="flex cursor-pointer flex-col gap-10 justify-between border hover:bg-blue-50 rounded-xl border-border-purple p-3 lg:p-4"
            >
              <img width={50} height={50} src={card.imgSrc} alt="" />
              <div>
                <p className="text-lg text-dark-blue font-semibold">
                  {card.name}
                </p>
                {planOption === "yearly" ? (
                  <>
                    <p className="text-light-gray">${card.yearly}/yr</p>
                    <p className="text-dark-blue">2 months free</p>
                  </>
                ) : (
                  <p className="text-light-gray">${card.monthly}/mo</p>
                )}
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex flex-row gap-4 justify-center items-center bg-blue-50 py-4 rounded-xl">
        <p>Monthly</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onChange={handleToggle}
            type="checkbox"
            value={"monthly"}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-dark-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
}
