/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'pka-green': '#024533',
        'pka-gold': '#d19f34',
      },
      animation: {
        sheen: 'sheen 0.5s ease-in-out',
      },
      keyframes: {
        sheen: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      screens: {
        menu: '1024px',
      },
    },
  },
  plugins: [],
};

export default config;
