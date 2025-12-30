import { useState } from 'react'
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
          {!open ? (
            <Menu className="h-5 w-5" />
          ) : (
            <X className="h-5 w-5" />
          )}
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="px-6 pt-8 pb-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <brandConfig.icon className="h-5 w-5 text-primary" />
              </div>
              <SheetTitle className="text-left text-2xl font-bold">
                {brandConfig.name}
              </SheetTitle>
            </div>
            <div>
              <SheetDescription className="text-left text-sm flex items-center gap-2">
                {brandConfig.tagline}
                <Badge variant="secondary" className="text-xs">{brandConfig.version}</Badge>
              </SheetDescription>
            </div>
          </SheetHeader>

          <Separator className="relative z-10" />

          <ScrollArea className="flex-1 py-6">
            <nav className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => {
                const Icon = iconMap[link.label]
                return (
                  <div key={link.href}>
                    <SheetClose asChild>
                      <a
                        href={link.href}
                        className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-accent border border-transparent hover:border-border transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          {Icon && (
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                          )}
                          <span className="font-semibold">{link.label}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </a>
                    </SheetClose>
                  </div>
                )
              })}
            </nav>

            <Separator className="my-6" />

            {/* Social Links */}
            <div className="px-4 space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Conecta</h3>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon
                  return (
                    <div key={social.label} className="flex-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-full h-12 rounded-lg"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon className="h-4 w-4" />
                          <span className="sr-only">{social.label}</span>
                        </a>
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="px-4 mt-6 space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Estadísticas</h3>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => {
                  const StatIcon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="bg-muted/50 rounded-lg p-4 border border-border"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <StatIcon className={`h-4 w-4 ${stat.color}`} />
                        <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border mt-auto">
            <p className="text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
