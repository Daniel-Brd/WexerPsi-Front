import BaseLayout from '@/components/baselayout/base-layout/base-layout'
import MedicalRecord from '@/pages/medical-record/medical-record'
import AssessmentPage from '@/pages/assessment/assessment-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<MedicalRecord />} />
          <Route path="/assessment/:currentStep" element={<AssessmentPage date="26/04/2023" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
