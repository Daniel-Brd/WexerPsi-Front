import YUP_VALIDATION from '@/utils/validation'
import * as yup from 'yup'

export const schema = yup.object().shape({
  email: YUP_VALIDATION.email,
  password: YUP_VALIDATION.password
})
