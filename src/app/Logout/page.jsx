import { Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "src/components/layoutLogin";

export default function Page() {
  const router = useRouter();
  return (
    <Stack align={"center"}>
      <Text fontSize={40} color="black" pl={"10"}>
        You have been succesfully logged out
      </Text>
      <Button
        m={8}
        colorScheme="purple"
        variant={"outline"}
        _hover={{ bgColor: "black", color: "white" }}
        size={"lg"}
        onClick={() => router.push("/")}
      >
        Return to Login
      </Button>
    </Stack>
  );
}

Page.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
