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
import { useSession, signOut } from "next-auth/react";

const infoExample = {
  title: "General Guidelines",
  listContent: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  ],
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default function Profile() {
  const handleLogout = (e) => {
    e.preventDefault();
    signOut();
  };
  const { data: session } = useSession();
  console.log(session);
  return (
    <Box backgroundColor="blue">
      <NavBar />
      <Center my="2em">
        <VStack>
          <Heading color="lightgray">My Account</Heading>

          <HStack
            spacing={96}
            divider={<StackDivider borderColor="#DBE4EE" borderWidth={5} />}
          >
            <VStack alignItems="start">
              <Box>
                <Text fontSize="4xl" fontWeight="bold" color="lightgray">
                  Name
                </Text>
                <Text fontSize="lg" color="lightgray">
                  John Doe
                </Text>
              </Box>
              <Box>
                <Text fontSize="4xl" fontWeight="bold" color="lightgray">
                  Primary Email
                </Text>
                <Text fontSize="lg" color="lightgray">
                  johndoe@gmail.com
                </Text>
              </Box>
              <Box>
                <Text fontSize="4xl" fontWeight="bold" color="lightgray">
                  Secondary Email
                </Text>
                <Text fontSize="lg" color="lightgray">
                  johndoe@yahoo.com
                </Text>
              </Box>
              <Box>
                <Text fontSize="4xl" fontWeight="bold" color="lightgray">
                  Account Creation Date
                </Text>
                <Text fontSize="lg" color="lightgray">
                  4/18/22
                </Text>
              </Box>
            </VStack>

            <VStack spacing={10}>
              <Button>Add Email</Button>
              <Button>Change Information</Button>
              <Button>Change Password</Button>
              <NextLink href={urls.pages.login} passHref>
                <Link
                  backgroundColor="lightblue"
                  borderStyle="solid"
                  borderWidth={10}
                  borderColor="lightblue"
                  margin="1em 2em"
                  padding="0 4em"
                  borderRadius={20}
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
