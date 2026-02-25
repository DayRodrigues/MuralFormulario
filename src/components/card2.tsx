import {
    Flex,
    Heading,
    Box,
    Text,
    CardHeader,
    Card,
    CardBody,
    Stack,
    VStack,

} from '@chakra-ui/react'
import Head from 'next/head'

export default function Card2() {

    return (
        <>
            <Head>
                <title>Reunião</title>
                <meta
                    name="description"
                    content="Reunião de alinhamento"
                />
            </Head>

            <Flex
                w="90%"
                margin={{ base: "auto", md: "auto" }}
                my={{ base: "10px", md: "30px", }}
                justifyContent="center"
                borderRadius="xl"
                boxShadow="2xl"
                h="100vh"
            >
                <Box
                >
                    <Heading
                        display="flex"
                        justifyItems="flex-start"
                        color="#666"
                        fontWeight="medium"
                        pl={{ base: "10px", md: "30px" }}
                        fontSize={{ base: "22px", md: "18px", lg: "28px" }}
                        m="10px"
                    >
                        Publicação
                    </Heading>
                
                    <Box
                        justifySelf="center"
                        w={{ base: "100%", md: "50%" }}
                        m="30px"
                    >
                        <Stack spacing='4' px={{ base: "20px" }}>

                            <Card 
                            border="3px dotted" 
                            borderColor="gray.600" 
                            boxShadow="lg" 
                            >
                                <CardHeader>
                                    <Heading size='md'> Reunião </Heading>
                                    <Text fontSize="sm" color="gray.700">
                                        23/02/2026
                                    </Text>
                                </CardHeader>
                                <CardBody>
                                    <VStack align="start" spacing={4} >
                                        <Text textAlign="justify">
                                            <strong>Responsável pela realização:</strong> Izabel - Coordenador(a) - Todos
                                        </Text>

                                        <Text textAlign="justify" textIndent="20px">
                                            Pauta: desempenho dos alunos, planejamento de provas,
                                            atividades complementares.Perguntas aos professores: desafios dos alunos,
                                            sugestões de reforço, projetos extras.Encerramento: resumo das decisões e próximos passos.
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