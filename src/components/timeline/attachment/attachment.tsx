import { AttachmentTwo } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-attachment'
import pdfIcon from '@/assets/icons/pdf-files-icon 1.png'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'

const Attachment = ({ title, createdOn, content, files, occurrenceId, timelineId, handleDelete }: AttachmentType) => {

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
            <OccurrenceOptions handleDelete={() => handleDelete(timelineId, occurrenceId)} />
          </FlexRow>
          <small>{createdOn}</small>
          <p>{content} </p>
          <br />
          <small>
            <b>
              {files.length.toLocaleString()} {files.length > 1 ? 'anexos' : 'anexo'}
            </b>
          </small>
          {files.map((file, index) => {
            return (
              <S.AttachmentContainer key={index}>
                <img src={pdfIcon} alt="" />
                <S.Link href="">
                  {file.filename} ({file.filesize + ' Kb'})
                </S.Link>
              </S.AttachmentContainer>
            )
          })}
        </HomeCard>
      </Card>
    </>
  )
}

export default Attachment
