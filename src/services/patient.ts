import { request } from './occurrences'

export const getPatientData = async (): Promise<PatientType> => {
  try {
    const result = await request('get', 'patient/64406fbd63b7d3cf01f912c9', {})
    const { userId, name, birthdate, profession, schooling, demands, personalAnnotations, patientId } = result.data
    return { userId, name, birthdate, profession, schooling, demands, personalAnnotations, patientId }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {} as PatientType
  }
}
