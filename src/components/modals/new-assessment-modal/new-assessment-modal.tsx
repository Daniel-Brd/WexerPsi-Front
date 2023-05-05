import * as FormStyle from '../modal-form/styled-modal-form'
import { DateInput, FormFooter, FormHeader } from '../modal-form/modal-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DefaultValues, useForm } from 'react-hook-form'
import { schema } from './schema'
import { useNavigate } from 'react-router-dom'
import { Modal, Card } from '@/assets/styles'
import { request } from '@/services/request'
import { TIMELINE_ID } from '@/utils/constants'

const NewAssessmentModal = ({ handleClose }: ModalType) => {
  const defaultValues: DefaultValues<FormType> = {
    date: '',
    title: '',
    description: ''
  }

  const {
    handleSubmit,
    formState: { isValid, isValidating }
  } = useForm<FormType>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()

  const onSubmit = async () => {
    try {
      const result = await request('post', 'occurrence', {
        type: 'assessment',
        timelineId: TIMELINE_ID
      })

      navigate(`/assessment/${result.data.occurrences[result.data.occurrences.length - 1]._id}/interview`)
      return result.data
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  return (
    <Modal>
      <section>
        <Card>
          <FormStyle.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormHeader title="Nova Avaliação Psicológica" handleClose={handleClose} />
            <DateInput label={'Data*'} />
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
