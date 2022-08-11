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
      <Box width="xl" mt={21}>
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
          , I enjoy working on personal projects in my free time. I mainly focus
          on backend development, but I also enjoy frontend development on an
          occasion. I also enjoy going to the gym and walking outside with my
          girlfriend. I am currently learning some{" "}
          <Text as="strong" color="orange.500">
            Go
          </Text>{" "}
          and{" "}
          <Text as="strong" color="orange.500">
            Rust
          </Text>{" "}
          for fun on the side. At work I use{" "}
          <Text as="strong" color="orange.500">
            Typescript
          </Text>
          ,{" "}
          <Text as="strong" color="orange.500">
            Javascript
          </Text>
          , and some{" "}
          <Text as="strong" color="orange.500">
            Ruby on Rails
          </Text>{" "}
          most of the time.
        </Text>
        <Box>
          <Text mt={6} fontSize="sm">
            👉 Currently a Software Engineer{" "}
            <Link
              href="https://monsterconnect.com/"
              color="orange.500"
              fontWeight="bold"
              isExternal
            >
              @MonsterConnect
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
            <Link href="/resume-2022.pdf" color="orange.500" fontWeight="bold">
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
