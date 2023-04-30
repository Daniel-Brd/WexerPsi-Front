import { useNavigate, useParams } from 'react-router-dom'
import * as S from './styled-session-page'
import * as I from '@/assets/icons/db-icons'
import { useEffect, useState } from 'react'
import { getTimelineData } from '@/services/timeline'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Card } from '@/assets/styles'
import { HomeCard } from '@/assets/styles'

const SessionPage = () => {
  const [session, setSession] = useState<SessionType>()

  const id = useParams()

  useEffect(() => {
    const getSessionData = async () => {
      const timeline = await getTimelineData()
      const session = timeline.occurrences.find(occurrence => occurrence._id === id.session) as unknown as SessionType
      setSession(session)
    }
    getSessionData()
  }, [])
  const navigate = useNavigate()

  return (
    <>
      <S.NavHeader>
        <button onClick={() => navigate('/')}>
          <I.ArrowIosLeft />
          Voltar
        </button>
      </S.NavHeader>

      <h1>SESSÃO</h1>
      <Card>
        <HomeCard>
          <h2>{session?.title}</h2>
          <small>
            {session ? format(new Date(session.createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ''}
          </small>
          <p>{session?.content}</p>
          <br />
          <h2>Pagamento</h2>
          <S.PaymentSection>
            <div>
              <h3>Valor:</h3>
              <small>R$ {`${session?.payment?.value?.toString()}`}</small>
            </div>
            <div>
              <h3>Forma de pagamento:</h3>
              <small>{`${session?.payment?.method}`}</small>
            </div>
            <div>
              <h3>Status:</h3>
              <small>{`${session?.payment?.status === 'payed' ? 'Pago' : 'Em aberto '}`}</small>
            </div>
          </S.PaymentSection>
        </HomeCard>
      </Card>
    </>
  )
}

export default SessionPage
