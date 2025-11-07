import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import avatarImg from '@/assets/my-notion-face-portrait-removebg-preview (2).png'

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-6 sm:py-10 md:py-14 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-2 sm:mb-3 tracking-wider uppercase"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              About Me
            </motion.p>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Creando soluciones{' '}
              <span className="text-primary">eficientes y escalables</span>
            </motion.h2>

            <motion.p
              className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Desarrollador Full Stack especializado en React y Django, egresado de un bootcamp intensivo de 6 meses orientado al desarrollo web profesional. 
              Con una base sólida en frontend moderno y un backend robusto en Python Django, incluyendo el uso de MySQL como sistema de base de datos principal.
              <br /><br />
              Experiencia en proyectos reales, aplicaciones administrativas y sistemas de punto de venta. 
              Apasionado por la creación de soluciones eficientes, escalables y centradas en el usuario, con un enfoque en código limpio, arquitectura clara y desarrollo profesional continuo.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="sm"
                className="rounded-full text-xs sm:text-sm h-8 sm:h-9"
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
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Ver LinkedIn
                </motion.a>
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="rounded-full text-xs sm:text-sm h-8 sm:h-9"
                asChild
              >
                <motion.a
                  href="mailto:velezalan34@gmail.com"
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  Contactar
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background decoration */}
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Image container */}
              <motion.div
                className="relative bg-muted/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-background/50">
                  <img
                    src={avatarImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-background border border-border rounded-full p-2 sm:p-3 md:p-4 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: 0.6 
                  }}
                  whileHover={{ rotate: 360 }}
                >
                  <div className="text-center">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">6</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Meses</p>
                  </div>
                </motion.div>

                {/* Floating badge 2 */}
                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-background border border-border rounded-full p-2 sm:p-3 md:p-4 shadow-lg"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: 0.7 
                  }}
                  whileHover={{ rotate: -360 }}
                >
                  <div className="text-center">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">3+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Proyectos</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

