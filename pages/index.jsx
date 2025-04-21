import {
    Flex,
    Heading,
    Text,
    useColorMode,
    Box,
    IconButton,
} from "@chakra-ui/react";
import Head from "next/head";
import { MoonStars, Sun } from "phosphor-react";

import AboutMe from "../components/AboutMe";

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                padding={6}
                color="white"
                borderBottomWidth={1}
                _dark={{ borderBottomWidth: 0 }}
            >
                <Head>
                    <title>Mason Schafer | Developer</title>
                    <meta
                        name="description"
                        content="Mason Schafer's personal site"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton
                        aria-label="Make Dark Mode"
                        variant={"ghost"}
                        display={{ md: "flex" }}
                        borderRadius="full"
                        onClick={toggleColorMode}
                        color="orange.500"
                        icon={
                            colorMode === "light" ? (
                                <MoonStars size={19} weight="bold" />
                            ) : (
                                <Sun size={19} weight="bold" />
                            )
                        }
                    />
                </Box>
            </Flex>
            <AboutMe />
        </Box>
    );
}
