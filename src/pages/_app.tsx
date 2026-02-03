import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { FilterProvider } from "@/components/FilterContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </ChakraProvider>
  )
}
