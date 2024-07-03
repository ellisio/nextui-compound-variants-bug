import { nextui } from "@nextui-org/react";
import { join } from "path";
import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { colors, commonColors, darkCommonColors } from "./src/colors";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    join(__dirname, "../../packages/**/src/*.{ts,tsx}"),
    join(__dirname, "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"),
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0 0 0 1px var(--ds-gray-alpha-300)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    nextui({
      prefix: "ds",
      themes: {
        light: {
          colors: {
            ...colors.light,
            ...commonColors,
          },
        },
        dark: {
          colors: {
            ...colors.dark,
            ...darkCommonColors,
          },
        },
      },
    }),
  ],
};

export default config;
