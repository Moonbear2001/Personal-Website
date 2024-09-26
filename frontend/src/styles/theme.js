import { extendTheme } from '@chakra-ui/react'

import '@fontsource/newsreader/400.css'

const theme = extendTheme({
  fonts: {
    heading: `'Newsreader', sans-serif`,
    body: `'Newsreader', sans-serif`,
  },
  colors: {
    brand: {
      primary: '#5324cc',
      secondary: '#6a2eff',
    }
  },
  styles: {
    global: {
      body: {
        bg: "gray.300",
        color: "gray.900"
      }
    }
  },
});

export default theme;