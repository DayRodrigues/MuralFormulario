import {
    Box,
    Text
} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box
        justifyContent="center"
        alignContent="center"
        width="100%"
        minH={{base:"50px", md:"70px"}}
        bg="#6666"
        p="10px"
            as="footer"
            bottom={0}
            
        >
            <Text fontSize={{base:"sm", md:"md"}} textAlign="center" >
                &copy; 2026 Netbil Educacional. Todos os direitos reservados.
            </Text>
        </Box>
    )
}

export default Footer;