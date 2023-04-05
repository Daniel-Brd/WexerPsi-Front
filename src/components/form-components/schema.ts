import * as yup from 'yup'

const REQUIRED_MESSAGE = 'Por favor preencha este campo.'
const DEFAULT_MESSAGE = 'Campo inválido'

yup.setLocale({
  mixed: {
    default: DEFAULT_MESSAGE,
    required: REQUIRED_MESSAGE
  }
})

export const schema = yup.object().shape({
  date: yup.date().required(),
  title: yup.string().required(),
  description: yup.string().required()
})
