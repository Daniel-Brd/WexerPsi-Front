type SessionType = {
  type: string
  occurrenceId: string
  _id?: string
  timelineId: string
  createdOn: string
  title: string
  content: string
  value?: number | null
  method?: string
  status?: string
  payment?: {
    value: number | null
    method: string
    status: string
  }
  handleDelete: (timelineId: string, occurrenceId: string) => void
  handleEdit: (occurenceType: string, data) => void
}
