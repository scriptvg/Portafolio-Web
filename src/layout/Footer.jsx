import { Mail, Linkedin, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import imgAvatar from '@/assets/my-notion-face-portrait-removebg-preview (2).png'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import { UserCard } from '@/components/custom/UserCard'
import { MessageCircle } from 'lucide-react'

function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5">

            <UserCard
              name="Allan Vélez"
              title="Desarrollador Full Stack"
              description="Soy apasionado por la creación de soluciones eficientes, escalables y centradas en el usuario, con un enfoque en código limpio, arquitectura clara y desarrollo profesional continuo."
              avatar={imgAvatar}
              email="velezalan34@gmail.com"
            >
              <Button onClick={() => window.open('https://wa.me/50684813021', '_blank')} size="sm" variant="outline">
                <MessageCircle className='h-4 w-4 sm:h-5 sm:w-5' />
                +506 8481-3021
              </Button>
            </UserCard>

            <div className="flex flex-wrap items-center justify-end w-full h-fit gap-3 sm:gap-4 text-[11px] sm:text-xs">
              <Button asChild variant='link' size='sm'>
                <a
                  href="#inicio"
                >
                  Inicio
                </a>
              </Button>
              <span className="text-muted-foreground/30">•</span>
              <Button asChild variant='link' size='sm'>
                <a
                  href="#sobre-mi"
                >
                  Sobre mí
                </a>
              </Button>
              <span className="text-muted-foreground/30">•</span>
              <Button asChild variant='link' size='sm'>
                <a
                  href="#proyectos"
                >
                  Proyectos
                </a>
              </Button>
              <span className="text-muted-foreground/30">•</span>
              <Button asChild variant='link' size='sm'>
                <a
                  href="#contacto"
                >
                  Contacto
                </a>
              </Button>
            </div>
            <div>

            </div>

          </div>

          <Separator className="my-4 sm:my-5" />

          <div className='flex md:flex-row flex-col items-center justify-between'>
            <p className="text-[10px] sm:text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} Allan José Vélez González. Todos los derechos reservados.
            </p>
            <div className="flex gap-2">
              <Button asChild variant="link">
                <Link to="/" className="text-xs sm:text-sm">
                  Terminos y Condiciones
                </Link>
              </Button>
              <Button asChild variant="link">
                <Link to="/" className="text-xs sm:text-sm">
                  Politica de Privacidad
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
