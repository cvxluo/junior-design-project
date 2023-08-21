/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Card,
  HStack,
  Heading,
  Input,
  Button,
  ButtonGroup,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import urls from "utils/urls";
import { updateReport, getReport } from "src/actions/Report";
import { getSession } from "next-auth/react";
import Layout from "src/app/Index/layout";
import Report from "../NewReport/report";
import ReportPreview from "./reportPreview";

export default function Page() {
  useEffect(() => {
    getSession().then((session) => setEmail(session.user.email));
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [mode, setMode] = useState("View");
  const [data, setData] = useState("");
  const [reportId, setReportId] = useState("");

  //temporary for viewing purposes
  const [title, setTitle] = useState("");
  const [quarter, setQuarter] = useState("");
  const [date_of_creation, setDate] = useState("");
  const [report, setReport] = useState("");

  const [email, setEmail] = useState("");

  /* must get report id somehow*/
  /*
  if (mode === "View") {
    setData(getReport(reportId));
  }

  const [title, setTitle] = data.title;
  const [quarter, setQuarter] = data.quarter;
  const [date_of_creation, setDate] = data.date_of_creation;
  const [report, setReport] = data.report;

  const [email, setEmail] = useState("");

    */

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
    <>
      <Card
        p={2}
        alignSelf={"center"}
        size={{ base: "sm", md: "md" }}
        w={{ md: "lg" }}
        bgColor={"white"}
      >
        <VStack m="10vh">
          <Heading color="#331E38">{mode}</Heading>
          <br />
          {mode === "View" && (
            <>
              <ReportPreview />
              <Button
                bgColor={"#70A0AF"}
                color={"white"}
                _hover={{ bgColor: "#706993", color: "white" }}
                onClick={() => setMode("Edit")}
              >
                Edit
              </Button>
            </>
          )}
          {mode === "Edit" && (
            <>
              <Report />
              <ButtonGroup>
                <Button
                  bgColor={"#F4E8C1"}
                  color={"black"}
                  _hover={{ bgColor: "red", color: "white" }}
                  onClick={onOpen}
                >
                  Delete
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Report
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme="red" onClick={onClose} ml={3}>
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
                <Button
                  bgColor={"#A0C1B9"}
                  color={"#331E38"}
                  _hover={{ bgColor: "#706993", color: "white" }}
                  onClick={() => setMode("View")} // This needs to be updated to reload the view with the report id
                >
                  Cancel
                </Button>
                <Button
                  bgColor={"#70A0AF"}
                  color={"white"}
                  _hover={{ bgColor: "#706993", color: "white" }}
                  onClick={(e) => handleSubmitInfo(e)}
                >
                  Update
                </Button>
              </ButtonGroup>
            </>
          )}
        </VStack>
      </Card>
    </>
  );
}

Page.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
