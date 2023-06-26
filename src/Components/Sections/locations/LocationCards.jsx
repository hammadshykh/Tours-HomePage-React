import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import LocationItems from "./LocationsItem";

const LocationCards = ({ items }) => {
    return (
        <Box py="2rem">
            <Box maxW="1200px" m="0 auto" px="1.5rem">
                <Heading py="2rem" fontSize={["24px", "24px", "30px", "", ""]}>
                    Discover top locations
                </Heading>
                <Box
                    justifyContent="center"
                    display={["flex", "flex", "flex", "block", "block"]}>
                    <SimpleGrid columns={[1, 2, 3, 4, 4]} spacingX="1rem" spacingY="4rem">
                        {items.map((card) => (
                            <LocationItems
                                key={card}
                                name={card.name}
                                img={card.img}
                                routes={card.routes}
                            />
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
};

export default LocationCards;
