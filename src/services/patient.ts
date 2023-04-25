import api from './api'

export const getPatientData = async (): Promise<PatientType> => {
  const token = localStorage.getItem('jwt')
  try {
    const result = await api.get('patient/64406fbd63b7d3cf01f912c9', { headers: { Authorization: token } })
    const { userId, name, birthdate, profession, schooling, demands, personalAnnotations, patientId } = result.data
    return { userId, name, birthdate, profession, schooling, demands, personalAnnotations, patientId }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {} as PatientType
  }
}
