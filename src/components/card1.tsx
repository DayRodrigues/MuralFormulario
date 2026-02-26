
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
    VStack,
    Button,
} from '@chakra-ui/react'

type Card1Props = {
    onVoltar: () => void;
};

export default function Card1({ onVoltar }: Card1Props) {


    return (
        <>

            <Flex
                w={{ base: "auto", md: "90%" }}
                margin={{ md: "auto" }}
                my={{ base: "10px", md: "30px", }}
                justifyContent="center"
            >
                <Box
                    w={{ base: "100%", md: "50%" }}
                    m={{ base: "auto", md: "30px" }}
                >
                    <Stack spacing='4' px={{ base: "20px" }} >

                        <Card
                            border="3px "
                            boxShadow="0 0 15px rgba(0, 0, 0, 0.25)"
                        >
                            <CardHeader>
                                <Heading size='md'> Reflorestamento </Heading>
                                <Text fontSize="sm" color="gray.700">
                                    23/02/2026
                                </Text>
                            </CardHeader>
                            <CardBody>

                                <VStack align="start" spacing={4} >
                                    <Image
                                        w={{ base: "150px", md: "200px" }}
                                        src='/img/img_reflorestamento.png'
                                        alt='imagem reflorestamento'
                                        borderRadius='lg'
                                        alignSelf="center"
                                    />

                                    <Text >
                                        <strong>Responsável pela realização: </strong>
                                        Maria - Diretor(a) - Ed. Infantil, EF Anos Iniciais, EF anos Finais
                                    </Text>

                                    <Text textAlign="justify" textIndent="20px">
                                        No dia do reflorestamento da árvore na escola,
                                        todos estão convidados a participar dessa ação especial em favor do meio ambiente.
                                        Será um momento de união e aprendizado, em que juntos vamos plantar e cuidar da natureza.
                                        Contamos com a presença de todos para tornar esse dia ainda mais significativo!
                                    </Text>
                                    <Flex
                                    justifyContent="flex-end"
                                    >
                                    <Button mt={4} onClick={onVoltar} colorScheme="blue"
                                    >
                                        Voltar
                                    </Button>
                                    </Flex>
                                </VStack>
                            </CardBody>
                        </Card>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}