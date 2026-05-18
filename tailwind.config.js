/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1D2E',
          800: '#112840',
          700: '#1A3A5C',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        crimson: {
          500: '#DC2626',
        },
        slate: {
          850: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};