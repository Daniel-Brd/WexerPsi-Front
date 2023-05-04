import { ReactNode } from 'react'
import * as S from './styled-small-red-button'

const SmallRedButton = ({ icon }: { icon: ReactNode }) => {
  return <S.Button>{icon}</S.Button>
}

export default SmallRedButton
