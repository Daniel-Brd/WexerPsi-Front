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
import { request } from '@/services/occurrences'
import { TIMELINE_ID } from '@/utils/constants'

const SessionTitle = ({ number, title }: { number: number; title: string }) => (
  <FormStyle.SessionTitle>
    <FormStyle.Circle>{number}</FormStyle.Circle>
    <h2>{title}</h2>
  </FormStyle.SessionTitle>
)

const addLeadingZero = (number: number) => {
  if (number < 10) {
    return `0${number}`
  }
  return number
}

const defaultValues: DefaultValues<SessionType> = {
  title: '',
  content: '',
  value: null,
  method: ''
}

const NewSessionModal = ({ handleClose }: ModalType) => {
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
    await request('post', '/occurrence', {
      type: 'session',
      title: data.title,
      content: data.content,
      payment: {
        value: Number(data.value),
        method: data.method,
        status: data.status
      },
      timelineId: TIMELINE_ID
    })

    // location.reload()
  }
  return (
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} style={{ paddingRight: '24px' }}>
            <FormHeader title="Nova Sessão" handleClose={handleClose} />
            <SessionTitle number={1} title="Dados Gerais" />
            <FormStyle.Flex>
              <DateInput label={'data*'} />
              <TimeInput
                id={'start-time'}
                value={`${addLeadingZero(new Date().getHours())}:${addLeadingZero(new Date().getMinutes())}`}
                label={'Hora de inicio*'}
              />
              <TimeInput
                id={'finish-time'}
                value={`${Number(addLeadingZero(new Date().getHours())) + 1}:${addLeadingZero(
                  new Date().getMinutes()
                )}`}
                label={'Hora fim*'}
              />
            </FormStyle.Flex>
            <Hr />
            <SessionTitle number={2} title="Sessão" />
            <TitleInput sise={'big'} errorMessage={errors.title?.message} register={register} />
            <DescriptionTextarea
              label={'Resumo da sessão*'}
              errorMessage={errors.content?.message}
              register={register}
            />
            <Hr />
            <SessionTitle number={3} title="Pagamento" />
            <FormStyle.Flex>
              <ValueInput errorMessage={errors.value?.message} register={register} />
              <Select register={register} label={'Forma de pagamento'}>
                <option value={'pix'}>PIX</option>
                <option value={'Débito'}>Dédito</option>
                <option value={'Crédito'}>Crédito</option>
                <option value={'Dinheiro'}>Dinheiro</option>
              </Select>
              <RadioSection label={'Status'}>
                <FormStyle.Flex>
                  <RadioItem label={'Pago'} name={'status'} value={'payed'} register={register} />
                  <RadioItem label={'Não pago'} name={'status'} value={'not_payed'} register={register} />
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

export default NewSessionModal
