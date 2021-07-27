import { Box, HStack } from "@chakra-ui/react"

import { PaginationItem } from "./PaginationItem"

export function Pagination() {
  return (
    <HStack
      spacing="6"
      marginTop="8"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent number={ 1 } />
        <PaginationItem number={ 2 } />
        <PaginationItem number={ 3 } />
        <PaginationItem number={ 4 } />
      </HStack>
    </HStack>
  )
}