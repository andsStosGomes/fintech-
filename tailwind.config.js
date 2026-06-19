/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        fintech: {
          purple: "hsl(245, 75%, 60%)",
          "purple-dark": "hsl(245, 65%, 50%)",
          "purple-light": "hsl(245, 80%, 70%)",
          bg: "hsl(220, 20%, 98%)",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        card: "15px",
      },
    },
  },
  plugins: [],
};
