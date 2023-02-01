import { TypePlanType, TypeofPlansElement } from "../App";
import { AddOn, addOnData, addOns as addOnsArray } from "./AddOns";
import { cardData } from "./SelectPlan";

function Summary({
  planType,
  addOns,
  plan,
}: {
  planType: TypePlanType;
  addOns: AddOn["title"][];
  plan: TypeofPlansElement;
}) {
  const sortedAddOnsAndPrices = addOns
    .sort((a, b) => addOnsArray.indexOf(a) - addOnsArray.indexOf(b))
    .map((addOnName) => {
      const currentAddOn = addOnData.filter(
        (addOn) => addOn.title === addOnName
      )[0];
      return [
        currentAddOn.title,
        plan === "monthly"
          ? currentAddOn.priceMonthly
          : currentAddOn.priceYearly,
      ];
    });

  const planObject = cardData.filter((card) => card.name === planType)[0];

  const planPrice =
    plan === "monthly"
      ? parseInt(planObject.monthly)
      : parseInt(planObject.yearly);

  const addOnTotalPrice = sortedAddOnsAndPrices.length
    ? sortedAddOnsAndPrices
        .map((addOnArr) => parseInt(addOnArr[1].split("/")[0].split("$")[1]))
        .reduce((a, b) => a + b)
    : 0;

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold pb-2 text-dark-blue">Finishing Up</h1>
        <p className="text-light-gray text-lg">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="flex flex-col gap-4 bg-blue-50 p-10 rounded-xl">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-dark-blue text-lg font-semibold">
              {planType} {plan === "monthly" ? " (Monthly)" : " (Yearly)"}
            </p>
            <p className="text-dark-blue text-lg font-semibold">
              ${plan === "monthly" ? planPrice + "/mo" : planPrice + "/yr"}
            </p>
          </div>
          <button className="text-light-gray underline w-fit">Change</button>
        </div>
        {sortedAddOnsAndPrices.length != 0 && (
          <>
            <div className="h-[0.5px] bg-light-gray my-3"></div>
            <div>
              {sortedAddOnsAndPrices.map((namePriceArr, idx) => (
                <div className="flex flex-row justify-between" key={idx}>
                  <div className="text-light-gray">{namePriceArr[0]}</div>
                  <div className="text-dark-blue">{namePriceArr[1]}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-light-gray">
          Total (per {plan === "monthly" ? "month" : "year"})
        </div>
        <div className="text-[#473EFE] font-bold text-2xl">
          $
          {sortedAddOnsAndPrices.length
            ? planPrice + addOnTotalPrice
            : planPrice}
          /{plan === "monthly" ? "mo" : "yr"}
        </div>
      </div>
    </>
  );
}

export default Summary;
