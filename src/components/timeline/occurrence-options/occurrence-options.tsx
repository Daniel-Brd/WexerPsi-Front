import { DeleteBinLine, ExternalLinkLine, PencilLine } from '@/assets/icons/db-icons'
import { Card } from '@/assets/styles'
import * as S from './styled-occurrence-options'

type OccurrenceOptionsType = {
  handleDelete: () => void
}

export const OccurrenceOptions = ({ handleDelete }: OccurrenceOptionsType) => {
  return (
    <Card>
      <S.Container>
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
      </S.Container>
    </Card>
  )
}
