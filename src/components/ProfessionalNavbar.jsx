import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <motion.nav 
      className="fixed top-4 sm:top-6 inset-x-2 sm:inset-x-4 z-50 h-14 sm:h-16 bg-background/60 backdrop-blur-xl border border-border/50 shadow-2xl max-w-7xl mx-auto rounded-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9"
              asChild
            >
              <a href="https://www.linkedin.com/in/allan-velez" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </motion.div>

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
                <AnimatePresence mode="wait">
                  {!open ? (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <SheetHeader className="px-6 pt-8 pb-6 space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SheetTitle className="text-left text-2xl font-bold">
                      Navegación
                    </SheetTitle>
                  </motion.div>
                </SheetHeader>

                <Separator />

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-4 py-6 overflow-y-auto">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        <SheetClose asChild>
                          <motion.a
                            href={item.href}
                            className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-accent border border-transparent hover:border-border"
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <span className="font-semibold">{item.label}</span>
                          </motion.a>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </nav>

                  <Separator className="my-6" />

                  {/* Mobile Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: navItems.length * 0.1 + 0.2 }}
                  >
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Conecta conmigo
                    </h3>
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-lg"
                      asChild
                    >
                      <motion.a
                        href="https://www.linkedin.com/in/allan-velez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                      </motion.a>
                    </Button>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: navItems.length * 0.1 + 0.6 }}
                  >
                    <SheetClose asChild>
                      <Button className="w-full rounded-xl h-12" asChild>
                        <a href="#contacto" className="flex items-center justify-center gap-2">
                          <Mail className="h-4 w-4" />
                          Contactar
                        </a>
                      </Button>
                    </SheetClose>
                  </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                  className="p-4 border-t border-border mt-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  <p className="text-xs text-center text-muted-foreground">
                    © {new Date().getFullYear()} Allan José Vélez González
                  </p>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}

export default ProfessionalNavbar

