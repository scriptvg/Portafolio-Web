import { Code2, Palette, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const Services = () => {
  const features = [
    {
      icon: Code2,
      title: "Código Limpio",
      description: "Desarrollo con las mejores prácticas, arquitectura clara y código mantenible"
    },
    {
      icon: Palette,
      title: "Soluciones Escalables",
      description: "Aplicaciones eficientes y centradas en el usuario con React y Django"
    },
    {
      icon: Zap,
      title: "Desarrollo Profesional",
      description: "Compromiso con el aprendizaje continuo y la mejora constante"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase">
            Servicios
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">¿Qué hago?</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Especializado en crear experiencias digitales excepcionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader className="p-4 sm:p-5 md:p-6">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-base sm:text-lg md:text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                    <CardDescription className="text-xs sm:text-sm md:text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
