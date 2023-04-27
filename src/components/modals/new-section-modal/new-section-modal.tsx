import { yupResolver } from '@hookform/resolvers/yup'
import { DefaultValues, useForm } from 'react-hook-form'
import {
  DateInput,
  DescriptionTextarea,
  FormFooter,
  FormHeader,
  RadioItem,
  RadioSection,
  Select,
  TimeInput,
  TitleInput,
  ValueInput
} from '../form-components/form-components'
import { schema } from './schema'
import * as FormStyle from '../form-components/styled-form-components'
import { Modal, Card, Hr } from '@/assets/styles'
import { postSession } from '@/services/occurrences'
import { TIMELINE_ID } from '@/utils/constants'

type SectionType = {
  number: number
  title: string
}

const defaultValues: DefaultValues<SessionType> = {
  date: '',
  title: '',
  content: ''
}

const SectionTitle = ({ number, title }: SectionType) => (
  <FormStyle.SectionTitle>
    <FormStyle.Circle>{number}</FormStyle.Circle>
    <h2>{title}</h2>
  </FormStyle.SectionTitle>
)

const NewSectionModal = ({ handleClose }: ModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating }
  } = useForm<SessionType>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: SessionType) => {
    await postSession({
      date: data.date,
      time: data.time,
      title: data.title,
      content: data.content,
      timelineId: TIMELINE_ID,
      createdOn: new Date().toString()
    })

    location.reload()
  }
  return (
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} style={{ paddingRight: '24px' }}>
            <FormHeader title="Nova Sessão" handleClose={handleClose} />
            <SectionTitle number={1} title="Dados Gerais" />
            <FormStyle.Flex>
              <DateInput label={'data*'} errorMessage={errors.date?.message} register={register} />
              <TimeInput label={'Hora de inicio*'} errorMessage={errors.time?.message} register={register} />
              <TimeInput label={'Hora fim*'} errorMessage={errors.time?.message} register={register} />
            </FormStyle.Flex>
            <Hr />
            <SectionTitle number={2} title="Sessão" />
            <TitleInput sise={'big'} errorMessage={errors.title?.message} register={register} />
            <DescriptionTextarea
              label={'Resumo da sessão*'}
              errorMessage={errors.content?.message}
              register={register}
            />
            <Hr />
            <SectionTitle number={3} title="Pagamento" />
            <FormStyle.Flex>
              <ValueInput errorMessage={errors.payment?.value?.message} register={register} />
              <Select label={'Forma de pagamento'}>
                <option>PIX</option>
              </Select>
              <RadioSection label={'Status'}>
                <FormStyle.Flex>
                  <RadioItem label={'Pago'} name={'Status'} value={'payed'} />
                  <RadioItem label={'Não pago'} name={'Status'} value={'not-payed'} />
                </FormStyle.Flex>
              </RadioSection>
            </FormStyle.Flex>
            <FormFooter buttonText="Criar" handleCancel={handleClose} isValid={isValid} isValidating={isValidating} />
          </FormStyle.Form>
        </Card>
      </section>
    </Modal>
  )
}

export default NewSectionModal
