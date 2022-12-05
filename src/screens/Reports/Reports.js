import { VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import ReportList from "src/components/ReportList";

import NavBar from "../../components/NavBar/NavBar";

export default function Reports(props) {
  const { reports } = props;

  return (
    <Box backgroundColor="blue">
      <NavBar />
      <VStack backgroundColor="blue">
        <Box h="10"> </Box>

        <ReportList reports={reports} />
      </VStack>
    </Box>
  );
}
