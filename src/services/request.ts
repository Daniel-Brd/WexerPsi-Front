import { AxiosResponse } from 'axios'
import api from './api'

const token = localStorage.getItem('jwt')

export const request = async (method: MethodType, url: UrlType, body: {}): Promise<AxiosResponse<any, any>> => {
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
