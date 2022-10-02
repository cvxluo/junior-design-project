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
  return (
    <Box backgroundColor="blue">
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

        <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Sign In With Google
        </Button>
      </VStack>
    </Box>
  );
}
