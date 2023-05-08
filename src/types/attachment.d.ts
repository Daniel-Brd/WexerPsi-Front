type AttachmentType = {
  type: string
  method?: string
  value?: string
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  date?: string
  content: string
  files: { filename: string; filesize: number }[]
  handleDelete: (timelineId: string, occurrenceId: string) => void
  handleEdit: (occurenceType: string, data) => void
}

type FileType = {
  name: string
  size: number
  type: string
}
