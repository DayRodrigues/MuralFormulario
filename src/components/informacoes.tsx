'use client';

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
import { FormErrorMessage } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRef, useEffect, useState } from "react";
import { z } from "zod";
import { useFilterContext } from "./FilterContext";
import { useAlert } from "./alert"
import ImageUpload from './imageUploud';

//Esquema de validação com Zod
const registroSchema = z.object({
    titulo: z
        .string()
        .min(1, {
            message: "Informe o título."
        }),
    realizacao: z
        .string()
        .min(1, {
            message: "Informe a data de realização."
        }),
    publicarPara: z
        .string()
        .min(1, {
            message: "Informe para quem será públicado."
        }),
    destacar: z
        .boolean()
        .optional(),
    responsavel: z
        .string()
        .min(1, {
            message: "Informe o responsável."
        }),
    cargo: z
        .string()
        .min(1, {
            message: "Informe a função."
        }),
    seguimento: z
        .string()
        .min(1, {
            message: "Informe o seguimento."
        }),
    imagem: z
        .any()
        .refine(files => !files || files.length <= 3, {
            message: "Você pode anexar no máximo 3 imagens"
        })
        .optional(),
    assunto: z
        .string()
        .min(1, {
            message: "Descreva a mensagem."
        }),
})

type UserRegister = z.infer<typeof registroSchema>;

const Informacoes = () => {

    const {     //Funções RHF para controle do formulário
        handleSubmit, 
        register,
        reset,
        resetField,
        watch, //Observa as mudanças nos campos
        setError,
        clearErrors,
        setValue,
        formState: { errors },
    } = useForm<UserRegister>({
        resolver: zodResolver(registroSchema),
        mode: "onChange",  //Validação em tempo real
    });

    const fileInputRef = useRef<HTMLInputElement | null>(null); //Referência para o input de imagem  
    const [previewImages, setPreviewImages] = useState<string[]>([]); //Estado para guardas as URL temporárias das imagens

    const { registerClearCallback } = useFilterContext(); //Acessa a função do contexto para registrar o callback de limpeza do formulário

    const titulo = watch("titulo");
    const realizacao = watch("realizacao");
    const publicarPara = watch("publicarPara");
    const responsavel = watch("responsavel");
    const cargo = watch("cargo");
    const seguimento = watch("seguimento");
    const assunto = watch("assunto");

    useEffect(() => {
        registerClearCallback("informacoes", () => { 
            reset();
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }, () => {
            return !!(titulo || realizacao || publicarPara || responsavel || cargo || seguimento || assunto);
        });
    }, [reset, registerClearCallback, titulo, realizacao, publicarPara, responsavel, cargo, seguimento, assunto]);

    const { success } = useAlert();  //Função para exibir alerta de sucesso

    const onsubmit = (data: UserRegister) => {  //Função chamando o formulário para processar os dados
        console.log(data);
        console.log(data.imagem);
        reset();
        setPreviewImages([]);
        success("Públicado", "Públicação realizada com sucesso!")
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    return (
        <Flex
            align={{ base: "center", md: "center", lg: "center" }}
            justify="center"
            p="10px"
            color="#666"
            w="100%"
        >
            <Box
                w="90%"
                p="20px"
                margin={{ base: "auto", md: "auto", lg: "auto" }}
                borderColor="gray.400"
                borderRadius="xl"
                boxShadow="2xl"
            >
                <Heading
                    fontSize={{ base: "18px", md: "18px", lg: "28px" }}
                >
                    Registre uma nova atividade
                </Heading>
                <Box
                    marginTop={{ base: "10%", md: "2%", lg: "2%" }}
                >
                    <form action="" autoComplete='off' onSubmit={handleSubmit(onsubmit)}>
                        <VStack spacing={4} align="stretch">
                            <SimpleGrid
                                columns={{ base: 1, md: 3, lg: 3 }}
                                spacing={4}>

                                <FormControl isInvalid={!!errors.titulo}>
                                    <FormLabel>Título:</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Digite o título"
                                        {...register("titulo")}
                                    />
                                    <FormErrorMessage>
                                        {errors.titulo?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!errors.realizacao}>
                                    <FormLabel>Data da realização:</FormLabel>
                                    <Input
                                        type="date"
                                        {...register("realizacao")}
                                    />
                                    <FormErrorMessage>
                                        {errors.realizacao?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!errors.publicarPara}>
                                    <FormLabel>Publicar para:</FormLabel>
                                    <Select
                                        {...register("publicarPara")}
                                    >
                                        <option value="" disabled selected hidden>Selecione uma opção</option>
                                        <option value="Todos">Todos</option>
                                        <option value="Gestor">Gestores</option>
                                        <option value="Professor">Professores</option>
                                        <option value="Aluno">Alunos</option>
                                    </Select>
                                    <FormErrorMessage>
                                        {errors.publicarPara?.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </SimpleGrid>

                            <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }}
                                spacing={4}>
                                <FormControl isInvalid={!!errors.responsavel}>
                                    <FormLabel>Responsável pela realização:</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Digite o nome"
                                        {...register("responsavel")}
                                    />
                                    <FormErrorMessage>
                                        {errors.responsavel?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!errors.cargo}>
                                    <FormLabel>Cargo:</FormLabel>
                                    <Select
                                        id='cargo'
                                        {...register("cargo")}
                                    >
                                        <option value="" disabled selected hidden>Selecione uma opção</option>
                                        <option value="Todos">Todos</option>
                                        <option value="Diretor">Diretor(a)</option>
                                        <option value="ViceDiretor">Vice-Diretor(a)</option>
                                        <option value="Coordenador">Coordenador(a)</option>
                                        <option value="Professor">Professor(a)</option>
                                    </Select>
                                    <FormErrorMessage>
                                        {errors.cargo?.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!errors.seguimento}>
                                    <FormLabel>Selecione o segmento:</FormLabel>
                                    <Select
                                        id='cargo'
                                        {...register("seguimento")}
                                    >
                                        <option value="" disabled selected hidden>Selecione uma opção</option>
                                        <option value="Todos"> Todos</option>
                                        <option value="Educacao Infantil"> Ed. Infantil</option>
                                        <option value="Anos Inicias"> EF Anos Iniciais</option>
                                        <option value="Anos Finais"> EF Anos Finais</option>
                                    </Select>
                                    <FormErrorMessage>
                                        {errors.seguimento?.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </SimpleGrid>

                            <FormControl display="flex" alignItems="center">
                                <FormLabel
                                >
                                    Destacar no mural:
                                </FormLabel>
                                <Switch  //Componente boolean para destacar a atividade 
                                    {...register("destacar")}
                                />
                            </FormControl>

                            <ImageUpload
                                //props
                                previewImages={previewImages} 
                                error={errors.imagem?.message?.toString()}
                                fileInputRef={fileInputRef} 
                                
                               //Função para adicionar novas imagens, se não tiver imagem ele retorna.
                               onChange={(files) => { 
                                   if (!files) return; 

                                   //pega o valor atual do campo e converte para array.
                                   const watched = watch("imagem") as FileList | undefined;
                                   const existingFiles:File[] = watched ? Array.from(watched) : [];
                                    
                                   //junta os arquivos antigos com os novos.
                                   const allFiles = [...existingFiles, ...Array.from(files)];

                                   if (allFiles.length > 3) { 
                                       setError("imagem", {
                                           type: "manual",
                                           message: "Você pode anexar no máximo 3 imagens",
                                       });
                                       return;
                                   }
                                   //Se o erro estiver válido, limpa.
                                   clearErrors("imagem"); 
                                   //cria URL temporária da imagem, criando o preview antes de enviar.
                                   const newPreviews = Array.from(files).map(file => 
                                       URL.createObjectURL(file)
                                   );
                                   //atualiza o estado juntando o previews antigos com os novos
                                   setPreviewImages(prev => [...prev, ...newPreviews]);
                                
                                   //dataTransfer é um objeto que arrasta arquivos, porém nesse caso está sendo usado para uma nova FileList, na qual setValue atualiza o valor do campo
                                   const dt = new DataTransfer();
                                   allFiles.forEach(f => dt.items.add(f));
                                   setValue("imagem", dt.files);
                               }}
                              //Função para remoção da imagem individual
                               onRemove={(index) => { 

                                setPreviewImages((prev) => { //Atualiza os previews removendo pelo índice
                                    const updated = prev.filter((_,i) => i !== index);  //Remove o preview da posição.


                                    if (updated.length <=3) { 
                                        clearErrors("imagem"); 
                                    }
                                    if(updated.length === 0){ 
                                        resetField("imagem");
                                    }
                                    return updated; 
                                });  

                                const watched = watch("imagem") as FileList | undefined; //Obtem o valor atual após a remoção para atualizar o estado da imagem
                                const currentArray: File[] = watched ? Array.from(watched) : []; //Cria um novo array de arquivos a partir do Filelist
                                const updateFiles = currentArray.filter((_, i) => i !== index); //Remove o arquivo do array
                                setValue("imagem", updateFiles.length > 0 ? (updateFiles as unknown as FileList) : undefined); //Atualiza o valor do campo no RHF

                                //verifica se o input existe
                                if (fileInputRef.current) {  
                                    //cria um novo FileList
                                    const dt = new DataTransfer(); 
                                    updateFiles.forEach((f) => dt.items.add(f)); 
                                    
                                    try { 
                                            fileInputRef.current.files = dt.files;
                                        } catch { 
                                            
                                            fileInputRef.current.value = ""; 
                                        }
                                    if (updateFiles.length === 0) {
                                        fileInputRef.current.value = "";
                                    }
                                }
                               }} 

                                onClear={() => { //Limpa todas as imagens
                                    resetField("imagem");
                                    clearErrors("imagem");
                                    setPreviewImages([]);
                                    setValue("imagem", undefined);
                                    if (fileInputRef.current) { 
                                        fileInputRef.current.value = ""; 
                                    }
                                }}
                            />

                            <FormControl isInvalid={!!errors.assunto}>
                                <FormLabel>Assunto:</FormLabel>
                                <Textarea
                                    placeholder='Descreva sua mensagem...'
                                    {...register("assunto")}
                                />
                                <FormErrorMessage>
                                    {errors.assunto?.message}
                                </FormErrorMessage>
                            </FormControl>

                            <Button
                                type="submit"
                                bg="blue.400"

                                color="White"
                                _hover={{
                                    bgColor: "green.400"
                                }}
                                alignSelf={"flex-end"}
                            >Públicar
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Box>
        </Flex >
    )
}

export default Informacoes