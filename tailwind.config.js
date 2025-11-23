// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // **CRUCIAL:** Tells Tailwind where to scan for classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Your app directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If you have a pages directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  backgroundImage: {
    "auth-dark": 'url("/images/auth-dark.png")',
    "auth-light": 'url("/images/auth-light.png")',
  },
  plugins: [
    // 💡 This is the line that will fix the 'tw-animate-css' error if
    // it's a plugin-related utility (like 'tailwindcss-animate')
    require("tailwindcss-animate"),
  ],
};
