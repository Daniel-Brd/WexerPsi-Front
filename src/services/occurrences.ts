import api from './api'

const token = localStorage.getItem('jwt')

export const deleteOccurrence = async ({ timelineId, occurrenceId }: { timelineId: string; occurrenceId: string }) => {
  try {
    await api.delete(`/timeline/${timelineId}/occurrence/${occurrenceId}`, { headers: { Authorization: token } })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export const postSession = async ({ timelineId, title, content }: SessionType) => {
  try {
    const result = await api.post(
      `/occurrence`,
      {
        type: 'session',
        timelineId: `${timelineId}`,
        title: `${title}`,
        content: `${content}`
      },
      { headers: { Authorization: token } }
    )
    return result.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export const postMaterialFact = async ({ timelineId, title, content }: MaterialFactType) => {
  console.log(timelineId)
  console.log(title)
  console.log(content)

  try {
    const result = await api.post(
      `/occurrence`,
      {
        type: 'material-fact',
        timelineId: `${timelineId}`,
        title: `${title}`,
        content: `${content}`
      },
      { headers: { Authorization: token } }
    )

    return result.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
