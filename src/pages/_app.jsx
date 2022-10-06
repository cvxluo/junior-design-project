import "public/static/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

const colors = {
  blue: "#427199",
  darkblue: "#194265",
  lightblue: "#DBE4EE",
  lightgray: "#F1F1F1",
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
