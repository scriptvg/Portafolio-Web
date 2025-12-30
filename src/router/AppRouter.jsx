import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import LandingPage from '@/pages/LandingPage'
import AboutPage from '@/pages/AboutPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-me" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
