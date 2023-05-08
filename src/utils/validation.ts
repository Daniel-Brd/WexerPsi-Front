import * as yup from 'yup'

const REQUIRED_MESSAGE = 'Por favor, preencha este campo.'
const DEFAULT_MESSAGE = 'Campo inválido'
const INVALID_EMAIL = 'Por favor, informe um e-mail valido'

yup.setLocale({
  mixed: {
    default: DEFAULT_MESSAGE,
    required: REQUIRED_MESSAGE
  }
})

const YUP_VALIDATION = {
  title: yup.string().required(),
  content: yup.string().required(),
  value: yup.string(),
  files: yup.mixed(),
  email: yup.string().email(INVALID_EMAIL).required(),
  password: yup.string().required()
}

export default YUP_VALIDATION
