import * as S from './styled-modal-footer'

type ModalFooterType = {
  buttonText: string
  handleCancel: () => void
}

const ModalFooter = ({ buttonText, handleCancel }: ModalFooterType) => {
  return (
    <S.Container>
      <p>*Campos obrigatórios</p>
      <S.ButtonContainer>
        <S.CancelButton onClick={handleCancel}>Cancelar</S.CancelButton>
        <S.ConfirmButton>{buttonText}</S.ConfirmButton>
      </S.ButtonContainer>
    </S.Container>
  )
}

export default ModalFooter
