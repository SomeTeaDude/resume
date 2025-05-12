import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx", "./src/**/*.js"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        xs: "580px",
      },
      keyframes: {
        "ball-ping": {
          "0%": {
            transform: "translate(50%, -50%) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(50%, -50%) scale(3.5)",
            opacity: "0",
          },
        },
      },
      boxShadow: {
        "3xl": "0 1px 4px 0 rgba(15,15,20,.1)",
        "4xl": "0 3px 8px 0 rgba(15,15,20,.2)",
        inner: "inset 1px 1px 10px 2px hsl(var(--twc-main-2))",
        "inner-capsol": "inset 0 3px 8px 0 hsl(var(--twc-main-2))",
        "inner-input": "inset 0 1px 4px 0 hsl(var(--twc-main-2))",
        glow: "0px 0px 10px hsl(var(--twc-primary))",
      },
      dropShadow: {
        glow: "0px 0px 4px hsl(var(--twc-primary))",
        shine: "0px 0px 6px hsl(var(--twc-primary))",
      },
      transitionDuration: {
        750: "750ms",
      },
      colors: {
        "light-hero": "#fdfdfe",
        golden: "#ffc107",
        lovely: "#f46258",
        natury: "#00a693",
        icey: "#0067a5",
      },
      fontFamily: {
        vazir: "Vazir",
        narm: "Narm",
        "dast-nevis": '"DastNevis", "TimeZone"',
        "time-zone": "TimeZone",
      },
      animation: {
        "ball-ping": "ball-ping 1s ease-out infinite",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        secondary: "#5c5c6f",

        main: "#e0e0e6",
        "main-1": "#ffffff",
        "main-2": "#e0e0e6",
        "main-3": "#f4f4f6",

        matte: "#ffffff",

        bar: "#c0c0ca",
      },
      dark: {
        secondary: "#8c8c8e",

        main: "#191923",
        "main-1": "#20202a",
        "main-2": "#24242e",
        "main-3": "#1e1e28",

        matte: "#2c2c38",
        bar: "#191923",
      },
      gold: {
        primary: "#ffc107",
      },
      love: {
        primary: "#f46258",
      },
      nature: {
        primary: "#00a693",
      },
      ice: {
        primary: "#0067a5",
      },
    }),
  ],
};
