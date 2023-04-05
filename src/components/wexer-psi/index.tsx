import GlobalStyle from '@/globalStyle'
import Router from '@/routes/routes'
import { Normalize } from 'styled-normalize'

function WexerPsi() {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default WexerPsi
