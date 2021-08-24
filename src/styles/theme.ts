import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#161B1F",
      "800": "#1D2326",
      "700": "#303940",
      "600": "#4D5C66",
      "500": "#607380",
      "400": "#7A8D99",
      "300": "#98A8B3",
      "200": "#B8C4CC",
      "100": "#CED4D9",
      "50": "#F2EDED"
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