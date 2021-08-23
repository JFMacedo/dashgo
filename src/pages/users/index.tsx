import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from "@chakra-ui/react"

import Link from "next/link"

import { FaPencilAlt, FaPlusCircle } from "react-icons/fa"

import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

import { useUsers } from "../../services/hooks/useUsers"

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex
        width="100%"
        maxWidth="1480px"
        marginY="6"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />
        <Box
          flex="1"
          padding={["4", "8"]}
          borderRadius="8px"
          backgroundColor="gray.800"
          boxShadow="md"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            marginBottom="8"
          >
            <Heading size="lg" fontWeight="400">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm" color="green.500" ml="4" /> }
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={ <Icon as={ FaPlusCircle } /> }
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="ceenter">
              <Text>Falha ao obter os dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th width="8" paddingX={ ["4", "4", "6"] } color="gray.300">
                      <Checkbox colorScheme="green" />
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && <Th>Data de cadastro</Th> }
                    { isWideVersion && <Th width="8">Editar</Th> }
                  </Tr>
                </Thead>
                <Tbody>
                  { data.map(user => {
                    return (
                      <Tr key={ user.id }>
                        <Td  paddingX={ ["4", "4", "6"] }>
                          <Checkbox colorScheme="green" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{ user.name }</Text>
                            <Text fontSize="sm" color="gray.300">
                              { user.email }
                            </Text>
                          </Box>
                        </Td>
                        { isWideVersion && <Td>{ user.createdAt }</Td> }
                        <Td>
                          { isWideVersion && (<Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={ <Icon as={ FaPencilAlt } /> }
                            cursor="pointer"
                          >
                            Editar
                          </Button>)}
                        </Td>
                      </Tr>
                    )
                  }) }
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={ 200 }
                currentPage={ 10 }
                onPageChange={ () => {} }
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}