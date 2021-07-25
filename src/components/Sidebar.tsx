import {
  Box,
  Icon,
  Link,
  Stack,
  Text
} from "@chakra-ui/react"

import {
  FaAddressCard,
  FaFileAlt,
  FaShareAltSquare,
  FaThLarge
} from 'react-icons/fa'

export function Sidebar() {
  return (
    <Box
      as='aside'
      width='64'
      marginRight='8'
    >
      <Stack
        spacing='12'
        alignItems='flex-start'
      >
        <Box>
          <Text
            fontSize='small'
            fontWeight='700'
            color='gray.400'
          >
            GERAL
          </Text>
          <Stack
            spacing='4'
            marginTop='8'
            alignItems='stretch'
          >
            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={ FaThLarge }
                fontSize='20'
              />
              <Text
                marginLeft='4'
                fontWeight='600'
              >
                Dashboard
              </Text>
            </Link>
            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={ FaAddressCard }
                fontSize='20'
              />
              <Text
                marginLeft='4'
                fontWeight='600'
              >
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text
            fontSize='small'
            fontWeight='700'
            color='gray.400'
          >
            AUTOMAÇÃO
          </Text>
          <Stack
            spacing='4'
            marginTop='8'
            alignItems='stretch'
          >
            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={ FaFileAlt }
                fontSize='20'
              />
              <Text
                marginLeft='4'
                fontWeight='600'
              >
                Formulários
              </Text>
            </Link>
            <Link
              display='flex'
              alignItems='center'
            >
              <Icon
                as={ FaShareAltSquare }
                fontSize='20'
              />
              <Text
                marginLeft='4'
                fontWeight='600'
              >
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}