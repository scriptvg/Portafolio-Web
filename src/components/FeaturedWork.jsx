import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    id: 1,
    title: 'Creador de Exámenes con IA para Moodle (Academia UPC)',
    description: 'Aplicación web que permite la creación automatizada de exámenes académicos compatibles con Moodle, utilizando inteligencia artificial (IA). Los usuarios pueden generar preguntas y respuestas automáticamente mediante prompts personalizados, o también redactarlas manualmente para ser transformadas al formato R compatible con Moodle.',
    technologies: ['Python', 'OpenAI', 'Replit', 'Moodle'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Academia virtual UPC - OfitechLat',
    description: 'Proyecto desarrollado para Academia UPC en colaboración con OfitechLat, integrando herramientas de código abierto y personalización avanzada de una plataforma de educación virtual basada en Moodle para lograr una experiencia educativa profesional.',
    technologies: ['Moodle', 'PHP', 'MySQL'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'PokeProyecto',
    description: 'Esta Pokédex es una aplicación web moderna desarrollada con React y Vite que permite explorar, buscar y visualizar información detallada de Pokémon utilizando la PokeAPI. El objetivo es servir como ejemplo educativo de buenas prácticas en React, consumo de APIs, manejo de rutas, hooks personalizados y estilizado con TailwindCSS.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'PokeAPI'],
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
  },
]

const FeaturedWork = () => {
  return (
    <section id="proyectos" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase">
            Proyectos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Algunos de mis mejores proyectos y logros técnicos
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={project.featured ? 'lg:row-span-1' : ''}
            >
              <Card 
                className={`h-full flex flex-col overflow-hidden hover:shadow-xl transition-all group ${
                  project.featured ? 'border-primary/50' : ''
                }`}
              >
                {/* Image Placeholder */}
                <motion.div
                  className="relative w-full h-48 sm:h-56 md:h-64 bg-muted/50 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5" />
                  <motion.div
                    className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                <CardHeader className="p-4 sm:p-5 md:p-6">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 p-4 sm:p-5 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 pt-3 sm:pt-4 border-t">
                  <Button
                    size="sm"
                    className="flex-1 rounded-full text-xs sm:text-sm"
                    asChild
                  >
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 sm:gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden xs:inline">Live Demo</span>
                      <span className="xs:hidden">Demo</span>
                    </motion.a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-full text-xs sm:text-sm"
                    asChild
                  >
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 sm:gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden xs:inline">View Code</span>
                      <span className="xs:hidden">Code</span>
                    </motion.a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork

