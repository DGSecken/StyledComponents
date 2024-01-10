import { FormEvent, useState } from 'react'
import React from 'react'

import { BotaoPesquisar, Formulario, Pesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <Formulario onChange={aoEnviarForm}>
      <Pesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
      />
      <BotaoPesquisar as="button" buttonType="submit">
        Pesquisar
      </BotaoPesquisar>
    </Formulario>
  )
}
export default FormVagas
