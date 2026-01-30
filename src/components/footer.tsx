import { Box,Text} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box 
        as="footer" 
        bottom={0}
        >
            <Text fontSize="sm" textAlign="center" >
                &copy; 2026 Netbil Educacional. Todos os direitos reservados.
            </Text>
        </Box>
    )
}

export default Footer;