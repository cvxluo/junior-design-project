"use client";
import { VStack, Box, Button, Card } from "@chakra-ui/react";
import ReportList from "./ReportList";
import { useRouter } from "next/navigation";
import Layout from "src/app/Index/layout";

export default function Page(props) {
  const { reports } = props;
  const router = useRouter();

  return (
    <>
      <Card
        p={2}
        alignSelf={"center"}
        size={{ base: "sm", md: "md" }}
        w={{ md: "lg" }}
        bgColor={"white"}
      >
        <VStack>
          <Box h="10"> </Box>
          <ReportList reports={reports} />
          <Button onClick={() => router.push("/")}>Home</Button>
        </VStack>
      </Card>
    </>
  );
}

Page.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
