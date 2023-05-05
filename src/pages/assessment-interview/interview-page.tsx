import { Card, AssessmentForm, Hr } from '@/assets/styles'
import * as S from './styled-interview-page'
import AssessmentHeader from '@/components/assessment-header/assessment-header'
import { useEffect, useState } from 'react'
import { Question } from '@/components/interview-form/interview-form'
import { request } from '@/services/request'
import { useParams } from 'react-router-dom'
import AssessmentFooter from '@/components/assessment-footer/assessment-footer'

const InterviewPage = ({ handleNext }: { handleNext: () => void }) => {
  const { occurrenceId } = useParams()

  const [abstract, setAbstract] = useState<QuestionType>({
    type: 'textarea',
    abstract: null,
    question: '',
    options: [],
    secondaryQuestion: '',
    textAnswer: '',
    optionAnswer: ''
  })
  const [conditionsQuestions, setConditionsQuestions] = useState<QuestionType[]>([
    {
      type: 'radioAndText',
      abstract: null,
      question: '01 - Está descansado hoje? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '02 - Dormiu bem esta noite? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantas horas?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: '03 - Está alimentado?',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: '04 - Fez uso de bebida alcoólica nas últimas horas?',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '05 - Fez uso de alguma medicação ontem/hoje?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual (is)?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: '06 - Faz uso de lentes corretivas/óculos? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '07 - Considera-se em boas condições para realização da avaliação psicológica? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    }
  ])
  const [familyQuestions, setFamilyQuestions] = useState<QuestionType[]>([
    {
      type: 'radio',
      abstract: null,
      question: '08 - Estado civil:',
      options: ['Divorciado', 'Viúvo', 'Solteiro', 'Casado', 'União estável'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: '09 - Possui filhos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: '10 - Com quem você mora?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '11 - Está enfrentando problemas familiares? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quais?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '12 - Possui irmãos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantos?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: '13 - Como é seu relacionamento com sua família?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '14 - Na família existe alguém que necessite de cuidados médicos ou psicológicos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    }
  ])
  const [professionalQuestions, setProfessionalQuestions] = useState<QuestionType[]>([
    {
      type: 'radio',
      abstract: null,
      question: '15 - Atualmente:',
      options: ['Aposentado', 'Desempregado', 'Nunca trabalhou', 'Está trabalhando'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: '16 - Função desempenhada? Há quanto tempo? ',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '17 - Está satisfeito com o que faz?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '18 - Trabalha em que turno? ',
      options: ['Diurno', 'Noturno', 'Rodízio de turnos Horário:'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '19 - Está afastado pelo INSS?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por qual motivo?',
      textAnswer: '',
      optionAnswer: ''
    }
  ])
  const [educationQuestions, setEducationQuestions] = useState<QuestionType[]>([
    {
      type: 'radio',
      abstract: null,
      question: '20 - Escolaridade:',
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
      question: '21 - Está estudando? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Parou há quanto tempo?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '22 - Ensino:',
      options: ['Regular', 'Supletivo', 'A distância'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    }
  ])
  const [healthQuestions, setHealthQuestions] = useState<QuestionType[]>([
    {
      type: 'radioAndText',
      abstract: null,
      question: '23 - Tem ou já teve problema de saúde com necessidade de acompanhamento médico/psicológico?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '24 - Faz uso de medicamentos?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual (is)?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '25 - Possui deficiência?',
      options: ['Visual', 'Fala', 'Auditiva', 'Física', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: '26 - Sente desmaios, tontura, mal estar, dores de cabeça constantes, crises convulsivas? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: '27 - Já sofreu algum acidente, tombo, fratura, pancada na cabeça? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    }
  ])
  const [socialQuestions, setSocialQuestions] = useState<QuestionType[]>([
    {
      type: 'radioAndText',
      abstract: null,
      question: '28 - Pratica alguma atividade física?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quais?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '29 - Faz uso de cigarros?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantos por dia?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '30 - É ex-fumante?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Há quanto tempo',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '31 - Faz ingestão de café? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Frequência',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '32 - Faz uso de bebida alcoólica?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Quantidade/frequência:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '33 - Já usou ou usa algum tipo de droga? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual/frequência:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '34 - Faz/fez tratamento para deixar de usar?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: '35 - Quais são suas atividades de lazer, hobbies?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '36 - Pratica alguma religião? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual/frequência:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '37 - Houve alguma mudança na sua rotina nas últimas semanas?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radio',
      abstract: null,
      question: '38 - Possui antecedente penal/criminal? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '39 - Já teve passagem pela delegacia? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Nota',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: '40 - Qual a sua meta de vida?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: '41 - Fale sobre você: 1 ponto positivo e 1 ponto negativo:',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    }
  ])
  const [additionalQuestions, setAdditionalQuestions] = useState<QuestionType[]>([
    {
      type: 'text',
      abstract: null,
      question: '42 - Sugestão para redução de acidentes no trânsito:',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '43 - Já possui experiência como motorista profissional?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Tempo/Carga:',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '44 - Já passou por alguma situação de perigo no trânsito?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question: '45 - Fale sobre uma situação que te deixou mais irritado no trânsito:',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '46 - Já sofreu acidente de trânsito?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '47 - Teve multas, ponto na CNH? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Por quê?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '48 - CNH já foi apreendida ou cassada?',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Porque/quando?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'radioAndText',
      abstract: null,
      question: '49 - Usa algum estimulante para dirigir? ',
      options: ['Sim', 'Não'],
      secondaryQuestion: 'Qual?',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question:
        '50 - Quando está dirigindo e recebe uma ligação ou percebe que chegou uma mensagem no celular, como reage?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    },
    {
      type: 'text',
      abstract: null,
      question:
        '51 - Quando você é convidado para um evento em que você fará uso de bebida alcoólica, como se organiza, com relação à condução do veículo?',
      options: [],
      secondaryQuestion: '',
      textAnswer: '',
      optionAnswer: ''
    }
  ])
  const [interview, setInterview] = useState<QuestionType[]>([
    { type: '', abstract: null, question: '', options: [], secondaryQuestion: '', textAnswer: '', optionAnswer: '' }
  ])

  useEffect(() => {
    setInterview([
      abstract,
      ...conditionsQuestions,
      ...familyQuestions,
      ...professionalQuestions,
      ...educationQuestions,
      ...healthQuestions,
      ...socialQuestions,
      ...additionalQuestions
    ])
  }, [
    abstract,
    conditionsQuestions,
    familyQuestions,
    professionalQuestions,
    educationQuestions,
    healthQuestions,
    socialQuestions,
    additionalQuestions
  ])

  const renderQuestions = (
    questions: QuestionType[],
    setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>,
    column: number
  ) => {
    if (column === 1) {
      return questions.map((question, index) => {
        return index % 2 === 0 ? (
          <Question key={index} index={index} question={question} setQuestions={setQuestions} />
        ) : null
      })
    } else {
      return questions.map((question, index) => {
        return index % 2 !== 0 ? (
          <Question key={index} index={index} question={question} setQuestions={setQuestions} />
        ) : null
      })
    }
  }

  const onSubmit = async (data: QuestionType[]) => {
    const body = data.map(question => {
      return {
        ...(question.abstract && { abstract: question.abstract }),
        ...(question.question && { question: question.question }),
        ...(question.textAnswer && { textAnswer: question.textAnswer }),
        ...(question.optionAnswer && { optionAnswer: question.optionAnswer })
      }
    })

    try {
      const response = await request('put', `assessment/${occurrenceId}`, { interview: body })
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
          <S.Section>
            <h2>Condições para realização da avaliação</h2>
            <Hr />
            <S.Questionary>
              <S.Column>{renderQuestions(conditionsQuestions, setConditionsQuestions, 1)} </S.Column>
              <S.Column>{renderQuestions(conditionsQuestions, setConditionsQuestions, 2)}</S.Column>
            </S.Questionary>
          </S.Section>
          <S.Section>
            <h2>Histórico familiar</h2>
            <Hr />
            <S.Questionary>
              <S.Column>{renderQuestions(familyQuestions, setFamilyQuestions, 1)} </S.Column>
              <S.Column>{renderQuestions(familyQuestions, setFamilyQuestions, 2)}</S.Column>
            </S.Questionary>
          </S.Section>
          <S.Section>
            <h2>Vida profissional</h2>
            <Hr />
            <S.Questionary>
              <S.Column>{renderQuestions(professionalQuestions, setProfessionalQuestions, 1)} </S.Column>
              <S.Column>{renderQuestions(professionalQuestions, setProfessionalQuestions, 2)}</S.Column>
            </S.Questionary>
          </S.Section>
          <S.Section>
            <h2>Vida escolar</h2>
            <Hr />
            <S.Questionary>
              <S.Column>{renderQuestions(educationQuestions, setEducationQuestions, 1)} </S.Column>
              <S.Column>{renderQuestions(educationQuestions, setEducationQuestions, 2)}</S.Column>
            </S.Questionary>
          </S.Section>
          <S.Section>
            <h2>Saúde</h2>
            <Hr />
            <S.Questionary>
              <S.Column>{renderQuestions(healthQuestions, setHealthQuestions, 1)} </S.Column>
              <S.Column>{renderQuestions(healthQuestions, setHealthQuestions, 2)}</S.Column>
            </S.Questionary>
          </S.Section>
          <S.Section>
            <h2>Hábitos e conduta social</h2>
            <Hr />
            <S.Questionary>
              <S.Column>{renderQuestions(socialQuestions, setSocialQuestions, 1)} </S.Column>
              <S.Column>{renderQuestions(socialQuestions, setSocialQuestions, 2)}</S.Column>
            </S.Questionary>
          </S.Section>
          <S.Section>
            <h2>Complementos para atividade remunerada como condutor</h2>
            <Hr />
            <S.Questionary>
              <S.Column>{renderQuestions(additionalQuestions, setAdditionalQuestions, 1)} </S.Column>
              <S.Column>{renderQuestions(additionalQuestions, setAdditionalQuestions, 2)}</S.Column>
            </S.Questionary>
          </S.Section>
          <AssessmentFooter handleNext={handleNext} />
        </Card>
      </AssessmentForm>
    </>
  )
}

export default InterviewPage
