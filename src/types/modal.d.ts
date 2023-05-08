type ModalType = {
  handleClose: () => void
  method: string | null
  prevData?: DataType
}

type FormType = {
  date: string
  time: string
  title: string
  description: string
  value: string
}

type PrevDataType = SessionType | RelevantFactType | AttachmentType
