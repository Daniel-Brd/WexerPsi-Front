import { AttachmentTwo, Dots } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-attachment'
import pdfIcon from '@/assets/icons/pdf-files-icon 1.png'

const Attachment = ({ title, createdOn, content, files }: AttachmentType) => {
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
