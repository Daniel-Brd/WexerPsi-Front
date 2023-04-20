import * as S from './styled-medical-record'
import MedicalRecordHeader from '../../components/medical-record-header/medical-record-header'
import PatientInfos from '../../components/patient-infos/patient-infos'
import Notes from '../../components/notes/notes'
import NewService from '../../components/new-service/new-service'
import Assessment from '../../components/timeline/assessment/assessment'
import { Section } from '@/components/patient-infos/styled-patient-infos'
import Attachment from '@/components/timeline/attachment/attachment'
import MaterialFact from '@/components/timeline/material-fact/material-fact'
import { useEffect, useState } from 'react'
import { getPatientData } from '@/services/patient'

const MedicalRecord = () => {
  const [patient, setPatient] = useState<Partial<PatientType>>()

  useEffect(() => {
    const getPatient = async () => {
      if (!patient) {
        const { name, birthdate, profession, schooling } = await getPatientData()
        setPatient({ name, birthdate, profession, schooling })
      }
    }
    getPatient()
  }, [])

  return (
    <>
      <MedicalRecordHeader />
      <S.Grid>
        <S.LeftColumn>
          <PatientInfos
            name={patient?.name}
            birthdate={patient?.birthdate ? new Date(patient.birthdate).toLocaleDateString() : ''}
            profession={patient?.profession}
            schooling={patient?.schooling}
          />
          <Notes />
          <Notes />
        </S.LeftColumn>
        <S.RightColumn>
          <NewService />
          <Section />
          <MaterialFact />
          <Attachment />
          <Assessment />
        </S.RightColumn>
      </S.Grid>
    </>
  )
}

export default MedicalRecord
