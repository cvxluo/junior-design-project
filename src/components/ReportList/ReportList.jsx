import {
  Box,
  Heading,
  UnorderedList,
  Text,
  ListItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import ReportModal from "./ReportModal";

const ReportList = ({ reports }) => {
  console.log(reports);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box backgroundColor="#22527B" width="80vw" p="1.5em" color="#F1F1F1">
      <Heading>Past Reports</Heading>
      <UnorderedList>
        {reports.map(({ name, data, date_of_creation, quarter, year }) => (
          <ListItem key={name}>
            <Text fontWeight="bold">{name + " " + date_of_creation}</Text>
            <Text>{data}</Text>
            <Button color="black" onClick={onOpen}>
              View
            </Button>
            <ReportModal
              isOpen={isOpen}
              onClose={onClose}
              report={{ name, data, date_of_creation, quarter, year }}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ReportList;
