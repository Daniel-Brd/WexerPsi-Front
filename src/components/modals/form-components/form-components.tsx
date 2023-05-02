import { CloseCircle } from '@/assets/icons/db-icons'
import * as FormStyle from './styled-form-components'
import { InputContainer } from '@/assets/styles'
import { format } from 'date-fns'
import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

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

export const TimeInput = ({ value, label }: { value: string; label: string }) => (
  <label>
    {label}
    <InputContainer>
      <input value={value} className="small" type="time" disabled />
    </InputContainer>
  </label>
)

export const TitleInput = ({
  sise,
  register,
  errorMessage
}: {
  sise: string
  errorMessage: string | undefined
  register: UseFormRegister<any>
}) => (
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
  register: UseFormRegister<any>
}) => (
  <label>
    {label}
    <InputContainer>
      <textarea {...register('content')}></textarea>
    </InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const ValueInput = ({
  register,
  errorMessage
}: {
  errorMessage: string | undefined
  register: UseFormRegister<SessionType>
}) => (
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
  register: UseFormRegister<AttachmentType>
}) => (
  <label>
    {label}
    <input type="file" multiple {...register('files')} />
    <small>{errorMessage}</small>
  </label>
)

export const Select = ({
  register,
  label,
  children
}: {
  label: string
  children: ReactNode
  register: UseFormRegister<SessionType>
}) => (
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

export const RadioItem = ({
  label,
  name,
  value,
  register
}: {
  label: string
  name: 'status'
  value: string
  register: UseFormRegister<SessionType>
}) => (
  <FormStyle.RadioItem>
    <input type="radio" {...register(name)} name={name} value={value} />
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
