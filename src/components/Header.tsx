import {
  Avatar,
  Box,
  Flex,
  Icon,
  Input,
  HStack,
  Text
} from "@chakra-ui/react"

import {
  FaSearch,
  FaBell,
  FaUserPlus
} from 'react-icons/fa'

export function Header() {
  return (
    <Flex
      as='header'
      width='100%'
      maxWidth='1480px'
      height='20'
      marginX='auto'
      marginTop='4'
      paddingX='6'
      alignItems='center'
    >
      <Text
        width='64'
        fontSize='3xl'
        fontWeight='700'
        letterSpacing='tight'
      >
        dashgo
        <Text
          as='span'
          marginLeft='1'
          color='green.500'
        >
          .
        </Text>
      </Text>
      <Flex
        as='label'
        position='relative'
        flex='1'
        alignItems='center'
        maxWidth='400px'
        marginLeft='6'
        paddingY='4'
        paddingX='8'
        borderRadius='full'
        backgroundColor='gray.800'
        color='gray.200'
        boxShadow="md"
      >
        <Input
          variant='unstyled'
          marginRight='4'
          paddingX='4'
          color='gray.500'
          placeholder='Buscar na plataforma'
          _placeholder={ { color: 'gray.400' } }
        />
        <Icon
          as={ FaSearch }
          fontSize='20px'
        />
      </Flex>
      <Flex
        alignItems='center'
        marginLeft='auto'
      >
        <HStack
          spacing='8'
          marginX='8'
          paddingRight='8'
          paddingY='1'
          borderRightWidth='1px'
          borderColor='gray.700'
          color='gray.300'
        >
          <Icon
            as={ FaBell }
            fontSize='20px'
          />
          <Icon
            as={ FaUserPlus }
            fontSize='24px'
          />
        </HStack>
        <Flex
          alignItems='center'
        >
          <Box
            margin='4'
            textAlign='right'
          >
            <Text>
              Jean Fernandes de Macedo
            </Text>
            <Text
              fontSize='small'
              color='gray.300'
            >
              jfmacedo91@gmail.com
            </Text>
          </Box>
          <Avatar
            size='md'
            backgroundColor='green.500'
            name='Jean Fernandes de Macedo'
            src='https://github.com/JFMacedo.png'
          />
        </Flex>
      </Flex>
    </Flex>
  )
}