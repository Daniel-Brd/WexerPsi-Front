export const Question = ({ index, question, setInterview }: QuestionComponentType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value

    if (question.type === 'radioAndText' && event.target.type === 'radio ') {
      value = event.target.checked
    } else if (typeof value !== 'boolean') {
      value = String(value)
    }

    setInterview(prevInterview =>
      prevInterview.map((prevQuestion, prevIndex) =>
        prevIndex === index ? { ...prevQuestion, textAnswer: value } : prevQuestion
      )
    )
  }

  return (
    <>
      <label htmlFor={`question${index}`}>{question.question}</label>
      {question.type === 'text' ? (
        <input type="text" name={`question${index}`} id={`question${index}`} onChange={handleChange} />
      ) : question.type === 'radio' ? (
        question.options.map((option: string, optionIndex: number) => (
          <div key={optionIndex}>
            <input
              type="radio"
              name={`question${index}`}
              id={`question${index}${optionIndex}`}
              value={option}
              onChange={handleChange}
            />
            <label htmlFor={`question${index}${optionIndex}`}>{option}</label>
          </div>
        ))
      ) : (
        <div>
          {question.options.map((option: string, optionIndex: number) => (
            <div key={optionIndex}>
              <input
                type="radio"
                name={`question${index}`}
                id={`question${index}${optionIndex}`}
                value={option}
                onChange={handleChange}
              />
              <label htmlFor={`question${index}${optionIndex}`}>{option}</label>
            </div>
          ))}
          <input type="text" name={`question${index}`} id={`question${index}`} onChange={handleChange} />
          <label htmlFor={`question${index}`}>{question.secondaryQuestion}</label>
        </div>
      )}
    </>
  )
}
