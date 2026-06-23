/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,md,js}"],
  theme: {
    extend: {
      colors: {
        navy:            '#0F172A',
        'navy-800':      '#1E293B',
        'navy-700':      '#334155',
        'gov-blue':      '#0369A1',
        'gov-blue-dark': '#075985',
        'gov-blue-light':'#E0F2FE',
      },
      fontFamily: {
        heading: ['"Libre Bodoni"', 'Georgia', 'serif'],
        body:    ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
