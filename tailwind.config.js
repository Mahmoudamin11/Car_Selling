/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'lato':'var(--font-family)',
      },
      colors : { 
        'main-white': 'var(--main-white)',
        'secondary-white': 'var(--secondary-white)',
        'main-blue' : 'var(--main-blue)',
        'gray' : 'var(--gray)',
        'red' : 'var(--red)',
      },
      border : { 
        'titlesBorder' : '4px solid border-image: linear-gradient(to bottom, #181818, #eee, #181818) 1 100%',
      },
      boxShadow : { 
        'card' : '0px 5px 15px  rgba(0, 0, 0, 0.35)'
      },
      keyframes: { 
        opac : {
          '0%' : {'opacity': '10%'},
          '50%' : {'opacity': '25%'},
          '100%' : {'opacity': '10%'},
        },
        shake: {
          '0%' : {'transform':'translateX(0)'},
          '25%' : {'transform':'translateX(2px)'},
          '50%' : {'transform':'translateX(0px)'},
          '75%' : {'transform':'translateX(-2px)'},
          '100%' : {'transform':'translateX(0)'},

        },
        client: { 
          '0%' : {'border-top-left-radius-': '150px'},
          '50%' : {'border-top-left-radius': '70px'},
          '100%' : {'border-top-left-radius': '150px', 'background-color': 'var(--red)'},
        },
      },
      animation :  {
        'opac' : 'opac 4s linear infinite',
        'shake' : 'shake 1s linear infinite',
        'clientCard' : 'client 4s linear infinite',
      },
      backgroundImage: { 
        'buyOrExcahnge': "url('./src/assets/white park.jpg')",
        'clientsSay': "url('./src/assets/tier.jpg')",
        'callUs': "url('./src/assets/buyOrChange.jpg')",
        'footer': "url('./src/assets/Component 1.png')",
        'appointment': "url('./src/assets/park.jpg')"
        // try to make the buy appointment section
      },
      screens: { 
        'mini-md': '690px',
        '440' : '440px',
        '500' : '500px',
        '585' : '585px',
        '910' : '910px',
        '955' : '955px',
        '844' : '844px',
        '830' : '830px',
        '720' : '720px',
        '760' : '760px',
        '783' : '783px',
      },
    },
  },
  plugins: [],
}

