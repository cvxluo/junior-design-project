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
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import InfoBox from "../../components/InfoBox";
import { useState } from "react";

import { createReport } from "../../actions/Report";

const guidelinesInfo = {
  title: "General Guidelines",
  listContent: [
    "Include what and how the employee accomplishedf and the impact it had in each line",
    "Use action oriented verbs - for a recommended list of verbs, visit the Guidelines page",
    "Use sub-bullets to provide more details if needed",
    "Use the whole line for each bullet and no more",
  ],
  paragraphContent: "more text here if needed",
};

const abbrInfo = {
  title: "Automatic Abbreviations",
  listContent: [
    "b/c - because",
    "w/ - with",
    "w/out - without",
    "op - operation",
    "ops - operations",
    "dept - department",
  ],
};

export default function Home() {
  const [name, setName] = useState("");
  const [quarter, setQuarter] = useState(0);
  const [year, setYear] = useState(0);
  const [data, setReportText] = useState("");

  const handleSubmit = () => {
    let date_of_creation = new Date().toLocaleDateString();
    console.log(date_of_creation);
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
        <HStack>
          <InfoBox content={guidelinesInfo} width="50vw" h="40vh" />
          <InfoBox content={abbrInfo} width="50vw" h="40vh" />
        </HStack>
      </VStack>
    </div>
  );
}
