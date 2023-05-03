import { AssessmentForm, Card } from '@/assets/styles'
import AssessmentHeader from '@/components/assessment-header/assessment-header'

const ObservationPage = () => (
  <>
    <AssessmentForm>
      <Card>
        <AssessmentHeader
          title="Observação comportamental"
          handleNext={() => {
            null
          }}
        />
      </Card>
    </AssessmentForm>
  </>
)

export default ObservationPage
