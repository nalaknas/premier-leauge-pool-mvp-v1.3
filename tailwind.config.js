/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#2a2a2a',
        'accent': '#3b82f6',
        'text': '#e0e0e0',
        'text-secondary': '#a0a0a0',
      },
    },
  },
  plugins: [],
}