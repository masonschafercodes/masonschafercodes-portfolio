import {
  Flex,
  Link,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { TwitterLogo, LinkedinLogo, GithubLogo } from "phosphor-react";

export default function Footer() {
  return (
    <Box>
      <Flex
        as="footer"
        align="center"
        justify="center"
        padding={6}
        color="white"
        borderBottomWidth={1}
        _dark={{ borderBottomWidth: 0 }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="https://www.linkedin.com/in/masonschafer/" isExternal>
          <IconButton
            aria-label="Linkedin Logo"
            variant={"ghost"}
            display={{ base: "none", md: "flex" }}
            borderRadius="full"
            mr="0.3rem"
            color="orange.400"
            icon={<LinkedinLogo size={19} weight="bold" />}
          />
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="https://twitter.com/schadev_" isExternal>  
          <IconButton
            aria-label="Twitter Logo"
            variant={"ghost"}
            display={{ base: "none", md: "flex" }}
            borderRadius="full"
            mr="0.3rem"
            color="orange.400"
            icon={<TwitterLogo size={19} weight="bold" />}
            />
            </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="https://github.com/masonschafercodes" isExternal>
          <IconButton
            aria-label="Github logo"
            variant={"ghost"}
            display={{ base: "none", md: "flex" }}
            borderRadius="full"
            mr="0.3rem"
            color="orange.400"
            icon={<GithubLogo size={19} weight="bold" />}
            />
            </Link>
        </Box>
      </Flex>
    </Box>
  );
}
