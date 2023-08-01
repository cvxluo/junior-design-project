import { VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import ReportList from "src/components/ReportList";

export default function Reports(props) {
  const { reports } = props;

  return (
    <Box backgroundColor="blue">
      <VStack backgroundColor="blue">
        <Box h="10"> </Box>

        <ReportList reports={reports} />
      </VStack>
    </Box>
  );
}
