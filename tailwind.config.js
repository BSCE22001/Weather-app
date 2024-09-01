/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Helvetica']
    }
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'dosis': ['Dosis']
      },
      backgroundImage: {
        'sunny-day-phone': "url('/src/backgrounds/sunny day phone.jpeg')",
        'sunny-day': "url('/src/backgrounds/sunny day.jpg')",

        'partally-cloudy-day': "url('/src/backgrounds/partiallyCloudy day.jpeg')",
        'partally-cloudy-day-phone': "url('/src/backgrounds/partiallyCloudy day phone.jpg')",
        'partally-cloudy-night': "url('/src/backgrounds/partiallyCloudy night.jpeg')",
        'partally-cloudy-night-phone': "url('/src/backgrounds/partiallyCloudy night phone.jpeg')",

        'clear-day': "url('/src/backgrounds/Clear day.jpg')",
        'clear-day-phone': "url('/src/backgrounds/Clear day phone.jpg')",
        'clear-night': "url('/src/backgrounds/Clear Night.jpg')",
        'clear-night-phone': "url('/src/backgrounds/Clear Night phone.jpeg')",

        'thundery-outbreaks': "url('/src/backgrounds/Thundery outbreaks in nearby.jpg')",
        'thundery-outbreaks-phone': "url('/src/backgrounds/Thundery outbreaks in nearby phone.jpeg')",

        'no-pic': "url('/src/backgrounds/blue.jpg')",
      },
      colors: {
        'regal-red': '#70012B',
        'merlot': '#5D0124',
        'light-maroon': '#380116',
        'maroon': '#25000E',
        'dark-maroon': '#130007',
        'royal': "#001a30",
        'venice': '#04977b',
      }
    },
  },
  plugins: [

    // ...
    require('tailwind-scrollbar'),

  ],
}

