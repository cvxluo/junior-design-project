import React from "react";
import { Stack, Flex, Icon, Box, Text } from "@chakra-ui/react";
import { AiOutlineFileProtect } from "react-icons/ai";

export default function layoutLogin({ children }) {
  return (
    <Box
      minH="100vh"
      pos="fixed"
      w={"full"}
      align={"center"}
      justify={"center"}
      bgColor={"gray.100"}
    >
      <Box h={"5"} bg={"#331E38"}></Box>
      <Stack overflow={"auto"} pos="fixed" h="full" w={"full"} spacing={8}>
        <Icon
          my={"12"}
          alignSelf={"center"}
          as={AiOutlineFileProtect}
          color="#70A0AF"
          boxSize={"20"}
        />
        {children}
      </Stack>
    </Box>
  );
}
