import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#061E3A",
          midnight: "#0A2540",
          700: "#143257",
          500: "#2B4A73",
        },
        orange: {
          DEFAULT: "#F15A24",
          burnt: "#D94A12",
          soft: "#FF7A2F",
        },
        cloud: "#F8FAFC",
        charcoal: "#1A2840",
        "soft-blue": "#EAF4FF",
        "warm-sand": "#F7EFE5",
      },
      fontFamily: {
        display: ["Sora", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "9999px",
      },
      boxShadow: {
        xs: "0 1px 3px rgba(0,0,0,0.06)",
        sm: "0 2px 8px rgba(0,0,0,0.07)",
        card: "0 4px 16px rgba(0,0,0,0.08)",
        lg: "0 8px 32px rgba(0,0,0,0.12)",
        cta: "0 4px 20px rgba(241,90,36,0.35)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
