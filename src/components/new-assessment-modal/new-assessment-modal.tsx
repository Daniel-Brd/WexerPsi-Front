import { CloseCircle } from '@/assets/icons/db-icons'
import * as PublicStyle from '../../assets/styles'
import * as FormStyle from '../../assets/styles/form'
import ModalFooter from '../modal-footer/modal-footer'

const NewAssessmentModal = ({ handleClose }: ModalType) => (
  <PublicStyle.Modal>
    <section>
      <FormStyle.Form>
        <PublicStyle.Card>
          <FormStyle.Flex>
            <h1>Nova Avaliação Psicológica</h1>
            <button onClick={() => handleClose()}>
              <CloseCircle />
            </button>
          </FormStyle.Flex>
          <label>
            Data*
            <PublicStyle.InputContainer>
              <input className="small" type="text" />
            </PublicStyle.InputContainer>
          </label>
          <FormStyle.Notice>
            <h2>Atenção!</h2>
            <p>
              Você será{' '}
              <b>
                <em>redirecionado para uma nova página</em>
              </b>{' '}
              onde irá preencher os dados da avaliação psicológica.
            </p>
          </FormStyle.Notice>
          <ModalFooter buttonText="Prosseguir" handleCancel={handleClose} />
        </PublicStyle.Card>
      </FormStyle.Form>
    </section>
  </PublicStyle.Modal>
)

export default NewAssessmentModal
