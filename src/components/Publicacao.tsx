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
                    mb="30px"
                >
                    Publicações
                </Heading>


                <Box
                    display="flex"
                >
                    <Stack gap='10' width={{ base: "100%", md: "50%" }}>
                        

                            <CardPublicacao
                            titulo='Reflorestamento'
                            data='23/02/2026'
                            descricao=' No dia do reflorestamento da árvore na escola,todos estão convidados a participar dessa ação especial em favor do meio ambiente.Será um momento de união e aprendizado, em que juntos vamos plantar e cuidar da natureza.Contamos com a presença de todos para tornar esse dia ainda mais significativo!'
                            imagem={true}
                            link="/view/publicacoes/card1"
                            responsavel="Maria"
                            cargo='Diretor(a)'
                            segmento='Todos'
                            />

                            <CardPublicacao
                            titulo='Reunião'
                            data='23/02/2026'
                            destaque={true}
                            descricao=' Pauta: Desempenho dos alunos, planejamento de provas, atividades complementares.Perguntas aos professores: desafios dos alunos, sugestões de reforço, projetos extras.Encerramento: resumo das decisões e próximos passos.'
                            link="/view/publicacoes/card2"
                            responsavel='Izabel'
                            cargo='coordenador(a)'
                            segmento='Todos'
                            />

                            <CardPublicacao
                            titulo='1º Bimestre'
                            data='23/02/2026'
                            destaque={true}
                            imagem={true}
                            labelImagem='3 imagens'
                            descricao=' Neste primeiro bimestre, observei avanço gradual na adaptação dos alunos à rotina e às novas exigências do 4º ano. Em Língua Portuguesa, trabalhamos leitura e interpretação de textos narrativos e informativos, com foco na identificação de ideias principais e ampliação do vocabulário. Houve produção de pequenos textos, com atenção à ortografia e pontuação, ainda necessitando reforço em alguns casos.Em Matemática, desenvolvemos as quatro operações, com maior ênfase em multiplicação e início da divisão, além de resolução de problemas contextualizados. Parte da turma demonstra boa compreensão, enquanto alguns alunos ainda precisam de acompanhamento mais próximo.De modo geral, percebo evolução na participação e no compromisso com as atividades, mas continuarei reforçando organização, autonomia e atenção durante as explicações..'
                            link="/view/publicacoes/card3"
                            responsavel='Juliana'
                            cargo='professor(a)'
                            segmento='EF Anos Finais'
                            />
                    </Stack>
                </Box>
            </Box>
        </Flex>
    )
}

export default Publicacao;

