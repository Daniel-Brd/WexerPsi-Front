import * as I from '@/assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'
import * as S from './styled-assessment'
import SmallGreenButton from '@/components/small-green-button/small-green-button'
import { OccurrenceOptions } from '../occurrence-options/occurrence-options'
import { useNavigate } from 'react-router-dom'

const Assessment = ({ handleDelete, _id, timelineId }: AsessmentType) => {
  const navigate = useNavigate()

  return (
    <>
      <S.Icon>
        <S.VerticalLine></S.VerticalLine>
        <I.TodoLine />
      </S.Icon>
      <Card>
        <HomeCard>
          <S.SideBar>&nbsp;</S.SideBar>
          <FlexRow>
            <h2>Avaliação psicológica</h2>
            <OccurrenceOptions
              handleDelete={() => handleDelete(timelineId, _id)}
              handleEdit={() => navigate(`/assessment/${_id}/interview`)}
            />
          </FlexRow>
          <small>22 de setembro de 2022</small>
          <S.ItemsContainer>
            <S.Item>
              Entrevista Psicológica
              <S.ButtonsContainer>
                <S.Done className="checked">Realizado</S.Done>
                <SmallGreenButton icon={<I.PencilLine />} />
                <SmallGreenButton icon={<I.EyeLine />} />
              </S.ButtonsContainer>
            </S.Item>
            <S.Item>
              Aplicação de teste{' '}
              <S.ButtonsContainer>
                <S.Done className="checked">Realizado</S.Done>
                <SmallGreenButton icon={<I.PencilLine />} />
                <SmallGreenButton icon={<I.EyeLine />} />
              </S.ButtonsContainer>
            </S.Item>
            <S.Item className="last">
              Observação Comportamental{' '}
              <S.ButtonsContainer>
                <S.Done className="checked">Realizado</S.Done>
                <SmallGreenButton icon={<I.PencilLine />} />
                <SmallGreenButton icon={<I.EyeLine />} />
              </S.ButtonsContainer>
            </S.Item>
          </S.ItemsContainer>
          <small>Emitir</small>
          <S.CheckContainer>
            <S.Check className="checked">
              <I.CheckmarkCircle /> Laudo
            </S.Check>
            <S.Check>
              <I.CheckmarkCircle />
              Atestado
            </S.Check>
            <S.Check>
              <I.CheckmarkCircle />
              Relatório
            </S.Check>
            <S.Check>
              <I.CheckmarkCircle />
              Declaração
            </S.Check>
          </S.CheckContainer>
        </HomeCard>
      </Card>
    </>
  )
}

export default Assessment
