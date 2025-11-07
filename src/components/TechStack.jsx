import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
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
  SiOpenai
} from 'react-icons/si'
import { BiData } from 'react-icons/bi'

const technologies = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Django', Icon: SiDjango, color: '#092E20' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'SQL', Icon: BiData, color: '#CC2927' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
  { name: 'OpenAI', Icon: SiOpenai, color: '#412991' },
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

const TechStack = () => {
  return (
    <section className="py-6 sm:py-10 md:py-14 px-4 sm:px-6 bg-muted/30">
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
            Tecnologías
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
            Stack de Tecnologías
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Herramientas y tecnologías con las que trabajo
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.Icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-background border border-border rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-1 sm:gap-2 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group"
              >
                <Icon 
                  className="text-2xl sm:text-3xl text-muted-foreground group-hover:text-primary transition-colors" 
                  style={{ color: tech.color }}
                />
                <span className="text-xs sm:text-sm font-medium text-center">{tech.name}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
            Skills Adicionales
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack

