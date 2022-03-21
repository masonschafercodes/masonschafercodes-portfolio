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

import {featuredWorkData} from "../featured_work_data/featuredWorkData";

export default function FeatureWork() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Flex direction="column" mb={6}>
        <Heading as="h4" size="xs">
          Featured work
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
          { featuredWorkData.map((item, index) => (
            <GridItem
            key={item.featuredWorkTitle}
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
                <Image
                  src={item.featuredWorkImage}
                  alt="feature work image for recurrence"
                />
              </Box>
              <Box padding={6}>
                <Text fontSize="sm" fontWeight="bold">
                  {item.featuredWorkTitle}
                </Text>
                <Text fontSize="sm" fontWeight="light" color="gray.500">
                  {item.featuredWorkDescription}
                </Text>
                <Flex
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    alignItems="center"
                    mt={2}
                  >
                    <Link
                      href={item.link}
                      color="orange.500"
                      fontWeight="bold"
                      isExternal
                    >
                      {" "}
                      {item.linkText}{" "}
                    </Link>{" "}
                    <ArrowSquareOut
                      style={{ marginLeft: 2 }}
                      color="darkorange"
                    />
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
                    {item.linkDecoration}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          ))}
        </Grid>
      </Flex>
      <Footer />
    </Box>
  );
}
