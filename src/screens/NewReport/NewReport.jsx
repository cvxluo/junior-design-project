/* eslint-disable no-unused-vars */
import { useState } from "react";
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import urls from "utils/urls";
import { createReport } from "src/actions/Report";
import { useEffect } from "react";
import { getSession } from "next-auth/react";
import Layout from "src/components/layoutLogin";

export default function NewReport() {
  const [mode, setMode] = useState("Create New Report");
  const [title, setTitle] = useState("");
  const [quarter, setQuarter] = useState("");
  const [date_of_creation, setDate] = useState(""); // needs to default to current date
  const [report, setReport] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getSession().then((session) => setEmail(session.user.email));
  }, []);

  const handleSubmitInfo = (e) => {
    e.preventDefault();

    createReport(title, email, date_of_creation, quarter, report).then(() => {
      alert("Successfully created new report.");
      setMode("Login");
    });
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
        <Popover placement="right" closeOnBlur={false}>
          <PopoverTrigger>
            <Button>Submit</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure this report is ready to submit?
            </PopoverBody>
            <PopoverFooter display="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Button variant="outline">No</Button>
                <Button
                  colorScheme="green"
                  onClick={(e) => handleSubmitInfo(e)}
                >
                  Yes
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <Popover placement="right" closeOnBlur={false}>
          <PopoverTrigger>
            <Button>Cancel</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to cancel? Any work done will be lost.
            </PopoverBody>
            <PopoverFooter display="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Button variant="outline">No</Button>
                <Button colorScheme="green">Yes</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </VStack>
    </Box>
  );
}

NewReport.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
