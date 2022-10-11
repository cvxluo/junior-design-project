import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import urls from "utils/urls";
import { signIn } from "next-auth/react";
import { signUp } from "src/actions/User";

export default function Login() {
  const [mode, setMode] = useState("To Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (mode === "Register") {
      signUp(email, password).then((res) => {
        console.log(res);
      });
    } else {
      signIn("credentials", {
        username: email,
        password: password,
        callbackUrl: "/",
      });
    }
  };

  return (
    <Box backgroundColor="blue">
      <VStack m="10vh">
        <Heading color="lightgray">{mode}</Heading>
        <FormControl color="lightgray">
          <FormLabel>Username</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {mode === "To Login" && (
          <Button
            onClick={() => signIn("google", { callbackUrl: urls.pages.home })}
          >
            Sign In With Google
          </Button>
        )}

        <Button onClick={(e) => handleSubmitInfo(e)}>Submit</Button>

        <Button
          onClick={() => {
            setMode(mode === "To Login" ? "Register" : "To Login");
          }}
        >
          {mode === "To Login" ? "Register" : "To Login"}
        </Button>
      </VStack>
    </Box>
  );
}