import {
    Box,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const locitems = [
    { item: "Swat" },
    { item: "Chitral" },
    { item: "Arag kel" },
    { item: "Hunza" },
    { item: "Naran" },
    { item: "Skardu" },
    { item: "Ormara Beach" },
    { item: "Murree" },
];

const PopupMenu = () => {
    return (
        <>
            <Box position="relative">
                <InputGroup display="flex" alignItems="center">
                    <Input
                        _placeholder={{
                            fontSize: ["10px", "10px", "13px", "15px", "15px"],
                        }}
                        type="text"
                        placeholder="where do you want to go"
                        w={{ sm: "100%" }}
                        borderRadius="25px"
                        h={{ md: "45px" }}
                        py={[".1rem", ".2rem", ".1rem", "0", "0"]}
                        border="0.3px solid gray"
                        outline="none"
                        px="15px"
                        display="flex"
                        alignItems="center"
                    />
                </InputGroup>
                <Menu placement="bottom">
                    <MenuButton
                        transition=".3s"
                        _hover={{ transform: "scale(1.1)" }}
                        cursor="pointer"
                        position="absolute"
                        bg="#FF4438"
                        left={["85%", "85%", "85%", "85%", "85%"]}
                        top="20%"
                        p={["3px", "5px", "5px", "6px", "6px"]}
                        borderRadius="99%"
                        color="white"
                        me={["2px", "3px", "4px", "5px", "5px"]}
                        fontSize={["12px", "12px", "17px", "15px", "15px"]}
                        display="flex"
                        alignItems="center"
                        textAlign="center">
                        <AiOutlineSearch />
                    </MenuButton>
                    <MenuList fontWeight="bold">
                        {locitems.map((items) => (
                            <MenuItem _hover={{ fontWeight: "bold" }}>
                                {items.item}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </>
    );
};
export default PopupMenu;
