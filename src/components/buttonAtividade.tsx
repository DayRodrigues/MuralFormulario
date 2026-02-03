import { 
    Button, 
    Collapse, 
    Flex, 
    Icon, 
    Text,
    useDisclosure,
    SimpleGrid,
} from "@chakra-ui/react";
import Informacoes from "./informacoes";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { useFilterContext } from "./FilterContext";

    function ButtonAtividade () {
    const { isOpen, onToggle } = useDisclosure();
    const { onClearFilters } = useFilterContext();

    return (
    <>
    <Flex
      align="center"
       justify={{ base: "center", md: "flex-end" }} 
       mt={{ base:"10px" }} 
       pr={{ base: "center", md: "6%", lg:"6%" }}
      >
      <SimpleGrid
      columns={2}
      spacing={3}
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
        
        
      <Button 
      type= "button"
      onClick={onClearFilters}
      border= "none"
      bg="white"
      color="black"
       _hover={{
       bg: "white" 
      }}
       _active={{ 
        bg: "white" 
      }}
      >
        <Icon as={FaFilter} boxSize="15px" mr={2} />
        <Text fontWeight="normal" > Limpar filtros </Text> 
        </Button>
        </SimpleGrid>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
        <Informacoes />
        </Collapse>
      </>
  );
}

export default ButtonAtividade;