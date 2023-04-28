import { CloseCircle } from '@/assets/icons/db-icons'
import * as FormStyle from './styled-form-components'
import { InputContainer } from '@/assets/styles'
import { format } from 'date-fns'
import { ReactNode } from 'react'

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

export const DateInput = ({ label }: { label: string }) => (
  <label>
    {label}
    <InputContainer>
      <input value={format(new Date(), 'yyyy-MM-dd')} className="small" type="date" disabled />
    </InputContainer>
  </label>
)

export const TimeInput = ({ id, value, label }: { id: string; value: string; label: string }) => (
  <label>
    {label}
    <InputContainer>
      <input id={id} value={value} className="small" type="time" disabled />
    </InputContainer>
  </label>
)

export const TitleInput = ({ sise, register, errorMessage }: { sise: string; errorMessage: string | undefined }) => (
  <label>
    Título*
    <InputContainer>
      <input className={sise} type="text" {...register('title')} />
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const DescriptionTextarea = ({
  label,
  register,
  errorMessage
}: {
  label: string
  errorMessage: string | undefined
}) => (
  <label>
    {label}
    <InputContainer>
      <textarea {...register('content')}></textarea>
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const ValueInput = ({ register, errorMessage }: { errorMessage: string | undefined }) => (
  <label>
    Valor
    <InputContainer>
      <input className="small" type="text" {...register('value')} />
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const AttachmentInput = ({
  register,
  label,
  errorMessage
}: {
  label: string
  errorMessage: string | undefined
}) => (
  <label>
    {label}
    <input type="file" multiple {...register('files')} />
    <small>{errorMessage}</small>
  </label>
)

export const Select = ({ register, label, children }: { label: string; children: ReactNode }) => (
  <label>
    {label}
    <InputContainer>
      <select {...register('method')}>{children}</select>
    </InputContainer>
  </label>
)

export const RadioSection = ({ label, children }: { label: string; children: ReactNode }) => (
  <label>
    {label}
    {children}
  </label>
)

export const RadioItem = ({ label, name, value, register }: { label: string; name: string; value: string }) => (
  <FormStyle.RadioItem>
    <input type="radio" name={name} value={value} {...register(`${name}`)} />
    {label}
  </FormStyle.RadioItem>
)

export const FormFooter = ({ buttonText, handleCancel, isValid, isValidating }: FormFooterType) => {
  return (
    <FormStyle.Footer>
      <p>*Campos obrigatórios</p>
      <FormStyle.ButtonContainer>
        <FormStyle.CancelButton onClick={handleCancel}>Cancelar</FormStyle.CancelButton>
        <FormStyle.ConfirmButton type="submit" disabled={!isValid || isValidating}>
          {buttonText}
        </FormStyle.ConfirmButton>
      </FormStyle.ButtonContainer>
    </FormStyle.Footer>
  )
}
