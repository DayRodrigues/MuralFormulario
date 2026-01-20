import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex width="100%" flexDirection="column" marginBottom="70px">
      <Flex py={4} px={8} >
        <a href="https://www.netbil.com.br/portal/home" className="Logo-netbil">
          <Image src="./img/logo_netbil.png" alt="Logo Netbil" />
        </a>
      </Flex>
      <Image src="./img/Frame 5139.png" alt="Frame cabeçalho" />
    </Flex>

  )
}

export default Header;
