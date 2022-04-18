import { Box, Heading, UnorderedList, Text, ListItem } from "@chakra-ui/react";

const InfoBox = ({ content }) => {
  console.log(content);

  const { title, listContent, paragraphContent } = content;

  return (
    <Box backgroundColor="#22527B" width="80vw" p="1.5em" color="#F1F1F1">
      <Heading>{title}</Heading>
      <UnorderedList>
        {listContent.map((text, index) => (
          <ListItem key={index}>
            <Text>{text}</Text>
          </ListItem>
        ))}
      </UnorderedList>
      <Text>{paragraphContent}</Text>
    </Box>
  );
};

export default InfoBox;
