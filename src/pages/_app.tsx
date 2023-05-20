import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { CollapseContextProvider } from "../context/collapseContext";
import { Layout } from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CollapseContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CollapseContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
