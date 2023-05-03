import * as I from '@/assets/icons/db-icons'
import { FirstStep, SecondStep, ThirdStep } from '../../components/assessment-steps/assessment-steps'
import * as S from './styled-assessment-page'
import { useNavigate, useParams } from 'react-router-dom'
import { NavHeader } from '@/assets/styles'

const AssessmentPage = ({ date }: { date: string }) => {
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
    <S.Main>
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
          {date}
        </p>
        <div> | </div>
        <button onClick={() => handleNext()}>
          Avançar
          <I.ArrowIosRight />
        </button>
      </NavHeader>
      <S.Steps>
        {currentStep === 'interview' ? (
          <>
            <S.Step className="active">
              <FirstStep />
              <p>
                <I.CheckmarkCircle />
                Entrevista Psicológica
              </p>
            </S.Step>
            <S.Step className="">
              <SecondStep />
              <I.CheckmarkCircle />
              <p>
                <I.CheckmarkCircle />
                Aplicação de teste
              </p>
            </S.Step>
            <S.Step className="">
              <ThirdStep />
              <I.CheckmarkCircle />
              <p>
                <I.CheckmarkCircle />
                Observação Comportamental
              </p>
            </S.Step>
          </>
        ) : currentStep === 'test' ? (
          <>
            <S.Step className="completed">
              <FirstStep />
              <p>
                <I.CheckmarkCircle />
                Entrevista Psicológica
              </p>
            </S.Step>
            <S.Step className="active">
              <SecondStep />
              <I.CheckmarkCircle />
              <p>
                <I.CheckmarkCircle />
                Aplicação de teste
              </p>
            </S.Step>
            <S.Step className="">
              <ThirdStep />
              <I.CheckmarkCircle />
              <p>
                <I.CheckmarkCircle />
                Observação Comportamental
              </p>
            </S.Step>
          </>
        ) : currentStep === 'observation' ? (
          <>
            <S.Step className="completed">
              <FirstStep />
              <p>
                <I.CheckmarkCircle />
                Entrevista Psicológica
              </p>
            </S.Step>
            <S.Step className="completed">
              <SecondStep />
              <I.CheckmarkCircle />
              <p>
                <I.CheckmarkCircle />
                Aplicação de teste
              </p>
            </S.Step>
            <S.Step className="active">
              <ThirdStep />
              <I.CheckmarkCircle />
              <p>
                <I.CheckmarkCircle />
                Observação Comportamental
              </p>
            </S.Step>
          </>
        ) : (
          ''
        )}
      </S.Steps>
    </S.Main>
  )
}

export default AssessmentPage
