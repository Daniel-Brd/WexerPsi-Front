import YUP_VALIDATION from '@/utils/validation'
import * as yup from 'yup'

export const schema = yup.object().shape({
  date: YUP_VALIDATION.date,
  title: YUP_VALIDATION.title,
  description: YUP_VALIDATION.description
})
