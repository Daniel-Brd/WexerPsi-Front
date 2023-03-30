import * as S from './styled-new-service'
import * as PublicStyles from '../../assets/styles'
import * as Icon from '../../assets/icons/db-icons'
import { ReactElement, useState } from 'react'
import NewSectionModal from '../new-section-modal/new-section-modal'
import NewMaterialFactModal from '../new-material-fact-modal/new-material-fact'
import SmallGreenButton from '../small-green-button/small-green-button'
import SmallRedButton from '../small-red-button/small-red-button'
import NewAttachmentModal from '../new-attachment-modal/new-attachment-modal'
import NewAssessmentModal from '../new-assessment-modal/new-assessment-modal'

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
      <PublicStyles.Card>
        <S.Container>
          <S.ServiceInfos>
            <label>
              <b>Serviço:</b>
              <PublicStyles.InputContainer>
                <S.Select>
                  <option>Novo Acompanhamento</option>
                </S.Select>
                <div>
                  <Icon.DownOne />
                </div>
              </PublicStyles.InputContainer>
            </label>
            <div>
              <b>Data inicial: </b> 18/10/2022
            </div>
            <S.ButtonContainer>
              <SmallGreenButton icon={<Icon.EditTwoLine />} />
              <SmallRedButton icon={<Icon.TrashTwo />} />
            </S.ButtonContainer>
          </S.ServiceInfos>
          <S.Hr />
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
      </PublicStyles.Card>
    </>
  )
}

export default NewService
