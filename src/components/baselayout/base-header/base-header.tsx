import * as S from './styled-base-header'
import * as Icon from '../../../assets/icons/db-icons'
import WexerLogo from '@/assets/logo'
import { useEffect, useState } from 'react'
import { getUserData } from '@/services/user'

const BaseHeader = () => {
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
        <WexerLogo />
      </S.WexerLogo>
      <S.HeaderContent>
        <Icon.Menu />
        <S.Title>
          Bem vindo(a), <S.UserName>{userName}</S.UserName>
        </S.Title>
      </S.HeaderContent>
    </S.Header>
  )
}

export default BaseHeader
