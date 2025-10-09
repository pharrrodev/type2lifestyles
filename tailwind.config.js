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
        primary: {
          DEFAULT: '#14B8A6', // Teal
          dark: '#0F766E',
          light: '#5DD4C3',
        },
        secondary: {
          DEFAULT: '#4A9FD8', // Blue
        },
        background: {
          light: '#F7F9FC',
          dark: '#1F2937',
        },
      },
    },
  },
  plugins: [],
}
