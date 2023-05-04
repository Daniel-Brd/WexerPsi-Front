import { TIMELINE_ID } from '@/utils/constants'
import { request } from './request'

export const getTimelineData = async (): Promise<TimeLineType> => {
  try {
    const result = await request('get', `timeline/${TIMELINE_ID}`, {})
    const { patientId, occurrences, serviceName, _id, createdOn, modifiedOn } = result.data.timeline
    return { patientId, occurrences, serviceName, _id, createdOn, modifiedOn }
  } catch (error) {
    throw new Error(`${error}`)
  }
}
