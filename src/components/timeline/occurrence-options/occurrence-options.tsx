import { DeleteBinLine, Dots, ExternalLinkLine, PencilLine } from '@/assets/icons/db-icons'
import { Card } from '@/assets/styles'
import * as S from './styled-occurrence-options'
import { useState } from 'react'

type OccurrenceOptionsType = {
  handleDelete: () => void
}

export const OccurrenceOptions = ({ handleDelete }: OccurrenceOptionsType) => {

  const [isOptionOpen, setIsOptionOpen] = useState(false)
  const toggleOption = () => {
    isOptionOpen ? setIsOptionOpen(false) : setIsOptionOpen(true)
  }


  return (<>
      <button onClick={()=>toggleOption()}>
        <Dots />
      </button >
      {isOptionOpen &&     
        <S.Container>
          <Card>
            <div>
            <S.EditButton>
              <PencilLine />
              Editar
            </S.EditButton>
            <S.DeleteButton onClick={() => handleDelete()}>
              <DeleteBinLine />
              Excluir
            </S.DeleteButton>
            <S.ExportButton>
              <ExternalLinkLine />
              Exportar
            </S.ExportButton>
            </div>
          </Card>
        </S.Container>
      }
  </>
  )
}
