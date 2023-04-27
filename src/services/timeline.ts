import { TIMELINE_ID } from '@/utils/constants'
import api from './api'

const token = localStorage.getItem('jwt')

export const getTimelineData = async (): Promise<TimeLineType> => {
  try {
    const result = await api.get(`/timeline/${TIMELINE_ID}`, { headers: { Authorization: token } })
    const { patientId, occurrences, serviceName, _id, createdOn, modifiedOn } = result.data.timeline
    return { patientId, occurrences, serviceName, _id, createdOn, modifiedOn }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {} as TimeLineType
  }
}
