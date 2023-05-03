import * as S from './styled-skip-button'
import * as I from '@/assets/icons/db-icons'

const SkipButton = ({ handleClick }: { handleClick: () => void }) => (
  <S.Container onClick={() => handleClick()}>
    Pular <I.ArrowRight />
  </S.Container>
)

export default SkipButton
