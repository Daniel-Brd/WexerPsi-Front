type TimeLineType = {
  patientId: string
  occurrences: OccurrenceType[]
  serviceName: string
  _id: string
  createdOn: string
  modifiedOn: string
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
