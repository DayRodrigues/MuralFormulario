'use client'

import {
    Flex,
    Heading,
    Box,
    SimpleGrid,
} from '@chakra-ui/react'
import { CardPublicacao } from './cardPublicacao';
import { useState } from 'react';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';

const Publicacoes = [
    {
    id: "Card1",
    titulo:"Reflorestamento",
    data:"23/02/2026",
    descricao: "No dia do reflorestamento da árvore na escola,todos estão convidados a participar dessa ação especial em favor do meio ambiente.Será um momento de união e aprendizado, em que juntos vamos plantar e cuidar da natureza.Contamos com a presença de todos para tornar esse dia ainda mais significativo!",
    imagem: true,
    responsavel:"Maria",
    cargo:"Diretor(a)",
    segmento:"Todos",
    },

    {
    id: "Card2",
    titulo: "Reunião",
    data: "23/02/2026",
    destaque: true,
    descricao: "Pauta: Desempenho dos alunos, planejamento de provas, atividades complementares.Perguntas aos professores: desafios dos alunos, sugestões de reforço, projetos extras.Encerramento: resumo das decisões e próximos passos.",
    responsavel: "Izabel",
    cargo: "Coordenador(a)",
    segmento: "Todos",
    },

    {
    id: "Card3",
    titulo:'1º Bimestre',
    data:'23/02/2026',
    destaque: true,
    imagem: true,
    labelImagem:'3 imagens',
    descricao:' Neste primeiro bimestre, observei avanço gradual na adaptação dos alunos à rotina e às novas exigências do 4º ano. Em Língua Portuguesa, trabalhamos leitura e interpretação de textos narrativos e informativos, com foco na identificação de ideias principais e ampliação do vocabulário. Houve produção de pequenos textos, com atenção à ortografia e pontuação, ainda necessitando reforço em alguns casos.Em Matemática, desenvolvemos as quatro operações, com maior ênfase em multiplicação e início da divisão, além de resolução de problemas contextualizados. Parte da turma demonstra boa compreensão, enquanto alguns alunos ainda precisam de acompanhamento mais próximo.De modo geral, percebo evolução na participação e no compromisso com as atividades, mas continuarei reforçando organização, autonomia e atenção durante as explicações..',
    responsavel:'Juliana',
    cargo:'Professor(a)',
    segmento:'EF Anos Finais',
    },
]
    const Publicacao = () => {
    const [publicacaoSelecionada, setPublicacaoSelecionada] =
    useState<string | null>(null)



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
                {publicacaoSelecionada === "Card1" && <Card1/>}
                {publicacaoSelecionada === "Card2" && <Card2 />}
                (publicacaoSelecionada === "Card3") return <Card3 />


            <Box>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                    {Publicacoes.map((pub) => (
                        <CardPublicacao
                        key={pub.id}
                        {...pub}
                        onVerMais={() => setPublicacaoSelecionada(pub.id)}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    </Flex>
)
}

export default Publicacao;

