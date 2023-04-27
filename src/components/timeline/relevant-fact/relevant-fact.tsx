import { PushPinLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-relevant-fact'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'



const RelevantFact = ({ title, createdOn, content, occurrenceId, timelineId, handleDelete }: RelevantFactType) => {

  return (
    <>
      <S.Icon>
        <S.VerticalLine></S.VerticalLine>
        <PushPinLine />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>{title}</h2>
            <OccurrenceOptions handleDelete={() => handleDelete(timelineId, occurrenceId)} />
          </FlexRow>
          <small>{createdOn}</small>
          <p>{content}</p>
        </HomeCard>
      </Card>
    </>
  )
}

export default RelevantFact
