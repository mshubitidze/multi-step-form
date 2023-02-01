import { TypeofPlansElement } from "../App";

export type AddOn = {
  title: (typeof addOns)[number];
  description: string;
  priceMonthly: string;
  priceYearly: string;
};

export const addOns = [
  "Online Service",
  "Larger Storage",
  "Customizable Profile",
] as const;

export const addOnData: AddOn[] = [
  {
    title: "Online Service",
    description: "Access to multiplayer games",
    priceMonthly: "+$1/mo",
    priceYearly: "+$10/yr",
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    priceMonthly: "+$2/mo",
    priceYearly: "+$20/yr",
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    priceMonthly: "+$2/mo",
    priceYearly: "+$20/yr",
  },
];

function AddOns({
  plan,
  selectedAddOns,
  setSelectedAddOns,
}: {
  plan: TypeofPlansElement;
  selectedAddOns: AddOn["title"][];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOn["title"][]>>;
}) {
  function handleSelectDeselect(title: AddOn["title"]) {
    if (selectedAddOns.includes(title)) {
      setSelectedAddOns(
        selectedAddOns.filter((addOnTitle) => addOnTitle !== title)
      );
    } else {
      setSelectedAddOns([...selectedAddOns, title]);
    }
  }

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold pb-2 text-dark-blue">Pick add-ons</h1>
        <p className="text-light-gray text-lg">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {addOnData.map((addOn, idx) => (
          <div
            key={idx}
            className="flex items-center focus:bg-blue-50 pl-4 border border-gray-300 rounded-xl"
          >
            <input
              onChange={() => handleSelectDeselect(addOn.title)}
              id={`bordered-checkbox-${idx}`}
              type="checkbox"
              value=""
              name="bordered-checkbox"
              className="w-6 h-6 bg-border-purple border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2"
              checked={selectedAddOns.includes(addOn.title)}
            />
            <label
              htmlFor={`bordered-checkbox-${idx}`}
              className="flex flex-row justify-between items-center py-4 px-6 w-full text-lg font-medium"
            >
              <div>
                <p className="text-dark-blue">{addOn.title}</p>
                <p className="text-light-gray">{addOn.description}</p>
              </div>
              {plan === "monthly" ? (
                <p className="text-border-purple">{addOn.priceMonthly}</p>
              ) : (
                <p className="text-border-purple">{addOn.priceYearly}</p>
              )}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddOns;
