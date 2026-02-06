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
    Icon,
    Tooltip,
} from '@chakra-ui/react';
import { Select } from "@chakra-ui/react";
import { FormErrorMessage } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRef, useEffect } from "react";
import { z } from "zod";
import { useFilterContext } from "./FilterContext";
import { CiImageOn } from "react-icons/ci";
import { useAlert } from "./alert"

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

    const {
        handleSubmit,
        register,
        reset,
        resetField,
        watch,
        formState: { errors },
    } = useForm<UserRegister>({
        resolver: zodResolver(registroSchema),
    });
    
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { registerClearCallback } = useFilterContext();
 
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

    const { success } = useAlert()

    const onsubmit = (data: UserRegister) => {
        console.log(data);
        console.log(data.imagem?.[0]);
        reset();

        success("Atividade públicada!")

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
                    <form action="" autoComplete='off' onSubmit={(e) => handleSubmit(onsubmit)(e)}>
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
                                <Switch
                                    {...register("destacar")}
                                />
                            </FormControl>

                            <FormControl isInvalid={!!errors.imagem} >
                                <FormLabel display="flex" alignItems="center" gap={2}>
                                    Anexar imagem:
                                    <Tooltip
                                        label="Máx. 3 imagens"
                                        fontSize="md"
                                        borderRadius="md"
                                        bg="red.600"
                                    >
                                        <Icon as={CiImageOn} boxSize={7} mr={4} />
                                    </Tooltip>
                                </FormLabel>
                                <Flex
                                    direction={{ base: "column", md: "row" }}
                                    align={{ base: "stretch", md: "center" }}
                                    gap={2}
                                >
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        p="5px"
                                        flex="1"
                                        {...register("imagem")}
                                    />

                                    <Button
                                        type="button"
                                        bg="gray.300"
                                        _hover={{
                                            bg: "gray.400"
                                        }}
                                        onClick={() => {
                                            resetField("imagem");
                                            if (fileInputRef.current) {
                                                fileInputRef.current.value = "";
                                            }
                                        }}
                                    >
                                        Excluir
                                    </Button>
                                </Flex>
                                <FormErrorMessage>
                                    {errors.imagem?.message?.toString()}
                                </FormErrorMessage>
                            </FormControl>

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

export default Informacoes;