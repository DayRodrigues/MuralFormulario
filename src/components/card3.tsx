
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
    Button,

} from '@chakra-ui/react'
type Props = {
    onVoltar: () => void;
};

export default function Card3({ onVoltar }: Props) {
    const imagens = [
        "/img/img-atividade1.png",
        "/img/img-atividade2.png",
        "/img/img-atividade3.png",
    ]

    return (
        <>
            <Flex
                m={{ base: "auto", md: "auto" }}
                my={{ base: "10px", md: "30px", }}
                justifyContent="center"

            >
                <Box
                    display="flex"
                    justifySelf="center"
                    w={{ base: "100%", md: "50%" }}

                >
                    <Stack spacing='4' px={{ base: "20px" }}>

                        <Card
                            border="3px"
                            boxShadow="0 0 15px rgba(0, 0, 0, 0.25)"
                        >
                            <CardHeader >
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

                                    <Text>
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