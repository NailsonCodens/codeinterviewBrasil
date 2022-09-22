import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)'
  },
  theme: {
    space: {
      1: '4rem',
      2: '20px'
    },
    fonts: {
      system: 'system-ui'
    },
    colors: {
      white: '#fff',
      grey: '#2E2E2E',
      purple: '#836FFF',
      purpleBlack: '#6A5ACD',
      purpleLight: '#8470FF'
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px'
    },
    radii: {
      borderGeneral: '7px'
    }
  }
})
