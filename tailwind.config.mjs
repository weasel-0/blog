/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ash-grey": "#A8A29E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
