import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#1F1E1E",
      "800": "#262625",
      "700": "#403F3E",
      "600": "#666564",
      "500": "#807E7D",
      "400": "#999896",
      "300": "#B3B1AF",
      "200": "#CCCAC8",
      "100": "#D9D7D4",
      "50": "#F2F0ED"
    }
  },
  fonts: {
    heading: 'Nunito',
    body: 'Nunito'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})