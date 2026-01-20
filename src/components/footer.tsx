import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box as="footer" py={4} textAlign="center">
            <Text fontSize="sm" >
                &copy; 2026 Netbil Educacional. Todos os direitos reservados.
            </Text>
        </Box>
    )
}

export default Footer;