import { ThemeToggle } from '@/components/ThemeToggle'
import { NavbarLogo } from './NavbarLogo'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between animate-in fade-in slide-in-from-top duration-500">
        <NavbarLogo />
        
        <div className="flex items-center gap-3">
          <DesktopNav />
          <div className="h-6 w-px bg-border hidden md:block" />
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
