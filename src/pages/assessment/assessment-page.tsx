import * as I from '@/assets/icons/db-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { NavHeader } from '@/assets/styles'
import InterviewPage from '../assessment-interview/interview-page'
import { AssessmentSteps } from '@/components/assessment-steps/assessment-steps'
import ObservationPage from '../assessment-observation/assessment-observation-page'
import TestPage from '../assessment-test/assessment-test-page'

const AssessmentPage = () => {
  const { occurrenceId, currentStep } = useParams()

  const navigate = useNavigate()
  const handlePrev = () => {
    if (currentStep === 'interview') {
      navigate('/')
    } else if (currentStep === 'test') {
      navigate(`/assessment/${occurrenceId}/interview`)
    } else if (currentStep === 'observation') {
      navigate(`/assessment/${occurrenceId}/test`)
    }
  }

  const handleNext = () => {
    if (currentStep === 'interview') {
      navigate(`/assessment/${occurrenceId}/test`)
    } else if (currentStep === 'test') {
      navigate(`/assessment/${occurrenceId}/observation`)
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
      </NavHeader>
      {currentStep === 'interview' ? (
        <>
          <AssessmentSteps currentStep={currentStep} />
          <InterviewPage handleNext={handleNext} />
        </>
      ) : currentStep === 'test' ? (
        <>
          <AssessmentSteps currentStep={currentStep} />
          <TestPage handleNext={handleNext} />
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
