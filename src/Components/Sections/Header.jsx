import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { LuMousePointer2 } from "react-icons/lu";
import PopupMenu from "../Ui/PopupMenu";

const Header = () => {
    return (
        <>
            <Box>
                <Box p=".6rem 1rem" maxW="1200px" m="0 auto">
                    <Flex alignItems="center">
                        <Box
                            bg="#FF6838"
                            p=".5rem"
                            borderRadius="15px"
                            me=".7rem"
                            transition=".3s"
                            _hover={{ transform: "scale(1.1)" }}
                            cursor="pointer">
                            <Box fontSize="22px" color="white" transform="rotate(85deg);">
                                <LuMousePointer2 />
                            </Box>
                        </Box>
                        <Heading fontSize="28px" fontWeight="900">
                            Travello
                        </Heading>
                    </Flex>
                </Box>
                <Box pos="relative">
                    <Box
                        bgImage="url('/images/header.jpg')"
                        bgPosition="center"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        w="100%"
                        px={["2.5rem", "2.5rem", "2.5rem", "0", "0"]}
                        pt={["4rem", "4rem", "5rem", "", ""]}
                        h="90vh">
                        <Box
                            display="flex"
                            flexDirection="column"
                            width={["", "410px", "480px", "480px", "480px"]}
                            pos={{ md: "absolute" }}
                            height={{ md: "426px" }}
                            left="68px"
                            top="60px"
                            borderRadius="10px"
                            textAlign="center"
                            background="#FFFFFF"
                            boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08);">
                            <Box
                                background="linear-gradient(267.68deg, #FF6838 0%, #FF4438 100%);"
                                color="white"
                                p="10px 15px">
                                <Text fontSize={["9.2px", "12px", "15px", "17px", "17px"]}>
                                    Connect with Trusted Travel Service Providers on Travello
                                </Text>
                            </Box>
                            <Box
                                w={{ sm: "445px" }}
                                h={{ md: "198px" }}
                                pb={["1.5em", "1.5rem", "1rem", "0", "0"]}
                                px={["2.8rem", "3.8rem", "4.1rem", "4.5rem", "4.5rem"]}>
                                <Heading
                                    fontStyle="normal"
                                    fontWeight="900"
                                    letterSpacing="3px"
                                    fontSize={["26px", "50px", "50px", "50px", "50px"]}
                                    textAlign="start"
                                    my="1.5rem">
                                    Search , Discover & Explore.
                                </Heading>
                                <Box>
                                    <PopupMenu />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Header;
