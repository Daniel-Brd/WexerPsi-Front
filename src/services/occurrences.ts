import { TIMELINE_ID } from '@/utils/constants'
import { request } from './request'

export const getAssessmentData = async (assessmentId: string): Promise<AsessmentType> => {
  try {
    const response = await request('get', `timeline/${TIMELINE_ID}`, {})
    return response.data.timeline.occurrences.find((occurrence: OccurrenceType) => occurrence._id === assessmentId)
  } catch (error) {
    throw new Error(`${error}`)
  }
}
