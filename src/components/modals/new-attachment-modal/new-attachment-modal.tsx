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
import { request } from '@/services/request'
import { TIMELINE_ID } from '@/utils/constants'

const NewAttachmentModal = ({ handleClose, method, prevData }: ModalType) => {
  const defaultValues: DefaultValues<AttachmentType> = {
    title: method ? prevData.title : '',
    content: method ? prevData.content : '',
    files: method ? prevData.files : []
  }

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

    const body = {
      type: 'attachment',
      timelineId: TIMELINE_ID,
      title: data.title,
      content: data.content,
      files: formatedFiles,
      createdOn: new Date().toString()
    }

    !method
      ? await request('post', 'occurrence', body)
      : await request('put', `occurrence/${prevData.occurrenceId}`, body)

    location.reload()
  }

  return (
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeader title="Novo Anexo" handleClose={handleClose} />{' '}
            <FormStyle.Flex>
              <DateInput label={'Data*'} />{' '}
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
