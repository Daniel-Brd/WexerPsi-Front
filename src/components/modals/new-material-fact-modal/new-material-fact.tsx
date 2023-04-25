import * as FormStyle from '../form-components/styled-form-components'
import { useForm, DefaultValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { DateInput, DescriptionTextarea, FormFooter, FormHeader, TitleInput } from '../form-components/form-components'
import { Modal, Card } from '@/assets/styles'
import { postMaterialFact } from '@/services/occurrences'

const defaultValues: DefaultValues<MaterialFactType> = {
  timelineId: '',
  createdOn: '',
  date: '',
  content: '',
  title: ''
}

const NewMaterialFactModal = ({ handleClose }: ModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating }
  } = useForm<MaterialFactType>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: MaterialFactType) => {
    postMaterialFact({
      date: data.date,
      title: data.title,
      content: data.content,
      timelineId: '64407e0bdafc988a50bd2602',
      createdOn: new Date().toString()
    })
  }
  return (
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeader title="Novo Fato Relevante" handleClose={handleClose} />
            <FormStyle.Flex>
              <DateInput label={'Data*'} register={register} errorMessage={errors.date?.message} />{' '}
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
export default NewMaterialFactModal
