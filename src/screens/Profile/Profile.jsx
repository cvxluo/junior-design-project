import {
  VStack,
  Heading,
  Text,
  Center,
  HStack,
  StackDivider,
  Button,
  Link,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import NextLink from "next/link";
import NavBar from "../../components/NavBar/NavBar";

import urls from "utils/urls";
import { signOut } from "next-auth/react";

export default function Profile() {
  const handleLogout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <Box backgroundColor="blue">
      <NavBar />
      <Center my="2em">
        <VStack>
          <Box h='10'> 
          </Box>

          <HStack
            spacing={20}
            divider={<StackDivider borderColor="#DBE4EE" borderWidth={2} />}
          >
            <VStack alignItems="start">
              <Box p='5'>
                <Text fontSize="2xl" fontWeight="bold" color="lightgray">
                  Name
                </Text>
                <Text fontSize="lg" color="lightgray">
                  John Doe
                </Text>
              </Box>
              <Box p='5'>
                <Text fontSize="2xl" fontWeight="bold" color="lightgray">
                  Primary Email
                </Text>
                <Text fontSize="lg" color="lightgray">
                  johndoe@gmail.com
                </Text>
                <Button size='sm'>Change</Button>
              </Box>
              <Box p='5'>
                <Text fontSize="2xl" fontWeight="bold" color="lightgray">
                  Secondary Email
                </Text>
                <Text fontSize="lg" color="lightgray">
                  johndoe@yahoo.com
                </Text>
                <Button size='sm'>Change</Button>
              </Box>
              <Box p='5'>
                <Text fontSize="2xl" fontWeight="bold" color="lightgray">
                  Account Creation Date
                </Text>
                <Text fontSize="lg" color="lightgray">
                  4/18/22
                </Text>
              </Box>
            </VStack>

            <VStack spacing={10}>
              <Button>Change Password</Button>
              <Button>Delete Account</Button>
              <NextLink href={urls.pages.login} passHref>
                <Link
                  backgroundColor="lightblue"
                  borderStyle="solid"
                  borderWidth={10}
                  borderColor="lightblue"
                  margin="1em 2em"
                  padding="0 4em"
                  borderRadius={5}
                  color="black"
                >
                  <Button onClick={handleLogout}>Logout</Button>
                </Link>
              </NextLink>
            </VStack>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
}
