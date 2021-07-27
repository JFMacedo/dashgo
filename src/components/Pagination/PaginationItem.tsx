import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
}

export function PaginationItem({
  isCurrent = false,
  number
}: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button
        size="sm"
        width="4"
        fontSize="xs"
        colorScheme="green"
        disabled
        _disabled={ {
          backgroundColor:"green.500",
          cursor: "default"
        } }
      >
        { number }
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      width="4"
      fontSize="xs"
      backgroundColor="gray.700"
      _hover={ {
        backgroundColor:"gray.500"
      } }
    >
      { number }
    </Button>
  )
}