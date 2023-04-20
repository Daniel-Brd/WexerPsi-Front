import { Dots, MentalHealthLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled.section'

const Section = () => {
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
            <h2>Sessão 02</h2>
            <button>
              <Dots />
            </button>
          </FlexRow>
          <small>22 de setembro de 2022</small>
          <p>
            A paciente relatou que estava tendo dificuldades com sua família e amigos próximos, pois demostra ansiedade
            diante de fatos cotidianos, resultando em reações de raiva com as pessoas que estão próximas a ela. Além
            disso, relatou brigas recentes com seus pais e namorado e, após a briga, ficou mal diante... Ver mais
          </p>
        </HomeCard>
      </Card>
    </>
  )
}

export default Section
