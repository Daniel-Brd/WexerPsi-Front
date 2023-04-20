import * as yup from 'yup'

const REQUIRED_MESSAGE = 'Por favor preencha este campo.'
const DEFAULT_MESSAGE = 'Campo inválido'
const INVALID_DATE = 'data invalida'
const MAX_DATE = 'a data não pode ser maior que o dia de hoje'

yup.setLocale({
  mixed: {
    default: DEFAULT_MESSAGE,
    required: REQUIRED_MESSAGE
  }
})

const YUP_VALIDATION = {
  date: yup.date().required().typeError(INVALID_DATE).max(new Date(), MAX_DATE),
  time: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  value: yup.string().matches(/^\d+(\.\d{1,2})?$/, 'Formato de preço inválido')
}

export default YUP_VALIDATION
