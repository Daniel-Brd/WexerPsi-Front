import { AttachmentTwo, Dots } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-attachment'

type AttachmentType = {
  title: string
  createdOn: string
  patientName?: string
  files: string
}

const Attachment = ({ title, createdOn, patientName, files }: AttachmentType) => {
  return (
    <>
      <S.Icon>
        <S.VerticalLine></S.VerticalLine>
        <AttachmentTwo />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>{title}</h2>
            <button>
              <Dots />
            </button>
          </FlexRow>
          <small>{createdOn}</small>
          <p>
            Anexo hoje alguns documentos importantes sobre as consultas recentes da paciente {patientName}. Documentos
            para serem consultados posteriormente, caso necessário.
          </p>
          <div>{files}</div>
        </HomeCard>
      </Card>
    </>
  )
}

export default Attachment
