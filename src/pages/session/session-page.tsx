import { useNavigate, useParams } from 'react-router-dom'
import * as S from './styled-session-page'
import * as I from '@/assets/icons/db-icons'
import { useEffect, useState } from 'react'
import { getTimelineData } from '@/services/timeline'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Card, FlexRow, HomeCard, NavHeader, SmallButtonContainer } from '@/assets/styles'
import SmallGreenButton from '@/components/small-green-button/small-green-button'
import SmallRedButton from '@/components/small-red-button/small-red-button'
import NewSessionModal from '@/components/modals/new-session-modal/new-session-modal'
import { request } from '@/services/request'
import { TIMELINE_ID } from '@/utils/constants'

const SessionPage = () => {
  const [session, setSession] = useState<SessionType>()
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const prevData = {
    type: session?.type,
    title: session?.title,
    createdOn: session?.createdOn,
    content: session?.content,
    timelineId: session?.timelineId,
    occurrenceId: session?._id
  }

  const handleDelete = async () => {
    try {
      const result = await request('delete', `timeline/${TIMELINE_ID}/occurrence/${session?._id}`, {})
      navigate('/medical-record')
      return result
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  return (
    <>
      {isModalOpen && <NewSessionModal handleClose={() => setIsModalOpen(false)} method="put" prevData={prevData} />}
      <S.Main>
        <NavHeader>
          <button onClick={() => navigate('/medical-record')}>
            <I.ArrowIosLeft />
            Voltar
          </button>
        </NavHeader>
        <S.Title>Sessão</S.Title>
        <S.Content>
          <Card>
            <HomeCard>
              <FlexRow>
                <div>
                  <h2>{session?.title}</h2>
                  <small>
                    {session ? format(new Date(session.createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ''}
                  </small>
                </div>
                <SmallButtonContainer>
                  <SmallGreenButton icon={<I.EditTwoLine />} handleClick={() => setIsModalOpen(true)} />
                  <SmallRedButton icon={<I.TrashTwo />} handleClick={() => handleDelete()} />
                </SmallButtonContainer>
              </FlexRow>
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
        </S.Content>
      </S.Main>
    </>
  )
}

export default SessionPage
