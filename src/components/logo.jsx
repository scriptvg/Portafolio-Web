import { Link } from 'react-router-dom'
import avatarImg from '@/assets/my-notion-face-portrait-removebg-preview (2).png'

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2 group">
    <div className="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden transition-all group-hover:scale-105">
      <img
        src={avatarImg}
        alt="Logo"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-lg font-bold group-hover:text-primary transition-colors">Portfolio</span>
  </Link>
)
