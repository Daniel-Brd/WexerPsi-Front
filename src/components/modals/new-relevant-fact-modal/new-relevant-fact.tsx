import * as FormStyle from '../form-components/styled-form-components'
import { useForm, DefaultValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { DateInput, DescriptionTextarea, FormFooter, FormHeader, TitleInput } from '../form-components/form-components'
import { Modal, Card } from '@/assets/styles'
import { request } from '@/services/occurrences'
import { TIMELINE_ID } from '@/utils/constants'

const defaultValues: DefaultValues<RelevantFactType> = {
  timelineId: '',
  createdOn: '',
  date: '',
  content: '',
  title: ''
}

const NewRelevantFactModal = ({ handleClose }: ModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating }
  } = useForm<RelevantFactType>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: Partial<RelevantFactType>) => {
    await request('post', 'occurrence', {
      type: 'relevant_fact',
      title: data.title as string,
      content: data.content as string,
      timelineId: TIMELINE_ID
    })
    location.reload()
  }
  return (
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeader title="Novo Fato Relevante" handleClose={handleClose} />
            <FormStyle.Flex>
              <DateInput label={'Data*'} register={register} errorMessage={errors.date?.message} />
              <TitleInput sise={'medium'} register={register} errorMessage={errors.title?.message} />
            </FormStyle.Flex>
            <DescriptionTextarea label={'Descrição*'} register={register} errorMessage={errors.content?.message} />
            <FormFooter buttonText="Criar" handleCancel={handleClose} isValid={isValid} isValidating={isValidating} />
          </FormStyle.Form>
        </Card>
      </section>
    </Modal>
  )
}
export default NewRelevantFactModal
