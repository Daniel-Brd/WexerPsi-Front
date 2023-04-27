import SmallIconButton from '../small-green-button/small-green-button'
import * as I from '../../assets/icons/db-icons'
import { Card, FlexRow, HomeCard } from '@/assets/styles'

const Notes = () => {
  return (
    <Card>
      <HomeCard>
        <FlexRow>
          <h2>Demandas e objetivos</h2>
          <SmallIconButton icon={<I.EditTwoLine />} />
        </FlexRow>
        <p>
          No dia 12 de fevereiro de 2015, a paciente B. A. V, 40 anos, solteira e residente na cidade de Manaus,
          procurou atendimento psicológico em virtude de estar apresentando...
        </p>
      </HomeCard>
    </Card>
  )
}

export default Notes
