import * as S from './styled-base-header'
import { WexerSimbol } from '@/assets/logotype/Logotype'
import { useEffect, useState } from 'react'
import { getUserData } from '@/services/user'
import * as I from '@/assets/icons/db-icons'

const BaseHeader = ({ handleClick }: { handleClick: () => void }) => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const getName = async () => {
      if (!userName) {
        const { name } = await getUserData()
        setUserName(name)
      }
    }
    getName()
  }, [])

  return (
    <S.Header>
      <S.WexerLogo>
        <WexerSimbol />
      </S.WexerLogo>
      <S.HeaderContent>
        <button onClick={handleClick}>
          <I.Menu />
        </button>
        <S.Title>
          Bem vindo(a), <S.UserName>{userName}</S.UserName>
        </S.Title>
      </S.HeaderContent>
    </S.Header>
  )
}

export default BaseHeader
