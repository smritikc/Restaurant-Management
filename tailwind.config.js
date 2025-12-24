/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#756AAF",
        secondary: "#AD88BE",
        accent: "#E2AED2",
        light: "#FDE5E5",
      },
    },
  },
  plugins: [],
};
