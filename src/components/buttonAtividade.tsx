import { 
    Button, 
    Collapse, 
    Flex, 
    Icon, 
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import Informacoes from "./informacoes";
import { IoMdAddCircleOutline } from "react-icons/io";


    function ButtonAtividade () {
    const { isOpen, onToggle } = useDisclosure();
    

    return (
    <>
    <Flex
       px={{base:"5%", md:"50px", lg:"6%"}}
       justify={{md: "flex-end" }} 
       mt={{ base:"5px" }} 
       pr={{ base: "center", md:"100px"}}
      >

      <Button 
      type= "button"
      onClick={onToggle}
      color="white"
      bg="blue.400"
     _hover={{
      bg:"green.400",        
      }}             
        >
        <Icon as={IoMdAddCircleOutline} boxSize={5} mr={2} />
        <Text > Novo registro </Text> 
        </Button>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
        <Informacoes />
        </Collapse>
      </>
  );
}

export default ButtonAtividade;