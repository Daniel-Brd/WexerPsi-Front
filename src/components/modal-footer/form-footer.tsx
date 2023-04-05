import * as S from './styled-form-footer'

type FormFooterType = {
  buttonText: string
  handleCancel: () => void
  isValid: boolean
  isValidating: boolean
}

const FormFooter = ({ buttonText, handleCancel, isValid, isValidating }: FormFooterType) => {
  console.log(isValid)
  console.log(isValidating)

  return (
    <S.Container>
      <p>*Campos obrigatórios</p>
      <S.ButtonContainer>
        <S.CancelButton onClick={handleCancel}>Cancelar</S.CancelButton>
        {isValid && <S.ConfirmButton type="submit">{buttonText}</S.ConfirmButton>}
        {!isValid && (
          <S.ConfirmButton type="submit" disabled>
            {buttonText}
          </S.ConfirmButton>
        )}
        {isValidating && (
          <S.ConfirmButton type="submit" disabled>
            enviando...
          </S.ConfirmButton>
        )}
      </S.ButtonContainer>
    </S.Container>
  )
}

export default FormFooter
