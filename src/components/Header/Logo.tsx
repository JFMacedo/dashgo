import { Text } from "@chakra-ui/react"

export function Logo() {
  return (
    <Text
      width="64"
      fontSize={ ["2xl", "3xl"] }
      fontWeight="700"
      letterSpacing="tight"
    >
      dashgo
      <Text as="span" marginLeft="1" color="green.500">
        .
      </Text>
    </Text>
  )
}