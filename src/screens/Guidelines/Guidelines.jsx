import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Center,
  UnorderedList,
  Heading,
  ListItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import NavBar from "../../components/NavBar/NavBar";
import InfoBox from "src/components/InfoBox";

const infoExample = {
  title: "General Guidelines",
  listContent: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  ],
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default function Guidelines() {
  return (
    <div>
      <NavBar />
      <Box backgroundColor="blue">
        <Tabs variant="solid-rounded" size="md">
          <Center>
            <TabList m="1em" spacing={10}>
              <Tab
                backgroundColor="lightblue"
                mx="1em"
                _selected={{ color: "white", bg: "darkblue" }}
              >
                General
              </Tab>
              <Tab
                backgroundColor="lightblue"
                mx="1em"
                _selected={{ color: "white", bg: "darkblue" }}
              >
                OPR
              </Tab>
              <Tab
                backgroundColor="lightblue"
                mx="1em"
                _selected={{ color: "white", bg: "darkblue" }}
              >
                EPR
              </Tab>
              <Tab
                backgroundColor="lightblue"
                mx="1em"
                _selected={{ color: "white", bg: "darkblue" }}
              >
                Examples
              </Tab>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
              <VStack>
                <Box backgroundColor="#22527B" width="80vw" p="1.5em" color="#F1F1F1">
                  <Heading>headings</Heading>
                  <UnorderedList>
                    <ListItem>
                      <Text>texthere</Text>
                     </ListItem>
                  </UnorderedList>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack>
                <InfoBox content={infoExample}></InfoBox>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}
