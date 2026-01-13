import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 기존에 공유해주신 색상 코드를 매핑합니다.
        "own-bg": "#F8F5F2",      // --bg-base
        "own-text": "#1F1F1F",    // --text-base
        "own-brown": "#A67B5B",   // --brown
        "own-olive": "#708238",   // --olive
        "own-light": "#F5EFE6",   // --light-bg
      },
    },
  },
  plugins: [],
};
export default config;