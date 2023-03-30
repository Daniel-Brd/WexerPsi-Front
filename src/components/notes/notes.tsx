import * as S from './styled-notes'
import * as PublicStyles from '../../assets/styles'
import SmallIconButton from '../small-green-button/small-green-button'
import * as Icon from '../../assets/icons/db-icons'

const Notes = () => {
  return (
    <PublicStyles.Card>
      <S.Container>
        <S.FlexRow>
          <S.Tytle>Demandas e objetivos</S.Tytle>
          <SmallIconButton icon={<Icon.EditTwoLine />} />
        </S.FlexRow>
        <S.Description>
          No dia 12 de fevereiro de 2015, a paciente B. A. V, 40 anos, solteira e residente na cidade de Manaus,
          procurou atendimento psicológico em virtude de estar apresentando...
        </S.Description>
      </S.Container>
    </PublicStyles.Card>
  )
}

export default Notes
