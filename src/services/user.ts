import api from './api'

export const login = async (): Promise<string> => {
  try {
    const result = await api.post('/user/login', { email: 'dev.danielbrandao@gmail.com', password: '.@123456' })
    const { token } = result.data
    return token
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return ''
  }
}

export const getUserData = async (): Promise<UserType> => {
  try {
    const result = await api.get('/user')
    const { id, name, email } = result.data
    return { id, name, email }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return {} as UserType
  }
}
