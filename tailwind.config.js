/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inria': ['Inria Serif', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      },
      backgroundImage: {
        'light': "url('/images/brightness.png')",
      },
      colors: {
        'main': "#F3F3F3"
      }
    },
  },
  plugins: [],
}

