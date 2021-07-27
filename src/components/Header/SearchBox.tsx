import { Flex, Icon, Input } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"

export function SearchBox() {
  return (
    <Flex
      as="label"
      position="relative"
      flex="1"
      alignItems="center"
      maxWidth="400px"
      marginLeft="6"
      paddingY="4"
      paddingX="8"
      borderRadius="full"
      backgroundColor="gray.800"
      color="gray.200"
      boxShadow="md"
    >
      <Input
        variant="unstyled"
        marginRight="4"
        paddingX="4"
        color="gray.500"
        placeholder="Buscar na plataforma"
        _placeholder={ { color: "gray.400" } }
      />
      <Icon as={ FaSearch } fontSize="20px" />
    </Flex>
  )
}