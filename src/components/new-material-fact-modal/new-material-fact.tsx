import * as PublicStyle from '../../assets/styles'
import * as FormStyle from '../form-components/styled-form-components'
import FormFooter from '../modal-footer/form-footer'
import { useForm, DefaultValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../form-components/schema'
import { DateInput, DescriptionTextarea, FormHeader, TitleInput } from '../form-components/form-components'

const defaultValues: DefaultValues<FormType> = {
  date: '',
  title: '',
  description: ''
}

const NewMaterialFactModal = ({ handleClose }: ModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating }
  } = useForm<FormType>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormType) => {
    console.log(data)
  }
  return (
    <PublicStyle.Modal>
      <section>
        <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <PublicStyle.Card>
            <FormHeader title="Novo Fato Relevante" handleClose={handleClose} />
            <FormStyle.Flex>
              <DateInput register={register} errorMessage={errors.date?.message} />{' '}
              <TitleInput register={register} errorMessage={errors.title?.message} />
            </FormStyle.Flex>
            <DescriptionTextarea register={register} errorMessage={errors.description?.message} />
            <FormFooter buttonText="Criar" handleCancel={handleClose} />
          </PublicStyle.Card>
        </FormStyle.Form>
      </section>
    </PublicStyle.Modal>
  )
}
export default NewMaterialFactModal
