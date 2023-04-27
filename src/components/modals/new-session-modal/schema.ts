import YUP_VALIDATION from '@/utils/validation'
import * as yup from 'yup'

export const schema = yup.object().shape({
  date: YUP_VALIDATION.date,
  time: YUP_VALIDATION.time,
  title: YUP_VALIDATION.title,
  content: YUP_VALIDATION.content,
  value: YUP_VALIDATION.value
})
