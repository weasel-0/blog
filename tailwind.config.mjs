/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // "ash-grey": "#A8A29E",
        "ash-grey": "#7c7c7c",
        "dark-bg": "#1d1c1b",
        "dark-text": "#f5f4f1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],

  darkMode: "class",
};
