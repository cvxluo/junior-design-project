import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
  Center,
  Text,
  Input,
  Tabs,
  TabList,
  Tab,
  Textarea,
  Button,
  Box,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
  Select,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import { useState } from "react";

import { createReport } from "../../actions/Report";
import { getSession } from "next-auth/react";

export default function Home() {
  const [name, setName] = useState("");
  const [quarter, setQuarter] = useState(0);
  const [year, setYear] = useState(0);
  const [data, setReportText] = useState("");

  const [alerts, setAlerts] = useState([]);

  const handleSubmit = async () => {
    const date_of_creation = new Date().toLocaleDateString();
    const session = await getSession();
    createReport({
      name,
      userEmail: session.user.email,
      date_of_creation,
      quarter,
      year,
      data,
    })
      .then((res) => {
        setAlerts([
          {
            type: "success",
            text: "Successfully created report with id: " + res._id,
          },
        ]);
      })
      .catch((err) => {
        setAlerts([
          {
            type: "error",
            text: "Error creating report: " + err,
          },
        ]);
      });
  };

  const handleFormat = async () => {
    const lines = data.split("\n");
    const newAlerts = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const words = line.split(" ");
      // Add bullet point if line doesn't start with one
      if (line[0] != "-" && line.length > 1) {
        lines[i] = "- " + line;
      }
      lines[i] = lines[i].replace("because", "b/c");
      lines[i] = lines[i].replace("with", "w/");
      lines[i] = lines[i].replace("without", "w/out");
      lines[i] = lines[i].replace("department", "dept");
      lines[i] = lines[i].replace("operation", "op");

      if (line.length > 100) {
        newAlerts.push({
          type: "warning",
          text: "Line " + (i + 1) + " is long - consider shortening it",
        });
      }

      if (line.includes("  ")) {
        newAlerts.push({
          type: "warning",
          text: "Line " + (i + 1) + " contains double spaces",
        });
      }

      if (line[-1] != ".") {
        newAlerts.push({
          type: "error",
          text: "Line " + (i + 1) + " does not end with a period",
        });
      }
    }

    setAlerts(newAlerts);
    setReportText(lines.join("\n"));
  };

  return (
    <div>
      <NavBar />
      <VStack backgroundColor="blue">
        <Box h="10"></Box>
        <Center>
          <Text color="white">Personnel Name:</Text>
          <Box w="10"></Box>
          <Input
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Box w="20"></Box>
          <Text color="white">Quarter:</Text>
          <Box w="10"></Box>
          <Select
            placeholder="Select Quarter"
            isRequired={true}
            onChange={(event) => setQuarter(event.target.value)}
          >
            <option value="1">Q1</option>
            <option value="2">Q2</option>
            <option value="3">Q3</option>
            <option value="4">Q4</option>
          </Select>
          <Box w="20"></Box>
          <Text color="white">Year:</Text>
          <Box w="10"></Box>
          <Input
            placeholder="Year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </Center>

        <Tabs variant="solid-rounded">
          <TabList mb="1em">
            <Tab>OPR</Tab>
            <Tab>EPR</Tab>
          </TabList>
        </Tabs>

        <Textarea
          backgroundColor="lightblue"
          w="80vw"
          h="40vh"
          value={data}
          onChange={(event) => setReportText(event.target.value)}
        />
        <Center>
          <Button m="1em" onClick={handleFormat}>
            Format
          </Button>
          <Button m="1em" onClick={handleSubmit}>
            Export
          </Button>
        </Center>
        <Center>
          {alerts.map((alert) => (
            <Alert status={alert.type} key={alert.text}>
              <AlertIcon />
              <AlertTitle mr={2}>{alert.text}</AlertTitle>
            </Alert>
          ))}
        </Center>

        <Grid
          templateAreas={`"header1 header2"
                  "guidelines abbr"`}
          gridTemplateRows={"30px 300px"}
          gridTemplateColumns={"500px 500px"}
          h="200px"
          gap="3"
          color="white"
          fontWeight="bold"
        >
          <GridItem pl="5" bg="blue.300" area={"header1"}>
            Basic Guidelines
          </GridItem>
          <GridItem pl="5" bg="blue.300" area={"header2"}>
            Automatic Abbreviations
          </GridItem>
          <GridItem pl="5" color="blue.300" area={"guidelines"}>
            <UnorderedList>
              <ListItem>Format: what;how;impact </ListItem>
              <ListItem>Use action-oriented verbs</ListItem>
              <ListItem>Use sub-bullets if needed</ListItem>
              <ListItem>Use the whole line</ListItem>
              <ListItem>Do not go over 1 line per bullet</ListItem>
              <ListItem>
                Visit the Guidelines page for more information
              </ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem pl="5" bg="blue.300" area={"abbr"}>
            <UnorderedList>
              <ListItem>b/c: because </ListItem>
              <ListItem>w/: with</ListItem>
              <ListItem>w/out: without</ListItem>
              <ListItem>dept: department</ListItem>
              <ListItem>op: operation</ListItem>
            </UnorderedList>
          </GridItem>
        </Grid>
      </VStack>
    </div>
  );
}
