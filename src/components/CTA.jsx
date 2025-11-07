import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Linkedin } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 md:px-4 relative overflow-hidden">
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

      <div className="container mx-auto max-w-4xl relative z-10">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ¿Listo para empezar tu{' '}
            <span className="text-primary">próximo proyecto?</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto"
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
              size="lg"
              className="rounded-full text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 w-full sm:w-auto group"
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
              size="lg"
              variant="outline"
              className="rounded-full text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 w-full sm:w-auto"
              asChild
            >
              <motion.a
                href="https://www.linkedin.com/in/allan-velez"
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

