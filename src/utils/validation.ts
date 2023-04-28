import * as yup from 'yup'

const REQUIRED_MESSAGE = 'Por favor preencha este campo.'
const DEFAULT_MESSAGE = 'Campo inválido'

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
  files: yup.mixed()
}

export default YUP_VALIDATION
