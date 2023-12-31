import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "th-",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Accent-Purple": "#6548EE",
        "Accent-Purple-Light": "#EBE8FD",
        "Pastel-Neon-Blue": "6548EE",
        "Primary-50": "#8DA4BF",
        "System-stroke2": "#DADCE0",
        "Text-100": "#1C4980",
        White: "#ffffff",
        "Accent-new-Red": "#D63500",
        "Status-Success": "#05c165",
        "Accent-Pink": "#E9407A",
        "Secondary-1": "#0073E6",
        "Accent-Pink-Light": "#FCE8EF",
        "Accent-Blue-Light": "#DDEDFF",
      },
    },
  },
  plugins: [],
};
export default config;
