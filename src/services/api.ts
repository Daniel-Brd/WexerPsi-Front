import { API_KEY } from '@/utils/constants'
import axios from 'axios'

export default axios.create({
  baseURL: 'https://wexer-example-backend.vercel.app/api',
  headers: { 'x-api-key': API_KEY }
})
