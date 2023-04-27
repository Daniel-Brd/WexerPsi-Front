import * as I from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled.session'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'

const Session = ({ title, createdOn, content, timelineId, occurrenceId, handleDelete }: SessionType) => {

  return (
    <>
      <S.Icon>
        <S.VerticalLine />
        <I.MentalHealthLine />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>{title}</h2>
            <OccurrenceOptions handleDelete={() => handleDelete(timelineId, occurrenceId)} />
          </FlexRow>
          <small>{createdOn}</small>
          <S.Truncated>{content} </S.Truncated>
        </HomeCard>
      </Card> 
    </>
  )
}

export default Session
