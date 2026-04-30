import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F2EA',
        surface: '#FFFFFF',
        heading: '#1A2840',
        body: '#3A4555',
        sage: '#8FA68C',
        gold: '#C9A961',
        border: '#E8DFD3',
      },
      fontFamily: {
        'he-serif': ['var(--font-frank-ruhl)', 'serif'],
        'he-sans': ['var(--font-heebo)', 'sans-serif'],
        'en-serif': ['var(--font-playfair)', 'serif'],
        'en-sans': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
