import { Stack, Text } from "@chakra-ui/layout";
import Layout from "src/components/layout";

export default function NewReport() {
  return (
    <Stack>
      <Text fontSize={20} color="black" pl={"10"}>
        This is the New Report Page.
      </Text>
    </Stack>
  );
}

NewReport.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
