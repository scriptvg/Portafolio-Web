import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import avatarImg from '@/assets/my-notion-face-portrait-removebg-preview (2).png'
import { Badge } from './ui/badge'
import { ButtonGroup } from './ui/button-group'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Linkedin } from 'lucide-react'
import { Section } from './base/section'
import { CopyEmail } from '@/components/custom/CopyEmail'


function LeftContent({ ...props }) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    />
  )
}

const AboutMe = () => {
  return (
    <Section id="sobre-mi" className="flex scroll-m-52">
      <div className="w-full max-w-6xl p-4 my-auto mx-auto flex">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <LeftContent>
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
                className="text-xs sm:text-sm"
                asChild
              >
                <motion.a
                  href="https://www.linkedin.com/in/allan-jos%C3%A9-v%C3%A9lez-gonz%C3%A1lez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className='h-4 w-4 sm:h-5 sm:w-5' />
                  Ver LinkedIn
                </motion.a>
              </Button>

              <CopyEmail email="velezalan34@gmail.com" />

            </motion.div>
          </LeftContent>

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
                className="relative bg-muted/50  backdrop-blur-sm rounded-3xl  p-4 sm:p-6 md:p-8 border border-border"
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default AboutMe

