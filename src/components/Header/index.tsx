import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"

import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1480px"
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={ <Icon as={ FaBars } /> }
          variant="unstyled"
          marginRight="2"
          fontSize="24"
          onClick={ onOpen }
          _focus={ {
            outlineColor: "green.500",
            outlineWidth: "1px"
          } }
        />
      ) }
      <Logo />
      { isWideVersion && <SearchBox /> }
      <Flex alignItems="center" marginLeft="auto">
        <NotificationNav />
        <Profile showProfileData={ isWideVersion } />
      </Flex>
    </Flex>
  )
}