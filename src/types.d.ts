type ModalType = {
  handleClose: () => void
}

type SmallIconButtonType = {
  icon: ReactNode
  onClick: () => void
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
  occurrenceId: string
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
  timelineId: string
  createdOn: string
  modifiedOn: string
}
