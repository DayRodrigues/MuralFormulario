import { BotaoVoltar } from '@/components/buttonVoltar'
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

export default function Card2() {


    return (

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
                    fontSize={{ base: "18px", md: "18px", lg: "28px" }}
                    m="10x"
                >
                    Publicação
                </Heading>
                <BotaoVoltar />
                <Box
                    display="flex"
                    justifySelf="center"
                    w={{ base: "100%", md: "50%" }}
                    m="30px"
                >
                    <Stack spacing='4' px={{ base: "20px" }}>

                        <Card border="3px dotted" borderColor="gray.600">
                            <CardHeader>
                                <Heading size='md'> Reunião </Heading>
                                <Text fontSize="sm" color="gray.700">
                                    23/02/2026
                                </Text>
                            </CardHeader>
                            <CardBody>
                                <VStack align="start" spacing={4} >
                                 <Text>
                                    <strong>Responsável pela realização:</strong> Maria - Diretor(a) - Ed. Infantil, EF Anos Iniciais, EF anos Finais
                                </Text>

                                <Text>
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
    )
}