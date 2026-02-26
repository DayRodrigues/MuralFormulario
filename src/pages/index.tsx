import Head from "next/head";
import HeaderMenu from "@/components/headerMenu";
import Title from "../components/title";
import { Flex } from "@chakra-ui/react";
import Filtro from "@/components/filtro";
import ButtonAtividade from "@/components/buttonAtividade";
import CardPublicacao from "@/components/Publicacao";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        direction={"column"}
        minH={"100vh"}
        >
        <Header />
        <HeaderMenu />
        <Title />
        <Filtro />
        <ButtonAtividade />
        <CardPublicacao />        
        <Footer />
        </Flex>
        </main>
       
    </>
  );
}
