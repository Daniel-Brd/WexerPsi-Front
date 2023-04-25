import { Dots, MentalHealthLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled.session'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'
import { useState } from 'react'
import { deleteOccurrence } from '@/services/occurrences'

const Session = ({ title, createdOn, content, timelineId, occurrenceId, timeline, setTimeline }: SessionType) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false)

  const toggleOption = () => {
    isOptionOpen ? setIsOptionOpen(false) : setIsOptionOpen(true)
  }

  const handleDelete = (timelineId: string, occurrenceId: string) => {
    deleteOccurrence({ timelineId, occurrenceId })
    if (timeline.occurrences?.length) {
      const newOccurrences = timeline.occurrences.filter(item => item._id !== occurrenceId)
      setTimeline({ occurrences: newOccurrences })
    }
  }

  return (
    <>
      <S.Icon>
        <S.VerticalLine />
        <MentalHealthLine />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>{title}</h2>
            <div onClick={() => toggleOption()}>
              <Dots />
              {isOptionOpen && <OccurrenceOptions handleDelete={() => handleDelete(timelineId, occurrenceId)} />}
            </div>
          </FlexRow>
          <small>{createdOn}</small>
          <p>{content} </p>
        </HomeCard>
      </Card>
    </>
  )
}

export default Session
