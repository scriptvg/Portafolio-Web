import { motion, useReducedMotion } from 'framer-motion'
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiLinux,
  SiJest,
  SiCypress,
  SiJquery,
  SiReactrouter,
} from 'react-icons/si'
import { Badge } from '@/components/ui/badge'
import { Section } from './base/section'
import { Separator } from './ui/separator'
import { Item, ItemContent, ItemDescription, ItemTitle, ItemActions, ItemMedia } from './ui/item'
import { Button } from './ui/button'

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

/* type Technology = {
  name: string
  Icon: IconType
  color: string
}

type TechCategory = {
  title: string
  technologies: Technology[]
} */

/* -------------------------------------------------------------------------- */
/*                                  Animations                                */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
}

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const techStack = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'React', description: 'Librería de JavaScript', Icon: SiReact, color: '#61DAFB' },
      { name: 'Vite', description: 'Entorno de desarrollo', Icon: SiVite, color: '#646CFF' },
      { name: 'TailwindCSS', description: 'Framework de estilos', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', description: 'Lenguaje de marcado', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', description: 'Lenguaje de estilos', Icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', description: 'Lenguaje de programación', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', description: 'Lenguaje de programación', Icon: SiTypescript, color: '#3178C6' },
      { name: 'TanStackQuery', description: 'Librería de JavaScript para manejar datos', Icon: SiJquery, color: '#0769AD' },
      { name: 'React Router Dom', description: 'Librería de JavaScript para manejar rutas', Icon: SiReactrouter, color: '#0769AD' },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      { name: 'Python', description: 'Lenguaje de programación', Icon: SiPython, color: '#3776AB' },
      { name: 'Django', description: 'Framework de Python para desarrollo de APIs', Icon: SiDjango, color: '#092E20' },
      { name: 'Node.js', description: 'Entorno de desarrollo', Icon: SiNodedotjs, color: '#339933' },
      { name: 'MySQL', description: 'Base de datos', Icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'DevOps',
    technologies: [
      { name: 'Git', description: 'Control de versiones', Icon: SiGit, color: '#F05032' },
      { name: 'Linux', description: 'Sistema operativo', Icon: SiLinux, color: '#FCC624' },
    ],
  },
  {
    title: 'Testing',
    technologies: [
      { name: 'Jest', description: 'Librería de JavaScript para pruebas unitarias', Icon: SiJest, color: '#C21325' },
      { name: 'Cypress', description: 'Librería de JavaScript para pruebas de integración', Icon: SiCypress, color: '#69D3A7' },
    ],
  },
]

const skills = [
  'Compromiso con el aprendizaje y la mejora continua',
  'Capacidad para resolver problemas complejos',
  'Análisis estructurado y eficiente de errores',
  'Trabajo individual y colaborativo en equipo',
  'Capacidad investigadora e interés genuino por profundizar en los temas',
  'Habilidad para analizar conceptos técnicos',
  'Capacidad para explicar ideas de forma clara',
  'Dominio de contenidos técnicos',
  'Facilidad para facilitar el aprendizaje a otros',
  'Curiosidad intelectual',
  'Potencial académico y profesional notable',
  'Actitud proactiva y comprometida',
]

/* -------------------------------------------------------------------------- */
/*                               Subcomponents                                 */
/* -------------------------------------------------------------------------- */

const TechCard = ({
  tech,
  index,
}) => {
  const Icon = tech.Icon

  return (
    <Item variant="outline" key={tech.name} className='w-full'>
      <ItemMedia className="p-4 border bg-secondary/10" style={{ '--color': tech.color }}>
        <tech.Icon className="text-2xl" style={{ color: 'var(--color)' }} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{tech.name}</ItemTitle>
        <ItemDescription>
          {tech.description}
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

const TechStack = () => {


  return (
    <Section className="min-h-screen">
      <div className="w-full flex flex-col items-start max-w-6xl min-h-screen mx-auto gap-8">
        <header className='w-full flex items-center justify-center'>
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-2 sm:mb-3 tracking-wider uppercase">
              Stack
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Tecnologías y Herramientas
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Algunas de las tecnologías y herramientas que uso en mis proyectos
            </p>
          </motion.div>
        </header>
        <div className="flex-1 w-full min-h-screen">
          {techStack.map(section => (
            <div key={section.title} className="p-4">
              <h3 className="text-2xl font-semibold mb-6">
                {section.title}
              </h3>
              <div
                role="list"
                className="flex flex-wrap justify-center gap-3"
              >
                {section.technologies.map((tech) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    index={0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        {/*         <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Skills Adicionales
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div> */}
      </div>
    </Section>
  )
}

export default TechStack
