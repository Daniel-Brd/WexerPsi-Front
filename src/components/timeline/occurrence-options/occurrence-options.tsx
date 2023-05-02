import * as I from '@/assets/icons/db-icons'
import { Card } from '@/assets/styles'
import * as S from './styled-occurrence-options'
import { useState } from 'react'

type OccurrenceOptionsType = {
  handleDelete: () => void
  handleEdit: () => void
}

export const OccurrenceOptions = ({ handleDelete, handleEdit }: OccurrenceOptionsType) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false)

  const toggleOption = () => {
    isOptionOpen ? setIsOptionOpen(false) : setIsOptionOpen(true)
  }

  return (
    <>
      <button onClick={() => toggleOption()}>
        <I.Dots />
      </button>
      {isOptionOpen && (
        <S.Container>
          <Card>
            <div>
              <S.EditButton onClick={() => handleEdit()}>
                <I.PencilLine />
                Editar
              </S.EditButton>
              <S.DeleteButton onClick={() => handleDelete()}>
                <I.DeleteBinLine />
                Excluir
              </S.DeleteButton>
              <S.ExportButton>
                <I.ExternalLinkLine />
                Exportar
              </S.ExportButton>
            </div>
          </Card>
        </S.Container>
      )}
    </>
  )
}
