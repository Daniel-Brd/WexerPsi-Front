import { Card, AssessmentForm } from '@/assets/styles'
import * as S from './styled-interview-page'
import AssessmentHeader from '@/components/assessment-header/assessment-header'
import { useState } from 'react'
import { Question } from '@/components/interview-form/interview-form'
import { request } from '@/services/request'

const InterviewPage = ({ handleNext }: { handleNext: () => void }) => {
  const [abstract, setAbstract] = useState<QuestionType>({
    type: 'textarea',
    abstract: null,
    question: '',
    options: [],
    secondaryQuestion: '',
    textAnswer: '',
    optionAnswer: ''
  })
  const [interview, setInterview] = useState<QuestionType[]>([
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Está descansado hoje? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Dormiu bem esta noite? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantas horas?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Está alimentado?',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Fez uso de bebida alcoólica nas últimas horas?',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Fez uso de alguma medicação ontem/hoje?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual (is)?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Faz uso de lentes corretivas/óculos? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Considera-se em boas condições para realização da avaliação psicológica? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Estado civil:',
      options: ['Divorciado', 'Viúvo', 'Solteiro', 'Casado', 'União estável'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Possui filhos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Com quem você mora?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Está enfrentando problemas familiares? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quais?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Possui irmãos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantos?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Como é seu relacionamento com sua família?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Na família existe alguém que necessite de cuidados médicos ou psicológicos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Atualmente:',
      options: ['Aposentado', 'Desempregado', 'Nunca trabalhou', 'Está trabalhando'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Função desempenhada? Há quanto tempo? ',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Está satisfeito com o que faz?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Trabalha em que turno? ',
      options: ['Diurno', 'Noturno', 'Rodízio de turnos Horário:'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Está afastado pelo INSS?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por qual motivo?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Escolaridade:',
      options: [
        'Superior incompleto',
        'Superior completo',
        'Médio incompleto',
        'Médio completo',
        'Fundamental incompleto',
        'Fundamental completo',
        'Primário',
        'Alfabetizado'
      ],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Está estudando? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Parou há quanto tempo?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Ensino:',
      options: ['Regular', 'Supletivo', 'A distância'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Tem ou já teve problema de saúde com necessidade de acompanhamento médico/psicológico?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Faz uso de medicamentos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual (is)?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Possui deficiência?',
      options: ['Visual', 'Fala', 'Auditiva', 'Física', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Sente desmaios, tontura, mal estar, dores de cabeça constantes, crises convulsivas? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Já sofreu algum acidente, tombo, fratura, pancada na cabeça? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: ' Pratica alguma atividade física?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quais?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Faz uso de cigarros?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantos por dia?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'É ex-fumante?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Há quanto tempo',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Faz ingestão de café? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Frequência',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Faz uso de bebida alcoólica?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantidade/frequência:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Já usou ou usa algum tipo de droga? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual/frequência:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Faz/fez tratamento para deixar de usar?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Quais são suas atividades de lazer, hobbies?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Pratica alguma religião? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual/frequência:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Houve alguma mudança na sua rotina nas últimas semanas?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: 'Possui antecedente penal/criminal? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Já teve passagem pela delegacia? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Qual a sua meta de vida?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Fale sobre você: 1 ponto positivo e 1 ponto negativo:',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Sugestão para redução de acidentes no trânsito:',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Já possui experiência como motorista profissional?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Tempo/Carga:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Já passou por alguma situação de perigo no trânsito?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Fale sobre uma situação que te deixou mais irritado no trânsito:',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Já sofreu acidente de trânsito?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Teve multas, ponto na CNH? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'CNH já foi apreendida ou cassada?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Porque/quando?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: 'Usa algum estimulante para dirigir? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: 'Quando está dirigindo e recebe uma ligação ou percebe que chegou uma mensagem no celular, como reage?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question:
        'Quando você é convidado para um evento em que você fará uso de bebida alcoólica, como se organiza, com relação à condução do veículo?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    }
  ])

  const onSubmit = async (data: QuestionType[]) => {
    data.unshift(abstract)
    const body = data.map(question => {
      return {
        ...(question.abstract && { abstract: question.abstract }),
        ...(question.question && { question: question.question }),
        ...(question.textAnswer && { textAnswer: question.textAnswer }),
        ...(question.optionAnswer && { optionAnswer: question.optionAnswer })
      }
    })

    try {
      const response = await request('put', `assessment/64546407be18c4d66a498884`, { interview: body })
      handleNext()
      return response
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  return (
    <>
      <AssessmentForm
        onSubmit={event => {
          event.preventDefault()
          onSubmit(interview)
        }}
      >
        <Card>
          <AssessmentHeader title="Entrevista psicológica" handleNext={handleNext} />
          <S.AbstractContainer>
            <label htmlFor="abstract">Síntese da entrevista</label>
            <textarea
              name="abstract"
              id="abstract"
              placeholder="Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..."
              onChange={event =>
                setAbstract(prev => {
                  return { ...prev, abstract: event.target.value }
                })
              }
            ></textarea>
          </S.AbstractContainer>
          <S.Questionary>
            <S.Column>
              {interview.map((question, index) => {
                return index % 2 === 0 ? (
                  <Question key={index} index={index} question={question} setInterview={setInterview} />
                ) : null
              })}
            </S.Column>
            <S.Column>
              {interview.map((question, index) => {
                return index % 2 !== 0 ? (
                  <Question key={index} index={index} question={question} setInterview={setInterview} />
                ) : null
              })}
            </S.Column>
          </S.Questionary>
        </Card>
      </AssessmentForm>
    </>
  )
}

export default InterviewPage
