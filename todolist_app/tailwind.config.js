/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["'Josefin Sans'", "sans-serif"],
        
      },
      fontSize:{
        16:'16px',
      },
      backgroundColor:{             
        'app':'var(--app-bg)',
        'con-bg': 'var(--main-theme)', 
        'hover':'var(--hover)'       
      },
      colors:{
        'ring':'var(--ring)',
        'i-text':'var(--font-color)',
        'footer':'var(--Grayish-Blue)',
        'strick':'var(--Grayish-Blue)',
        'Bright-Blue': 'var(--Bright-Blue)',
        'con-bg': 'var(--main-theme)',
        'drag':'var(--Light-Grayish-Blue)',
        
        
      },
      borderWidth:{
        1:'1px',
        2:'2px',
        3:'3px',
        4:'4px',
      },
      borderColor:{
        
        'Grayish-Blue': 'var(--Grayish-Blue)',
      },
      width: {
        
        400: '400px',
        500: '500px',
        600: '600px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1440: '1440px',
      },
     
      maxWidth:{
        500:'500px',
        1440:'1440px'
      },
      letterSpacing:{
        'widest':'12px'
      },
      backgroundImage: {
        'd-bg':"var(--d-bg)",
        'm-bg':"var(--m-bg)"
      },
    },
  },
  plugins: [],
}

