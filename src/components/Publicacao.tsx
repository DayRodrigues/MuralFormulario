'use client'

import {
  Flex,
  Heading,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CardPublicacao } from './cardPublicacao'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'

const Publicacoes = [  {
    id: "Card1",
    titulo: "Reflorestamento",
    data: "23/02/2026",
    descricao: "No dia do reflorestamento...",
    imagem: true,
    responsavel: "Maria",
    cargo: "Diretor(a)",
    segmento: "Todos",
  },
  {
    id: "Card2",
    titulo: "Reunião",
    data: "23/02/2026",
    destaque: true,
    descricao: "Pauta: Desempenho dos alunos...",
    responsavel: "Izabel",
    cargo: "Coordenador(a)",
    segmento: "Todos",
  },
  {
    id: "Card3",
    titulo: "1º Bimestre",
    data: "23/02/2026",
    destaque: true,
    imagem: true,
    labelImagem: "3 imagens",
    descricao: "Neste primeiro bimestre...",
    responsavel: "Juliana",
    cargo: "Professor(a)",
    segmento: "EF Anos Finais",
  } ]

const Publicacao = () => {

  const [publicacaoSelecionada, setPublicacaoSelecionada] =
    useState<string | null>(null)

  return (
    <Flex
      w="90%"
      p="10px"
      margin="auto"
      borderRadius="xl"
    >
      <Box w="100%">
        <Heading
          color="#666"
          fontWeight="medium"
          pl="10px"
          fontSize={{ base: "18px", lg: "28px" }}
        >
          Publicação
        </Heading>

        {/* SE EXISTE SELEÇÃO → MOSTRA DETALHE */}
        {publicacaoSelecionada === "Card1" && (
  <Card1 onVoltar={() => setPublicacaoSelecionada(null)} />
)}

{publicacaoSelecionada === "Card2" && (
  <Card2 onVoltar={() => setPublicacaoSelecionada(null)} />
)}

{publicacaoSelecionada === "Card3" && (
  <Card3 onVoltar={() => setPublicacaoSelecionada(null)} />
)}

        {/* SE NÃO EXISTE SELEÇÃO → MOSTRA GRID */}
      {!publicacaoSelecionada && (
  <Box py="1rem">
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
)}
      </Box>
    </Flex>
  )
}

export default Publicacao