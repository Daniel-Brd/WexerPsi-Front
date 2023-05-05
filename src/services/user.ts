import { request } from './request'

export const login = async (): Promise<string> => {
  try {
    const result = await request('post', 'user/login', { email: 'dev.danielbrandao@gmail.com', password: '.@123456' })
    const { token } = result.data
    return token
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const getUserData = async (): Promise<UserType> => {
  try {
    const result = await request('get', 'user', {})
    const { id, name, email } = result.data
    return { id, name, email }
  } catch (error) {
    throw new Error(`${error}`)
  }
}
