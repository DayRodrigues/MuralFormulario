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
            p="10px"
            align="center"
            justify="center"
            color="#666"
        >
            <Box
                w="90%"
                p="20px"
                margin="7"
                bg="white"
                borderRadius="xl"
                boxShadow="2xl"
            >
                <Heading
                fontSize={{base:"18px", md:"18px", lg:"28px" }}
                > 
                Registre uma nova atividade
                </Heading>
                <Box 
                marginTop={{base:"10%", md:"2%", lg:"2%"}}
               
                
                >
                    <VStack spacing={4} align="stretch">
                        <SimpleGrid 
                        columns={{base:1, md:4, lg:4}}
                        spacing={4}>
                        
                        <FormControl >
                            <FormLabel>Título:</FormLabel>
                            <Input type="text" placeholder="Digite o título" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Data da realização:</FormLabel>
                            <Input type="date" />
                        </FormControl>  
                     
                         <FormControl>
                        <FormLabel>Publicar para:</FormLabel>
                        <Select>
                            <option value="Todos">Todos</option>
                            <option value="Gestor">Gestores</option>
                            <option value="Professor">Professores</option>
                            <option value="Aluno">Alunos</option>
                        </Select>
                        </FormControl>
                        
                        <FormControl display="flex" alignItems="center">
                        <FormLabel >
                            Destacar no mural:
                        </FormLabel>
                        <Switch />
                        </FormControl>
                        </SimpleGrid>

                        <SimpleGrid columns={{base:1, md:4, lg:4}}
                        spacing={4}>   
                        <FormControl>
                        <FormLabel>Responsável pela realização:</FormLabel>
                        <Input type="text" placeholder="Digite o nome do responsável pela realização" />
                        </FormControl>


                    <FormControl>
                        <FormLabel>Função:</FormLabel>
                        <Select>
                            <option value="Todos">Todos</option>
                            <option value="Diretor">Diretor(a)</option>
                            <option value="ViceDiretor">Vice-Diretor(a)</option>
                            <option value="Coordenador">Coordenador(a)</option>
                            <option value="Professor">Professor(a)</option>
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

                        <FormControl>
                        <FormLabel>Anexar imagem:</FormLabel>
                        <Input
                            type="file"
                            accept="image/*"
                            multiple
                        />
                        <button 
                        >Salvar
                        </button>
                        <button
                         >
                        Excluir
                        </button>
                        </FormControl>

                  <FormControl >
                            <FormLabel>Assunto:</FormLabel>
                            <Textarea 
                            placeholder='Descreva sua mensagem...'
                         />       
                 </FormControl>

                <Button
                    type="submit"
                    bgColor='green.400'
                    color="White"
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
