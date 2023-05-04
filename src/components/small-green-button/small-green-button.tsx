import { ReactNode } from 'react'
import * as S from './styled-small-green-button'

const SmallGreenButton = ({ icon }: { icon: ReactNode }) => {
  return <S.Button>{icon}</S.Button>
}

export default SmallGreenButton
