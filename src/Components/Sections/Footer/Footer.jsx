import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SocialIcons from "../../Ui/SocialIcons";

const Footer = () => {
    return (
        <>
            <Box py="2rem" px={['2rem', '2rem', '2rem', '2rem', '0']} bg='#EDEDED'>
                <Box maxW="1200px" m="0 auto">
                    <Flex
                        alignItems={{ lg: "center" }}
                        justifyContent="space-between"
                        flexDirection={["column", "column", "column", "row", "row"]}>
                        <Box>
                            <Heading fontSize={['13px', '13px', '15px', '18px', '18px']}>
                                For business queries, contact support@travello.com
                            </Heading>
                            <Text mt="1rem" fontSize={['12px', '12px', '15px', '18px', '18px']}>Copyrights 2023 I All Rights Reserved.</Text>
                        </Box>
                        <Box mt={['1.1rem', '1.1rem', '1.4rem', '0', '0']} >
                            <SocialIcons />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
