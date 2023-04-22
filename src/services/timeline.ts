import api from './api'

export const getTimelineData = async (): Promise<TimeLineType> => {
  try {
    const result = await api.get('/timeline/64407e0bdafc988a50bd2602')

    const { patientId, occurrences, serviceName, timelineId, createdOn, modifiedOn } = result.data.timeline
    return { patientId, occurrences, serviceName, timelineId, createdOn, modifiedOn }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {} as TimeLineType
  }
}
