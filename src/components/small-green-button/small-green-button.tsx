import * as S from './styled-small-green-button'

const SmallGreenButton = ({ icon, onClick }: SmallIconButtonType) => {
  return <S.Button onClick={onClick}>{icon}</S.Button>
}

export default SmallGreenButton
