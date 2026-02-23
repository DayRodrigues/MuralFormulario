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

} from '@chakra-ui/react'

export default function viewPublicacoes () {




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
                    Publicações
                </Heading>
                
                
                <Box
                    display="flex"
                    justifySelf="center"
                    w={{base:"100%", md:"50%"}}
                    m="30px"
                >
                    <Stack spacing='4' px={{base:"20px"}}>
                        {['sm', 'sm'].map((size) => (
                            
                            <Card key={size} border="3px dotted" borderColor="gray.600">
                                <CardHeader>
                                    <Heading size='md'> Reflorestamento </Heading>
                                     <Text fontSize="sm" color="gray.700">
                                            23/02/2026
                                    </Text>
                                </CardHeader>
                                <CardBody>

                                        <Image
                                        w={{ base: "150px", md: "200px" }}
                                        src='/img/img_reflorestamento.png'
                                        alt='imagem reflorestamento'
                                        borderRadius='lg'
                                        display="flex"
                                        justifySelf="center"
                                    />

                                    <Text>
                                        No dia do reflorestamento da árvore na escola,
                                        todos estão convidados a participar dessa ação especial em favor do meio ambiente.
                                        Será um momento de união e aprendizado, em que juntos vamos plantar e cuidar da natureza.
                                        Contamos com a presença de todos para tornar esse dia ainda mais significativo!
                                    </Text>


                                </CardBody>
                            </Card>
                            
                        ))}
                    </Stack>
                 </Box>
            </Box>
        </Flex>
    )
}