import * as S from './styled-small-red-button'

const SmallRedButton = ({ icon, onClick }: SmallIconButtonType) => {
  return <S.Button onClick={onClick}>{icon}</S.Button>
}

export default SmallRedButton
