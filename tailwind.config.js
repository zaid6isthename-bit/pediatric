/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDFAF6',
          50: '#FFF9F4',
          100: '#FDFAF6',
        },
        sky: {
          bloom: '#E8F4FD',
          mid: '#DBEAFE',
          deep: '#3B82F6',
        },
        coral: {
          DEFAULT: '#F97B6B',
          light: '#FEE2DC',
          dark: '#E85D4A',
        },
        slate: {
          primary: '#1E293B',
          secondary: '#64748B',
          divider: '#E2EAF3',
        },
        trust: '#D1FAE5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        'pill': '999px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(30, 41, 59, 0.06)',
        'card': '0 8px 40px rgba(30, 41, 59, 0.08)',
        'card-hover': '0 16px 48px rgba(30, 41, 59, 0.14)',
        'coral': '0 8px 24px rgba(249, 123, 107, 0.30)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'count-up': 'countUp 1.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
