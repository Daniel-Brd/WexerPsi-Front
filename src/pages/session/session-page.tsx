import { useParams } from 'react-router-dom'
import * as S from './styled-session-page'
import * as I from '@/assets/icons/db-icons'
import { request } from '@/services/occurrences'
import { useEffect } from 'react'

const SessionPage = () => {
  const id = useParams()
  console.log(id.session)

  useEffect(() => {
    const getOccurrenceData = async () => {
      const result = await request('get', `occurrence/${id.session}`, {})
      console.log(result?.data)
    }
    getOccurrenceData()
  }, [])

  return (
    <>
      <S.NavHeader>
        <button>
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
        </p>
      </S.NavHeader>

      <h1>SESSÃO</h1>
      <h1>HELLO WORLD</h1>
    </>
  )
}

export default SessionPage
