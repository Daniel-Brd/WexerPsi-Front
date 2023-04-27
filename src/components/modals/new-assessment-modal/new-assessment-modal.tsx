import * as FormStyle from '../form-components/styled-form-components'
import { DateInput, FormFooter, FormHeader } from '../form-components/form-components'
import { yupResolver } from '@hookform/resolvers/yup'
import { DefaultValues, useForm } from 'react-hook-form'
import { schema } from './schema'
import { useNavigate } from 'react-router-dom'
import { Modal, Card } from '@/assets/styles'

const defaultValues: DefaultValues<FormType> = {
  date: '',
  title: '',
  description: ''
}

const NewAssessmentModal = ({ handleClose }: ModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating }
  } = useForm<FormType>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()

  const onSubmit = () => {
    navigate('/assessment/interview')
  }

  return (
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeader title="Nova Avaliação Psicológica" handleClose={handleClose} />
            <DateInput label={'Data*'} register={register} errorMessage={errors.date?.message} />
            <FormStyle.Notice>
              <h2>Atenção!</h2>
              <p>
                Você será{' '}
                <b>
                  <em>redirecionado para uma nova página</em>
                </b>{' '}
                onde irá preencher os dados da avaliação psicológica.
              </p>
            </FormStyle.Notice>
            <FormFooter
              buttonText="Prosseguir"
              handleCancel={handleClose}
              isValid={isValid}
              isValidating={isValidating}
            />
          </FormStyle.Form>
        </Card>
      </section>
    </Modal>
  )
}

export default NewAssessmentModal
