
import {
    Flex,
    Heading,
    Box,
    Image,
    Text,
    CardHeader,
    Card,
    CardBody,
    Stack,
    SimpleGrid,
    VStack,

} from '@chakra-ui/react'
import Head from 'next/head'

export default function Card3() {
    const imagens = [
        "/img/img-atividade1.png",
        "/img/img-atividade2.png",
        "/img/img-atividade3.png",
    ]

    return (

        <>
            <Head>
                <title>1º Bimestre</title>
                <meta
                    name="description"
                    content="Informações sobre o 1º Bimestre"
                />
            </Head>

            <Flex
                w="90%"
                margin={{ base: "auto", md: "auto" }}
                my={{ base: "10px", md: "30px", }}
                borderRadius="xl"
                boxShadow="2xl"
            >
                <Box>
                    <Heading
                        display="flex"
                        justifyItems="flex-start"
                        color="#666"
                        fontWeight="medium"
                        pl={{ base: "10px", md: "30px" }}
                        fontSize={{ base: "22px", md: "18px", lg: "28px" }}
                        m="10x"
                    >
                        Publicação
                    </Heading>
                    
                    <Box
                        display="flex"
                        justifySelf="center"
                        w={{ base: "100%", md: "50%" }}
                        m="30px"
                    >
                        <Stack spacing='4' px={{ base: "20px" }}>

                            <Card border="3px dotted" borderColor="gray.600">
                                <CardHeader>
                                    <Heading size='md'> 1º Bimestre </Heading>
                                    <Text fontSize="sm" color="gray.700">
                                        23/02/2026
                                    </Text>
                                </CardHeader>
                                <CardBody>
                                    <VStack align="start" spacing={4} >
                                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                                            {imagens.map((src, index) => (
                                                <Image
                                                    key={index}
                                                    src={src}
                                                    alt={`imagem ${index + 1}`}
                                                    borderRadius='lg'
                                                    display="flex"
                                                    justifySelf="center"
                                                />
                                            ))}
                                        </SimpleGrid>

                                        <Text textAlign="justify">
                                            <strong>Responsável pela realização: </strong>
                                            Julina - professor(a) - EF Anos Finais
                                        </Text>

                                        <Text textAlign="justify" textIndent="20px">
                                            Neste primeiro bimestre, observei avanço gradual na adaptação dos alunos à rotina e às novas exigências do 4º ano.
                                            Em Língua Portuguesa, trabalhamos leitura e interpretação de textos narrativos e informativos,
                                            com foco na identificação de ideias principais e ampliação do vocabulário.
                                            Houve produção de pequenos textos, com atenção à ortografia e pontuação,
                                            ainda necessitando reforço em alguns casos.
                                            Em Matemática, desenvolvemos as quatro operações,
                                            com maior ênfase em multiplicação e início da divisão, além de resolução de problemas contextualizados.
                                            Parte da turma demonstra boa compreensão, enquanto alguns alunos ainda precisam de acompanhamento mais próximo.De modo geral,
                                            percebo evolução na participação e no compromisso com as atividades,
                                            mas continuarei reforçando organização, autonomia e atenção durante as explicações.
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </Stack>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}