import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Travello = () => {
    const layer = {
        position: "absolute",
        left: "0",
        bottom: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "#00000071",
    };

    return (
        <>
            <Box py="2rem" px={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "0"]}>
                <Box maxW="1200px" m="0 auto">
                    <Flex
                        borderRadius="15px"
                        bgImage="url('/images/travello.jpg')"
                        bgPosition="center"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        color="white"
                        h={["40vh", "40vh", "48vh", "48vh", "48vh"]}
                        flexDirection="column"
                        justifyContent="center"
                        position="relative"
                        alignItems="flex-start">
                        <Box
                            borderRadius="15px"
                            padding={["40px", "40px", "40px", "60px", "60px"]}
                            style={layer}>
                            <Box>
                                <Heading fontSize="48px">Travello</Heading>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                fontSize={{ md: "32px" }}
                                fontWeight="700"
                                mt={["1.5rem", "1.5rem", "2.5rem", "3rem", "3rem"]}>
                                <Heading fontSize={["18px", "18px", "18px", "32px", "32px"]}>
                                    50+
                                </Heading>
                                <Text
                                    fontWeight="400"
                                    mx={["5px", "5px", "5px", "10px", "10px"]}>
                                    travel routes with
                                </Text>
                                <Heading fontSize={["18px", "18px", "18px", "32px", "32px"]}>
                                    100+
                                </Heading>
                            </Box>
                            <Flex fontSize={{ md: "32px" }} fontWeight="400">
                                <Text>service provider</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};

export default Travello;
