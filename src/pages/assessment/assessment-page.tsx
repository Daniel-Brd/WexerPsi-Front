import * as I from '@/assets/icons/db-icons'
import * as S from './styled-assessment-page'
import * as SForm from '@/components/modals/form-components/styled-form-components'
import { FirstStep, SecondStep, ThirdStep } from '@/components/assessment-steps/assessment-steps'
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

  const arrayDeObjetos = [
    {
      nome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque eaque veniam quibusdam, iure et. Molestias quam, tempore perferendis nulla impedit vitae blanditiis laboriosam suscipit! Nulla voluptatem sint harum dolores!',
      peso: 10,
      column: 1
    },
    { nome: 'objeto2', peso: 20, column: null },
    { nome: 'objeto3', peso: 30, column: null },
    {
      nome: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ex illum earum alias facere sapiente corrupti doloremque optio nesciunt explicabo quasi consectetur provident ullam laboriosam, tempore dolorem culpa impedit voluptates excepturi sed sequi quos mollitia veritatis temporibus. Repellat deleniti perferendis quibusdam modi saepe, dicta quae officia aut voluptatum dolorem eos provident amet accusamus, a eaque nihil ex vitae sit placeat aspernatur ratione nostrum! Libero accusantium quidem repellat, voluptas cum qui aperiam nobis quia aliquam mollitia. Fugit maiores eum voluptates est quam maxime. Perspiciatis praesentium error numquam ratione ipsum omnis totam cum magni nostrum beatae aut voluptatem, voluptatibus id officiis fuga?',
      peso: 40,
      column: null
    },
    { nome: 'objeto5', peso: 50, column: null },
    { nome: 'objeto6', peso: 60, column: null },
    { nome: 'objeto7', peso: 70, column: null },
    { nome: 'objeto8', peso: 80, column: null }
  ]

  const novoArray = arrayDeObjetos.map((objeto, index, array) => {
    if (index === 0) {
      objeto.column = 1
    } else {
      const colunaAnterior = array[index - 1].column
      objeto.column = colunaAnterior === 1 ? 2 : 1
    }
    return objeto
  })

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
      <S.Main>
        <S.Column>
          {novoArray
            .filter(objeto => objeto.column === 1)
            .map(objeto => (
              <S.Question key={objeto.peso}>{objeto.nome}</S.Question>
            ))}
        </S.Column>
        <S.Column>
          {novoArray
            .filter(objeto => objeto.column === 2)
            .map(objeto => (
              <S.Question key={objeto.peso}>{objeto.nome}</S.Question>
            ))}
        </S.Column>
        <button>SUBMIT</button>
      </S.Main>
    </>
  )
}

export default AssessmentPage
