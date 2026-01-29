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
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

  function Filtro() {
  const { isOpen, onToggle } = useDisclosure()

  return (
   <>    
      <Button 
      mx={{base:"10px", md:"50px", lg:"80px"}}
      border= "1px solid"
      borderColor="gray.400"
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
        <Text > Filtrar </Text> 
        </Button>
        <Collapse in={isOpen} animateOpacity>
       
        <Box 
        px={{base:"15px", md:"50px", lg:"80px"}}
        my={{base:"10px", md:"20px", lg: "20px"}}
        width={{base:"100%", md:"70%", lg: "50%"}}
        >
        <SimpleGrid 
        columns={{base:1, md:2, lg:2}}
        spacing={6}
        fontWeight="semibold" 
        color="gray.600"
        >   
        <FormControl>
         <FormLabel > Selecione o cargo: </FormLabel>
                <Select
                border="none"
                boxShadow="none"
                borderBottom="2px solid"
                _hover={{
                  border:"none",
                  borderBottom:"2px solid",
                  borderColor:"gray.600"
                }}
                _focusVisible={{
                border: "none",
                borderBottom:"2px solid"
                }}
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
            <FormLabel> Selecione o seguimento: </FormLabel>
                <Select
                border="none"
                boxShadow="none"
                borderBottom="2px solid "
                _hover={{
                  border:"none",
                  borderBottom:"2px solid",
                  borderColor:"gray.600"
                }}
                _focusVisible={{
                border: "none",
                borderBottom:"2px solid"
                }}
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

      