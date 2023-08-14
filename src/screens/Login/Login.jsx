import { useState } from "react";
import {
  Card,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  CardBody,
  CardHeader,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import urls from "utils/urls";
import { signIn } from "next-auth/react";
import { signUp } from "src/actions/User";
import Layout from "src/components/layoutLogin";

export default function Login() {
  const [mode, setMode] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (mode === "Register") {
      signUp(email, password).then(() => {
        alert("Successfully created new user account");
        setMode("Login");
      });
    } else {
      signIn("credentials", {
        email: email,
        password: password,
        callbackUrl: "/",
      });
    }
  };

  return (
    <>
      <Card
        p={2}
        alignSelf={"center"}
        size={{ base: "sm", md: "md" }}
        w={{ md: "lg" }}
        bgColor={"purple.600"}
      >
        <CardHeader display={"none"}>{mode}</CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel fontSize={15} color={"white"}>
              Username
            </FormLabel>
            <Input
              variant="login"
              borderWidth={"medium"}
              borderColor={"black"}
              bg="white"
              mb={2}
              size={"md"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel fontSize={15} color={"white"}>
              Password
            </FormLabel>
            <Input
              variant="login"
              borderWidth={"medium"}
              borderColor={"black"}
              bg="white"
              size={"md"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </CardBody>
        <CardFooter>
          <VStack align={"left"} w={"100%"}>
            <Button
              onClick={(e) => handleSubmitInfo(e)}
              bgColor={"black"}
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
            >
              {mode === "Login" ? (
                <Text align={"center"}>Log In</Text>
              ) : (
                <Text align={"center"}>Sign Up</Text>
              )}
            </Button>

            {mode === "Login" && (
              <Button
                onClick={() =>
                  signIn("google", { callbackUrl: urls.pages.home })
                }
                bgColor={"black"}
                color={"white"}
                display={"none"}
              >
                Sign In With Google
              </Button>
            )}
          </VStack>
        </CardFooter>
      </Card>
      <VStack>
        {mode === "Login" ? (
          <Text align={"center"}>Don't have an account?</Text>
        ) : (
          <Text align={"center"}>Already have an account?</Text>
        )}
        <Button
          mb={"10"}
          color={"purple.600"}
          w={"sm"}
          variant={"link"}
          alignSelf={"center"}
          onClick={() => {
            setMode(mode === "Login" ? "Register" : "Login");
          }}
        >
          {mode === "Login" ? "Register" : "Login"}
        </Button>
      </VStack>
    </>
  );
}

Login.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
