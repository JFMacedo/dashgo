import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { formState, handleSubmit, register } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);
  }

  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        as='form'
        flexDirection='column'
        width='100%'
        maxWidth='360px'
        padding='8'
        borderRadius='md'
        backgroundColor='gray.800'
        boxShadow="md"
        onSubmit={ handleSubmit(handleSignIn) }
      >
        <Stack
          spacing='4'
        >
          <Input
            type='email'
            name='email'
            label='E-mail'
            { ...register('email') }
          />
          <Input
            type='password'
            name='password'
            label='Senha'
            { ...register('password') }
          />
        </Stack>
        <Button
          size='lg'
          type='submit'
          marginTop='6'
          colorScheme='green'
          isLoading={ formState.isSubmitting }
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
