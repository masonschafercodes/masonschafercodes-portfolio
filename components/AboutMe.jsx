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
        <Flex
            alignItems="center"
            justifyContent="center"
            width="full"
            p={{ base: "1" }}
        >
            <Box width="xl" mt={21}>
                <Image
                    borderRadius="full"
                    boxSize="60px"
                    mb={6}
                    src="https://i.imgur.com/wntmdSg.jpeg"
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
                    , I have recently been enjoying learning more about graphics
                    programming in my free time. I built a simple{" "}
                    <Link
                        href="https://github.com/masonschafercodes/weekend-raytracer"
                        color="orange.500"
                        fontWeight="bold"
                        isExternal
                    >
                        raytracer in a weekend.
                    </Link>{" "}
                    Now I am working through{" "}
                    <Link
                        href="http://learnopengl.com/"
                        color="orange.500"
                        fontWeight="bold"
                        isExternal
                    >
                        http://learnopengl.com/
                    </Link>
                    , I am having a blast! I have also recently been
                    experimenting with{" "}
                    <Link
                        href="https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/"
                        color="orange.500"
                        fontWeight="bold"
                        isExternal
                    >
                        RAG
                    </Link>{" "}
                    and generative AI models to build stuff that help me with
                    day to day tasks.
                </Text>
                <Text mt={6} fontSize="sm">
                    My work background is more web focused, I spend a lot of my
                    time planning and implementing new features, maintaining our
                    existing feature set, and communicating with our clients to
                    better the platform.
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
                        🗺️ Based in{" "}
                        <Link
                            href="https://www.google.com/maps/place/Indiana/@39.7449673,-88.6841147,7z/data=!3m1!4b1!4m5!3m4!1s0x886b50bcd9f81b1d:0x7e102fcecb32ec72!8m2!3d40.2671941!4d-86.1349019"
                            color="orange.500"
                            fontWeight="bold"
                            isExternal
                        >
                            Indianapolis, US
                        </Link>
                    </Text>
                    <Text mt={2} fontSize="sm">
                        📄 Grab my{" "}
                        <Link
                            href="/resume-2025.pdf"
                            color="orange.500"
                            fontWeight="bold"
                        >
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
