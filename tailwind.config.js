/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#dd1f26',
        background: '#e6e7e2',
        gold: '#ffd700',
      },
      fontFamily: {
        sans: ['SFT Schrifted Sans Trial', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Code Bold', 'Arial Black', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 30s linear infinite',  // Adjusted to scroll faster (10s)
        assembly: 'moveAssembly 2s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      backgroundImage: {
        'carbon': "url('/patterns/carbon.png')",
        'assembly': "linear-gradient(to bottom, #1a1a1a, #2a2a2a)",
      },
    },
  },
  plugins: [],
};
