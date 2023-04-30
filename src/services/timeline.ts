import { TIMELINE_ID } from '@/utils/constants'
import { request } from './occurrences'

export const getTimelineData = async (): Promise<TimeLineType> => {
  try {
    const result = await request('get', `timeline/${TIMELINE_ID}`, {})
    const { patientId, occurrences, serviceName, _id, createdOn, modifiedOn } = result.data.timeline
    return { patientId, occurrences, serviceName, _id, createdOn, modifiedOn }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {} as TimeLineType
  }
}
