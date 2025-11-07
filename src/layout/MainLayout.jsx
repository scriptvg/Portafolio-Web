import { Outlet } from 'react-router-dom'
import ProfessionalNavbar from '@/components/ProfessionalNavbar'
import Footer from './Footer'

function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <ProfessionalNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
