import GlobalStyle from '@/globalStyle'
import Router from '@/routes/routes'
import { login } from '@/services/user'
import { Normalize } from 'styled-normalize'
import api from '@/services/api'
import { useEffect } from 'react'

function WexerPsi() {
  const getToken = async () => {
    const token = localStorage.getItem('jwt')
    if (!token) {
      const newToken = await login()
      api.defaults.headers.Authorization = newToken
      localStorage.setItem('jwt', newToken)
    }
    api.defaults.headers.Authorization = token
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
