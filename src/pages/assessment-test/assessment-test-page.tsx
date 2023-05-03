import { AssessmentForm, Card } from '@/assets/styles'
import AssessmentHeader from '@/components/assessment-header/assessment-header'

const TestPage = ({ handleNext }: { handleNext: () => void }) => (
  <>
    <AssessmentForm>
      <Card>
        <AssessmentHeader title="Aplicação de teste" handleNext={handleNext} />
      </Card>
    </AssessmentForm>
  </>
)

export default TestPage
