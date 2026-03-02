import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#C9963A",
          hover: "#B07D2A",
          light: "#D4A853",
        },
        dark: {
          DEFAULT: "#262626",
          light: "#333333",
        },
        nav: "#262626",
        forest: {
          DEFAULT: "#2E3732",
          light: "#3A4540",
        },
        light: {
          DEFAULT: "#FCFBF9",
          alt: "#EDE9E3",
        },
        warm: {
          border: "#D9D5CF",
          text: "#6B6560",
          muted: "#9C9590",
        },
        noir: "#1A1A1A",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1360px",
      },
    },
  },
  plugins: [],
};
export default config;
