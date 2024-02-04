/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'protest': ['Protest Strike', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

