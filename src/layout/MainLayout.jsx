import { Outlet } from 'react-router-dom'
import ProfessionalNavbar from '@/components/ProfessionalNavbar'
import Footer from './Footer'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden ">
      <ProfessionalNavbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
