import { Box, Stack } from "@chakra-ui/react"
import { FaAddressCard, FaFileAlt, FaShareAltSquare, FaThLarge } from "react-icons/fa"

import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" alignItems="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={ FaThLarge }>Dashboard</NavLink>
          <NavLink icon={ FaAddressCard }>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={ FaFileAlt }>Formulários</NavLink>
          <NavLink icon={ FaShareAltSquare }>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}