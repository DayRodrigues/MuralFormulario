import {
    Card,
    CardBody,
    Image,
    Flex,
    Text,
    Heading,
    Box,
} from '@chakra-ui/react'

const CardPublication = () => {

    return (
        <Flex
            w="90%"
            p="10px"
            margin={{ base: "auto", md: "auto", lg: "auto" }}
            border="gray.400"
            borderRadius="xl"
            boxShadow="2xl"
            
        >
            <Box>
            < Card
            border="solid 2px "
            borderColor="gray.300"
            w="700px"
            >
                <CardBody>
                    <Heading
                    textAlign="center"
                    fontSize="xl"
                    >
                        Reflorestamento!
                    </Heading>
                    <Text>
                        15/02/2026
                    </Text>
                    <br/>
                    <Image
                    align="center"
                    borderColor="gray.400"
                    border="10px"
                    w="auto"
                    h="500px"
                    borderRadius="2xl"
                        src="/img/img_desmatamento.png" alt="desmatamento" />
                    <Text>
                        Atenção! 
                        Na data informada, não falterem para participarem da atividade externa que teremos. 
                    </Text>
                </CardBody>
             </Card >
            </Box>
        </Flex>
    )
}

export default CardPublication;

