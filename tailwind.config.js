/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          'blue-dark': '#1e40af',
          green: '#10b981',
          'green-dark': '#059669',
        },
      },
    },
  },
  plugins: [],
}
