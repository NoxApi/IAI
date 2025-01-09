import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1921px",
        // this is for axoltescape game site
        "3xlV.2": "1920px",
        "3xlV.2m": "1919px",
        // => @media (min-width: 1536px) { ... }
        "2xlm": { max: "1439px" },
        // => @media (max-width: 1535px) { ... }
        xlm: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgm: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdm: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xsmm: { max: "374px" },
        pr: { max: "816px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
