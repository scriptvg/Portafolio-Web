import { Mail, Linkedin, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import imgAvatar from '@/assets/my-notion-face-portrait-removebg-preview (2).png'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'

import { MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { TwitterIcon } from 'lucide-react'
import { DribbbleIcon } from 'lucide-react'
import { GithubIcon } from 'lucide-react'
import { TwitchIcon } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'

const footerLinks = [
  {
    title: "Inicio",
    href: "#",
  },
  {
    title: "Sobre mí",
    href: "#",
  },
  {
    title: "Experiencia",
    href: "#",
  },
  {
    title: "Proyectos",
    href: "#",
  },
  {
    title: "Contacto",
    href: "#",
  },
];

function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="border-t">
        <div className="max-w-(--breakpoint-lg) mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={imgAvatar} />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <h3 className="text-base font-bold">Allan Velez - Full Stack Developer</h3>
              </div>

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-medium">Ponte al día</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Allan Velez
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <SiWhatsapp className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
