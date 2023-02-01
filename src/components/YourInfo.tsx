function YourInfo() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold pb-2 text-dark-blue">
          Personal info
        </h1>
        <p className="text-light-gray text-lg">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-dark-blue"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border font-semibold border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="e.g. Stephen King"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-dark-blue"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="border font-semibold border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-dark-blue"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="border font-semibold border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="e.g. +1 234 567 890"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
      </form>
    </>
  );
}

export default YourInfo;
