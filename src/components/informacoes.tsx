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
import { FunctionComponent} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const schema =  yup.object ({
    titulo: yup.string().required(),
    publicarPara:yup.string().required(), 
    destacar:yup.string().required(), 
    responsavel: yup.string().required(),    
    funcao:yup.string().required(),     
    seguimento:yup.string().required(),
    anexarImagem:yup.string().required(),  
    descreverMensagem:yup.string().required(),  
});

 const Informacoes: FunctionComponent = () => {
   const {
    register, 
    handleSubmit, 
    formState: { errors }
} = useForm ({
    resolver: yupResolver(schema)
   });
    
   function onSubmit (data:any){
    console.log(data)    
}

    function setErros(error: any){
        console.log('Errors', error)
    }

interface formularioProps{
    titulo: string;
    data: string;
    publicarPara: string;
    destacar: boolean;
    responsavel: string;
    funcao: string;
    seguimento: string;
    anexarImagem ?: string | null;
    descreverMensagem: string;    
    onSubmit: () => void;
    handleSubmit: () => void;
}

 
 
    return (
        <Flex className="Info"
           align= "center"
           justify="center"
        >
            <Box className="Formulario"
              >
                <Heading
                fontSize={{base:"18px", md:"18px", lg:"28px" }}
                > 
                Registre uma nova atividade
                </Heading>
                <Box 
                marginTop={{base:"10%", md:"2%", lg:"2%"}}
                
                >
                    <form action="" autoComplete='off' onSubmit={handleSubmit(onSubmit, setErros)}>
                    <VStack spacing={4} align="stretch">
                        <SimpleGrid 
                        columns={{base:1, md:4, lg:4}}
                        spacing={4}>
                        
                        <FormControl >
                            <FormLabel>Título:</FormLabel>
                            <Input 
                            type="text" 
                            placeholder="Digite o título"
                            {... register('titulo')}
                             />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Data da realização:</FormLabel>
                            <Input 
                            type="date"
                            {... register('data')}
                            />
                        </FormControl>  
                     
                         <FormControl>
                        <FormLabel>Publicar para:</FormLabel>
                        <Select
                        {... register('publicarPara')}
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
                        {... register('destacar')}
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
                        {... register('responsavel')}
                        />
                        </FormControl>


                    <FormControl>
                        <FormLabel>Função:</FormLabel>
                        <Select
                        {... register('funcao')}
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
                       {... register('seguimento')}
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
                            {... register('anexarImagem')}
                            accept="image/*"
                            multiple
                            
                        />
                        <Button 
                        type="button"
                        >Salvar
                        </Button>
                        
                        <Button
                        type="button"
                         >
                        Excluir
                        </Button>
                        </FormControl>

                      <FormControl >
                            <FormLabel>Assunto:</FormLabel>
                            <Textarea 
                            {... register('descreverMensagem')}
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
                </form>
            </Box>
        </Box>
    </Flex >
    )
 }

export default Informacoes;