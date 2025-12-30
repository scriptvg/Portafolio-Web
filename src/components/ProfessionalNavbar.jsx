import { useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Logo } from '@/components/logo'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

const ProfessionalNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-4 sm:top-6 inset-x-2 sm:inset-x-4 z-50 h-14 sm:h-16 bg-background/60 backdrop-blur-xl border border-border/50 shadow-2xl max-w-7xl mx-auto rounded-full"
    >
      <div className="h-full flex items-center justify-between mx-auto px-4 sm:px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Social Links */}
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9"
              asChild
            >
              <a href="https://www.linkedin.com/in/allan-josé-vélez-gonzález" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6 mx-1" />

          <ThemeToggle />

          <Button className="rounded-full ml-2" asChild>
            <a href="#contacto" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contactar
            </a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                {!open ? (
                  <Menu className="h-4 w-4" />
                ) : (
                  <X className="h-4 w-4" />
                )}
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <SheetHeader className="px-6 pt-8 pb-6 space-y-3">
                  <div>
                    <SheetTitle className="text-left text-2xl font-bold">
                      Navegación
                    </SheetTitle>
                  </div>
                </SheetHeader>

                <Separator />

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-4 py-6 overflow-y-auto">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <div key={item.href}>
                        <SheetClose asChild>
                          <a
                            href={item.href}
                            className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-accent border border-transparent hover:border-border transition-all duration-200"
                          >
                            <span className="font-semibold">{item.label}</span>
                          </a>
                        </SheetClose>
                      </div>
                    ))}
                  </nav>

                  <Separator className="my-6" />

                  {/* Mobile Social Links */}
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Conecta conmigo
                    </h3>
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-lg"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/allan-josé-vélez-gonzález"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    </Button>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <SheetClose asChild>
                      <Button className="w-full rounded-xl h-12" asChild>
                        <a href="#contacto" className="flex items-center justify-center gap-2">
                          <Mail className="h-4 w-4" />
                          Contactar
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border mt-auto">
                  <p className="text-xs text-center text-muted-foreground">
                    © {new Date().getFullYear()} Allan José Vélez González
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default ProfessionalNavbar

