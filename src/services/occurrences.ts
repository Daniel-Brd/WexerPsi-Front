import { AxiosResponse } from 'axios'
import api from './api'

const token = localStorage.getItem('jwt')

type MethodType = 'get' | 'post' | 'put' | 'delete'
type UrlType =
  | 'user'
  | `patient/${string}`
  | 'occurrence'
  | `occurrence/${string}`
  | `timeline/${string}/occurrence/${string}`
  | `timeline${string}`
  | `assessment/${string}`

export const request = async (method: MethodType, url: UrlType, body: {}):Promise<AxiosResponse<any, any>> => {
  try {
    const result =
      method === 'post'
        ? await api[method](url, body, { headers: { Authorization: token } })
        : await api[method](url, { headers: { Authorization: token } })
    // eslint-disable-next-line no-console
    return result
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
