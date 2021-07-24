import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
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
      >
        <Stack
          spacing='4'
        >
          <Input
            type='email'
            name='email'
            label='E-mail'
          />
          <Input
            type='password'
            name='password'
            label='Senha'
          />
        </Stack>
        <Button
          size='lg'
          type='submit'
          marginTop='6'
          colorScheme='green'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
