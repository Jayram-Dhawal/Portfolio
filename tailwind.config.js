/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui' ,'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
        // mono: ['Fira Code', 'monospace'],
        heading: ['Inter', 'system-ui' ,'sans-serif'],
      },
      colors: {
        // Add your custom colors here
        primary: '#3B82F6',
        secondary: '#8B5CF6',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-left': 'slideLeft 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}