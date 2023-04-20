import { Dots, PushPinLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-material-fact'

const MaterialFact = () => {
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
            <h2>Fato Relevante</h2>
            <button>
              <Dots />
            </button>
          </FlexRow>
          <small>22 de setembro de 2022</small>
          <p>Cliente Não apareceu </p>
        </HomeCard>
      </Card>
    </>
  )
}

export default MaterialFact
