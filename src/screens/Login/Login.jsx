import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import urls from "utils/urls";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Box backgroundColor="blue">
      <button onClick={() => signIn()}>Sign in</button>
      <VStack m="10vh">
        <Heading color="lightgray">Login</Heading>
        <Box align="start">
          <Text fontSize="1xl" fontWeight="bold" color="lightgray">
            Email
          </Text>
          <Input backgroundColor="lightblue" placeholder="Name" />
        </Box>
        <Box align="start">
          <Text fontSize="1xl" fontWeight="bold" color="lightgray">
            Password
          </Text>
          <Input backgroundColor="lightblue" placeholder="Name" />
        </Box>

        <NextLink href={urls.pages.home} passHref>
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
            <Text display="block" fontSize={18} margin="0em" textAlign="center">
              Login
            </Text>
          </Link>
        </NextLink>
      </VStack>
    </Box>
  );
}
