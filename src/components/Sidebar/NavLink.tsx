import { ElementType } from "react"

import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react"

import Link from "next/link"

interface NavLinkProps extends ChakraLinkProps {
  children: string
  icon: ElementType
  href: string
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={ href } passHref>
      <ChakraLink
        display="flex"
        alignItems="center"
        _focus={ {
          outlineColor: "green.500",
          outlineWidth: "1px"
        } }
        { ...rest }
      >
        <Icon as={ icon } fontSize="20" />
        <Text marginLeft="4" fontWeight="600">{ children }</Text>
      </ChakraLink>
    </Link>
  )
}