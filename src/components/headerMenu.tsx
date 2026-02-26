import { Flex, Link, Icon } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";

const HeaderMenu = () => {

  return (
    <Flex
      px={{base:"8px", md:"100px"}}
      my={{base:"10px", md:"40px"}}
      gap="8px"
      align="center"
      fontSize="18px"
      fontWeight="medium"
      color="#666">
      <Link href="https://www.netbil.com.br/portal/home" className="Home-Portal"
      >
        Menu principal
      </Link>
      <Icon as={MdNavigateNext} boxSize="18px" />
      <Link href="/" className="Mural Escolar"
      >
        Mural Escolar
      </Link>
    </Flex>

  )
}
export default HeaderMenu;