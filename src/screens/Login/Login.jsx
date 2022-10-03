import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Link,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import NextLink from "next/link";
import urls from "utils/urls";

export default function Login() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box backgroundColor="blue">
      <VStack m="10vh">
        <Heading color="lightgray">Login</Heading>
        <Box align="start">
          <Text fontSize="1xl" fontWeight="bold" color="lightgray">
            Email
          </Text>
          <Input backgroundColor="lightblue" placeholder="Email" />
        </Box>
        <Box align="start">
          <Text fontSize="1xl" fontWeight="bold" color="lightgray">
            Password
          </Text>
          <InputGroup>
            <Input backgroundColor="lightblue" placeholder="Password" type={show ? 'text' : 'password'}/>
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <NextLink href={urls.pages.home} passHref>
          <Link
            backgroundColor="lightblue"
            borderStyle="solid"
            borderWidth={10}
            borderColor="lightblue"
            margin="1em 2em"
            padding="0 4em"
            borderRadius={20}
            color="black"
          >
            <Text display="block" fontSize={18} margin="0em" textAlign="center">
              Login
            </Text>
          </Link>
        </NextLink>
      </VStack>
    </Box>
  );
}
