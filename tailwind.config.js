/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy-950': '#0B0E1A',
        'navy-900': '#1a1a2e',
        'ivory': '#F4F0E6',
        'gold': '#FFB800',
        'gold-soft': '#E0A82E',
        'teal': '#00e6c7',
        'slate-ui': '#8A93A8',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
