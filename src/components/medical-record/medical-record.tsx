import * as Styled from './styled.medical-record'
import MedicalRecordHeader from '../medical-record-header/medical-record-header'
import PatientInfos from '../patient-infos/patient-infos'
import Notes from '../notes/notes'
import NewService from '../new-service/new-service'

const MedicalRecord = () => {
  return (
    <>
      <MedicalRecordHeader />
      <Styled.Grid>
        <Styled.LeftColumn>
          <PatientInfos
            name="Daniel Brandão"
            birthday="01/02/2001"
            occupation="Desenvolvedor"
            education="Ensino Médio Completo"
          />
          <Notes />
          <Notes />
        </Styled.LeftColumn>
        <div>
          <NewService />
        </div>
      </Styled.Grid>
    </>
  )
}

export default MedicalRecord
