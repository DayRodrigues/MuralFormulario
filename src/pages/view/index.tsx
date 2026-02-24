import {
    Flex,
    Heading,
    Box,
    Button,


} from '@chakra-ui/react'
import Card1 from './publicacoes/card1'
import Card2 from './publicacoes/card2'
import Card3 from './publicacoes/card3'

export default function viewPublicacoes() {


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
                    justifySelf="flex-end"
                    w={{base:"100%", md:"50%"}}
                    m="30px"
                >
                    <Button as="a" href= "/">Voltar
                    </Button>

                    <Card1 />
                    <Card2 />
                    <Card3 />
                </Box>   
            </Box>
        </Flex>
    )
}