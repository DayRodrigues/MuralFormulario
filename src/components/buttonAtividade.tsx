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
    const { isOpen, onToggle } = useDisclosure()

    return (
    <>
    <Flex
      align="center"
       justify={{ base: "center", md: "flex-end" }} 
       mt={{ base:"10px" }} 
       pr={{ base: "center", md: "6%", lg:"6%" }}
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