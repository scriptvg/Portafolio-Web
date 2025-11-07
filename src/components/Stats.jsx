import { motion } from 'framer-motion'
import { Code, Coffee, Rocket, Users } from 'lucide-react'

const stats = [
  {
    icon: Code,
    value: '3+',
    label: 'Proyectos Completados',
    description: 'Aplicaciones web funcionales'
  },
  {
    icon: Coffee,
    value: '6',
    label: 'Meses de Formación',
    description: 'Bootcamp intensivo'
  },
  {
    icon: Rocket,
    value: '15+',
    label: 'Tecnologías',
    description: 'Stack moderno y actualizado'
  },
  {
    icon: Users,
    value: '100%',
    label: 'Compromiso',
    description: 'Dedicación en cada proyecto'
  }
]

const Stats = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase">
            Estadísticas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            En Números
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Mi trayectoria en desarrollo web
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background border border-border rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm sm:text-base font-semibold mb-1">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
