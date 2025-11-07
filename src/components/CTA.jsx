import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Linkedin } from 'lucide-react'

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

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ¿Listo para empezar tu{' '}
            <span className="text-primary">próximo proyecto?</span>
          </motion.h2>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Estoy disponible para nuevos proyectos y colaboraciones. 
            Hablemos sobre cómo puedo ayudarte a hacer realidad tus ideas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="sm"
              className="rounded-full text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 h-9 sm:h-10 md:h-11 w-full sm:w-auto group"
              asChild
            >
              <motion.a
                href="mailto:velezalan34@gmail.com"
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar Conversación
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="rounded-full text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 h-9 sm:h-10 md:h-11 w-full sm:w-auto"
              asChild
            >
              <motion.a
                href="https://www.linkedin.com/in/allan-josé-vélez-gonzález"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
                Conectar en LinkedIn
              </motion.a>
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-sm sm:text-base text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="mailto:velezalan34@gmail.com"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              velezalan34@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <span>+506 8481 3021</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

