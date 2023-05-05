import YUP_VALIDATION from '@/utils/validation'
import * as yup from 'yup'

export const schema = yup.object().shape({
  title: YUP_VALIDATION.title,
  content: YUP_VALIDATION.content
})
