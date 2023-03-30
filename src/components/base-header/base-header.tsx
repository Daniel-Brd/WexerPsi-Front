import * as S from './styled-base-header'
import * as Icon from '../../assets/icons/db-icons'
import WexerLogo from '@/assets/logo'

const BaseHeader = () => {
  return (
    <S.Header>
      <S.WexerLogo>
        <WexerLogo />
      </S.WexerLogo>
      <S.HeaderContent>
        <Icon.Menu />
        <S.Title>
          Bem vindo(a), <S.UserName>Daniel</S.UserName>
        </S.Title>
      </S.HeaderContent>
    </S.Header>
  )
}

export default BaseHeader
