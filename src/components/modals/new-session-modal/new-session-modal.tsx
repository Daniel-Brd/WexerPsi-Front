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
} from '../modal-form/modal-form'
import { schema } from './schema'
import * as SForm from '../modal-form/styled-modal-form'
import { Modal, Card, Hr } from '@/assets/styles'
import { request } from '@/services/request'
import { TIMELINE_ID } from '@/utils/constants'

const SessionTitle = ({ number, title }: { number: number; title: string }) => (
  <SForm.SectionTitle>
    <SForm.Circle>{number}</SForm.Circle>
    <h2>{title}</h2>
  </SForm.SectionTitle>
)

const addLeadingZero = (number: number) => {
  if (number < 10) {
    return `0${number}`
  }
  return number
}

const NewSessionModal = ({ handleClose, method, prevData }: ModalType) => {
  const defaultValues: DefaultValues<SessionType> = {
    title: method ? prevData.title : '',
    content: method ? prevData.content : '',
    value: method ? prevData.value : null,
    method: method ? prevData.method : '',
    status: method ? prevData.status : ''
  }

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
    const body = {
      type: 'session',
      title: data.title,
      content: data.content,
      payment: {
        value: Number(data.value),
        method: data.method,
        status: data.status
      },
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
          <SForm.Form onSubmit={handleSubmit(onSubmit)} style={{ paddingRight: '24px' }}>
            <FormHeader title="Nova Sessão" handleClose={handleClose} />
            <SessionTitle number={1} title="Dados Gerais" />
            <SForm.Flex>
              <DateInput label={'data*'} />
              <TimeInput
                value={`${addLeadingZero(new Date().getHours())}:${addLeadingZero(new Date().getMinutes())}`}
                label={'Hora de inicio*'}
              />
              <TimeInput
                value={`${Number(addLeadingZero(new Date().getHours())) + 1}:${addLeadingZero(
                  new Date().getMinutes()
                )}`}
                label={'Hora fim*'}
              />
            </SForm.Flex>
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
            <SForm.Flex>
              <ValueInput errorMessage={errors.value?.message} register={register} />
              <Select register={register} label={'Forma de pagamento'}>
                <option value={'pix'}>PIX</option>
                <option value={'Débito'}>Débito</option>
                <option value={'Crédito'}>Crédito</option>
                <option value={'Dinheiro'}>Dinheiro</option>
              </Select>
              <RadioSection label={'Status'}>
                <SForm.Flex>
                  <RadioItem label={'Pago'} name={'status'} value={'payed'} register={register} />
                  <RadioItem label={'Não pago'} name={'status'} value={'not_payed'} register={register} />
                </SForm.Flex>
              </RadioSection>
            </SForm.Flex>
            <FormFooter buttonText="Criar" handleCancel={handleClose} isValid={isValid} isValidating={isValidating} />
          </SForm.Form>
        </Card>
      </section>
    </Modal>
  )
}

export default NewSessionModal
