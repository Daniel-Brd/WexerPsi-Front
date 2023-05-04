import * as S from './styled-medical-record'
import MedicalRecordHeader from '../../components/medical-record-header/medical-record-header'
import PatientInfos from '../../components/patient-infos/patient-infos'
import Notes from '../../components/notes/notes'
import NewService from '../../components/new-service/new-service'
import Assessment from '../../components/timeline/assessment/assessment'
import Attachment from '@/components/timeline/attachment/attachment'
import RelevantFact from '@/components/timeline/relevant-fact/relevant-fact'
import { ReactElement, useEffect, useState } from 'react'
import { getPatientData } from '@/services/patient'
import { getTimelineData } from '@/services/timeline'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { TIMELINE_ID } from '@/utils/constants'
import Session from '@/components/timeline/session/session'
import { request } from '@/services/request'
import Filters from '@/components/timeline/filter/filters'
import { ArrowheadUp } from '@/assets/icons/db-icons'
import NewSessionModal from '@/components/modals/new-session-modal/new-session-modal'
import NewRelevantFactModal from '@/components/modals/new-relevant-fact-modal/new-relevant-fact'
import NewAttachmentModal from '@/components/modals/new-attachment-modal/new-attachment-modal'

const MedicalRecord = () => {
  const [patient, setPatient] = useState<Partial<PatientType>>()
  const [timeline, setTimeline] = useState<Partial<TimeLineType>>()
  const [filterType, setFilterType] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modal, setModal] = useState<ReactElement>()

  function openModal(selectedModal: ReactElement) {
    setModal(selectedModal)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

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

  const filteredOcurrences = timeline?.occurrences?.filter(occurrence => {
    if (filterType) {
      return occurrence.type === filterType
    } else {
      return occurrence
    }
  })

  const handleDelete = (timelineId: string, occurrenceId: string) => {
    request('delete', `timeline/${timelineId}/occurrence/${occurrenceId}`, {})
    if (timeline?.occurrences?.length) {
      const newOccurrences = timeline?.occurrences.filter(item => item._id !== occurrenceId)
      setTimeline({ occurrences: newOccurrences })
    }
  }

  const handleEdit = (occurrenceType: string, prevData: PrevDataType) => {

    if (occurrenceType === 'session') {
      openModal(<NewSessionModal handleClose={closeModal} method="put" prevData={prevData} />)
    } else if (occurrenceType === 'relevant_fact') {
      openModal(<NewRelevantFactModal handleClose={closeModal} method="put" prevData={prevData} />)
    } else if (occurrenceType === 'attachment') {
      openModal(<NewAttachmentModal handleClose={closeModal} method="put" prevData={prevData} />)
    }
  }

  const rollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isModalOpen && modal}
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
          <NewService openModal={openModal} closeModal={closeModal} />
          <Filters filterType={filterType} setFilterType={setFilterType} />
          <S.Timeline>
            {filteredOcurrences
              ?.slice()
              .reverse()
              .map(occurrence => {
                const { type, _id, title, createdOn, content, files } = occurrence
                if (type === 'session') {
                  return (
                    <Session
                      key={_id}
                      type={type}
                      title={title}
                      content={content}
                      createdOn={format(new Date(createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      occurrenceId={_id}
                      timelineId={TIMELINE_ID}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )
                } else if (type === 'relevant_fact') {
                  return (
                    <RelevantFact
                      key={_id}
                      type={type}
                      title={title}
                      createdOn={format(new Date(createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      content={content}
                      occurrenceId={_id}
                      timelineId={TIMELINE_ID}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )
                } else if (type === 'attachment') {
                  return (
                    <Attachment
                      key={_id}
                      type={type}
                      title={title}
                      createdOn={format(new Date(createdOn), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      files={files}
                      content={content}
                      occurrenceId={_id}
                      timelineId={TIMELINE_ID}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )
                } else if (type === 'assessment') {
                  return <Assessment key={_id} />
                }
              })}
            <Assessment />
          </S.Timeline>
          <S.RollTop onClick={() => rollTop()}>
            <ArrowheadUp />
            Voltar para o topo
          </S.RollTop>
        </S.RightColumn>
      </S.Grid>
    </>
  )
}

export default MedicalRecord
