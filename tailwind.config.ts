import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green : {
          500: "#22c55e"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        error:"#FFEEEE",
        success: "#E5F7F5"
      },
    },
  },
  plugins: [],
} satisfies Config;
