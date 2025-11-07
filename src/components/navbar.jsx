import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { NavMenu } from "@/components/nav-menu"
import { NavigationSheet } from "@/components/navigation-sheet"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 z-50 h-16 bg-background/80 backdrop-blur-md border shadow-sm max-w-7xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-1">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              )
            })}
          </div>

          <ThemeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
