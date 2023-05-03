import { FirstStep, SecondStep, ThirdStep } from './db-steps'
import * as S from './styled-assessment-steps'
import * as I from '@/assets/icons/db-icons'

export const AssessmentSteps = ({ currentStep }: { currentStep: string }) => (
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
          <p>
            <I.CheckmarkCircle />
            Aplicação de teste
          </p>
        </S.Step>
        <S.Step className="">
          <ThirdStep />
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
          <p>
            <I.CheckmarkCircle />
            Aplicação de teste
          </p>
        </S.Step>
        <S.Step className="">
          <ThirdStep />
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
          <p>
            <I.CheckmarkCircle />
            Aplicação de teste
          </p>
        </S.Step>
        <S.Step className="active">
          <ThirdStep />
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
)
