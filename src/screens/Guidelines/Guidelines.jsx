import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Center,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import NavBar from "../../components/NavBar/NavBar";

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
                <Box
                  backgroundColor="#22527B"
                  width="80vw"
                  margin="auto"
                  color="#F1F1F1"
                >
                  <Heading marginLeft="2em">General</Heading>
                  <UnorderedList>
                    <ListItem>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box
                  backgroundColor="#22527B"
                  width="80vw"
                  margin="auto"
                  color="#F1F1F1"
                >
                  <Heading ml="2em">General</Heading>
                  <UnorderedList>
                    <ListItem>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </Text>
                    </ListItem>
                  </UnorderedList>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}
