import * as S from './styled-medical-record-header'
import * as Icon from '../../assets/icons/db-icons'
import { InputContainer } from '@/assets/styles'

const MedicalRecordHeader = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.Button>Dados Cadastrais</S.Button>
        <S.Button disabled>Prontuário</S.Button>
      </S.Nav>
      <InputContainer>
        <S.Input placeholder="O que você está procurando?" />
        <Icon.SearchLine />
      </InputContainer>
    </S.Container>
  )
}

export default MedicalRecordHeader
