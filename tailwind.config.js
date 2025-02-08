/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        "fuzzy-bubbles": ['"Fuzzy Bubbles"'],
      },
      fontWeight: {
        bold: "700",
        normal: "400",
      },
      dropShadow: {
        primary: "-6px -2px 1px #FFFFFF",
        secondary: "3px 4px 1px #FFFFFF",
      },
      backgroundImage: {
        "home-bg": "url('https://wallstreetpepe.com/assets/images/banner_bg.png')",
        "chapterOne-bg":
          "url('https://wallstreetpepe.com/assets/images/svg-icons/chapters/chapter_one_hero_small.png')",
        "chapterTwo-bg": "url('https://wallstreetpepe.com/assets/images/svg-icons/chapters/chapter_two_hero.png')",
        "chapterThree-bg": "url('https://wallstreetpepe.com/assets/images/svg-icons/chapters/chapter_three_hero.png')",
        "chapterFour-bg": "url('https://wallstreetpepe.com/assets/images/svg-icons/chapters/chapter_four_hero.png')",
        "howtb-bg": "url('https://wallstreetpepe.com/assets/images/svg-icons/how-to-buy/how_to_buy_1366.png')",
      },
      boxShadow: {
        primary: "-4px 7px #0000001c",
        secondary: "-2px 14px #0000001c",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
