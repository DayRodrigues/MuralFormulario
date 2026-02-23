'use client'

import {
    Flex,
    Heading,
    Box,
    Stack,
} from '@chakra-ui/react'
import { CardPublicacao } from './cardPublicacao';

const Publicacao = () => {

    return (
        <Flex
            w="90%"
            p="10px"
            margin={{ base: "auto", md: "auto" }}
            my={{ base: "10px", md: "30px", }}
            borderRadius="xl"
            boxShadow="2xl"
        >
            <Box>
                <Heading
                    display="flex"
                    justifyItems="flex-start"
                    color="#666"
                    fontWeight="medium"
                    pl={{ base: "10px", md: "30px" }}
                    fontSize={{ base: "18px", md: "18px", lg: "28px" }}
                    m="10px"
                >
                    Publicações
                </Heading>


                <Box
                    display="flex"
                >
                    <Stack spacing='4' width={{ base: "100%", md: "50%" }}>
                        

                            <CardPublicacao
                            titulo='Reflorestamento'
                            data='23/02/2026'
                            descricao=' No dia do reflorestamento da árvore na escola,
                            todos estão convidados a participar dessa ação especial em favor do meio ambiente.
                            Será um momento de união e aprendizado, em que juntos vamos plantar e cuidar da natureza.
                            Contamos com a presença de todos para tornar esse dia ainda mais significativo!'
                            />

                            <CardPublicacao
                            titulo='Reunião'
                            data='23/02/2026'
                            descricao=' Pauta: desempenho dos alunos, planejamento de provas, atividades complementares.
                            Perguntas aos professores: desafios dos alunos, sugestões de reforço, projetos extras.
                            Encerramento: resumo das decisões e próximos passos.'
                            />

                    </Stack>
                </Box>
            </Box>
        </Flex>
    )
}

export default Publicacao;

