import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react"

import {
  FaPencilAlt,
  FaPlusCircle
} from "react-icons/fa"

import {
  Header
} from "../../components/Header"
import { Pagination } from "../../components/Pagination"

import {
  Sidebar
} from "../../components/Sidebar"

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex
        width='100%'
        maxWidth='1480px'
        marginY='6'
        marginX='auto'
        paddingX='6'
      >
        <Sidebar />
        <Box
          flex='1'
          padding='8'
          borderRadius='8px'
          backgroundColor='gray.800'
          boxShadow="md"
        >
          <Flex
            alignItems='center'
            justifyContent='space-between'
            marginBottom='8'
          >
            <Heading
              size='lg'
              fontWeight='400'
            >
              Usuários
            </Heading>
            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='green'
              leftIcon={ <Icon as={ FaPlusCircle } /> }
            >
              Criar novo
            </Button>
          </Flex>
          <Table
            colorScheme='whiteAlpha'
          >
            <Thead>
              <Tr>
                <Th
                  width='8'
                  paddingX='6'
                  color='gray.300'
                >
                  <Checkbox
                    colorScheme='green'
                  />
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th>
                  Data de cadastro
                </Th>
                <Th
                  width='8'
                >
                  Editar
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  padding='6'
                >
                  <Checkbox
                    colorScheme='green'
                  />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight='bold'
                    >
                      Jéssica Lais Cuaglio
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.300'
                    >
                      jessica_lcuaglio@hotmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  13 de Maio, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={ <Icon as={ FaPencilAlt } /> }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td
                  padding='6'
                >
                  <Checkbox
                    colorScheme='green'
                  />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight='bold'
                    >
                      Carlos Henrique dos Santos
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.300'
                    >
                      carlos.caulin@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  10 de Julho, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={ <Icon as={ FaPencilAlt } /> }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td
                  padding='6'
                >
                  <Checkbox
                    colorScheme='green'
                  />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight='bold'
                    >
                      Jean Fernandes de Macedo
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.300'
                    >
                      jfmacedo91@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  26 de Julho, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={ <Icon as={ FaPencilAlt } /> }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}