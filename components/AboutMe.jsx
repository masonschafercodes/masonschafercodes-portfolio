import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Spacer,
  Image,
} from "@chakra-ui/react";
import React from "react";
import FeatureWork from "./FeatureWork";

export default function AboutMe() {
  return (
    <Flex alignItems="center" justifyContent="center" width="full">
      <Box width="xl" mt={24}>
        <Image
          borderRadius="full"
          boxSize="60px"
          mb={6}
          src="https://i.ibb.co/7kPQGVT/icon.png"
          alt="Mason Schafer"
        />
        <Heading as="h3" size="md">
          Hey, How are you?
        </Heading>
        <Text mt={4} fontSize="sm">
          I&apos;m{" "}
          <Text fontWeight="bold" display="inline">
            Mason Schafer
          </Text>
          , an inovator and a developer. During the day I strive to support my
          team on their projects and to learn new things. During the night I
          spend my time hanging out with the people I love and building side
          projects.
        </Text>
        <Box>
          <Text mt={6} fontSize="sm">
            👉 Currently an IT Support Specialist{" "}
            <Link
              href="https://www.zingashome.com/"
              color="orange.500"
              fontWeight="bold"
              isExternal
            >
              @Zingas Home Solutions
            </Link>
          </Text>
          <Text mt={2} fontSize="sm">
            🇺🇸 Based in{" "}
            <Link
              href="https://www.google.com/maps/place/Indiana/@39.7449673,-88.6841147,7z/data=!3m1!4b1!4m5!3m4!1s0x886b50bcd9f81b1d:0x7e102fcecb32ec72!8m2!3d40.2671941!4d-86.1349019"
              color="orange.500"
              fontWeight="bold"
              isExternal
            >
              Indiana, US
            </Link>
          </Text>
          <Text mt={2} fontSize="sm">
            📄 Grab my{" "}
            <Link href="/resume.pdf" color="orange.500" fontWeight="bold">
              Resume
            </Link>
          </Text>
        </Box>
        <Spacer borderBottomWidth={1} my={10} />
        <FeatureWork />
      </Box>
    </Flex>
  );
}
