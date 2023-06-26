import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const LocationItems = ({ img, name, routes }) => {
    return (
        <>
            <Box>
                <Flex alignItems="center"
                    transition='.3s'
                    _hover={{ transform: "scale(1.1)" }}
                    cursor='pointer'>
                    <Box w="150px" bg="black" borderRadius="20px" h="120px"
                    >
                        <Image src={img} boxSizing="150px" h="120px" borderRadius="15px" />
                    </Box>
                    <Box ms="1rem">
                        <Heading fontSize="20px">{name}</Heading>
                        <Text fontSize="13px">{routes}</Text>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default LocationItems;
