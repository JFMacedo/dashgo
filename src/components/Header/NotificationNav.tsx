import { HStack, Icon } from "@chakra-ui/react"
import { FaBell, FaUserPlus } from "react-icons/fa"

export function NotificationNav() {
  return (
    <HStack
      spacing={ ["6", "8"] }
      marginX={ ["6", "8"] }
      paddingRight={ ["6", "8"] }
      paddingY="1"
      borderRightWidth="1px"
      borderColor="gray.700"
      color="gray.300"
    >
      <Icon as={ FaBell } fontSize="20px" />
      <Icon as={ FaUserPlus } fontSize="24px" />
    </HStack>
  )
}