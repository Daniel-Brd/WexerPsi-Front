import { Card } from '@/assets/styles'
import * as S from './styled-filters'
import * as I from '@/assets/icons/db-icons'
import { useState } from 'react'

const Filters = ({
  filterType,
  setFilterType
}: {
  filterType: string
  setFilterType: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false)

  const toggleOptions = () => {
    !isOptionOpen ? setIsOptionOpen(true) : setIsOptionOpen(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <S.container>
        <S.Hr />
        <label>
          <p>Filtrar por: </p>
          <button onClick={() => toggleOptions()}>
            {!filterType
              ? 'Todos'
              : filterType === 'session'
              ? 'sessão'
              : filterType === 'relevant_fact'
              ? 'fato relevante'
              : filterType === 'attachment'
              ? 'anexo'
              : filterType === 'assessment'
              ? 'avaliação'
              : ''}
            <I.ArrowDown />
          </button>
        </label>
        {isOptionOpen && (
          <S.OptionsContainer onMouseLeave={() => setIsOptionOpen(false)}>
            <Card>
              <S.OptionItem
                className="first-item"
                onClick={() => {
                  setFilterType('')
                  toggleOptions()
                }}
              >
                Todos
              </S.OptionItem>
              <S.OptionItem
                onClick={() => {
                  setFilterType('session')
                  toggleOptions()
                }}
              >
                Sessão
              </S.OptionItem>
              <S.OptionItem
                onClick={() => {
                  setFilterType('relevant_fact')
                  toggleOptions()
                }}
              >
                Fato Relevante
              </S.OptionItem>
              <S.OptionItem
                onClick={() => {
                  setFilterType('attachment')
                  toggleOptions()
                }}
              >
                Anexo
              </S.OptionItem>
              <S.OptionItem
                className="last-item"
                onClick={() => {
                  setFilterType('assessment')
                  toggleOptions()
                }}
              >
                Avaliação Psicológica
              </S.OptionItem>
            </Card>
          </S.OptionsContainer>
        )}
      </S.container>
    </div>
  )
}
export default Filters
