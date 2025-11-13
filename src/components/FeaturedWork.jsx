import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import pokeproyectoImage from '@/assets/pokeapp.png'
import vansclone from '@/assets/image.png'

const projects = [
  {
    id: 1,
    title: 'Creador de Exámenes con IA para Moodle (Academia UPC)',
    description: 'Aplicación web que permite la creación automatizada de exámenes académicos compatibles con Moodle, utilizando inteligencia artificial (IA). Los usuarios pueden generar preguntas y respuestas automáticamente mediante prompts personalizados, o también redactarlas manualmente para ser transformadas al formato R compatible con Moodle.',
    technologies: ['Python', 'OpenAI', 'Replit', 'Moodle'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: 'Academia virtual UPC - OfitechLat',
    description: 'Proyecto desarrollado para Academia UPC en colaboración con OfitechLat, integrando herramientas de código abierto y personalización avanzada de una plataforma de educación virtual basada en Moodle para lograr una experiencia educativa profesional.',
    technologies: ['Moodle', 'PHP', 'MySQL'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
    image: null,
  },
  {
    id: 3,
    title: 'PokeProyecto',
    description: 'Una Pokédex moderna desarrollada con React y Vite que permite explorar, buscar y visualizar información detallada de Pokémon. Consume la PokeAPI de forma eficiente con búsqueda en tiempo real, manejo avanzado de rutas, hooks personalizados y un diseño responsivo con TailwindCSS. Demuestra buenas prácticas en React: gestión de estado, optimización de rendimiento y arquitectura limpia.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'PokeAPI', 'React Router'],
    demoUrl: 'https://pokeproyectoapi.netlify.app/',
    codeUrl: '#',
    featured: true,
    image: pokeproyectoImage,
  },
  {
    id: 4,
    title: 'Sinpe Davivienda',
    description: 'Aplicación desarrollada en el primer hackathon de Davivienda, con el objetivo de reinventar la interfaz de su aplicación móvil. Implementa una experiencia de usuario moderna y optimizada para transacciones financieras con diseño intuitivo y acceso rápido a funcionalidades clave.',
    technologies: ['UX/UI', 'Mobile Design', 'Fintech'],
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
    image: null,
  },
  {
    id: 5,
    title: 'Parque Marino del Pacífico Sur',
    description: 'Plataforma web integral desarrollada para el Parque Marino del Pacífico Sur como parte del curso (FWD Costa Rica). Sistema modular que centraliza divulgación científica, educación ambiental y gestión institucional. Incluye fichas interactivas de especies marinas, sistema de reservas, gestión de donaciones, portal de voluntariado, sección de transparencia y módulo educativo con talleres. Construida con React y Tailwind CSS para garantizar accesibilidad y compatibilidad móvil, promoviendo participación ciudadana en conservación marina.',
    technologies: ['React', 'Shadcn/UI', 'TailwindCSS', 'Python', 'Django', 'Paypal', 'JWT'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Fer-2202/Proyecto_Final.git',
    featured: true,
    image: null,
  },
  {
    id: 6,
    title: 'Vans Clone',
    description: 'Clon funcional de e-commerce inspirado en Vans, desarrollado con React y componentes modernos de Shadcn/UI. Implementa un catálogo de productos interactivo, carrito de compras con gestión de estado, filtros dinámicos y diseño responsivo optimizado para todas las pantallas. Demuestra habilidades en desarrollo frontend, arquitectura de componentes reutilizables y experiencia de usuario fluida en aplicaciones de comercio electrónico.',
    technologies: ['React', 'Shadcn/UI', 'TailwindCSS'],
    demoUrl: 'https://vans-clone.netlify.app/',
    codeUrl: 'https://github.com/scriptvg/e-commerce-vans-clone.git',
    featured: true,
    image: vansclone,
  }
]

const FeaturedWork = () => {
  return (
    <section id="proyectos" className="py-6 sm:py-10 md:py-14 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-2 sm:mb-3 tracking-wider uppercase">
            Proyectos
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
            Proyectos Destacados
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
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
                className={`p-0 h-full flex flex-col overflow-hidden hover:shadow-xl transition-all group ${
                  project.featured ? 'border-primary/50' : ''
                }`}
              >
                {/* Image Placeholder or Project Image */}
                <motion.div
                  className="relative w-full h-48 sm:h-56 md:h-64 bg-muted/50 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
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
                    </>
                  )}
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

