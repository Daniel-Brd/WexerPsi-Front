import { CloseCircle } from '@/assets/icons/db-icons'
import * as FormStyle from './styled-form-components'
import * as PublicStyle from '../../assets/styles'

type FormHeaderType = {
  title: string
  handleClose: () => void
}

export const FormHeader = ({ title, handleClose }: FormHeaderType) => (
  <FormStyle.Flex>
    <h1>{title}</h1>
    <button onClick={() => handleClose()}>
      <CloseCircle />
    </button>
  </FormStyle.Flex>
)

export const DateInput = ({ register, errorMessage }) => (
  <label>
    Data*
    <PublicStyle.InputContainer>
      <input className="small" type="date" {...register('date')} placeholder={new Date().toLocaleDateString()} />
    </PublicStyle.InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const TitleInput = ({ register, errorMessage }) => (
  <label>
    Título*
    <PublicStyle.InputContainer>
      <input className="medium" type="text" {...register('title')} />
    </PublicStyle.InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const DescriptionTextarea = ({ register, errorMessage }) => (
  <label>
    Descrição*
    <PublicStyle.InputContainer>
      <textarea {...register('description')}></textarea>
    </PublicStyle.InputContainer>
    <small>{errorMessage}</small>
  </label>
)

export const AttachmentInput = () => (
  <label>
    Anexar arquivos*
    <input type="file" />
  </label>
)
