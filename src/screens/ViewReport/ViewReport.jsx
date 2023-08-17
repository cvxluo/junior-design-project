/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";
import urls from "utils/urls";
import { updateReport, getReport } from "src/actions/Report";
import { getSession } from "next-auth/react";

export default function ViewReport() {

  useEffect(() => {
      getSession().then((session) => setEmail(session.user.email));
    }, []);

  const [mode, setMode] = useState("View");
  const [data, setData] = useState("");
  const [reportId, setReportId] = useState("");

  /* must get report id somehow*/

  if (mode === "View") {
    setData(getReport(reportId));
  }

  const [title, setTitle] = data.title;
  const [quarter, setQuarter] = data.quarter;
  const [date_of_creation, setDate] = data.date_of_creation;
  const [report, setReport] = data.report;

  const [email, setEmail] = useState("");

  

  const handleSubmitInfo = (e) => {
    e.preventDefault();

    updateReport(reportId, title, email, date_of_creation, quarter, data).then(
      () => {
        alert("Successfully updated the report.");
        setMode("View");
      }
    );
  };

  return (
    <Box>
      <VStack m="10vh">
        <Heading>{mode}</Heading>
        <br />
        <div className="flex">
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type=""
              value={title}
              maxLength={64}
              mb="3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <HStack mb="3">
            <FormControl id="quarter" isRequired>
              <FormLabel>Quarter</FormLabel>
              <Select
                placeholder="1st Quarter"
                value={quarter}
                defaultValue={1}
                width={200}
                mr={15}
                onChange={(e) => setQuarter(e.target.value)}
              >
                <option value={2}>2nd Quarter</option>
                <option value={3}>3rd Quarter</option>
                <option value={4}>4th Quarter</option>
              </Select>
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={date_of_creation}
                width={200}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
          </HStack>
          <br />
          <Accordion allowToggle>
            <AccordionItem borderColor="purple.300">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Guidelines
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div>Here are some quick tips for effective bullet points:</div>
                <div>Tip 1: This is a tip</div>
                <div>Tip 2: This is another time</div>
                <div>Tip 3: Still another tip</div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <br />
          <VStack>
            <FormControl id="report" isRequired>
              <Textarea
                placeholder="What would you like to report?"
                type="text"
                varient="outline"
                maxLength={500}
                value={report}
                onChange={(e) => setReport(e.target.value)}
              />
            </FormControl>
          </VStack>
        </div>
        <ButtonGroup>
          <Button onClick={(e) => handleSubmitInfo(e)}>Submit</Button>
          <Button
            onClick={() => {
              setMode("View");
            }}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </VStack>
    </Box>
  );
}
