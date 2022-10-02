import {
  VStack,
  Center,
  Text,
  Input,
  NumberInput,
  NumberInputField,
  Tabs,
  TabList,
  Tab,
  Textarea,
  Button,
  HStack,
  Divider,
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import InfoBox from "../../components/InfoBox";
import { useState } from "react";

import { createReport } from "../../actions/Report";

export default function Home() {
  const [name, setName] = useState("");
  const [quarter, setQuarter] = useState(0);
  const [year, setYear] = useState(0);
  const [data, setReportText] = useState("");

  const handleSubmit = () => {
    let date_of_creation = new Date().toLocaleDateString();
    createReport({ name, date_of_creation, quarter, year, data }).then(
      (res) => {
        alert("Successfully created report with id: " + res._id);
      }
    );
  };

  return (
    <div>
      <NavBar />
      <VStack backgroundColor="blue">
        <Center>
          <Text color="white" m="0 1em" fontWeight="bold">
            Personnel Name
          </Text>
          <Input
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Text color="white" m="0 1em" fontWeight="bold">
            Quarter
          </Text>
          <NumberInput
            m="0 0.5em"
            value={quarter}
            onChange={(newQuarter) => setQuarter(newQuarter)}
          >
            <NumberInputField placeholder="0" w="20px" />
          </NumberInput>
          <Text color="white" m="0 1em" fontWeight="bold">
            Year
          </Text>
          <NumberInput
            m="0 1em"
            value={year}
            onChange={(newYear) => setYear(newYear)}
          >
            <NumberInputField placeholder="2022" w="40px" />
          </NumberInput>
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
          <Button m="1em">Check</Button>
          <Button m="1em" onClick={handleSubmit}>
            Export
          </Button>
        </Center>
        
        <Grid
          templateAreas={`"header1 header2"
                  "guidelines abbr"`}
          gridTemplateRows={'50px 1fr'}
          gridTemplateColumns={'1fr 1fr'}
          h='200px'
          gap='3'
          color='white'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='blue.300' area={'header1'}>
            Basic Guidelines
          </GridItem>
          <GridItem pl='2' bg='blue.300' area={'header2'}>
            Automatic Abbreviations
          </GridItem>
          <GridItem pl='2' bg='pink' area={'guidelines'}>
            <UnorderedList>
              <ListItem>Format: what;how;impact </ListItem>
              <ListItem>Use action-oriented verbs</ListItem>
              <ListItem>Use sub-bullets if needed</ListItem>
              <ListItem>Use the whole line</ListItem>
              <ListItem>Do not go over 1 line per bullet</ListItem>
              <ListItem>Visit the Guidelines page for more information</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem pl='2' bg='blue.300' area={'abbr'}>
            <UnorderedList>
              <ListItem>b/c: because </ListItem>
              <ListItem>w/: with</ListItem>
              <ListItem>w/out: without</ListItem>
              <ListItem>dept: department</ListItem>
              <ListItem>op: operation</ListItem>
            </UnorderedList>
            <Button m="1em">Add</Button>
          </GridItem>
        </Grid>
      </VStack>
    </div>
  );
}
