type RelevantFactType = {
  type: string
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  content: string
  handleDelete: (timelineId: string, occurrenceId: string) => void
  handleEdit: (occurenceType: string, data) => void
}
