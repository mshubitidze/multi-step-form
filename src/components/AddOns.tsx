function AddOns({}) {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold pb-2 text-dark-blue">Pick add-ons</h1>
        <p className="text-light-gray text-lg">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center pl-4 border border-gray-300 rounded-xl">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-6 h-6 bg-border-purple border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ml-2 text-lg font-medium"
          >
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-300 rounded-xl">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-6 h-6 bg-border-purple border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ml-2 text-lg font-medium"
          >
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-300 rounded-xl">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-6 h-6 bg-border-purple border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ml-2 text-lg font-medium"
          >
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </label>
        </div>
      </div>
    </>
  );
}

export default AddOns;
