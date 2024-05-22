import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: '#635FC7',
      purple: '#A8A4FF',
      black: '#000112',
      'black-2': '#20212C',
      'black-3': '#2B2C37',
      'black-4': '#3E3F4E',
      gray: '#828FA3',
      'sky-blue': '#E4EBFA',
      'sky-blue-light': '#F4F7FD',
      red: '#EA5555',
      'red-light': '#FF9898',
    },
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
