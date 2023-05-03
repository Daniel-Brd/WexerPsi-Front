import SaveButton from '../save-button/save-button'
import SkipButton from '../skip-button/skip-button'
import * as S from './styled-assessment-header'

const AssessmentHeader = ({ title, handleNext }: { title: string; handleNext: () => void }) => (
  <S.FormHeader>
    {title}
    <div>
      <SaveButton />
      <SkipButton handleClick={() => handleNext()} />
    </div>
  </S.FormHeader>
)

export default AssessmentHeader
