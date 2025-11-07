import { Link } from 'react-router-dom'
import Avatar from '@/assets/my-notion-face-portrait-removebg-preview (2).png'

export function NavbarLogo() {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-all duration-300 group"
    >
      <img src={Avatar} className='w-20' alt="Allan Vélez" />
      <span className="bg-linear-to-r from-foreground to-primary bg-clip-text group-hover:text-transparent transition-all duration-300">
        Allan Vélez
      </span>
    </Link>
  )
}
