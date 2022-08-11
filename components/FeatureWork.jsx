import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";

import Footer from "./Footer";
import { ArrowSquareOut } from "phosphor-react";

import { featuredWorkData } from "../featured_work_data/featuredWorkData";

export default function FeatureWork() {
  return (
    <Box>
      <Flex direction="column" mb={6}>
        <Heading as="h4" size="xs">
          Featured work
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
          {featuredWorkData.map((item, index) => (
            <GridItem
              key={index}
              p={2}
              border="1px solid #D1D1D1"
              _dark={{ borderColor: "gray.600" }}
              borderRadius="lg"
              opacity={0.85}
              _hover={{ opacity: 1 }}
            >
              <Flex direction="column" justify="center">
                <Text fontSize="sm" fontWeight="bold">
                  {item.featuredWorkTitle}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="light"
                  color="gray.500"
                  _dark={{ textColor: "gray.200" }}
                >
                  {item.featuredWorkDescription}
                </Text>
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
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Footer />
    </Box>
  );
}
