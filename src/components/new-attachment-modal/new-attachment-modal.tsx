import { CloseCircle } from '@/assets/icons/db-icons'
import * as PublicStyle from '../../assets/styles'
import * as FormStyle from '../../assets/styles/form'
import ModalFooter from '../modal-footer/modal-footer'

const NewAttachmentModal = ({ handleClose }: ModalType) => (
  <PublicStyle.Modal>
    <section>
      <FormStyle.Form>
        <PublicStyle.Card>
          <FormStyle.Flex>
            <h1>Novo Anexo</h1>
            <button onClick={() => handleClose()}>
              <CloseCircle />
            </button>
          </FormStyle.Flex>
          <FormStyle.Flex>
            <label>
              Data*
              <PublicStyle.InputContainer>
                <input className="small" type="text" />
              </PublicStyle.InputContainer>
            </label>
            <label>
              Título*
              <PublicStyle.InputContainer>
                <input className="medium" type="text" />
              </PublicStyle.InputContainer>
            </label>
          </FormStyle.Flex>
          <label>
            Descrição*
            <PublicStyle.InputContainer>
              <textarea></textarea>
            </PublicStyle.InputContainer>
          </label>
          <label>
            Anexar arquivos*
            <input type="file" />
          </label>
          <ModalFooter buttonText="Criar" handleCancel={handleClose} />
        </PublicStyle.Card>
      </FormStyle.Form>
    </section>
  </PublicStyle.Modal>
)

export default NewAttachmentModal
