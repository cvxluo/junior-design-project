import {
  VStack,
  Heading,
  Text,
  Center,
  HStack,
  StackDivider,
  Button,
  Link,
  Input,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InfoBox,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { getReport } from "src/actions/Report";

import NavBar from "../../components/NavBar/NavBar";

export default function Reports() {
  const [reportID, setReportID] = useState("");
  const [reportData, setReportData] = useState("");

  const handleSubmit = (e) => {
    getReport({ reportId: reportID }).then((report) => {
      setReportData(report.data);
    });

    const getAll = (e) => {};
  };

  return (
    <Box backgroundColor="blue">
      <NavBar />
      <div>
        <div style={{ height: "3vh" }}></div>
        <VStack backgroundColor="blue">
          <ButtonGroup spacing={500} size="lg">
            <Button backgroundColor="yellow"> Download </Button>
            <Button backgroundColor="yellow"> Email </Button>
            <Button backgroundColor="yellow"> Delete </Button>
          </ButtonGroup>
        </VStack>
        <VStack>
          <div style={{ height: "5vh" }}></div>
          <Box
            w="75%"
            h="70vh"
            bg="#0000cd"
            backgroundColor="rgba(13,71,161,.5)"
          >
            <ButtonGroup spacing={50} size="md" margin="15">
              <Button backgroundColor="white"> Personnel Name </Button>
              <Button backgroundColor="white"> Quarter </Button>
              <Button backgroundColor="white"> Year </Button>
              <Button backgroundColor="white"> Data </Button>
              Reports()
            </ButtonGroup>
          </Box>
        </VStack>
      </div>
    </Box>
  );
}

//        <Center>
//          <Text color="white" m="0 1em" fontWeight="bold">
//            Enter the ID of the report you want to see:
//          </Text>
//          <Input
//            placeholder="Name"
//            value={reportID}
//            onChange={(event) => setReportID(event.target.value)}
//          />
//        </Center>
//        <Button m="1em" onClick={handleSubmit}>
//          Submit
//        </Button>
//        <Text>{reportData}</Text>
