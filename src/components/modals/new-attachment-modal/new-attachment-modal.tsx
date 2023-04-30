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
import { request } from '@/services/occurrences'
import { TIMELINE_ID } from '@/utils/constants'

const defaultValues: DefaultValues<AttachmentType> = {
  date: '',
  title: '',
  content: '',
  files: []
}

const NewAttachmentModal = ({ handleClose }: ModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating }
  } = useForm<AttachmentType>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: AttachmentType) => {
    const files = Object.values(data.files) as unknown as FileType[]
    const formatedFiles = files.map(file => {
      return { filename: file.name, filesize: file.size }
    })

    await request('post', 'occurrence', {
      type: 'attachment',
      timelineId: TIMELINE_ID,
      title: data.title,
      content: data.content,
      files: formatedFiles,
      createdOn: new Date().toString()
    })

    location.reload()
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
            <DescriptionTextarea label={'Descrição*'} register={register} errorMessage={errors.content?.message} />
            <AttachmentInput label={'Anexar arquivos*'} register={register} errorMessage={errors.files?.message} />
            <FormFooter buttonText="Criar" handleCancel={handleClose} isValid={isValid} isValidating={isValidating} />
          </FormStyle.Form>
        </Card>
      </section>
    </Modal>
  )
}

export default NewAttachmentModal
