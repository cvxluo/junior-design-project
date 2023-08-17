import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Stack, Text, VStack, HStack, Heading } from "@chakra-ui/layout";
import Layout from "src/components/layout";

export default function Home() {
  return (
    <>
      <Stack>
        <Heading fontSize={{ base: "25px", md: "30px" }} color="black" py={"5"}>
          Welcome, Rank Lastname!
        </Heading>

        <Text fontSize={20} color="black" py={"2"}>
          You have written...
        </Text>
        <HStack spacing={4}>
          <Card
            bgColor={"blackAlpha.300"}
            size={{ base: "sm", md: "lg" }}
            variant={"outline"}
            align={"center"}
          >
            <CardBody>
              <VStack>
                <Text color={"black"} fontSize={30} fontWeight={"semibold"}>
                  #
                </Text>
                <Text color={"black"}>reports for Q#</Text>
              </VStack>
            </CardBody>
          </Card>
          <Card
            bgColor={"blackAlpha.300"}
            size={{ base: "sm", md: "lg" }}
            variant={"outline"}
            align={"center"}
          >
            <CardBody>
              <VStack>
                <Text color={"black"} fontSize={30} fontWeight={"semibold"}>
                  #
                </Text>
                <Text color={"black"}>reports for 2023</Text>
              </VStack>
            </CardBody>
          </Card>
        </HStack>

        <Text fontSize={20} color="black" pt={"8"} pe={"5"}>
          Your last report was written # days ago.
        </Text>
        <Card
          bgColor={"purple.300"}
          size={{ base: "sm", md: "sm" }}
          variant={"outline"}
          align={"left"}
          width={{ md: "md" }}
        >
          <CardHeader pb={"5"}>
            <Heading fontSize={"20"}>2023 Q# July 1</Heading>
          </CardHeader>
          <CardBody pt={"0"} pb={"5"}>
            <Text color={"black"} fontSize={"15"} fontWeight={"semibold"}>
              Preview
            </Text>
          </CardBody>
          <CardFooter pt={"0"}>
            <Button bg="white" _hover={{ bg: "black", color: "white" }}>
              View Last Report
            </Button>
          </CardFooter>
        </Card>
      </Stack>
    </>
  );
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
