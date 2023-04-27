import { CheckmarkCircle, Dots, EyeLine, PencilLine, TodoLine } from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-assessment'
import SmallGreenButton from '@/components/small-green-button/small-green-button'

const Assessment = () => {
  return (
    <>
      <S.Icon>
        <S.VerticalLine></S.VerticalLine>
        <TodoLine />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>Avaliação psicológica</h2>
            <button>
              <Dots />
            </button>
          </FlexRow>
          <small>22 de setembro de 2022</small>
          <S.ItemsContainer>
            <S.Item>
              Entrevista Psicológica
              <S.ButtonsContainer>
                <S.Done className="checked">Realizado</S.Done>
                <SmallGreenButton icon={<PencilLine />} />
                <SmallGreenButton icon={<EyeLine />} />
              </S.ButtonsContainer>
            </S.Item>
            <S.Item>
              Aplicação de teste{' '}
              <S.ButtonsContainer>
                <S.Done className="checked">Realizado</S.Done>
                <SmallGreenButton icon={<PencilLine />} />
                <SmallGreenButton icon={<EyeLine />} />
              </S.ButtonsContainer>
            </S.Item>
            <S.Item className="last">
              Observação Comportamental{' '}
              <S.ButtonsContainer>
                <S.Done className="checked">Realizado</S.Done>
                <SmallGreenButton icon={<PencilLine />} />
                <SmallGreenButton icon={<EyeLine />} />
              </S.ButtonsContainer>
            </S.Item>
          </S.ItemsContainer>
          <small>Emitir</small>
          <S.CheckContainer>
            <S.Check className="checked">
              <CheckmarkCircle /> Laudo
            </S.Check>
            <S.Check>
              <CheckmarkCircle />
              Atestado
            </S.Check>
            <S.Check>
              <CheckmarkCircle />
              Relatório
            </S.Check>
            <S.Check>
              <CheckmarkCircle />
              Declaração
            </S.Check>
          </S.CheckContainer>
        </HomeCard>
      </Card>
    </>
  )
}

export default Assessment
