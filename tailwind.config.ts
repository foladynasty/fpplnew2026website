import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY COLORS
        'financial-blue': '#003B73',
        'achievement-gold': '#C9A961',
        'momentum-teal': '#00B4A8',

        // ACCENT COLORS
        'action-coral': '#FF6B6B',
        'excellence-purple': '#6B4C9A',
        'achievement-green': '#10B981',

        // NEUTRALS
        'charcoal': '#333333',
        'slate-gray': '#64748B',
        'warm-white': '#FAFAFA',
        'cool-gray': '#F1F5F9',
        'border-gray': '#E5E5E5',

        // LOGO COLORS
        'logo-gold': '#C9A961',
        'logo-dark': '#5A5A5A',

        // Tailwind-compatible naming for easier use
        primary: {
          DEFAULT: '#003B73',
          50: '#E6EEF5',
          100: '#CCE0EB',
          200: '#99C1D7',
          300: '#66A2C3',
          400: '#3383AF',
          500: '#003B73',
          600: '#002F5C',
          700: '#002345',
          800: '#00172E',
          900: '#000C17',
        },
        gold: {
          DEFAULT: '#C9A961',
          50: '#F8F3E9',
          100: '#F1E7D3',
          200: '#E3CFA7',
          300: '#D5B77B',
          400: '#C9A961',
          500: '#B38A4E',
          600: '#8F6E3E',
          700: '#6B522F',
          800: '#47371F',
          900: '#231B10',
        },
        teal: {
          DEFAULT: '#00B4A8',
          50: '#E6F7F6',
          100: '#CCEFED',
          200: '#99DFDB',
          300: '#66CFC9',
          400: '#33BFB7',
          500: '#00B4A8',
          600: '#009086',
          700: '#006C65',
          800: '#004843',
          900: '#002422',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          50: '#FFE9E9',
          100: '#FFD3D3',
          200: '#FFA7A7',
          300: '#FF7B7B',
          400: '#FF6B6B',
          500: '#FF4F4F',
          600: '#FF2323',
          700: '#F60000',
          800: '#C30000',
          900: '#900000',
        },
        purple: {
          DEFAULT: '#6B4C9A',
          50: '#EEE9F5',
          100: '#DDD3EB',
          200: '#BBA7D7',
          300: '#997BC3',
          400: '#7763AF',
          500: '#6B4C9A',
          600: '#563D7B',
          700: '#402E5C',
          800: '#2B1F3E',
          900: '#150F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;

