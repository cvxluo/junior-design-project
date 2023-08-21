import { useState } from "react";
import {
  VStack,
  Text,
  Center,
  HStack,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Layout from "src/app/Index/layout";
import urls from "utils/urls";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { getSession } from "next-auth/react";

export default function Page() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    getSession().then((session) => setEmail(session.user.email));
  }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    signOut({ callbackUrl: "/logout" });
  };
  return (
    <Box>
      <Center my="2em">
        <VStack>
          <Box h="10"></Box>

          <HStack
            spacing={20}
            divider={<StackDivider borderColor={"black"} borderWidth={2} />}
          >
            <VStack alignItems="start">
              <Box p="5">
                <Text fontSize="2xl" fontWeight="bold">
                  Primary Email
                </Text>
                <Text fontSize="lg">{email}</Text>
              </Box>
              <Box p="5">
                <Text fontSize="2xl" fontWeight="bold">
                  Account Creation Date
                </Text>
                <Text fontSize="lg">08/01/2023</Text>
              </Box>
            </VStack>

            <VStack spacing={10}>
              <Button isDisabled>Change Password</Button>
              <Button isDisabled>Delete Account</Button>

              <Button
                variant={"solid"}
                bgColor={"purple.600"}
                color={"white"}
                _hover={{ bgColor: "black", color: "white" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </VStack>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
}

Page.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
