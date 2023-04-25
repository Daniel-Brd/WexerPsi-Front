import * as S from './styled-medical-record'
import MedicalRecordHeader from '../../components/medical-record-header/medical-record-header'
import PatientInfos from '../../components/patient-infos/patient-infos'
import Notes from '../../components/notes/notes'
import NewService from '../../components/new-service/new-service'
import Assessment from '../../components/timeline/assessment/assessment'
import Attachment from '@/components/timeline/attachment/attachment'
import MaterialFact from '@/components/timeline/material-fact/material-fact'
import { useEffect, useState } from 'react'
import { getPatientData } from '@/services/patient'
import { getTimelineData } from '@/services/timeline'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { TIMELINE_ID } from '@/utils/constants'
import Session from '@/components/timeline/session/session'

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
  }, [timeline])

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
          {timeline?.occurrences?.reverse().map(occurrence => {
            const { type, _id, title, createdOn, content, files } = occurrence

            if (type === 'session') {
              return (
                <Session
                  key={_id}
                  title={title}
                  content={content}
                  createdOn={format(new Date(createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  occurrenceId={_id}
                  timelineId={TIMELINE_ID}
                  timeline={timeline}
                  setTimeline={setTimeline}
                />
              )
            } else if (type === 'material-fact') {
              return (
                <MaterialFact
                  key={_id}
                  title={title}
                  createdOn={format(new Date(createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  content={content}
                />
              )
            } else if (type === 'attachment') {
              return (
                <Attachment
                  key={_id}
                  title={title}
                  createdOn={format(new Date(createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  patientName={patient?.name}
                  files={''}
                />
              )
            } else if (type === 'assessment') {
              return <Assessment key={_id} />
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
