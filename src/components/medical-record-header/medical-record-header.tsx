import * as PublicStyles from '../../assets/styles/index'
import * as S from './styled-medical-record-header'
import * as Icon from '../../assets/icons/db-icons'

const MedicalRecordHeader = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.Button>Dados Cadastrais</S.Button>
        <S.Button>Prontuário</S.Button>
      </S.Nav>
      <PublicStyles.InputContainer>
        <S.Input placeholder="O que você está procurando?" />
        <Icon.SearchLine />
      </PublicStyles.InputContainer>
    </S.Container>
  )
}

export default MedicalRecordHeader
