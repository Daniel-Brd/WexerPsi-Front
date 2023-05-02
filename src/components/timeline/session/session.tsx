import * as I from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-session'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'
import { useNavigate } from 'react-router-dom'

const Session = ({
  type,
  title,
  createdOn,
  content,
  timelineId,
  occurrenceId,
  handleDelete,
  handleEdit
}: Partial<SessionType>) => {
  const navigate = useNavigate()

  const truncate = (text: string) => {
    if (text.length <= 310) {
      return text
    } else {
      return text.slice(0, 310)
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
            <OccurrenceOptions
              handleDelete={() => handleDelete(timelineId, occurrenceId)}
              handleEdit={() => handleEdit(type, occurrenceId)}
            />
          </FlexRow>
          <small>{createdOn}</small>
          <p>
            {truncate(content ? content : '')}
            {'... '}
            <S.More onClick={() => navigate(`/occurrence/${occurrenceId}`)}>Ver mais</S.More>
          </p>
        </HomeCard>
      </Card>
    </>
  )
}

export default Session
