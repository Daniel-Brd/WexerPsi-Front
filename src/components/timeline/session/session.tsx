import { Dots, MentalHealthLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled.session'

type SessionType = {
  title: string
  createdOn: string
  content: string
}

const Session = ({ title, createdOn, content }: SessionType) => {
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
            <button>
              <Dots />
            </button>
          </FlexRow>
          <small>{createdOn}</small>
          <p>{content} </p>
        </HomeCard>
      </Card>
    </>
  )
}

export default Session
