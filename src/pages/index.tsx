import Head from "next/head";
import Header from "../components/header";
import HeaderMenu from "@/components/headerMenu";
import Title from "../components/title";
import Footer from "../components/footer";
import { Divider, Flex, Spacer } from "@chakra-ui/react";
import Filtro from "@/components/filtro";
import ButtonAtividade from "@/components/buttonAtividade";
import CardPublicacao from "@/components/Publicacao";

export default function Home() {
  return (
    <>
        <main>
        <Head>
        <title>Mural de atividades</title>
        <meta name="description" content="Muraal de Atividades" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
        <Flex
        flexDirection={"column"}
        h={"100%"}
        minH={"100vh"}
        >
        {/* <Header /> */}
        <HeaderMenu />
        <Divider />
        <Title />
        <Filtro />
        <Divider margin={"10px"}/>
        <ButtonAtividade />
        <CardPublicacao />
        {/* <Spacer />  */}
        {/* <Footer /> */}
        </Flex>
        </main>
       
    </>
  );
}
