import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet"
import { Menu, Github, Linkedin, Twitter } from "lucide-react"
import { Logo } from "@/components/logo"
import { NavMenu } from "@/components/nav-menu"
import { Separator } from "@/components/ui/separator"

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/allan-josé-vélez-gonzález', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-6">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
        
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Redes Sociales</h3>
          <div className="flex gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="flex-1 h-12 rounded-lg"
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
