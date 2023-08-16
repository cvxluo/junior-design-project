/* eslint-disable no-unused-vars */
import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Button,
  ButtonGroup,
  Flex,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import {
  AiOutlineFileProtect,
  AiFillHome,
  AiOutlineFile,
  AiOutlineFolder,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { useRouter } from "next/router";
import NextLink from "next/link";
/*const LinkItems = [
  { name: "Home", icon: AiFillHome },
  { name: "Reports", icon: AiOutlineFolder },
  { name: "Guidelines", icon: AiOutlineFile }
]*/

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" px="8">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const router = useRouter();
  return (
    <Box
      transition="3s ease"
      bg={"purple.500"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" m="30" justify={{ base: "space-between", md: "center" }}>
        <Icon
          my={"18"}
          as={AiOutlineFileProtect}
          color="white"
          boxSize={"14"}
        />
        <CloseButton
          alignSelf="center"
          display={{ md: "none" }}
          color="white"
          onClick={onClose}
        />
      </Flex>
      <VStack mt="50px" spacing={14} alignItems="center" w="100%">
        <NextLink href="/" passHref>
          <Button
            variant="ghost"
            onClick={onClose}
            fontSize={20}
            textColor={"white"}
            colorScheme="purple"
            _hover={{ bg: "black", color: "white" }}
            leftIcon={<AiFillHome />}
          >
            Home
          </Button>
        </NextLink>

        <NextLink href="/reports" passHref>
          <Button
            variant="ghost"
            onClick={onClose}
            fontSize={20}
            textColor={"white"}
            colorScheme="purple"
            _hover={{ bg: "black", color: "white" }}
            leftIcon={<AiOutlineFolder />}
          >
            Reports
          </Button>
        </NextLink>

        <NextLink href="/guidelines" passHref>
          <Button
            variant="ghost"
            onClick={onClose}
            fontSize={20}
            textColor={"white"}
            colorScheme="purple"
            _hover={{ bg: "black", color: "white" }}
            leftIcon={<AiOutlineFile />}
          >
            Guidelines
          </Button>
        </NextLink>
      </VStack>
    </Box>
  );
};

/*const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white"
        }}
        {...rest}
      >
        
        {children}
      </Flex>
    </Link>
  )
}*/

const MobileNav = ({ onOpen, ...rest }) => {
  const router = useRouter();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"purple.900"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        color={"white"}
        icon={<FiMenu />}
      />

      <Box justifyContent={{ base: "space-between", md: "flex-end" }}>
        <ButtonGroup variant="ghost">
          <Button
            onClick={() => router.push("/newreport")}
            fontSize={20}
            textColor={"white"}
            colorScheme="purple"
            _hover={{ bg: "white", color: "black" }}
            textOverflow={"inherit"}
            leftIcon={<AiOutlineFileAdd />}
          >
            New Report
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="ghost">
          <Button
            onClick={() => router.push("/profile")}
            fontSize={20}
            textColor={"white"}
            _hover={{ bg: "white", color: "black" }}
            leftIcon={<FaUser />}
          >
            <Text display={{ base: "none", md: "flex" }}>Rank Lastname</Text>
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
};
