import * as PublicStyle from '../../assets/styles'
import * as FormStyle from '../form-components/styled-form-components'
import FormFooter from '../modal-footer/form-footer'
import { DateInput, FormHeader } from '../form-components/form-components'
import { yupResolver } from '@hookform/resolvers/yup'
import { DefaultValues, useForm } from 'react-hook-form'
import { schema } from '../form-components/schema'

const NewAssessmentModal = ({ handleClose }: ModalType) => {
  const defaultValues: DefaultValues<FormType> = {
    date: '',
    title: '',
    description: ''
  }

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
    <PublicStyle.Modal>
      <section>
        <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <PublicStyle.Card>
            <FormHeader title="Nova Avaliação Psicológica" handleClose={handleClose} />
            <DateInput register={register} errorMessage={errors.date?.message} />
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
          </PublicStyle.Card>
        </FormStyle.Form>
      </section>
    </PublicStyle.Modal>
  )
}

export default NewAssessmentModal
