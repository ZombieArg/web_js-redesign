/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: 'hsl(210, 40%, 98%)',
          100: 'hsl(210, 40%, 96%)',
          200: 'hsl(214, 32%, 91%)',
          300: 'hsl(213, 27%, 84%)',
          400: 'hsl(215, 20%, 65%)',
          500: 'hsl(215, 16%, 47%)',
          600: '#372AA6',
          700: 'hsl(246, 59%, 35%)',
          800: 'hsl(246, 59%, 25%)',
          900: 'hsl(246, 59%, 20%)',
        },
        accent: {
          50: 'hsl(33, 100%, 96%)',
          100: 'hsl(34, 100%, 92%)',
          200: 'hsl(32, 98%, 83%)',
          300: 'hsl(31, 97%, 72%)',
          400: 'hsl(27, 96%, 61%)',
          500: 'hsl(25, 95%, 53%)',
          600: 'hsl(21, 90%, 48%)',
          700: 'hsl(17, 88%, 40%)',
          800: 'hsl(15, 86%, 33%)',
          900: 'hsl(13, 83%, 28%)',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
