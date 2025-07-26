
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Scan all React files for Tailwind classes
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        modern: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4338ca',   // indigo-700
        },
        accent: {
          DEFAULT: '#059669', // emerald-600 (darker)
          dark: '#065f46',   // emerald-800 (darker)
        },
        secondary: {
          DEFAULT: '#38bdf8', // sky-400
          dark: '#0ea5e9',   // sky-600
        },
        highlight: {
          DEFAULT: '#fbbf24', // orange-400
          dark: '#f59e42',   // orange-500
        },
        surface: {
          DEFAULT: '#f8fafc', // slate-50
          dark: '#e2e8f0',   // slate-200
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#f1f5f9',
        },
        border: '#e5e7eb', // gray-200
        text: {
          DEFAULT: '#1e293b', // slate-800
          light: '#64748b',   // slate-400
        },
      },
    },
  },
  plugins: [],
};
