type AsessmentType = {
  _id: string
  handleDelete: (timelineId: string, occurrenceId: string) => void
  timelineId: string
  createdOn: string
  modifiedOn: string
}

type QuestionType = {
  type: 'text' | 'radio' | 'radioAndText' | 'textarea' | ''
  abstract: string | null
  question: string
  secondaryQuestion: string
  options: string[]
  textAnswer: string | boolean
  optionAnswer: string
}

type QuestionComponentType = {
  index: number
  question: QuestionType
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>
}
