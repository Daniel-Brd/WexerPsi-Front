import * as PublicStyle from '../../assets/styles'

const NewSectionModal = ({ handleClose }: ModalType) => (
  <PublicStyle.Modal>
    <section>
      <PublicStyle.Card>
        <span onClick={() => handleClose()}>X</span>
        <h1>TESTEEE</h1>
        <h1>TESTEEE</h1>
        <h1>TESTEEE</h1>
        <h1>TESTEEE</h1>
        <h1>TESTEEE</h1>
        <h1>TESTEEE</h1>
        <h1>TESTEEE</h1>
      </PublicStyle.Card>
    </section>
  </PublicStyle.Modal>
)

export default NewSectionModal
