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

export const postSession = async ({ timelineId, title, content }: Partial<SessionType>) => {
  try {
    const result = await api.post(
      '/occurrence',
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

export const postRelevantFact = async ({ timelineId, title, content }: Partial<RelevantFactType>) => {
  try {
    const result = await api.post(
      '/occurrence',
      {
        type: 'relevant_fact',
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

export const postAttachment = async ({ timelineId, title, content, files }: Partial<AttachmentType>) => {
  try {
    const result = await api.post(
      'occurrence',
      {
        type: 'attachment',
        timelineId: `${timelineId}`,
        title: `${title}`,
        content: `${content}`,
        files: files
      },
      { headers: { Authorization: token } }
    )

    return result.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
