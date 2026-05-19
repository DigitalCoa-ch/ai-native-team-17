/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F7F4',
        surface: '#FFFFFF',
        card: '#FFFFFF',
        'card-hover': '#FAFAF8',
        border: '#E5E2DC',
        'border-strong': '#D0CCC5',
        primary: {
          DEFAULT: '#1A3C2A',
          hover: '#14301F',
          light: 'rgba(26, 60, 42, 0.08)',
          border: 'rgba(26, 60, 42, 0.2)',
        },
        red: {
          DEFAULT: '#C0392B',
          light: 'rgba(192, 57, 43, 0.08)',
          border: 'rgba(192, 57, 43, 0.2)',
        },
        amber: {
          DEFAULT: '#B7760D',
          light: 'rgba(183, 118, 13, 0.08)',
          border: 'rgba(183, 118, 13, 0.2)',
        },
        green: {
          DEFAULT: '#1A7340',
          light: 'rgba(26, 115, 64, 0.08)',
          border: 'rgba(26, 115, 64, 0.2)',
        },
        text: '#1A1916',
        'text-secondary': '#6B6560',
        'text-muted': '#9E9891',
        gold: '#C9913A',
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
        'input': '8px',
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 4px 20px rgba(0, 0, 0, 0.07)',
        'nav': '0 1px 12px rgba(0, 0, 0, 0.08)',
        'panel': '0 4px 24px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}