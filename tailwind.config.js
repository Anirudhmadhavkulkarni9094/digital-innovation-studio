// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure this includes your app folder
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
      extend: {
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
