import Link from "next/link"
import { useRouter } from "next/router"
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

import { api } from "../../services/axios/api"
import { queryClient } from "../../services/reactQuery/queryClient"

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], "As senhas precisam ser iguais")
})

export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post("users", {
      user: {
        ...user,
        created_at: new Date()
      }
    })
    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("users")
    }
  })

  const { formState, handleSubmit, register } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)
    router.push("/users")
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
          as="form"
          flex="1"
          padding={ ["4", "8"] }
          borderRadius="8px"
          backgroundColor="gray.800"
          boxShadow="md"
          onSubmit={ handleSubmit(handleCreateUser) }
        >
          <Heading size="lg" fontWeight="400">Criar usuário</Heading>
          <Divider marginY="6" borderColor="gray.700" />
          <VStack spacing={ ["4", "8"] }>
            <SimpleGrid minChildWidth="240px" spacing={ ["4", "8"] } width="100%">
              <Input
                name="name"
                label="Nome completo"
                error={ errors.name }
                { ...register("name") }
              />
              <Input
                type="email"
                name="email"
                label="E-mail"
                error={ errors.email }
                { ...register("email") }
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={ ["4", "8"] } width="100%">
              <Input
                type="password"
                name="password"
                label="Senha"
                error={ errors.password }
                { ...register("password") }
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação da senha"
                error={ errors.password_confirmation }
                { ...register("password_confirmation") }
              />
            </SimpleGrid>
          </VStack>
          <Flex marginTop="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="green"
                isLoading={ formState.isSubmitting }
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}