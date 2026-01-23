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
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const schema =  yup.object ({
    titulo: yup.string().required('Preencha o título'),
    realizacao: yup.string().required('Informe a data'),
    publicarPara:yup.string().required('Informe para quem será públicado'), 
    destacar:yup.boolean().default(false),
    responsavel: yup.string().required('Informe o responsavel'),    
    funcao:yup.string().required('Informe a função'),     
    seguimento:yup.string().required('Informe seguinto'),
    anexarImagem:yup.mixed().notRequired(),  //estudando sobre o tipo FileList
    descreverMensagem:yup.string().required('Descreva sua mensagem'),  
});

 const Informacoes: FunctionComponent = () => {
   const {
    register, 
    handleSubmit, 
    formState: { errors }
} = useForm ({
    resolver: yupResolver(schema),
   });
    
    const onSubmit: SubmitHandler<FormularioData> = (data) => {
    console.log(data);
    };

    function setErros(error: any){
        console.log('Errors', error)
    }

interface FormularioData{
    titulo: string;
    realizacao: string;
    publicarPara: string;
    destacar: boolean;
    responsavel: string;
    funcao: string;
    seguimento: string;
    anexarImagem?: any; //estudando sobre o tipo FileList
    descreverMensagem: string;
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
                             <p style={{color:'red'}}>{errors?.titulo?.message}</p>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Data da realização:</FormLabel>
                            <Input 
                            type="date"
                            {... register('realizacao')}
                            />
                            <p style={{color:'red'}}>{errors?.realizacao?.message}</p>
                        </FormControl>  
                     
                         <FormControl>
                        <FormLabel>Publicar para:</FormLabel>
                        <Select
                         placeholder="Selecione uma opção"
                        {... register('publicarPara')}
                        >
                            <option value="Todos">Todos</option>
                            <option value="Gestor">Gestores</option>
                            <option value="Professor">Professores</option>
                            <option value="Aluno">Alunos</option>
                        </Select>
                        <p style={{color:'red'}}>{errors?.publicarPara?.message}</p>
                        </FormControl>
                        
                        <FormControl display="flex" alignItems="center">
                        <FormLabel >
                            Destacar no mural:
                        </FormLabel>
                        <Switch 
                         {...register('destacar')} 
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
                        <p style={{color:'red'}}>{errors?.responsavel?.message}</p>
                        </FormControl>


                    <FormControl>
                        <FormLabel>Função:</FormLabel>
                        <Select
                        placeholder="Selecione uma opção"
                        {... register('funcao')}
                        >
                            <option value="Todos">Todos</option>
                            <option value="Diretor">Diretor(a)</option>
                            <option value="ViceDiretor">Vice-Diretor(a)</option>
                            <option value="Coordenador">Coordenador(a)</option>
                            <option value="Professor">Professor(a)</option>
                        </Select>
                        <p style={{color:'red'}}>{errors?.funcao?.message}</p>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Selecione o seguimento:</FormLabel>
                        <Select 
                        placeholder="Selecione uma opção"
                       {... register('seguimento')}
                        >    
                            <option value="Todos"> Todos</option>
                            <option value="Educacao Infantil"> Educação Infantil</option>
                            <option value="Anos Inicias"> Anos Iniciais</option>
                            <option value="Anos Finais"> Anos Finais</option>
                        </Select>
                         <p style={{color:'red'}}>{errors?.seguimento?.message}</p>
                    </FormControl>
                </SimpleGrid>

                        <FormControl>
                        <FormLabel>Anexar imagem:</FormLabel>
                        <Input
                            type="file"
                            accept="image/*"
                            {...register('anexarImagem')}                          
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
                            {... register('descreverMensagem')}
                            placeholder='Descreva sua mensagem...'
                         />       
                         <p style={{color:'red'}}>{errors?.descreverMensagem?.message}</p>
                    </FormControl>

                <Button
                    type="submit"
                    bgColor='green.400'
                    color="White"
                    _hover={{
                    color: "gray.300"
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