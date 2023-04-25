import { Dots, PushPinLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-material-fact'

type MaterialFactType = {
  title: string
  createdOn: string
  content: string
}

const MaterialFact = ({ title, createdOn, content }: MaterialFactType) => {
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
            <button>
              <Dots />
            </button>
          </FlexRow>
          <small>{createdOn}</small>
          <p>{content}</p>
        </HomeCard>
      </Card>
    </>
  )
}

export default MaterialFact
