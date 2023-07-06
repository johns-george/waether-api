/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'weatherapi':"url('/Users/poovathingal/Desktop/weatherapi/src/wallpaperflare.com_wallpaper.jpg')",
      }
    },
    screens: {
      'xs': '340px',
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',
    },
  },
  plugins: [],
}

