import BaseLayout from '@/components/baselayout/base-layout/base-layout'
import MedicalRecord from '@/pages/medical-record/medical-record'
import AssessmentPage from '@/pages/assessment/assessment-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SessionPage from '@/pages/session/session-page'
import { LoginPage } from '@/pages/login/login-page'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route element={<BaseLayout />}>
          <Route path="medical-record" element={<MedicalRecord />} />
          <Route path="/occurrence/:session" element={<SessionPage />} />
          <Route path="/assessment/:occurrenceId/:currentStep" element={<AssessmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
