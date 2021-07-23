import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#1A161F",
      "800": "#221D26",
      "700": "#383040",
      "600": "#594D66",
      "500": "#706080",
      "400": "#8A7A99",
      "300": "#A598B3",
      "200": "#C2B8CC",
      "100": "#D3CED9",
      "50": "#F0EDF2"
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