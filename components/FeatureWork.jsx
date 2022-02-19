import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Link,
  Image,
  useColorMode,
} from "@chakra-ui/react";

import Footer from "./Footer";
import { ArrowSquareOut } from "phosphor-react";

export default function FeatureWork() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Flex direction="column" mb={6}>
        <Heading as="h4" size="xs">
          Featured work
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
          <GridItem
            w="100%"
            border="1px solid #D1D1D1"
            _dark={{ borderColor: "gray.600" }}
            borderRadius="lg"
            opacity={0.85}
            _hover={{ opacity: 1 }}
          >
            <Box>
              <Box
                overflow="hidden"
                padding={3}
                bg="purple.50"
                _dark={{ bg: "gray.700" }}
                borderRadius="lg"
              >
                <Image src="https://i.ibb.co/wzYn4CM/Screen-Shot-2022-02-18-at-3-08-30-PM.png" alt="feature work image for recurrence" />
              </Box>
              <Box padding={6}>
                <Text fontSize="sm" fontWeight="bold">
                  Reccurence
                </Text>
                <Text fontSize="sm" fontWeight="light" color="gray.500">
                  Take control of your recurring expenses. With budgeting made
                  easy, you can save time and worry about more important things
                  like friends and family.
                </Text>
                <Flex
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="sm" fontWeight="bold" display="flex" alignItems="center" mt={2}>
                    <Link
                      href="https://recurrence.app/"
                      color="orange.500"
                      fontWeight="bold"
                      isExternal
                    >
                      {" "}
                      View Site{" "}
                    </Link>{" "}
                    <ArrowSquareOut style={{ marginLeft: 2 }} color="darkorange" />
                  </Text>
                  <Text
                    fontSize="xs"
                    casing="uppercase"
                    bg="red.100"
                    color="red.500"
                    px={1}
                    borderRadius="lg"
                    fontWeight="bold"
                  >
                    Live
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #D1D1D1"
            _dark={{ borderColor: "gray.600" }}
            borderRadius="lg"
            opacity={0.85}
            _hover={{ opacity: 1 }}
          >
            <Box>
              <Box
                overflow="hidden"
                padding={3}
                bg="purple.50"
                _dark={{ bg: "gray.700" }}
                borderRadius="lg"
              >
                <Image src={colorMode === 'dark' ?  "https://i.ibb.co/MN4WbmX/Screen-Shot-2022-02-19-at-11-26-10-AM.png" : "https://i.ibb.co/SXRkTFV/Screen-Shot-2022-02-19-at-11-30-54-AM.png"} alt="feature work image for onlyquotes" />
              </Box>
              <Box padding={6} minHeight="full">
                <Text fontSize="sm" fontWeight="bold">
                  OnlyQuotes
                </Text>
                <Text fontSize="sm" fontWeight="light" color="gray.500">
                  Post your day to day quotes on OnlyQuotes, and let users
                  subscribe to you for a small fee to see all of your private
                  quotes.
                </Text>
                <Flex
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="sm" fontWeight="bold" display="flex" alignItems="center" mt={2}>
                    <Link
                      href="https://github.com/masonschafercodes/onlyquotes"
                      color="orange.500"
                      fontWeight="bold"
                      isExternal
                    >
                      {" "}
                      View Repo{" "}
                    </Link>{" "}
                      <ArrowSquareOut style={{ marginLeft: 2 }} color="darkorange" />
                  </Text>
                  <Text
                    fontSize="xs"
                    casing="uppercase"
                    bg="green.100"
                    color="green.500"
                    px={1}
                    borderRadius="lg"
                    fontWeight="bold"
                  >
                    In Dev
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
      <Footer />
    </Box>
  );
}
