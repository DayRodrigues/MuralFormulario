import { Flex, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex flexDirection="column">
      <Flex px={{base:"15px", md:"100px"}} m={{ base: 2, md: 2, lg: 4 }}>
        <a href="https://www.netbil.com.br/portal/home" className="Logo-netbil">
          <Image src="./img/logo_netbil.png"
            alt="Logo Netbil"
            maxW={{ base: "120px", md: "150px", lg: "200px" }}
            
          />
        </a>
      </Flex >
      <Image src="./img/Frame 5139.png" alt="Frame cabeçalho"
        w="100%"
        h={{ base: "50px", md: "50px", lg: "80px" }}

      />
    </Flex>

  )
}

export default Header;
