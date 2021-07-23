import { Button, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

export default function Home() {
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
      >
        <Stack
          spacing='4'
        >
          <FormControl>
            <FormLabel htmlFor='email'>
              E-mail
            </FormLabel>
            <Input
              variant='filled'
              size='lg'
              id='email'
              name='email'
              type='email'
              focusBorderColor='green.500'
              backgroundColor='gray.900'
              _hover={ {
                backgroundColor: 'gray.900'
              } }
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>
              Senha
            </FormLabel>
            <Input
              variant='filled'
              size='lg'
              id='password'
              name='password'
              type='password'
              focusBorderColor='green.500'
              backgroundColor='gray.900'
              _hover={ {
                backgroundColor: 'gray.900'
              } }
            />
          </FormControl>
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
