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
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import InfoBox from "../../components/InfoBox";

const guidelinesInfo = {
  title: "General Guidelines",
  listContent: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  ],
  paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default function Home() {
  return (
    <div>
      <NavBar />
      <VStack backgroundColor="blue">
        <Center>
          <Text color="white" m="0 1em" fontWeight="bold">
            Personnel Name
          </Text>
          <Input placeholder="Name" />
          <Text color="white" m="0 1em" fontWeight="bold">
            Quarter
          </Text>
          <NumberInput m="0 0.5em">
            <NumberInputField placeholder="0" w="20px" />
          </NumberInput>
          <Text color="white" m="0 1em" fontWeight="bold">
            Year
          </Text>
          <NumberInput m="0 1em">
            <NumberInputField placeholder="2022" w="40px" />
          </NumberInput>
        </Center>

        <Tabs variant="solid-rounded">
          <TabList mb="1em">
            <Tab>OPR</Tab>
            <Tab>EPR</Tab>
          </TabList>
        </Tabs>

        <Textarea backgroundColor="lightblue" w="80vw" h="40vh" />
        <Center>
          <Button m="1em">Check</Button>
          <Button m="1em">Export</Button>
        </Center>

        <InfoBox content={guidelinesInfo} />
      </VStack>
    </div>
  );
}
