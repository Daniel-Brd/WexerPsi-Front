import { AxiosResponse } from 'axios'
import api from './api'

export const request = async (method: MethodType, url: UrlType, body: {}): Promise<AxiosResponse<any, any>> => {
  const token = localStorage.getItem('jwt')
  try {
    const result =
      method === 'post' || method === 'put'
        ? await api[method](url, body, { headers: { Authorization: token } })
        : await api[method](url, { headers: { Authorization: token } })
    return result
  } catch (error) {
    throw new Error(`${error}`)
  }
}
