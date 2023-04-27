import { CloseCircle } from '@/assets/icons/db-icons'
import * as FormStyle from './styled-form-components'
import { InputContainer } from '@/assets/styles'

type FormHeaderType = {
  title: string
  handleClose: () => void
}

type FormFooterType = {
  buttonText: string
  handleCancel: () => void
  isValid: boolean
  isValidating: boolean
}

export const FormHeader = ({ title, handleClose }: FormHeaderType) => (
  <FormStyle.Header>
    <FormStyle.Flex>
      <h1>{title}</h1>
      <button onClick={() => handleClose()}>
        <CloseCircle />
      </button>
    </FormStyle.Flex>
  </FormStyle.Header>
)

export const DateInput = ({ label, register, errorMessage }: DateInputType) => (
  <label>
    {label}
    <InputContainer>
      <input className="small" type="date" {...register('date')} placeholder={new Date().toLocaleDateString()} />
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const TimeInput = ({ label, register, errorMessage }) => (
  <label>
    {label}
    <InputContainer>
      <input className="small" type="time" {...register('time')} />
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const TitleInput = ({ sise, register, errorMessage }) => (
  <label>
    Título*
    <InputContainer>
      <input className={sise} type="text" {...register('title')} />
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const DescriptionTextarea = ({ label, register, errorMessage }) => (
  <label>
    {label}
    <InputContainer>
      <textarea {...register('content')}></textarea>
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const ValueInput = ({ register, errorMessage }) => (
  <label>
    Valor
    <InputContainer>
      <input className="small" type="text" {...register('title')} />
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const AttachmentInput = ({ register, label, errorMessage }) => (
  <label>
    {label}
    <input type="file" {...register('files')} />
    <small>{errorMessage}</small>
  </label>
)

export const Select = ({ label, children }) => (
  <label>
    {label}
    <InputContainer>
      <select>{children}</select>
    </InputContainer>
  </label>
)

export const RadioSection = ({ label, children }) => (
  <label>
    {label}
    {children}
  </label>
)

export const RadioItem = ({ label, name, value }) => (
  <FormStyle.RadioItem>
    <input type="radio" name={name} value={value} />
    {label}
  </FormStyle.RadioItem>
)

export const FormFooter = ({ buttonText, handleCancel, isValid, isValidating }: FormFooterType) => {
  return (
    <FormStyle.Footer>
      <p>*Campos obrigatórios</p>
      <FormStyle.ButtonContainer>
        <FormStyle.CancelButton onClick={handleCancel}>Cancelar</FormStyle.CancelButton>
        {isValid && <FormStyle.ConfirmButton type="submit">{buttonText}</FormStyle.ConfirmButton>}
        {!isValid && (
          <FormStyle.ConfirmButton type="submit" disabled>
            {buttonText}
          </FormStyle.ConfirmButton>
        )}
        {isValidating && (
          <FormStyle.ConfirmButton type="submit" disabled>
            enviando...
          </FormStyle.ConfirmButton>
        )}
      </FormStyle.ButtonContainer>
    </FormStyle.Footer>
  )
}
