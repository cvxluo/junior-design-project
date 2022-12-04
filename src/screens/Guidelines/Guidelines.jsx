import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Center,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import NavBar from "../../components/NavBar/NavBar";
import InfoBox from "src/components/InfoBox";

const infoDos = {
  title: "II. Do's",
  listContent: [
    "Be honest on the report",
    "Take your time",
    "Use action-oriented, hard-hitting impact statements",
    "Get to the point",
    "Quantify results",
    "Fill up the entire form",
    "Stay within your scope",
    "Use bullet format",
    "Spell out uncommon acronyms the first time you use them",
    "Abbreviate words like gov't for goverment in the interest of space",
    "Be error free (no misspellings, no extra spaces, correct capitalization",
    "Review previous reports, PIF, and UIF if applicable",
  ],
  paragraphContent: " ",
};
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
                <InfoBox content={infoExample}></InfoBox>
                <InfoBox content={infoExample}></InfoBox>
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
