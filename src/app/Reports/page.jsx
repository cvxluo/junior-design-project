import { VStack, Box, Button } from "@chakra-ui/react";
import Layout from "src/components/layoutMain";
import ReportList from "./ReportList";
import { useRouter } from "next/router";

export default function Page(props) {
  const { reports } = props;
  const router = useRouter();
  return (
    <Box>
      <VStack>
        <Box h="10"> </Box>
        <ReportList reports={reports} />
        <Button onClick={() => router.push("/")}>Home</Button>
      </VStack>
    </Box>
  );
}

Page.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
