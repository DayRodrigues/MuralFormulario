import { 
    Box, 
    Button, 
    Collapse, 
    Icon, 
    useDisclosure, 
    Text,
    
    FormControl,
    FormLabel,
    Select,
    SimpleGrid,
    Flex
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

  function Filtro() {
  const { isOpen, onToggle } = useDisclosure()

  return (
   <>    
      <Button 
      mx={{base:"10px", md:"10px", lg:"80px"}}
      border= "1px solid"
      borderColor="gray.400"
      borderRadius="md"
      width="50px"
      px="60px"
      bg="white"
      color="black"
      _hover={{
        bg:"gray.100" 
      }}
      onClick={onToggle}
      >
        <Icon as={FaFilter} boxSize="15px" mr={2} />
        <Text> Filtrar </Text> 
        </Button>
        <Collapse in={isOpen} animateOpacity>
       
        <Box px={{base:"10px" , md:"10px" , lg:"80px" }}>
        <SimpleGrid columns={{base:1, md:4, lg:4}}
        spacing={2}>   
        <FormControl>
         <FormLabel> Selecione o cargo </FormLabel>
                <Select
                placeholder="Selecione uma opção"
                >
                <option value="Todos">Todos</option>
                <option value="Diretor">Diretor(a)</option>
                <option value="ViceDiretor">Vice-Diretor(a)</option>
                <option value="Coordenador">Coordenador(a)</option>
                <option value="Professor">Professor(a)</option>
                </Select>
         </FormControl>

         <FormControl>
            <FormLabel> Selecione o seguimento </FormLabel>
                <Select
                placeholder="Selecione uma opção"
                >
                <option value="Todos">Todos</option>
                <option value="Educacao Infantil">Ed. Infantil</option>
                <option value="Anos Iniciais">EF Anos Iniciais</option>
                <option value="Anos Finais">EF Anos Finais</option>
                </Select>
         </FormControl>
         </SimpleGrid>
        </Box>
      </Collapse>
    {/* </Flex> */}
    </>
 );
}

 export default Filtro; 

      