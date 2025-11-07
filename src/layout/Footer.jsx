import { Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Allan José Vélez González · Desarrollador FullStack
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center text-xs sm:text-sm text-muted-foreground">
            <a 
              href="mailto:velezalan34@gmail.com"
              className="flex items-center gap-1 hover:text-foreground transition"
              aria-label="Email"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">velezalan34@gmail.com</span>
            </a>
            <a 
              href="tel:+50684813021"
              className="flex items-center gap-1 hover:text-foreground transition"
              aria-label="Teléfono"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>+506 8481 3021</span>
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Esparza, Costa Rica</span>
              <span className="sm:hidden">CR</span>
            </span>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="https://www.linkedin.com/in/allan-velez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition"
          >
            Conecta conmigo en LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
