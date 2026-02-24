import "@/styles/globals.css";
import { ChakraProvider, Spacer } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { FilterProvider } from "@/components/FilterContext";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <FilterProvider>
        <Header />
        <Component {...pageProps} />
        <Spacer />
        <Footer />
      </FilterProvider>
    </ChakraProvider>
  )
}
