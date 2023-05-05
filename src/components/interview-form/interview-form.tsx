import { useState } from 'react'

export const Question = ({ index, question, setQuestions }: QuestionComponentType) => {
  const [textValue, setTextValue] = useState<string>('')
  const [optionValue, setOptionValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.type === 'text' ? setTextValue(event.target.value) : setOptionValue(event.target.value)

    setQuestions((prevQuestions: QuestionType[]) =>
      prevQuestions.map((prevQuestion: QuestionType, prevIndex: number) => {
        return prevIndex === index
          ? { ...prevQuestion, textAnswer: textValue, optionAnswer: optionValue }
          : prevQuestion
      })
    )
  }
  return (
    <section>
      <label htmlFor={`question${index}`}> {`${question.question}`}</label>
      {question.type === 'text' ? (
        <input
          type="text"
          name={`question${index}`}
          id={`question${index}`}
          placeholder="Resposta"
          onChange={handleChange}
          onBlur={handleChange}
        />
      ) : question.type === 'radio' ? (
        <div className="radio-container">
          {question.options.map((option: string, optionIndex: number) => (
            <div key={optionIndex}>
              <input
                type="radio"
                name={`question${index}`}
                id={`question${index}${optionIndex}`}
                value={option}
                onChange={handleChange}
                onBlur={handleChange}
              />
              <label htmlFor={`question${index}${optionIndex}`}>{option}</label>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="radio-container">
            {question.options.map((option: string, optionIndex: number) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={`question${index}`}
                  id={`question${index}${optionIndex}`}
                  value={option}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                <label htmlFor={`question${index}${optionIndex}`}>{option}</label>
              </div>
            ))}
          </div>
          <label htmlFor={`question${index}`}>{question.secondaryQuestion}</label>
          <input
            type="text"
            name={`question${index}`}
            id={`question${index}`}
            placeholder="Resposta"
            onChange={handleChange}
            onBlur={handleChange}
          />
        </div>
      )}
    </section>
  )
}
