import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ImInstagram, ImLinkedin2 } from "react-icons/im";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const hover = {
    color: "black",
    transform: "scale(1.2)",
};

const socialIcons = [
    { icon: <AiFillYoutube /> },
    { icon: <ImLinkedin2 /> },
    { icon: <ImInstagram /> },
    { icon: <AiFillFacebook /> },
];

const SocialIcons = () => {
    return (
        <>
            <Box w="150px">
                <Flex
                    alignItems="center"
                    transition=".3s"
                    fontSize="20px"
                    justifyContent="space-between">
                    {socialIcons.map((soc) => (
                        <Box key={soc.icon} cursor="pointer" transition=".3s" _hover={hover}>
                            {soc.icon}
                        </Box>
                    ))}
                </Flex>
            </Box>
        </>
    );
};

export default SocialIcons;
