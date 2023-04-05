import * as PublicStyle from '../../assets/styles'
import * as FormStyle from '../form-components/styled-form-components'
import FormFooter from '../modal-footer/form-footer'
import { yupResolver } from '@hookform/resolvers/yup'
import { DefaultValues, useForm } from 'react-hook-form'
import { schema } from '../form-components/schema'
import {
  AttachmentInput,
  DateInput,
  DescriptionTextarea,
  FormHeader,
  TitleInput
} from '../form-components/form-components'

const defaultValues: DefaultValues<FormType> = {
  date: '',
  title: '',
  description: ''
}

const NewAttachmentModal = ({ handleClose }: ModalType) => {
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
            <FormHeader title="Novo Anexo" handleClose={handleClose} />{' '}
            <FormStyle.Flex>
              <DateInput register={register} errorMessage={errors.date?.message} />{' '}
              <TitleInput register={register} errorMessage={errors.title?.message} />
            </FormStyle.Flex>
            <DescriptionTextarea register={register} errorMessage={errors.description?.message} />
            <AttachmentInput />
            <FormFooter buttonText="Criar" handleCancel={handleClose} isValid={isValid} isValidating={isValidating} />
          </PublicStyle.Card>
        </FormStyle.Form>
      </section>
    </PublicStyle.Modal>
  )
}

export default NewAttachmentModal
