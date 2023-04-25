import api from './api'

const token = localStorage.getItem('jwt')

export const getTimelineData = async (): Promise<TimeLineType> => {
  try {
    const result = await api.get('/timeline/64407e0bdafc988a50bd2602', { headers: { Authorization: token } })
    const { patientId, occurrences, serviceName, _id, createdOn, modifiedOn } = result.data.timeline
    return { patientId, occurrences, serviceName, _id, createdOn, modifiedOn }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {} as TimeLineType
  }
}
