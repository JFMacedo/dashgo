import { Button, Flex, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Input } from "../components/Form/Input"

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória")
})

export default function SignIn() {
  const { formState, handleSubmit, register } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);
  }

  return (
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        flexDirection="column"
        width="100%"
        maxWidth="360px"
        padding="8"
        borderRadius="md"
        backgroundColor="gray.800"
        boxShadow="md"
        onSubmit={ handleSubmit(handleSignIn) }
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            error={ errors.email }
            { ...register("email") }
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            error={ errors.password }
            { ...register("password") }
          />
        </Stack>
        <Button
          size="lg"
          type="submit"
          marginTop="6"
          colorScheme="green"
          isLoading={ formState.isSubmitting }
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
