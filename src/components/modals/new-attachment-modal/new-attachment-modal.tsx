import * as FormStyle from '../form-components/styled-form-components'
import { yupResolver } from '@hookform/resolvers/yup'
import { DefaultValues, useForm } from 'react-hook-form'
import { schema } from './schema'
import {
  AttachmentInput,
  DateInput,
  DescriptionTextarea,
  FormFooter,
  FormHeader,
  TitleInput
} from '../form-components/form-components'
import { Modal, Card } from '@/assets/styles'

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
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeader title="Novo Anexo" handleClose={handleClose} />{' '}
            <FormStyle.Flex>
              <DateInput label={'Data*'} register={register} errorMessage={errors.date?.message} />{' '}
              <TitleInput sise={'medium'} register={register} errorMessage={errors.title?.message} />
            </FormStyle.Flex>
            <DescriptionTextarea label={'Descrição*'} register={register} errorMessage={errors.description?.message} />
            <AttachmentInput label={'Anexar arquivos*'} />
            <FormFooter buttonText="Criar" handleCancel={handleClose} isValid={isValid} isValidating={isValidating} />
          </FormStyle.Form>
        </Card>
      </section>
    </Modal>
  )
}

export default NewAttachmentModal
