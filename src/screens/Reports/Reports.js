import { VStack, Text, Center, Button, Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import { useState } from "react";
import { getReport } from "src/actions/Report";
import ReportList from "src/components/ReportList";

import NavBar from "../../components/NavBar/NavBar";

export default function Reports(props) {
  const { reports } = props;

  const [reportID, setReportID] = useState("");
  const [reportData, setReportData] = useState("");

  const handleSubmit = () => {
    getReport({ reportId: reportID }).then((report) => {
      setReportData(report.data);
    });
  };

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
