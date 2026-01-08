/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amazon-orange': '#ff9900',
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-orange': {
          '0%': { 'box-shadow': '0 0 0 0 rgba(255, 153, 0, 0.4)' },
          '70%': { 'box-shadow': '0 0 0 10px rgba(255, 153, 0, 0)' },
          '100%': { 'box-shadow': '0 0 0 0 rgba(255, 153, 0, 0)' },
        }
      },
      animation: {
        'in': 'in 0.3s ease-out forwards',
        'pulse-orange': 'pulse-orange 2s infinite',
      },
    },
  },
  plugins: [],
}
