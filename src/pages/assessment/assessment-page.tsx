import * as I from '@/assets/icons/db-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { NavHeader } from '@/assets/styles'
import InterviewPage from '../assessment-interview/interview-page'
import { AssessmentSteps } from '@/components/assessment-steps/assessment-steps'
import ObservationPage from '../assessment-observation/assessment-observation-page'
import TestPage from '../assessment-test/assessment-test-page'

const AssessmentPage = () => {
  const { currentStep } = useParams()

  const navigate = useNavigate()
  const handlePrev = () => {
    if (currentStep === 'interview') {
      navigate('/')
    } else if (currentStep === 'test') {
      navigate('/assessment/interview')
    } else if (currentStep === 'observation') {
      navigate('/assessment/test')
    }
  }

  const handleNext = () => {
    if (currentStep === 'interview') {
      navigate('/assessment/test')
    } else if (currentStep === 'test') {
      navigate('/assessment/observation')
    }
  }

  return (
    <>
      <NavHeader>
        <button onClick={() => handlePrev()}>
          <I.ArrowIosLeft />
          Voltar
        </button>
        <div> | </div>
        <p>
          <b>Avaliação Psicológica</b>{' '}
        </p>
        <div> | </div>
        <p>
          <b>Data:</b>
          {'dd/mm/yyyy'}
        </p>
        <div> | </div>
        <button onClick={() => handleNext()}>
          Avançar
          <I.ArrowIosRight />
        </button>
      </NavHeader>
      {currentStep === 'interview' ? (
        <>
          <AssessmentSteps currentStep={currentStep} />
          <InterviewPage />
        </>
      ) : currentStep === 'test' ? (
        <>
          <AssessmentSteps currentStep={currentStep} />
          <TestPage />
        </>
      ) : currentStep === 'observation' ? (
        <>
          <AssessmentSteps currentStep={currentStep} />
          <ObservationPage />
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default AssessmentPage
