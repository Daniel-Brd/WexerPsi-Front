type ModalType = {
  handleClose: () => void
}

type SmallIconButtonType = {
  icon: ReactNode
}

type FormType = {
  date: string
  time: string
  title: string
  description: string
  value: string
}

type UserType = {
  id: string
  name: string
  email: string
}

type PatientType = {
  userId: string
  name: string
  birthdate: string
  profession: string
  schooling: string
  demands: string
  personalAnnotations: string
  patientId: string
}

type OccurrenceType = {
  _id: string
  title: string
  content: string
  files: []
  type: string
  createdOn: string
  modifiedOn: string
}

type TimeLineType = {
  patientId: string
  occurrences: OccurrenceType[]
  serviceName: string
  _id: string
  createdOn: string
  modifiedOn: string
}

type SessionType = {
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  content: string
  value: number | null
  method: string
  status: string
  handleDelete: (timelineId: string, occurrenceId: string) => void
}

type RelevantFactType = {
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  date?: string
  content: string
  handleDelete: (timelineId: string, occurrenceId: string) => void
}

type FileType = {
  name: string
  size: number
  type: string
}

type AttachmentType = {
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  date?: string
  content: string
  files: { filename: string; filesize: number }[]
  handleDelete: (timelineId: string, occurrenceId: string) => void
}
