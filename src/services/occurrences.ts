import { request } from './request'

export const getAssessmentData = async (assessmentId: string, body: {}) => {
  try {
    const response = await request('get', `assessment/${assessmentId}`, body)
    const { _id, type, interview, tests } = response.data
    return { _id, type, interview, tests }
  } catch (error) {
    throw new Error(`${error}`)
  }
}
