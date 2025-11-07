import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from '@/components/ui/sheet'
import { navLinks } from './navLinks'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { iconMap, socialLinks, stats, brandConfig } from './mobileNavConfig'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon"
          className="relative hover:bg-accent transition-all duration-200"
        >
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="close"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
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
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <brandConfig.icon className="h-5 w-5 text-primary" />
              </motion.div>
              <SheetTitle className="text-left text-2xl font-bold">
                {brandConfig.name}
              </SheetTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <SheetDescription className="text-left text-sm flex items-center gap-2">
                {brandConfig.tagline}
                <Badge variant="secondary" className="text-xs">{brandConfig.version}</Badge>
              </SheetDescription>
            </motion.div>
          </SheetHeader>
          
          <Separator className="relative z-10" />
          
          <ScrollArea className="flex-1 py-6">
            <nav className="flex flex-col gap-2 px-4">
              {navLinks.map((link, index) => {
                const Icon = iconMap[link.label]
                return (
                  <motion.div
                    key={link.href}
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
                        href={link.href}
                        className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-accent border border-transparent hover:border-border"
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <div className="flex items-center gap-3">
                          {Icon && (
                            <motion.div 
                              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"
                              whileHover={{ rotate: 12 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Icon className="h-5 w-5 text-primary" />
                            </motion.div>
                          )}
                          <span className="font-semibold">{link.label}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </motion.a>
                    </SheetClose>
                  </motion.div>
                )
              })}
            </nav>

            <Separator className="my-6" />

            {/* Social Links */}
            <motion.div 
              className="px-4 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: navLinks.length * 0.1 + 0.2 }}
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Conecta</h3>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon
                  return (
                    <motion.div
                      key={social.label}
                      className="flex-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: navLinks.length * 0.1 + 0.3 + (index * 0.1) 
                      }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-full h-12 rounded-lg"
                        asChild
                      >
                        <motion.a 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <SocialIcon className="h-4 w-4" />
                          <span className="sr-only">{social.label}</span>
                        </motion.a>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="px-4 mt-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: navLinks.length * 0.1 + 0.5 }}
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Estadísticas</h3>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon
                  return (
                    <motion.div 
                      key={stat.label}
                      className="bg-muted/50 rounded-lg p-4 border border-border"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200, 
                        delay: navLinks.length * 0.1 + 0.6 + (index * 0.1) 
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <StatIcon className={`h-4 w-4 ${stat.color}`} />
                        <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </ScrollArea>

          <motion.div 
            className="p-4 border-t border-border mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <p className="text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
