import { ReactNode } from 'react'
import * as S from './styled-small-red-button'

const SmallRedButton = ({ icon, handleClick }: { icon: ReactNode; handleClick?: () => void }) => {
  return handleClick ? <S.Button onClick={() => handleClick()}>{icon}</S.Button> : <S.Button>{icon}</S.Button>
}

export default SmallRedButton
