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
