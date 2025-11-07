import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const experiences = [
  {
    company: 'Forward Tech & Freedom',
    position: 'Bootcamp Full Stack Developer',
    period: 'Enero 2025 – Junio 2025',
    description: 'Certificación obtenida tras completar los bootcamps de Frontend y Backend, desarrollando aplicaciones completas y participando en proyectos integrales.',
    technologies: ['React', 'Django', 'MySQL', 'JavaScript', 'Python', 'Git'],
    icon: Building2,
  },
  {
    company: 'Forward Tech & Freedom',
    position: 'Bootcamp Full BackEnd Developer',
    period: 'Abril 2025 – Julio 2025',
    description: 'Curso intensivo de 3 meses enfocado en desarrollo Backend profesional con Django, MySQL y metodologías ágiles. Incluyó proyectos prácticos y trabajo en equipo.',
    technologies: ['Python', 'Django', 'MySQL', 'SQL', 'REST APIs'],
    icon: Building2,
  },
  {
    company: 'Forward Tech & Freedom',
    position: 'Bootcamp Full FrontEnd Developer',
    period: 'Enero 2025 – Marzo 2025',
    description: 'Curso intensivo de 3 meses enfocado en desarrollo Frontend profesional con React, HTML, CSS y JavaScript. Incluyó proyectos prácticos y trabajo en equipo.',
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Vite', 'TailwindCSS'],
    icon: Building2,
  },
]

const Experience = () => {
  return (
    <section id="experiencia" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase">
            Educación
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Títulos y Formación
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Mi trayectoria de formación profesional en desarrollo web
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[29px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.company}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex gap-4 sm:gap-6">
                    {/* Timeline dot */}
                    <div className="relative shrink-0 hidden md:block">
                      <motion.div
                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-background border-2 border-border flex items-center justify-center shadow-sm"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <motion.div
                      className="flex-1"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-5 md:p-6">
                          {/* Company & Icon for mobile */}
                          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 md:hidden">
                              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">
                                {exp.company}
                              </h3>
                              <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground/80 mb-2">
                                {exp.position}
                              </p>
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                                <span className="truncate">{exp.period}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-[10px] sm:text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

