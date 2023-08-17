import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { customTheme } from "../styles/customTheme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const renderWithLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={customTheme}>
        {renderWithLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
