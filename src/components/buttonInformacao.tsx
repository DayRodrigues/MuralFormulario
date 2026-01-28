'use client';

import { useState } from "react";
import ButtonAtividade from "./buttonAtividade";
import Informacoes from "./informacoes";
import Filtro from "./filtro";

 export default function ButtonInformacao() {
 const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <>
    <ButtonAtividade onAbrir={() => setMostrarFormulario(true)} />
    
    {mostrarFormulario &&(
        <Informacoes />
   )}
    </>
  );
}