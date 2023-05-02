import * as S from './styled-new-service'
import * as I from '../../assets/icons/db-icons'
import { ReactElement } from 'react'
import NewAssessmentModal from '../modals/new-assessment-modal/new-assessment-modal'
import NewAttachmentModal from '../modals/new-attachment-modal/new-attachment-modal'
import NewMaterialFactModal from '../modals/new-relevant-fact-modal/new-relevant-fact'
import NewSessionModal from '../modals/new-session-modal/new-session-modal'
import SmallGreenButton from '../small-green-button/small-green-button'
import SmallRedButton from '../small-red-button/small-red-button'
import { Card, InputContainer, Hr, SmallButtonContainer } from '@/assets/styles'

const NewService = ({
  openModal,
  closeModal
}: {
  openModal: (selectedModal: ReactElement) => void
  closeModal: () => void
}) => {
  return (
    <>
      <Card>
        <S.Container>
          <S.ServiceInfos>
            <label>
              <b>Serviço:</b>
              <InputContainer>
                <S.Select>
                  <option>Novo Acompanhamento</option>
                  <option>Porte de arma</option>
                  <option>Adicionar novo serviço</option>
                </S.Select>
                <div>
                  <I.DownOne />
                </div>
              </InputContainer>
            </label>
            <div>
              <b>Data inicial: </b> 18/10/2022
            </div>
            <SmallButtonContainer>
              <SmallGreenButton icon={<I.EditTwoLine />} />
              <SmallRedButton icon={<I.TrashTwo />} />
            </SmallButtonContainer>
          </S.ServiceInfos>
          <Hr />
          <S.Items>
            <S.Item onClick={() => openModal(<NewSessionModal handleClose={closeModal} />)}>
              <I.MentalHealthFill />
              Sessão
            </S.Item>
            <S.Item onClick={() => openModal(<NewMaterialFactModal handleClose={closeModal} />)}>
              <I.PushPinFill />
              Fato relevante
            </S.Item>
            <S.Item onClick={() => openModal(<NewAttachmentModal handleClose={closeModal} />)}>
              <I.AttachmentTwo />
              Anexo
            </S.Item>
            <S.Item onClick={() => openModal(<NewAssessmentModal handleClose={closeModal} />)}>
              <I.TodoFill />
              Avaliação Psicológica
            </S.Item>
          </S.Items>
        </S.Container>
      </Card>
    </>
  )
}

export default NewService
