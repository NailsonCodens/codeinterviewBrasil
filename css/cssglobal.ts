import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  '@import':
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredoka+One&family=Mukta&family=Poppins:wght@200;400;600;800&family=Raleway:wght@200;400;600;700;800&display=swap'
  /*
    font-family: 'Bebas Neue', cursive;
    font-family: 'Fredoka One', cursive;
    font-family: 'Poppins', sans-serif;
    font-family: 'Raleway', sans-serif;
  */
})

export default globalStyles
