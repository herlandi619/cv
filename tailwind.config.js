/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
      container: {
        center: true,
        padding: '16px',
      },
    extend: {
      colors: {
        primary:'#22d3ee',
        dark:'#0f172a',
        secondary:'#64748b',
        dark2:'#334155',
        tl:'#e2e8f0',
      },
      screen:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
