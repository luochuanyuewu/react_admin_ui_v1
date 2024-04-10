import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
      screens: {
        "3xl": "2200px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
  },
  darkMode: ["class", '[data-theme="dark"]'],
} satisfies Config;
