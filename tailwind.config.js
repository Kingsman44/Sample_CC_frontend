/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors:{
            'background': '#fafafa',     //white
            'primary': '#006CE6',        //blue
            'secondary': '#D1D5D8',        //grey (shimmer)
            'primarydark': '#0054B3',     //Dark blue
            'primarylight':'#cae1fa',      //sky blue light
         }

      },
   },
   plugins: [],
};
