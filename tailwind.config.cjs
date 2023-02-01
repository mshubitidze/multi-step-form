/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-purple": "#534D98",
        "dark-blue": "#062D63",
        "light-gray": "#9B9BA4"
      },
      backgroundImage: {
        "sidebar-image": "url('/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
