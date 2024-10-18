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
        // 1024px is the same as Tailwind's built-in 'lg' breakpoint, but we
        // define it here so we can easily maintain a single reference to the
        // breakpoint @ which we switch b/w desktop nav header and mobile
        // hamburger menu.
        menu: '1024px',
      },
    },
  },
  plugins: [],
};

export default config;
