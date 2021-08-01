import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from "@chakra-ui/react"

import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

export default function CreateUser() {
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
          padding={ ["4", "8"] }
          borderRadius="8px"
          backgroundColor="gray.800"
          boxShadow="md"
        >
          <Heading size="lg" fontWeight="400">Criar usuário</Heading>
          <Divider marginY="6" borderColor="gray.700" />
          <VStack spacing={ ["4", "8"] }>
            <SimpleGrid minChildWidth="240px" spacing={ ["4", "8"] } width="100%">
              <Input name="name" label="Nome completo" />
              <Input type="email" name="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={ ["4", "8"] } width="100%">
              <Input type="password" name="password" label="Senha" />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação da senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex marginTop="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="green">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}