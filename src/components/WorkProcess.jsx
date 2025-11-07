import { motion } from 'framer-motion'
import { Lightbulb, Code2, TestTube, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Planificación',
    description: 'Análisis de requisitos y diseño de la arquitectura del proyecto',
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description: 'Implementación con código limpio y mejores prácticas',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'Pruebas exhaustivas para garantizar calidad y funcionalidad',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Rocket,
    title: 'Despliegue',
    description: 'Lanzamiento y mantenimiento continuo del proyecto',
    color: 'from-green-500/20 to-emerald-500/20'
  }
]

const WorkProcess = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase">
            Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Cómo Trabajo
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado para entregar proyectos de calidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-background border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all group"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-center group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
