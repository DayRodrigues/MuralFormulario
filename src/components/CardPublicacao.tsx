import {
    Card,
    CardBody,
    Image,
    Flex,
    Text,
    Heading,
    Box,
    SimpleGrid,
    Icon,
} from '@chakra-ui/react'
import { CiStar } from "react-icons/ci";

const CardPublicacao = () => {
    const imagensAtividades = [
        "/img/img-atividade1.png",
        "/img/img-atividade2.png",
        "/img/img-atividade3",
    ];

    return (
        <Flex
            w="90%"
            p="10px"
            margin={{ base: "auto", md: "auto" }}
            my={{ base: "10px", md: "30px", }}
            borderRadius="xl"
            boxShadow="2xl"
            justifyContent="center"
        >   
            <Box>
                <Heading
                color="#666"
                fontWeight="medium"
                pl={{base:"10px", md:"30px"}}
                fontSize={{ base: "18px", md: "18px", lg: "28px" }}
                >
                    Publicações
                </Heading>
                <SimpleGrid>
                    <Box
                        display="flex"
                        justifyContent="center"  >

                        <Card
                            mt={{ base: "10px", md: "10px", }}
                            border="dotted 8px "
                            borderColor="gray.300"
                            w={{ base: "100%", md: "60%" }}
                            mb="20px"
                             
                        >
                            <CardBody
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="xl"
                                >
                                    Reflorestamento!
                                </Heading>
                                <Text my="10px" >
                                    20/02/2026
                                </Text>

                                <Box
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <Image
                                        borderColor="gray.400"
                                        border="10px"
                                        w="auto"
                                        h={{ base: "300px", md: "500px" }}
                                        borderRadius="2xl"
                                        src="/img/img_reflorestamento.png" alt="imagem reflorestamento" />
                                </Box>
                                <Text
                                    mt="10px"
                                >
                                    No dia do reflorestamento da árvore na escola,
                                    todos estão convidados a participar dessa ação especial em favor do meio ambiente.
                                    Será um momento de união e aprendizado, em que juntos vamos plantar e cuidar da natureza.
                                    Contamos com a presença de todos para tornar esse dia ainda mais significativo!
                                </Text>
                            </CardBody>
                            <Icon
                                as={CiStar}
                                boxSize="60px"
                                color="#ddca19"
                                position="absolute"
                                top="-30px"  
                                right="20px"  
                                bg="white"   
                                borderRadius="full"
                                p="2px"         
                                boxShadow="md"
                            />  
                        </Card >
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="center"

                    >
                        <Card
                            mt={{ base: "10px", md: "10px", }}
                            border="dotted 8px "
                            borderColor="gray.300"
                            w={{ base: "100%", md: "60%" }}
                            mb="20px"
                        >
                            <CardBody>
                                <Heading
                                    textAlign="center"
                                    fontSize="xl"
                                >
                                    1º Bimestre - Atividades do 1º ano
                                </Heading>
                                <Text my="10px">
                                    15/02/2026
                                </Text>

                                <Box
                                    display="flex"
                                    justifyContent="center"
                                >

                                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
                                        {imagensAtividades.map((imagem, index) => (
                                            <Image
                                                key={index}
                                                borderColor="gray.400"
                                                border="10px"
                                                w="auto"
                                                h={{ base: "auto", md: "150px", lg:"300px"}}
                                                borderRadius="2xl"
                                                src={imagem}
                                                alt={`Atividade${index + 1}`}
                                            />
                                        ))}

                                    </SimpleGrid>
                                </Box>
                                <Text mt="10px" >
                                    No primeiro bimestre da escola, as crianças participaram de diversas atividades que ajudaram na adaptação e na socialização.
                                    Logo nos primeiros dias, foram realizadas dinâmicas de integração para que todos se conhecessem melhor e se sentissem acolhidos.
                                    As aulas também incluíram momentos de expressão artística, como desenhos e pinturas, que estimularam a criatividade e a coordenação motora.
                                    Além disso, houve rodas de leitura e contação de histórias, incentivando o gosto pelos livros e desenvolvendo a linguagem. As brincadeiras coletivas e jogos simples ajudaram a ensinar regras de convivência e fortaleceram o trabalho em grupo.
                                    Esse conjunto de atividades fez com que o início do ano fosse leve, divertido e cheio de descobertas, preparando os alunos para os próximos desafios escolares.
                                </Text>
                            </CardBody>
                        </Card >
                    </Box>
                </SimpleGrid>
            </Box>
        </Flex>
    )
}

export default CardPublicacao;

