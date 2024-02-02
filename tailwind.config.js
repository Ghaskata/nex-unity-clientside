/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1640px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: 12,
        sm: 16,
      },
    },
    fontFamily: {
      global: ["Merienda"],
      jost: ["Jost"],
      ledger: ["Ledger"],
    },

    // colors: {
    //   // light mode color
    //   light:{
    //     primary: "#edf2f8",
    //     secondary:"#1E40AF",
    //   },

    //   // darkmode color
    //   dark:{
    //     primary:"#000000",
    //     secondary:"#edf2f8",
    //   },
    // },
    extend: {
      colors:{
        backgroundv1:"var(--background-v1)",
        backgroundv2:"var(--background-v2)",
        textPrimary:"var(--color-text-primary)"
      }
    },
  },
  veriants: {
    extends: {},
  },
  plugins: [],
};
