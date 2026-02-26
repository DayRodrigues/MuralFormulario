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
    Button,

} from '@chakra-ui/react'

type Card2Props = {
    onVoltar: () => void;
};

export default function Card1({ onVoltar }: Card2Props) {

    return (
        <>
            <Flex
                margin={{ base: "auto", md: "auto" }}
                my={{ base: "10px", md: "30px", }}
                justifyContent="center"
            >
                <Box
                    w={{ base: "100%", md: "50%" }}
                    m={{ base: "auto", md: "30px" }}
                >
                    <Stack spacing='4' px={{ base: "20px" }}>

                        <Card
                            border="3px"
                            boxShadow="0 0 15px rgba(0, 0, 0, 0.25)"
                        >
                            <CardHeader>
                                <Heading size='md'> Reunião </Heading>
                                <Text fontSize="sm" color="gray.700">
                                    23/02/2026
                                </Text>
                            </CardHeader>
                            <CardBody>
                                <VStack align="start" spacing={4} >
                                    <Text>
                                        <strong>Responsável pela realização:</strong> Izabel - Coordenador(a) - Todos
                                    </Text>

                                    <Text textAlign="justify" textIndent="20px">
                                        Pauta: desempenho dos alunos, planejamento de provas,
                                        atividades complementares.Perguntas aos professores: desafios dos alunos,
                                        sugestões de reforço, projetos extras.Encerramento: resumo das decisões e próximos passos.
                                    </Text>
                                    <Button mt={4} onClick={onVoltar} colorScheme="gray">
                                        Voltar
                                    </Button>
                                </VStack>
                            </CardBody>
                        </Card>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}