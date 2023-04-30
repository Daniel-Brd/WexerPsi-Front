import * as I from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled.session'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'
import { useNavigate } from 'react-router-dom'

const Session = ({ title, createdOn, content, timelineId, occurrenceId, handleDelete }: SessionType) => {
  const navigate = useNavigate()

  const truncate = (text: string) => {
    if (text.length <= 310) {
      return <p>{text}</p>
    } else {
      return (
        <p>
          {text.slice(0, 310)} <S.More onClick={() => navigate(`/occurrence/${occurrenceId}`)}>Ver mais...</S.More>{' '}
        </p>
      )
    }
  }

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
          {truncate(content)}
        </HomeCard>
      </Card>
    </>
  )
}

export default Session
