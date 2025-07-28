/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        mobile: { min: "0px", max: "480px" }, // Extra small screens
        tablet: { min: "481px", max: "768px" }, // Maximum width for medium -- tablet
        desktop: { min: "769px" }, // Maximum width for large -- desktop
        customTablet: { min: "481px", max: "767px" },
        customDesktop: { min: "1024px" },
        xs: { min: "0px", max: "767px" },
        "2xl": "1440px", // 2xl screens
        "3xl": "1920px", // 3xl screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerBg: "#01020A",
        headerBg: "#030515",
        grayText: "#DFDFE0",
        footerItem: "#848BCD",
        lightBlue: "#D2DAF7",
        darkBlue: "#3F49A7",
        solutionecHeading: "#131313",
        tertitaryGray: "#909193",
        sustainableGreen: "#EBFCE3",
        textBlue: "#5f80f5",
        territory: "#DFDFE0",
        "extra-sustainability": "#05771D",
        "join-us-subheader": "#3F49A7",
        textSecondary: "#52545B",
        timeline: "#3F49A7",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(310.9deg, #5F80F6 20.02%, #3F49A7 112.23%)",
      },
      borderRadius: {
        custom: "40px",
      },
      spacing: {
        "custom-padding": "9px 24px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "16px": "16px",
        "28px": "28px",
        "32px": "32px",
      },
      lineHeight: {
        "22.4px": "22.4px",
      },
      boxShadow: {
        "form-shadow": "0px 9px 28px 0px rgba(63, 66, 98, 0.11)",
        "white-shadow": "0px 4px 14px 0px rgba(95, 128, 246, 0.30)",
      },
    },
  },
  plugins: [],
};
