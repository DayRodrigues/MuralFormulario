import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Switch,
    VStack,
    Input,
    SimpleGrid,
    Textarea,
    Button,
   
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";


export default function Informacoes() {

    return (


        <Flex
            minH={'50vh'}
            align="center"
            justify="center"
            w={'100%'}
            p={5}
            m={5}
            color="#171717"
        >
            <Box
                  w="100%"
                maxW="90vw"
                bg="white"
                p={10}
                borderRadius="xl"
                boxShadow="xl"
                m="auto"
            >


                <Heading size="md" mb={6}> Registre uma nova atividade
                </Heading>
                <Box>

                    <VStack p={6} spacing={4}>

                        <SimpleGrid columns={{ base:1, md:2}} spacing={4} w="100%">
                        <FormControl>
                            <FormLabel>Título:</FormLabel>
                            <Input type="text" placeholder="Digite o título" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Data da atividade:</FormLabel>
                            <Input type="date" />
                        </FormControl>                 
                        </SimpleGrid>

                        <SimpleGrid columns={{ base:1, md:2}} spacing={6} w="100%">   
                        <FormControl>
                        <FormLabel>Responsável pela realização:</FormLabel>
                        <Input type="text" placeholder="Digite o nome do responsável pela realização" />
                        </FormControl>


                    <FormControl>
                        <FormLabel>Função:</FormLabel>
                        <Select placeholder="Selecione">
                            <option value="Diretor">Diretor</option>
                            <option value="ViceDiretor">Vice-Diretor</option>
                            <option value="Coordenador">Coordenador</option>
                            <option value="Professor">Professor</option>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Selecione o seguimento:</FormLabel>
                        <Select placeholder="Selecione">
                            <option value="Educacao Infantil"> Educação Infantil</option>
                            <option value="Anos Inicias"> Anos Iniciais</option>
                            <option value="Anos Finais"> Anos Finais</option>
                        </Select>
                    </FormControl>
                </SimpleGrid>

                  <FormControl >
                            <FormLabel>Descreva sua mensagem:</FormLabel>
                            <Textarea w="100%"
                            placeholder='Descreva sua mensagem'
                         />       
                 </FormControl>

                <Button
                    type="submit"
                    bgColor='gray.500'
                    _hover={{
                        color: "gray.300"
                    }}
                    alignSelf={"flex-start"}
                >Públicar</Button>
                </VStack>
            </Box>
        </Box>
    </Flex >
    )
}
