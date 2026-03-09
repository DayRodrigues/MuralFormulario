'use client'

import {
  Flex,
  Heading,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import { CardPublicacao } from './CardPublicacao'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'
import { useAlert } from './alert'

type PublicacaoProps = {
  publicacaoSelecionada: string | null
  setPublicacaoSelecionada: (id: string | null) => void
}

const Publicacoes = [{
  id: "Card1",
  titulo: "Reflorestamento",
  data: "30/03/2026",
  descricao: "No dia do reflorestamento da árvore na escola, todos estão convidados a participar dessa ação especial em favor do meio ambiente. Será um momento de união e aprendizado, em que juntos vamos plantar e cuidar da natureza. Contamos com a presença de todos para tornar esse dia ainda mais significativo!",
  imagem: true,
  responsavel: "Maria",
  cargo: "Diretor(a)",
  segmento: "Todos",
},
{
  id: "Card2",
  titulo: "Reunião",
  data: "02/03/2026",
  destaque: true,
  descricao: "Pauta: Desempenho dos alunos, planejamento de provas, atividades complementares.Perguntas aos professores: desafios dos alunos, sugestões de reforço, projetos extras.Encerramento: resumo das decisões e próximos passos.",
  responsavel: "Izabel",
  cargo: "Coordenador(a)",
  segmento: "Todos",
},
{
  id: "Card3",
  titulo: "1º Bimestre",
  data: "30/03/2026",
  destaque: true,
  imagem: true,
  labelImagem: "3 imagens",
  descricao: "Neste primeiro bimestre, observei avanço gradual na adaptação dos alunos à rotina e às novas exigências do 4º ano. Em Língua Portuguesa, trabalhamos leitura e interpretação de textos narrativos e informativos, com foco na identificação de ideias principais e ampliação do vocabulário. Houve produção de pequenos textos, com atenção à ortografia e pontuação, ainda necessitando reforço em alguns casos.Em Matemática, desenvolvemos as quatro operações, com maior ênfase em multiplicação e início da divisão, além de resolução de problemas contextualizados. Parte da turma demonstra boa compreensão, enquanto alguns alunos ainda precisam de acompanhamento mais próximo.De modo geral, percebo evolução na participação e no compromisso com as atividades, mas continuarei reforçando organização, autonomia e atenção durante as explicações.",
  responsavel: "Juliana",
  cargo: "Professor(a)",
  segmento: "EF Anos Finais",
}]

const Publicacao = ({ publicacaoSelecionada, setPublicacaoSelecionada }: PublicacaoProps) => {
   const {success} = useAlert ()

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
      
        {/* Se um card estiver selecionado, mostra ele */}
        {publicacaoSelecionada === "Card1" && (
          <Card1 onVoltar={() => setPublicacaoSelecionada(null)} />
        )}
        {publicacaoSelecionada === "Card2" && (
          <Card2 onVoltar={() => setPublicacaoSelecionada(null)} />
        )}
        {publicacaoSelecionada === "Card3" && (
          <Card3 onVoltar={() => setPublicacaoSelecionada(null)} />
        )}

        {/* Se nenhuma publicação for selecionada irá mostrar o grid */}
        {!publicacaoSelecionada && (
          <Box py="1rem">

            {/* Cards com destaque em cima */}
            <Flex justify="flex-start" wrap="wrap" gap={5} mb={5} alignItems="stretch">
              {Publicacoes.filter((pub) => pub.destaque).map((pub) => (
                <Box key={pub.id} w={{ base: "100%", md: "calc(33.333% - 20px)" }} display="flex">
                  <CardPublicacao
                    {...pub}
                    onVerMais={() => setPublicacaoSelecionada(pub.id)}
                    onExcluir={() => {console.log("Excluído", pub.id)
                      success("Excluído","Públicação excluída com sucesso!")
                    }}

                  editar={() => console.log("Editar", pub.id)}
                  />
                </Box>
              ))}
            </Flex>

            {/* Cards sem destaque — embaixo em grid normal */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              {Publicacoes.filter((pub) => !pub.destaque).map((pub) => (
                <CardPublicacao
                  key={pub.id}
                  {...pub}
                  onVerMais={() => setPublicacaoSelecionada(pub.id)}
                  onExcluir={() => console.log("Excluído", pub.id)}
                  editar={() => console.log("Editar", pub.id)}
                />
              ))}
            </SimpleGrid>
      </Box>
    </Flex>
  )
}

export default Publicacao