/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Brand palette extracted from the Media Planet homepage design
        brand: {
          yellow: "#F5C518", // primary accent / CTA
          "yellow-600": "#E4B30C",
          "yellow-700": "#C99B06",
        },
        ink: {
          DEFAULT: "#0E1A2B", // deep navy — headings, footer, dark sections
          soft: "#17273D",
        },
        navy: {
          DEFAULT: "#0B1626", // darkest hero/CTA band
          800: "#13233A",
          700: "#1C3252",
        },
        cream: {
          DEFAULT: "#FDF9F0", // warm section background
          deep: "#FBF3E2", // slightly deeper cream card band
        },
        surface: "#F5F7FA", // cool light gray section background
        line: "#E6EAF0", // cool border
        muted: "#5B6472", // muted body text
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(14,14,14,0.12)",
        card: "0 2px 10px -2px rgba(14,14,14,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
