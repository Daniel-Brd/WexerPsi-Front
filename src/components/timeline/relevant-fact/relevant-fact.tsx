import * as I from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-relevant-fact'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'

const RelevantFact = ({
  type,
  title,
  createdOn,
  content,
  occurrenceId,
  timelineId,
  handleDelete,
  handleEdit
}: RelevantFactType) => {
  const prevData = {
    type,
    title,
    createdOn,
    content,
    occurrenceId,
    timelineId
  }

  return (
    <>
      <S.Icon>
        <S.VerticalLine></S.VerticalLine>
        <I.PushPinLine />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>{title}</h2>
            <OccurrenceOptions
              handleDelete={() => handleDelete(timelineId, occurrenceId)}
              handleEdit={() => handleEdit(type, prevData)}
            />
          </FlexRow>
          <small>{createdOn}</small>
          <p>{content}</p>
        </HomeCard>
      </Card>
    </>
  )
}

export default RelevantFact
