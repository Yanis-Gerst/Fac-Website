module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      textColor: {
        color: {
          base: "var(--main-text-color)",
          sub: "var(--secondary-text-color)",
        },
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
    },
  },
  variants: {},
  plugins: [],
};
