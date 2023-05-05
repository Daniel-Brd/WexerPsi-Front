import { ReactNode } from 'react'
import * as S from './styled-small-green-button'

const SmallGreenButton = ({ icon, handleClick }: { icon: ReactNode; handleClick?: () => void }) => {
  return handleClick ? <S.Button onClick={() => handleClick()}>{icon}</S.Button> : <S.Button>{icon}</S.Button>
}

export default SmallGreenButton
