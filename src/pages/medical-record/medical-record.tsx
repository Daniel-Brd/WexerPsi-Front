import * as S from './styled-medical-record'
import MedicalRecordHeader from '../../components/medical-record-header/medical-record-header'
import PatientInfos from '../../components/patient-infos/patient-infos'
import Notes from '../../components/notes/notes'
import NewService from '../../components/new-service/new-service'
import Assessment from '../../components/timeline/assessment/assessment'
import Section from '@/components/timeline/session/session'
import Attachment from '@/components/timeline/attachment/attachment'
import MaterialFact from '@/components/timeline/material-fact/material-fact'
import { useEffect, useState } from 'react'
import { getPatientData } from '@/services/patient'
import { getTimelineData } from '@/services/timeline'

const MedicalRecord = () => {
  const [patient, setPatient] = useState<Partial<PatientType>>()
  const [timeline, setTimeline] = useState<Partial<TimeLineType>>()

  useEffect(() => {
    const getPatient = async () => {
      if (!patient) {
        const { name, birthdate, profession, schooling } = await getPatientData()
        setPatient({ name, birthdate, profession, schooling })
      }
    }
    getPatient()

    const getTimeline = async () => {
      if (!timeline) {
        const { occurrences } = await getTimelineData()
        setTimeline({ occurrences })
      }
    }
    getTimeline()
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
          {timeline?.occurrences?.map((occurrence, index) => {
            const { type, occurrenceId, title, createdOn, content, files } = occurrence
            if (occurrence.type === 'session') {
              return <Section key={index} title={title} content={content} createdOn={createdOn} />
            } else if (occurrence.type === 'material-fact') {
              return <MaterialFact key={index} createdOn={createdOn} content={content} />
            } else if (occurrence.type === 'attachment') {
              return (
                <Attachment key={index} title={title} createdOn={createdOn} patientName={patient?.name} files={''} />
              )
            } else if (occurrence.type === 'assessment') {
              return <Assessment key={index} />
            }
          })}
          <MaterialFact />
          <Attachment />
          <Assessment />
        </S.RightColumn>
      </S.Grid>
    </>
  )
}

export default MedicalRecord
