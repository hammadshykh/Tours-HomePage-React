import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";

const layer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "16px 24px",
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "#00000031"

}

const styled = {
    width: "280px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "15px",
};
const StyleBox = ({ height, mBottom, name, imgUrl }) => {
    return (
        <Box
            position='relative'
            style={styled}
            h={height}
            mb={mBottom}
            transition='.3s'
            _hover={{ transform: "scale(1.1)" }}
            bgImage={`url('/images/${imgUrl}')`}>
            <Box ms="1rem"
            >
                <Box
                    style={layer}
                >
                    <Heading fontSize="20px">{name}</Heading>
                    <Text fontSize="13px">20 routes</Text>
                </Box>
            </Box>
        </Box >
    );
};

const Categories = () => {
    return (
        <>
            <Box bg="black" color="white" py="2rem">
                <Box maxW="1200px" m="0 auto">
                    <Heading
                        textAlign="center"
                        fontSize="25px"
                        fontWeight="500"
                        py="2rem">
                        ALL CATEGORIES OF TOUR
                    </Heading>
                    <Flex justifyContent="center" pb={{ md: "3rem" }}>
                        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing="1.7rem">
                            <Box position='relative'>
                                <StyleBox
                                    height="395px"
                                    name="Friends Tours"
                                    imgUrl="category1.jpg"
                                />
                            </Box>
                            <Box>
                                <StyleBox
                                    height="188.5px"
                                    mBottom="1rem"
                                    name="Honeymoon Tours"
                                    imgUrl="category2.jpg"
                                />
                                <StyleBox
                                    height="188.5px"
                                    name="Faimly Tours"
                                    imgUrl="category4.jpg"
                                />
                            </Box>
                            <Box>
                                <StyleBox
                                    height="395px"
                                    name="Corporate Tours"
                                    imgUrl="tourgroupchoice001.jpg"
                                />
                            </Box>
                            <Box>
                                <Box>
                                    <StyleBox
                                        height="188.5px"
                                        mBottom="1rem"
                                        name="Group Tours"
                                        imgUrl="category3.jpg"
                                    />
                                    <StyleBox
                                        height="188.5px"
                                        name="Student Tours"
                                        imgUrl="category5.jpg"
                                    />
                                </Box>
                            </Box>
                        </SimpleGrid>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};

export default Categories;
