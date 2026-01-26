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
} from '@chakra-ui/react';
import { Select } from "@chakra-ui/react";
import { FormErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

 const registroSchema = z.object({
 titulo: z
 .string()
 .min(1 {message: "Informe o título."}),
 realizacao: z
 .string()
 .min(1{message: "Informe a data de realização."}),
 publicarPara: z
 .string()
 .min(1{message: "Informe para quem será públicado."}),
 destacar: z
 .string()
 .min(1),
 resonsavel: z
 .string()
 .min(1{message: "Informe o responsável."}),
 funcao:z
 .string()
 .min(1{message: "Informe a função."}),
 seguimento: z
 .string()
 .min(1{message: "Informe o seguimento."}),
 imagem: z
 .string()
 .min(1),
 assunto: z
 .string()
 .min(1{message: "Descreva o assunto."}),
 })

 type UserRegister = z.infer<typeof registroSchema>;

 const{
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { isSubmitting, errors },
 } = userForm <registroSchema>({ resolver: zodResolver(UserRegister)});

 const Informacoes = () => {
 
    return (
        <Flex 
           align= {{base:"center", md:"center", lg:"center"}}
           justify="center"
           p= "10px"
           color="#666"
        >
            <Box 
             w= "90%"
             p= "20px"
             margin= {{base:"auto", md:"auto", lg:"auto"}}
             borderColor="gray.400"
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
                    <form action="" autoComplete='off'>
                    <VStack spacing={4} align="stretch">
                        <SimpleGrid 
                        columns={{base:1, md:4, lg:4}}
                        spacing={4}>
                        
                        <FormControl >
                            <FormLabel>Título:</FormLabel>
                            <Input 
                            type="text" 
                            placeholder="Digite o título"
                            
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Data da realização:</FormLabel>
                            <Input 
                            type="date"
                            />
                        </FormControl>  
                     
                         <FormControl>
                        <FormLabel>Publicar para:</FormLabel>
                        <Select
                         placeholder="Selecione uma opção"
                        >
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
                        <Switch 
                        />
                        </FormControl>
                        </SimpleGrid>

                        <SimpleGrid columns={{base:1, md:4, lg:4}}
                        spacing={4}>   
                        <FormControl>
                        <FormLabel>Responsável pela realização:</FormLabel>
                        <Input 
                        type="text" 
                        placeholder="Digite o nome"
                        />
                        </FormControl>

                    <FormControl>
                        <FormLabel>Função:</FormLabel>
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
                        <FormLabel>Selecione o seguimento:</FormLabel>
                        <Select 
                        placeholder="Selecione uma opção"
                        >    
                            <option value="Todos"> Todos</option>
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
                            width="max-content"
                            padding="5px"              
                        />
                                             
                        <Button
                        type="button"
                         >
                        Excluir
                        </Button>
                        </FormControl>

                      <FormControl >
                            <FormLabel>Assunto:</FormLabel>
                            <Textarea 
                            width={{base:"100%", md:"50%", lg:"50%"}}
                            placeholder='Descreva sua mensagem...'
                         />       
                    </FormControl>

                <Button
                    type="submit"
                    bg="blue.400"
                    color="White"
                    _hover={{
                    bgColor:"green.400"
                    }}
                    alignSelf={"flex-start"}
                >Públicar
                </Button>
                </VStack>
                </form>
            </Box>
        </Box>
    </Flex >
    )
 }

export default Informacoes;