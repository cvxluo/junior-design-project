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

const infoDos = {
  title: "II. Do",
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
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

const infoDonts = {
  title: "III. Dont",
  listContent: [
    "Use prohibited statements",
    "Include additional duties unless focused toward the mission",
    "Use terminology only your organization understands",
    "Leave white space, unless, of course, you're trying to send a negative message",
    "Put your credibility on the line (don't rate everyone #1 if they aren't)",
    "Use 'all caps' for emphasis",
    "Use periods after bullets",
    "Use more than one exclamation in a row",
    "Use 'fluffy' statements with no meat behind them",
  ],
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

const infoWordVivid = {
  title: "IV. Vivid Words",
  paragraphContent: "Use vivid words to emphasize action and results. Examples of vivid words:",
  listContent: [
    "Cut",
    "Saved",
    "Created",
    "Drove",
    "Guaranteed",
    "Infuseed",
    "Led",
    "Spearheaded",
    "Developed",
    "Deftly",
    "Diplomatically",
    "Energetic",
    "Rapidly",
    "Persuasive",
    "Dynamic",
    "Instituted",
  ],
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

const infoWordMundane = {
  title: "V. Mundane Words",
  paragraphContent: "Avoid using mundane words as they are unspecific. Examples of mundane words:",
  listContent: [
    "Capable",
    "Dependable",
    "Effective",
    "Coordinated",
    "Sturdy",
    "Monitored",
    "Assisted",
    "Aided",
    "Contributed",
    "Employed",
    "Ready",
    "Pontential",
    "Participated",
    "Reviewed",
    "Adequate",
    "Fine",
    "Maintained",
  ],
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

const infoBasics = {
  title: "I. The Basics",
  listContent: [
    "Review the ratee's previous performance reports",
    "Gather input from the ratee in advance",
    "Don't use prohibited statements (see section xx)",
    "Take the time to write a quality report",
    "Proofread your product",
    "Follow the do's and don'ts",
    "Use strong word choice",
    "Provide context",
    "Stratify your descriptions",
    "Use common acronyms instead of writing them out",
  ],
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

const infoAcronyms = {
  title: "VI. Acronyms",
  paragraphContent: "The following are examples of some common acronyms that do not need to be written out:",
  listContent: [
    "ACC",
    "ACSC",
    "AEF",
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
