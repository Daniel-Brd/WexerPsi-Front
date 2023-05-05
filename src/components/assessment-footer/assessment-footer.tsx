import SaveButton from '../save-button/save-button'
import SkipButton from '../skip-button/skip-button'
import * as S from './styled-assessment-footer'

const AssessmentFooter = ({ handleNext }: { handleNext?: () => void }) => (
  <S.FormFooter>
    <SaveButton />
    {handleNext && <SkipButton handleClick={handleNext} />}
  </S.FormFooter>
)

export default AssessmentFooter
