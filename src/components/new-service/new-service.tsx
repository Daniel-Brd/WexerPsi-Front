import * as S from './styled-new-service'
import * as Icon from '../../assets/icons/db-icons'
import { ReactElement, useState } from 'react'
import NewAssessmentModal from '../modals/new-assessment-modal/new-assessment-modal'
import NewAttachmentModal from '../modals/new-attachment-modal/new-attachment-modal'
import NewMaterialFactModal from '../modals/new-relevant-fact-modal/new-relevant-fact'
import NewSectionModal from '../modals/new-section-modal/new-section-modal'
import SmallGreenButton from '../small-green-button/small-green-button'
import SmallRedButton from '../small-red-button/small-red-button'
import { Card, InputContainer, Hr } from '@/assets/styles'

const NewService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modal, setModal] = useState<ReactElement>()

  function openModal(selectedModal: ReactElement) {
    setModal(selectedModal)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && modal}
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
                  <Icon.DownOne />
                </div>
              </InputContainer>
            </label>
            <div>
              <b>Data inicial: </b> 18/10/2022
            </div>
            <S.ButtonContainer>
              <SmallGreenButton icon={<Icon.EditTwoLine />} />
              <SmallRedButton icon={<Icon.TrashTwo />} />
            </S.ButtonContainer>
          </S.ServiceInfos>
          <Hr />
          <S.Items>
            <S.Item onClick={() => openModal(<NewSectionModal handleClose={closeModal} />)}>
              <Icon.MentalHealthFill />
              Sessão
            </S.Item>
            <S.Item onClick={() => openModal(<NewMaterialFactModal handleClose={closeModal} />)}>
              <Icon.PushPinFill />
              Fato relevante
            </S.Item>
            <S.Item onClick={() => openModal(<NewAttachmentModal handleClose={closeModal} />)}>
              <Icon.AttachmentTwo />
              Anexo
            </S.Item>
            <S.Item onClick={() => openModal(<NewAssessmentModal handleClose={closeModal} />)}>
              <Icon.TodoFill />
              Avaliação Psicológica
            </S.Item>
          </S.Items>
        </S.Container>
      </Card>
    </>
  )
}

export default NewService
