import BaseLayout from '@/components/base-layout/base-layout'
import MedicalRecord from '@/components/medical-record/medical-record'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<MedicalRecord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
