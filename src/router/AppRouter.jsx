import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import LandingPage from '@/pages/LandingPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
