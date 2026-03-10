'use client'

import { useState } from 'react'
import ButtonAtividade from './buttonAtividade'
import Publicacao from './Publicacao'

const MuralPublicacao = () => {

  const [publicacaoSelecionada, setPublicacaoSelecionada] = useState<string | null>(null)

  return (
    <>
    {/* Recebe o estado do componente pai para saber quando mostrar o botão Voltar*/}
      <ButtonAtividade
        publicacaoSelecionada={publicacaoSelecionada}
        onVoltar={() => setPublicacaoSelecionada(null)}
      />
      
    {/* Recebe o estado e a função do componente pai para exibir e trocar o card selecionado */}
      <Publicacao
        publicacaoSelecionada={publicacaoSelecionada}
        setPublicacaoSelecionada={setPublicacaoSelecionada}
      />
    </>
  )
}

export default MuralPublicacao