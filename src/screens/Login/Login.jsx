import { useState } from "react";
import {
  Card,
  Text,
  Input,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  CardBody,
  CardHeader,
  CardFooter,
  VStack,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import urls from "utils/urls";
import { signIn } from "next-auth/react";
import { signUp } from "src/actions/User";
import Layout from "src/components/layoutLogin";

export default function Login() {
  const [mode, setMode] = useState("Login");
  const [email, setEmail] = useState("");
  const [rank, setRank] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [reportType, setReportType] = useState(0);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (mode === "Register") {
      signUp(
        email,
        password,
        reportType,
        rank,
        firstName,
        lastName,
        suffix
      ).then(() => {
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
        {mode === "Login" && (
          <div>
            <FormControl id="email" isRequired>
              <FormLabel fontSize={15} color={"white"}>Email</FormLabel>
              <Input
				variant="login"
				borderWidth={"medium"}
				borderColor={"black"}
				bg="white"
				mb={2}
				size={"md"}
				type="email"
				value={email}
                maxLength={255}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel fontSize={15} color={"white"}>Password</FormLabel>
              <Input
				variant="login"
				borderWidth={"medium"}
				borderColor={"black"}
				bg="white"
				size={"md"}
				type="password"
                minLength={8}
                maxLength={64}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </div>
        )}
        {mode === "Register" && (
          <div>
            <FormControl id="reportType" isRequired>
              <FormLabel fontSize={15} color={"white"}>Report Type</FormLabel>
              <Select
                placeholder="Select Report Type"
                value={reportType}
                defaultValue={0}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value={1}>EPR</option>
                <option value={2}>OPR</option>
                <FormErrorMessage>Report Type is required.</FormErrorMessage>
              </Select>
            </FormControl>
            <FormControl id="rank" isRequired>
              <FormLabel fontSize={15} color={"white"}>Rank</FormLabel>
              <Select
                placeholder="Select Rank"
                value={rank}
                defaultValue={0}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                onChange={(e) => setRank(e.target.value)}
              >
                <option value={"AB"}>Airman Basic (AB)</option>
                <option value={"Amn"}>Airman (Amn)</option>
                <option value={"A1C"}>Airman First Class (A1C)</option>
                <option value={"SrA"}>Senior Airman or Sergeant (SrA)</option>
                <option value={"SSgt"}>Staff Sergeant (SSgt)</option>
                <option value={"TSgt"}>Technical Sergeant (TSgt)</option>
                <option value={"MSgt"}>Master Sergeant (MSgt)</option>
                <option value={"SMSgt"}>Senior Master Sergeant (SMSgt)</option>
                <option value={"CMSgt"}>Chief Master Sergeant (CMSgt)</option>
                <option value={"CCM"}>
                  Command Chief Master Sergeant (CCM)
                </option>
                <option value={"CMSAF"}>
                  Chief Master Sergeant of the Air Force (CMSAF)
                </option>
                <option value={"1st Lt"}>First Lieutenant (1st Lt)</option>
                <option value={"Capt"}>Captain (Capt)</option>
                <option value={"Maj"}>Major (Maj)</option>
                <option value={"Lt Col"}>Lieutenant Colonel (Lt Col)</option>
                <option value={"Col"}>Colonel (Col)</option>
                <option value={"Brig Gen"}>Brigadier General (Brig Gen)</option>
                <option value={"Maj Gen"}>Major General (Maj Gen)</option>
                <option value={"Lt Gen"}>Lieutenant General (Lt Gen)</option>
                <option value={"Gen"}>
                  General Air Force Chief of Staff (Gen)
                </option>
                <option value={"GOAF"}>General of the Air Force (GOAF)</option>
              </Select>
            </FormControl>
            <FormControl id="firstName" isRequired>
              <FormLabel fontSize={15} color={"white"}>First Name</FormLabel>
              <Input
                type=""
                value={firstName}
                maxLength={64}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormErrorMessage>First Name is required.</FormErrorMessage>
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel fontSize={15} color={"white"}>Last Name</FormLabel>
              <Input
                type=""
                value={lastName}
                maxLength={64}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormErrorMessage>Last Name is required.</FormErrorMessage>
            </FormControl>
            <FormControl id="suffix">
              <FormLabel fontSize={15} color={"white"}>Suffix</FormLabel>
              <Input
                type=""
                value={suffix}
                maxLength={6}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                onChange={(e) => setSuffix(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel fontSize={15} color={"white"}>Email</FormLabel>
              <Input
                type="email"
                value={email}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                maxLength={255}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel fontSize={15} color={"white"}>Password</FormLabel>
              <Input
                type="password"
                value={password}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                minLength={8}
                maxLength={32}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormErrorMessage>Password is required.</FormErrorMessage>
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
              <FormLabel fontSize={15} color={"white"}>Confirm Password</FormLabel>
              <Input
                type="password"
                value={password2}
                variant="login"
                borderWidth={"medium"}
                borderColor={"black"}
                bg="white"
                mb={2}
                size={"md"}
                minLength={8}
                maxLength={32}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <FormErrorMessage>
                Password confirmation is required.
              </FormErrorMessage>
            </FormControl>
          </div>
        )}
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