import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Linkedin } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'

const CTA = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10 ">
        <div className='max-w-xl p-4 space-y-4'>
          <h1 className="text-4xl font-bold">Pongamos en marcha tu proyecto</h1>
          <p className="text-lg text-muted-foreground">Contáctame para discutir cómo podemos ayudarte a lograr tus objetivos.</p>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://wa.me/84813021" target="_blank">
                <SiWhatsapp className="w-4 h-4" />
                <span>Enviar mensaje</span>
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://linkedin.com/in/andres-velez" target="_blank">
                <Linkedin className="w-4 h-4" />
                <span>Ver perfil</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

