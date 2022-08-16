/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        background: "#F7FAFC",
        blue: {
          soft: "#E1F2FF",
          light: "#00A3E1",
          DEFAULT: "#0072CE"
        },
        orange: {
          soft: "#FFF0E2",
          light: "#FFB648",
          DEFAULT: "#F48F32"
        },
        green: {
          soft: "#E2FFE9",
          light: "#38E25D",
          DEFAULT: "#35CD56"
        },
        purple: {
          soft: "#F8E6FF",
          light: "#CE42FF",
          DEFAULT: "#9800CE"
        },
        red: {
          soft: "#FFD0D3",
          light: "#FE3B47",
          DEFAULT: "#D8212C"
        },
        black: {
          medium: "#17222D"
        },
        gray: {
          "01": "#F7F9FB",
          "02": "#F0F3F6",
          "03": "#E9EDF1",
          "04": "#D7DEE5",
          "05": "#8796A4",
          "06": "#8796A4",
          "07": "#455463",
          "08": "#35414D",
          "09": "#1E2B37",
          10: "#1E2B37"
        }
      },
      linearGradient: {
        teste: "linear-gradient(90deg, black 50%, white 50%)"
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"]
      },
      boxShadow: {
        base: "0px 3.97845px 3.97845px rgba(0, 0, 0, 0.04)",
        "base-blue": "0px 8px 16px rgba(0, 0, 0, 0.3)"
      },
      fontSize: {
        "heading-01": [
          "58px",
          {
            lineHeight: "109px"
          }
        ],
        "heading-02": [
          "38px",
          {
            lineHeight: "71px"
          }
        ],
        "heading-03": [
          "34px",
          {
            lineHeight: "64px"
          }
        ],
        "heading-04": [
          "24px",
          {
            lineHeight: "45px"
          }
        ],
        "heading-05": [
          "18px",
          {
            lineHeight: "34px"
          }
        ],
        "heading-semibold-01": [
          "34px",
          {
            lineHeight: "64px"
          }
        ],
        "regular-01": [
          "18px",
          {
            lineHeight: "18px",
            textAlign: "left"
          }
        ],
        "regular-02": [
          "16px",
          {
            lineHeight: "30px"
          }
        ]
      },
      screens: {
        xm: "320px",
        sm: "640px",
        md: "1070px",
        lg: "1440px",
        xl: "1640px"
      }
    },
    plugins: []
  }
};
