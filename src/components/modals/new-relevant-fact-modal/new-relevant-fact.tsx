import * as FormStyle from '../form-components/styled-form-components'
import { useForm, DefaultValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { DateInput, DescriptionTextarea, FormFooter, FormHeader, TitleInput } from '../form-components/form-components'
import { Modal, Card } from '@/assets/styles'
import { request } from '@/services/request'
import { TIMELINE_ID } from '@/utils/constants'

const NewRelevantFactModal = ({ handleClose, method, prevData }: ModalType) => {
  const defaultValues: DefaultValues<RelevantFactType> = {
    content: method ? prevData.content : '',
    title: method ? prevData.title : ''
  }

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
    const body = {
      type: 'relevant_fact',
      title: data.title as string,
      content: data.content as string,
      timelineId: TIMELINE_ID
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
            <FormHeader title="Novo Fato Relevante" handleClose={handleClose} />
            <FormStyle.Flex>
              <DateInput label={'Data*'} />
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
