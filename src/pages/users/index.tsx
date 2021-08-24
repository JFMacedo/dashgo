import { Box, Button, Checkbox, Flex, Heading, Icon, Link } from "@chakra-ui/react"
import { Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"
import { useState } from "react"
import NextLink from "next/link"

import { FaPencilAlt, FaPlusCircle } from "react-icons/fa"

import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

import { useUsers } from "../../services/hooks/useUsers"
import { api } from "../../services/axios/api"
import { queryClient } from "../../services/reactQuery/queryClient"

export default function UserList() {
  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching, error } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(["user", userId], async () => {
      const response = await api.get(`users/${userId}`)
      return response.data
    }, {
      staleTime: 1000 * 60 * 10
    })
  }

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
              { !isLoading && isFetching && (
                <Spinner size="sm" color="green.500" ml="4" />
              ) }
            </Heading>
            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={ <Icon as={ FaPlusCircle } /> }
              >
                Criar novo
              </Button>
            </NextLink>
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
                  { data.users.map(user => {
                    return (
                      <Tr key={ user.id }>
                        <Td  paddingX={ ["4", "4", "6"] }>
                          <Checkbox colorScheme="green" />
                        </Td>
                        <Td>
                          <Box>
                            <Link
                              color="purple.300"
                              onMouseEnter={ () => handlePrefetchUser(user.id) }
                            >
                              <Text fontWeight="bold">{ user.name }</Text>
                            </Link>
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
                totalCountOfRegisters={ data.totalCount }
                currentPage={ page }
                onPageChange={ setPage }
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}