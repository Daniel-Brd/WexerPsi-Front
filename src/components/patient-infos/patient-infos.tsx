import { Card } from '@/assets/styles'
import * as S from './styled-patient-infos'

const PatientInfos = ({ name, birthdate, profession, schooling }: Partial<PatientType>) => {
  return (
    <Card>
      <S.Container>
        <h1>Identificação do paciente</h1>
        <S.Section>
          <h2>Paciente</h2>
          <p>{name} </p>
        </S.Section>
        <S.Section>
          <h2>Nascimento</h2>
          <p>{birthdate} </p>
        </S.Section>
        <S.Section>
          <h2>Profissão</h2>
          <p>{profession} </p>
        </S.Section>
        <S.Section>
          <h2>Escolaridade</h2>
          <p>{schooling} </p>
        </S.Section>
      </S.Container>
    </Card>
  )
}

export default PatientInfos
