import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

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
    <section id="experiencia" className="max-w-(--breakpoint-lg) mx-auto py-12 md:py-20 px-6">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {experiences.map(
          ({ company, description, period, technologies, title, icon: Icon }, index) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="pt-2 sm:pt-1 space-y-3">
                <p className="text-base font-medium">{company}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Experience

