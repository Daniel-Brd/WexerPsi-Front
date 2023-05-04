import GlobalStyle from '@/globalStyle'
import Router from '@/routes/routes'
import { login } from '@/services/user'
import { Normalize } from 'styled-normalize'
import api from '@/services/api'
import { useEffect } from 'react'

function WexerPsi() {
  const getToken = async () => {
    localStorage.removeItem('jwt')
    const token = await login()
    api.defaults.headers.Authorization = token
    localStorage.setItem('jwt', token)
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <div className="App">
      <Normalize />
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default WexerPsi
