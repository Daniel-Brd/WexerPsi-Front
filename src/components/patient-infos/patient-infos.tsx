import * as Styled from './styled-patient-infos'
import * as PublicStyles from '../../assets/styles'

type PatientType = {
  name: string
  birthday: string
  occupation: string
  education: string
}

const PatientInfos = ({ name, birthday, occupation, education }: PatientType) => {
  return (
    <PublicStyles.Card>
      <Styled.Container>
        <h1>Identificação do paciente</h1>
        <Styled.Section>
          <h2>Paciente</h2>
          <p>{name} </p>
        </Styled.Section>
        <Styled.Section>
          <h2>Nascimento</h2>
          <p>{birthday} </p>
        </Styled.Section>
        <Styled.Section>
          <h2>Profissão</h2>
          <p>{occupation} </p>
        </Styled.Section>
        <Styled.Section>
          <h2>Escolaridade</h2>
          <p>{education} </p>
        </Styled.Section>
      </Styled.Container>
    </PublicStyles.Card>
  )
}

export default PatientInfos
